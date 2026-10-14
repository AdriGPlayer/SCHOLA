import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

const VOID = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input",
  "link", "meta", "param", "source", "track", "wbr",
]);

const EVENT_ATTRS = new Set([
  "onclick", "onsubmit", "onchange", "oninput", "onkeyup", "onkeydown",
  "onblur", "onfocus", "onmouseover", "onmouseout", "onmousedown",
  "onmouseup", "ondblclick", "onerror", "onload", "onclick",
]);

const ATTR_MAP = {
  class: "className",
  for: "htmlFor",
  tabindex: "tabIndex",
  readonly: "readOnly",
  maxlength: "maxLength",
  minlength: "minLength",
  colspan: "colSpan",
  rowspan: "rowSpan",
  autocomplete: "autoComplete",
  autofocus: "autoFocus",
  contenteditable: "contentEditable",
  spellcheck: "spellCheck",
  srcset: "srcSet",
  crossorigin: "crossOrigin",
  enctype: "encType",
  formaction: "formAction",
  datetime: "dateTime",
  accesskey: "accessKey",
  usemap: "useMap",
  novalidate: "noValidate",
  inputmode: "inputMode",
  allowfullscreen: "allowFullScreen",
  frameborder: "frameBorder",
  "stroke-width": "strokeWidth",
  "stroke-dasharray": "strokeDasharray",
  "stroke-dashoffset": "strokeDashoffset",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "stroke-miterlimit": "strokeMiterlimit",
  "stroke-opacity": "strokeOpacity",
  "fill-rule": "fillRule",
  "fill-opacity": "fillOpacity",
  "clip-rule": "clipRule",
  "clip-path": "clipPath",
  "font-size": "fontSize",
  "font-family": "fontFamily",
  "font-weight": "fontWeight",
  "text-anchor": "textAnchor",
  "dominant-baseline": "dominantBaseline",
  "stop-color": "stopColor",
  "stop-opacity": "stopOpacity",
  "xlink:href": "xlinkHref",
  "gradientunits": "gradientUnits",
  "preserveaspectratio": "preserveAspectRatio",
  "marker-width": "markerWidth",
  "marker-height": "markerHeight",
  "stroke-dasharray": "strokeDasharray",
};

const kebabToCamel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

function mapAttrName(name) {
  const lower = name.toLowerCase();
  if (EVENT_ATTRS.has(lower)) return null;
  if (ATTR_MAP[lower]) return ATTR_MAP[lower];
  if (lower.startsWith("data-") || lower.startsWith("aria-")) return name;
  if (name.includes("-")) return kebabToCamel(name);
  return name;
}

function styleToObject(value) {
  const decls = value
    .split(";")
    .map((d) => d.trim())
    .filter(Boolean);
  const parts = [];
  for (const decl of decls) {
    const idx = decl.indexOf(":");
    if (idx === -1) continue;
    const prop = decl.slice(0, idx).trim();
    const val = decl.slice(idx + 1).trim();
    if (!prop || !val) continue;
    const key = prop.startsWith("--") ? `"${prop}"` : kebabToCamel(prop);
    const numOnly = /^-?\d+(\.\d+)?$/.test(val) && !/^(opacity|zIndex|order|flexGrow|flexShrink|lineHeight|fontWeight|zoom)$/i.test(kebabToCamel(prop));
    parts.push(`${key}: ${numOnly ? val : JSON.stringify(val)}`);
  }
  return parts.join(", ");
}

function parseAttributes(attrStr) {
  const attrs = [];
  const re = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>=`]+)))?/g;
  let m;
  while ((m = re.exec(attrStr)) !== null) {
    const rawName = m[1];
    if (!rawName) continue;
    let value = m[2] !== undefined ? m[2] : m[3] !== undefined ? m[3] : m[4];
    let hasValue = value !== undefined;

    const name = mapAttrName(rawName);
    if (name === null) continue;

    let out;
    if (name === "style" && hasValue) {
      out = `style={{ ${styleToObject(value)} }}`;
    } else if (!hasValue) {
      out = name;
    } else if (value === "") {
      out = `${name}=""`;
    } else if (value.includes('"')) {
      out = `${name}={${JSON.stringify(value)}}`;
    } else {
      out = `${name}="${value}"`;
    }
    attrs.push(out);
  }
  return attrs;
}

function escapeText(text) {
  return text.replace(/([{}])/g, (c) => (c === "{" ? "{'{'}" : "{'}'}"));
}

function convertFragment(html) {
  let src = html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/url\(&quot;([^&]*)&quot;\)/g, "url('$1')")
    .replace(/url\(&#34;([^&]*)&#34;\)/g, "url('$1')");

  const tokens = src.match(/<[^>]+>|[^<]+/g) || [];
  let out = "";
  for (const token of tokens) {
    if (token.startsWith("<")) {
      const close = token.match(/^<\/\s*([a-zA-Z][\w-]*)\s*>$/);
      if (close) {
        out += `</${close[1]}>`;
        continue;
      }
      const open = token.match(/^<\s*([a-zA-Z][\w-]*)([\s\S]*?)(\/?)>$/);
      if (!open) {
        out += token;
        continue;
      }
      const tag = open[1];
      const attrStr = open[2];
      const selfClose = open[3] === "/";
      const attrs = parseAttributes(attrStr);
      const isVoid = VOID.has(tag.toLowerCase());
      const attrString = attrs.length ? " " + attrs.join(" ") : "";
      if (selfClose || isVoid) {
        out += `<${tag}${attrString} />`;
      } else {
        out += `<${tag}${attrString}>`;
      }
    } else {
      out += escapeText(token);
    }
  }
  return out.trim();
}

const [, , input, output, modeArg] = process.argv;
if (!input || !output) {
  console.error("Usage: node html-to-jsx.mjs <input.html> <output.jsx> [--full|--main]");
  process.exit(1);
}
const mode = modeArg === "--full" ? "full" : "main";

const raw = readFileSync(resolve(input), "utf8");
const bodyMatch = raw.match(/<body[^>]*>([\s\S]*)<\/body>/i);
let fragment = bodyMatch ? bodyMatch[1] : raw;

if (mode === "main") {
  const mainMatch = fragment.match(/<main[\s\S]*?<\/main>/i);
  if (!mainMatch) {
    console.error("No <main> found in", input);
    process.exit(1);
  }
  fragment = mainMatch[0];
}

const jsx = convertFragment(fragment);

const componentName = output.split(/[\\/]/).pop().replace(/\.jsx$/, "");
const body = mode === "full" ? `<>\n    ${jsx}\n    </>` : jsx;
const file = `export default function ${componentName}() {\n  return (\n    ${body}\n  );\n}\n`;

mkdirSync(dirname(resolve(output)), { recursive: true });
writeFileSync(resolve(output), file, "utf8");
console.log(`Converted ${input} -> ${output} (${mode})`);
