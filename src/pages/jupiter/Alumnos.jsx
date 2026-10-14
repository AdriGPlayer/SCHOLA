import { useEffect, useState } from "react";

const CURP_RE = /^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z0-9]\d$/;
const STEP_TAB_ACTIVE =
  "form-step-tab active flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-surface-container-lowest shadow-sm text-primary font-label-lg text-label-lg transition-all";
const STEP_TAB_INACTIVE =
  "form-step-tab flex items-center gap-space-xs px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-lg text-label-lg transition-all";
const CIRCLE_ACTIVE =
  "w-6 h-6 rounded-full bg-primary text-on-primary font-bold text-[12px] flex items-center justify-center";
const CIRCLE_INACTIVE =
  "w-6 h-6 rounded-full bg-surface-variant text-on-surface-variant font-bold text-[12px] flex items-center justify-center";

export default function Alumnos() {
  const [step, setStep] = useState(1);
  const [panelCollapsed, setPanelCollapsed] = useState(false);
  const [curp, setCurp] = useState("");
  const [toast, setToast] = useState("");

  const curpStatus = (() => {
    const v = curp;
    if (v.length === 18) {
      return CURP_RE.test(v)
        ? { text: "RENAPO VÁLIDO", cls: "text-secondary", icon: "verified_user" }
        : { text: "ESTRUCTURA NO VÁLIDA", cls: "text-error", icon: "error" };
    }
    if (v.length > 0)
      return { text: `${v.length}/18 CARACTERES`, cls: "text-outline", icon: "fingerprint" };
    return { text: "Sin verificar", cls: "text-outline", icon: "fingerprint" };
  })();

  useEffect(() => {
    const search = document.getElementById("table-search-input");
    const grade = document.getElementById("filter-grade");
    const shift = document.getElementById("filter-shift");
    const tech = document.getElementById("filter-tech");
    const reset = document.getElementById("reset-filters");
    const openBtn = document.getElementById("open-register-btn");

    const rows = () => Array.from(document.querySelectorAll("#student-table-body tr"));

    const applySearch = (query) =>
      rows().forEach((row) => {
        row.style.display = row.textContent.toLowerCase().includes(query) ? "" : "none";
      });

    const applyFilters = () => {
      const g = grade.value;
      const s = shift.value;
      const t = tech.value;
      rows().forEach((row) => {
        const text = row.textContent;
        const mGrade = g === "all" || text.includes(`${g}°`);
        const mShift = s === "all" || text.includes(s);
        const mTech = t === "all" || text.includes(t);
        row.style.display = mGrade && mShift && mTech ? "" : "none";
      });
    };

    const onSearch = (e) => {
      applySearch(e.target.value.toLowerCase());
      applyFilters();
    };
    const onFilter = () => {
      applySearch(document.getElementById("table-search-input").value.toLowerCase());
      applyFilters();
    };
    const onReset = () => {
      search.value = "";
      grade.value = "all";
      shift.value = "all";
      tech.value = "all";
      rows().forEach((row) => (row.style.display = ""));
    };
    const onOpen = () => {
      setPanelCollapsed(false);
      document.getElementById("registration-panel")?.scrollIntoView({ behavior: "smooth" });
    };

    search?.addEventListener("input", onSearch);
    grade?.addEventListener("change", onFilter);
    shift?.addEventListener("change", onFilter);
    tech?.addEventListener("change", onFilter);
    reset?.addEventListener("click", onReset);
    openBtn?.addEventListener("click", onOpen);

    return () => {
      search?.removeEventListener("input", onSearch);
      grade?.removeEventListener("change", onFilter);
      shift?.removeEventListener("change", onFilter);
      tech?.removeEventListener("change", onFilter);
      reset?.removeEventListener("click", onReset);
      openBtn?.removeEventListener("click", onOpen);
    };
  }, []);

  return (
    <main className="relative pt-20 w-full min-h-screen px-space-xl py-space-lg bg-surface">
        <div className="flex flex-col w-full">
        {toast && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-inverse-surface text-inverse-on-surface font-label-md text-label-md px-space-md py-space-sm rounded-lg shadow-xl toast-in w-[320px] text-center">
            {toast}
          </div>
        )}
          
          <div className="w-full bg-surface-container-high px-space-lg py-space-sm rounded-lg mb-space-lg flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-space-md">
              <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-secondary-container text-[18px]">verified</span>
              </div>
              <div className="flex items-center gap-space-sm flex-wrap">
                <span className="font-label-lg text-label-lg text-on-surface">Validación Activa DGEST-SEP:</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Corte bimestral en sincronización oficial. Folios
                  certificados 2024-2025.</span>
              </div>
            </div>
            <div className="flex items-center gap-space-sm shrink-0">
              <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Período Regular Ordinario</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-stretch mb-space-xl">
            
            <div className="xl:col-span-7 bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-space-sm mb-space-xs">
                  <span className="font-label-sm text-label-sm tracking-widest text-outline uppercase">Sistema Integral Escolar JÚPITER • ESTIS 70</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">Ciclo Escolar 2024-2025</span>
                </div>
                <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight mb-space-xs">
                  Alta y Padrón de Alumnos
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-space-lg">
                  Módulo normativo para la inscripción, expedición de
                  credenciales de taller y archivo digital de expedientes
                  oficiales avalados por la Dirección General de Educación
                  Secundaria Técnica (SEP).
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-space-sm pt-space-md bg-surface-container-low -mx-space-xl -mb-space-xl px-space-xl py-space-md rounded-b-xl">
                <button className="flex items-center gap-space-sm px-space-lg py-3 bg-primary text-on-primary rounded-lg font-label-lg text-label-lg hover:bg-primary-container shadow-md transition-all" id="open-register-btn">
                  <span className="material-symbols-outlined text-secondary-container text-[20px]">person_add</span>
                  <span>+ Nuevo Alumno</span>
                </button>
                <button className="flex items-center gap-space-xs px-space-md py-3 bg-surface-container text-on-surface rounded-lg font-label-lg text-label-lg hover:bg-surface-container-high transition-all">
                  <span className="material-symbols-outlined text-[18px]">download_for_offline</span>
                  <span>Descargar Cédulas SEP</span>
                </button>
                <button className="flex items-center gap-space-xs px-space-md py-3 bg-surface-container text-on-surface rounded-lg font-label-lg text-label-lg hover:bg-surface-container-high transition-all">
                  <span className="material-symbols-outlined text-[18px]">upload_file</span>
                  <span>Importación Masiva (CSV)</span>
                </button>
              </div>
            </div>
            
            <div className="xl:col-span-5 grid grid-cols-2 gap-space-md">
              
              <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase text-outline">Matrícula General</span>
                  <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-[20px]">groups</span>
                  </div>
                </div>
                <div>
                  <span className="font-headline-xl text-headline-xl text-primary font-bold">1,240</span>
                  <div className="flex items-center gap-space-xs mt-1">
                    <span className="material-symbols-outlined text-[16px] text-secondary">trending_up</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">100% de capacidad autorizada</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase text-outline">Turno Matutino</span>
                  <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-[20px]">wb_sunny</span>
                  </div>
                </div>
                <div>
                  <span className="font-headline-lg text-headline-lg text-primary font-bold">620</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant block mt-1">15 Grupos (5 por grado)</span>
                </div>
              </div>
              
              <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase text-outline">Turno Vespertino</span>
                  <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-tertiary-container text-[20px]">bedtime</span>
                  </div>
                </div>
                <div>
                  <span className="font-headline-lg text-headline-lg text-primary font-bold">620</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant block mt-1">15 Grupos (5 por grado)</span>
                </div>
              </div>
              
              <div className="bg-primary-container p-space-lg rounded-xl shadow-sm flex flex-col justify-between text-surface-container-lowest">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase text-primary-fixed-dim">Expedientes SEP</span>
                  <span className="font-label-sm text-label-sm bg-secondary px-2 py-0.5 rounded text-on-secondary font-bold">94% ÓPTIMO</span>
                </div>
                <div className="mt-space-sm">
                  <div className="flex items-baseline justify-between mb-1.5">
                    <span className="font-headline-lg text-headline-lg font-bold text-surface-container-lowest">1,165</span>
                    <span className="font-body-sm text-body-sm text-primary-fixed-dim">75 pendientes</span>
                  </div>
                  
                  <div className="w-full bg-primary h-2 rounded-full overflow-hidden">
                    <div className="bg-secondary-container h-full rounded-full" style={{ width: "94%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-space-xl bg-surface-container-lowest rounded-xl shadow-md overflow-hidden transition-all duration-300" id="registration-panel">
            <div className="bg-primary px-space-xl py-space-lg flex items-center justify-between text-on-primary">
              <div className="flex items-center gap-space-md">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-on-secondary text-[24px]">assignment_ind</span>
                </div>
                <div>
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim">Formulario Oficial F-EST-04</span>
                    <span className="text-outline-variant">•</span>
                    <span className="font-label-sm text-label-sm text-secondary-fixed">Trámite de Ingreso y Reingreso</span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-surface tracking-tight">
                    Cédula Única de Registro de Alumno
                  </h2>
                </div>
              </div>
              <div className="flex items-center gap-space-sm">
                <span className="hidden sm:inline font-label-sm text-label-sm text-primary-fixed-dim">Campos con validador de identidad SEP</span>
                <button onClick={() => setPanelCollapsed(!panelCollapsed)} className="w-9 h-9 rounded-lg bg-primary-container hover:bg-tertiary-container flex items-center justify-center transition-all text-surface" id="toggle-panel-btn">
                  <span className="material-symbols-outlined text-[20px]" id="toggle-panel-icon">{panelCollapsed ? "expand_more" : "expand_less"}</span>
                </button>
              </div>
            </div>
            
            <div className={`p-space-xl ${panelCollapsed ? "hidden" : ""}`} id="form-content">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-space-sm mb-space-xl bg-surface-container-low p-space-xs rounded-lg">
                <button onClick={() => setStep(1)} className={step === 1 ? STEP_TAB_ACTIVE : STEP_TAB_INACTIVE} data-step="1" type="button">
                  <span className={step === 1 ? CIRCLE_ACTIVE : CIRCLE_INACTIVE}>1</span>
                  <span className="truncate">1. Datos Personales</span>
                </button>
                <button onClick={() => setStep(2)} className={step === 2 ? STEP_TAB_ACTIVE : STEP_TAB_INACTIVE} data-step="2" type="button">
                  <span className={step === 2 ? CIRCLE_ACTIVE : CIRCLE_INACTIVE}>2</span>
                  <span className="truncate">2. Asignación Técnica</span>
                </button>
                <button onClick={() => setStep(3)} className={step === 3 ? STEP_TAB_ACTIVE : STEP_TAB_INACTIVE} data-step="3" type="button">
                  <span className={step === 3 ? CIRCLE_ACTIVE : CIRCLE_INACTIVE}>3</span>
                  <span className="truncate">3. Tutor y Domicilio</span>
                </button>
                <button onClick={() => setStep(4)} className={step === 4 ? STEP_TAB_ACTIVE : STEP_TAB_INACTIVE} data-step="4" type="button">
                  <span className={step === 4 ? CIRCLE_ACTIVE : CIRCLE_INACTIVE}>4</span>
                  <span className="truncate">4. Expediente SEP</span>
                </button>
              </div>
              <form className="space-y-space-lg" id="student-alta-form" onSubmit={(e) => { e.preventDefault(); setToast("Alumno inscrito. Se generó la Cédula SEP F-EST-04 y la credencial con código QR provisional."); setStep(1); setCurp(""); window.setTimeout(() => setToast(""), 3600); }}>
                
                <div className={`step-pane ${step === 1 ? "" : "hidden"}`} id="step-1">
                  <div className="mb-space-md flex items-center justify-between">
                    <h3 className="font-title-md text-title-md text-primary font-semibold flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[22px]">badge</span>
                      Identidad y Ficha Médica del Alumno
                    </h3>
                    <span className="font-label-sm text-label-sm text-outline">Paso 1 de 4</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
                    
                    <div className="md:col-span-8 flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">Nombre Completo (Apellidos y Nombres)</label>
                      <input className="w-full px-space-md py-2.5 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" placeholder="Ej. HERNÁNDEZ MORALES JORGE ALBERTO" required="" type="text" />
                      <span className="font-body-sm text-body-sm text-outline">Tal como aparece en el acta de nacimiento
                        oficial.</span>
                    </div>
                    
                    <div className="md:col-span-4 flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <label className="font-label-md text-label-md text-on-surface font-semibold">CURP (18 caracteres)</label>
                        <span className={`font-label-sm text-label-sm uppercase font-bold ${curpStatus.cls}`} id="curp-status">{curpStatus.text}</span>
                      </div>
                      <div className="relative">
                        <input value={curp} onChange={(e) => setCurp(e.target.value.toUpperCase())} className="w-full px-space-md py-2.5 uppercase font-mono bg-surface-container-lowest rounded-lg text-on-surface font-label-lg text-label-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm tracking-wider" id="curp-input" maxLength="18" placeholder="HEMJ090812HDFRRA02" required="" type="text" />
                        <span className={`material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[20px] ${curpStatus.cls}`} id="curp-icon">{curpStatus.icon}</span>
                      </div>
                      <span className="font-body-sm text-body-sm text-outline">Algoritmo RENAPO con clave de estado.</span>
                    </div>
                    
                    <div className="md:col-span-3 flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">Fecha de Nacimiento</label>
                      <input className="w-full px-space-md py-2.5 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" required="" type="date" />
                    </div>
                    
                    <div className="md:col-span-3 flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">Sexo Biológico</label>
                      <select className="w-full px-space-md py-2.5 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" required="">
                        <option value="">Seleccione...</option>
                        <option value="H">Hombre</option>
                        <option value="M">Mujer</option>
                      </select>
                    </div>
                    
                    <div className="md:col-span-2 flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">Grupo Sanguíneo</label>
                      <select className="w-full px-space-md py-2.5 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm">
                        <option value="O+">O Positivo (O+)</option>
                        <option value="A+">A Positivo (A+)</option>
                        <option value="B+">B Positivo (B+)</option>
                        <option value="AB+">AB Positivo (AB+)</option>
                        <option value="O-">O Negativo (O-)</option>
                        <option value="A-">A Negativo (A-)</option>
                        <option value="B-">B Negativo (B-)</option>
                        <option value="AB-">AB Negativo (AB-)</option>
                      </select>
                    </div>
                    
                    <div className="md:col-span-4 flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">Alergias o Cuidados de Taller</label>
                      <input className="w-full px-space-md py-2.5 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" placeholder="Ej. Asma, alergia a penicilina, usa lentes de seguridad" type="text" />
                    </div>
                  </div>
                </div>
                
                <div className={`step-pane ${step === 2 ? "" : "hidden"}`} id="step-2">
                  <div className="mb-space-md flex items-center justify-between">
                    <h3 className="font-title-md text-title-md text-primary font-semibold flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[22px]">precision_manufacturing</span>
                      Estructura Escolar y Especialidad Tecnológica
                    </h3>
                    <span className="font-label-sm text-label-sm text-outline">Paso 2 de 4</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
                    
                    <div className="md:col-span-4 flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">Grado Escolar</label>
                      <select className="w-full px-space-md py-2.5 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" required="">
                        <option value="1">
                          1° Primer Grado (Iniciación Técnica)
                        </option>
                        <option value="2">
                          2° Segundo Grado (Desarrollo Tecnológico)
                        </option>
                        <option value="3">
                          3° Tercer Grado (Terminal y Certificación)
                        </option>
                      </select>
                    </div>
                    
                    <div className="md:col-span-4 flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">Grupo Designado</label>
                      <div className="grid grid-cols-5 gap-1.5">
                        <label className="flex items-center justify-center p-2 rounded bg-surface-container text-on-surface cursor-pointer hover:bg-surface-container-high has-[:checked]:bg-primary has-[:checked]:text-on-primary">
                          <input checked="" className="sr-only" name="grupo" type="radio" value="A" />
                          <span className="font-label-lg text-label-lg font-bold">A</span>
                        </label>
                        <label className="flex items-center justify-center p-2 rounded bg-surface-container text-on-surface cursor-pointer hover:bg-surface-container-high has-[:checked]:bg-primary has-[:checked]:text-on-primary">
                          <input className="sr-only" name="grupo" type="radio" value="B" />
                          <span className="font-label-lg text-label-lg font-bold">B</span>
                        </label>
                        <label className="flex items-center justify-center p-2 rounded bg-surface-container text-on-surface cursor-pointer hover:bg-surface-container-high has-[:checked]:bg-primary has-[:checked]:text-on-primary">
                          <input className="sr-only" name="grupo" type="radio" value="C" />
                          <span className="font-label-lg text-label-lg font-bold">C</span>
                        </label>
                        <label className="flex items-center justify-center p-2 rounded bg-surface-container text-on-surface cursor-pointer hover:bg-surface-container-high has-[:checked]:bg-primary has-[:checked]:text-on-primary">
                          <input className="sr-only" name="grupo" type="radio" value="D" />
                          <span className="font-label-lg text-label-lg font-bold">D</span>
                        </label>
                        <label className="flex items-center justify-center p-2 rounded bg-surface-container text-on-surface cursor-pointer hover:bg-surface-container-high has-[:checked]:bg-primary has-[:checked]:text-on-primary">
                          <input className="sr-only" name="grupo" type="radio" value="E" />
                          <span className="font-label-lg text-label-lg font-bold">E</span>
                        </label>
                      </div>
                    </div>
                    
                    <div className="md:col-span-4 flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">Turno Oficial</label>
                      <div className="grid grid-cols-2 gap-2">
                        <label className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container has-[:checked]:bg-primary-container has-[:checked]:text-on-primary-container">
                          <input checked="" className="text-primary focus:ring-0" name="turno" type="radio" value="M" />
                          <span className="font-label-md text-label-md font-semibold">Matutino (07:00 - 13:40)</span>
                        </label>
                        <label className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container has-[:checked]:bg-primary-container has-[:checked]:text-on-primary-container">
                          <input className="text-primary focus:ring-0" name="turno" type="radio" value="V" />
                          <span className="font-label-md text-label-md font-semibold">Vespertino (14:00 - 20:40)</span>
                        </label>
                      </div>
                    </div>
                    
                    <div className="md:col-span-12 mt-space-sm">
                      <label className="font-label-md text-label-md text-on-surface font-semibold block mb-2">Especialidad de Taller Técnico Tecnológico
                        (EST-70)</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-sm">
                        
                        <label className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container-high cursor-pointer transition-all flex flex-col justify-between has-[:checked]:bg-primary has-[:checked]:text-on-primary shadow-sm">
                          <div className="flex items-center justify-between mb-space-sm">
                            <span className="material-symbols-outlined text-[24px]">construction</span>
                            <input checked="" className="sr-only" name="taller" type="radio" value="mh" />
                            <span className="w-3 h-3 rounded-full bg-secondary"></span>
                          </div>
                          <div>
                            <span className="font-label-lg text-label-lg font-bold block leading-tight">Máquinas-Herramientas</span>
                            <span className="font-body-sm text-body-sm opacity-80 mt-1 block">Taller Mecánico Pesado</span>
                          </div>
                        </label>
                        
                        <label className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container-high cursor-pointer transition-all flex flex-col justify-between has-[:checked]:bg-primary has-[:checked]:text-on-primary shadow-sm">
                          <div className="flex items-center justify-between mb-space-sm">
                            <span className="material-symbols-outlined text-[24px]">bolt</span>
                            <input className="sr-only" name="taller" type="radio" value="elec" />
                            <span className="w-3 h-3 rounded-full bg-outline-variant"></span>
                          </div>
                          <div>
                            <span className="font-label-lg text-label-lg font-bold block leading-tight">Electricidad</span>
                            <span className="font-body-sm text-body-sm opacity-80 mt-1 block">Instalaciones e Industria</span>
                          </div>
                        </label>
                        
                        <label className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container-high cursor-pointer transition-all flex flex-col justify-between has-[:checked]:bg-primary has-[:checked]:text-on-primary shadow-sm">
                          <div className="flex items-center justify-between mb-space-sm">
                            <span className="material-symbols-outlined text-[24px]">terminal</span>
                            <input className="sr-only" name="taller" type="radio" value="info" />
                            <span className="w-3 h-3 rounded-full bg-outline-variant"></span>
                          </div>
                          <div>
                            <span className="font-label-lg text-label-lg font-bold block leading-tight">Informática</span>
                            <span className="font-body-sm text-body-sm opacity-80 mt-1 block">Sistemas y Algoritmia</span>
                          </div>
                        </label>
                        
                        <label className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container-high cursor-pointer transition-all flex flex-col justify-between has-[:checked]:bg-primary has-[:checked]:text-on-primary shadow-sm">
                          <div className="flex items-center justify-between mb-space-sm">
                            <span className="material-symbols-outlined text-[24px]">architecture</span>
                            <input className="sr-only" name="taller" type="radio" value="dibujo" />
                            <span className="w-3 h-3 rounded-full bg-outline-variant"></span>
                          </div>
                          <div>
                            <span className="font-label-lg text-label-lg font-bold block leading-tight">Dibujo Técnico</span>
                            <span className="font-body-sm text-body-sm opacity-80 mt-1 block">Modelado y Planimetría</span>
                          </div>
                        </label>
                        
                        <label className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container-high cursor-pointer transition-all flex flex-col justify-between has-[:checked]:bg-primary has-[:checked]:text-on-primary shadow-sm">
                          <div className="flex items-center justify-between mb-space-sm">
                            <span className="material-symbols-outlined text-[24px]">calculate</span>
                            <input className="sr-only" name="taller" type="radio" value="conta" />
                            <span className="w-3 h-3 rounded-full bg-outline-variant"></span>
                          </div>
                          <div>
                            <span className="font-label-lg text-label-lg font-bold block leading-tight">Contabilidad</span>
                            <span className="font-body-sm text-body-sm opacity-80 mt-1 block">Gestión Administrativa</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`step-pane ${step === 3 ? "" : "hidden"}`} id="step-3">
                  <div className="mb-space-md flex items-center justify-between">
                    <h3 className="font-title-md text-title-md text-primary font-semibold flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[22px]">family_restroom</span>
                      Responsable Legal, Contacto y Residencia
                    </h3>
                    <span className="font-label-sm text-label-sm text-outline">Paso 3 de 4</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
                    <div className="md:col-span-6 flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">Nombre Completo del Padre, Madre o Tutor Legal</label>
                      <input className="w-full px-space-md py-2.5 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" placeholder="Ej. CARMEN MORALES VELÁZQUEZ" required="" type="text" />
                    </div>
                    <div className="md:col-span-3 flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">Parentesco</label>
                      <select className="w-full px-space-md py-2.5 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm">
                        <option value="madre">Madre</option>
                        <option value="padre">Padre</option>
                        <option value="abuelo">Abuelo(a)</option>
                        <option value="tutor">
                          Tutor Designado Judicialmente
                        </option>
                      </select>
                    </div>
                    <div className="md:col-span-3 flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">Teléfono Celular de Emergencia</label>
                      <input className="w-full px-space-md py-2.5 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" placeholder="55 1234 5678" required="" type="tel" />
                    </div>
                    <div className="md:col-span-6 flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">Correo Electrónico (Para envío de Boletas SEP)</label>
                      <input className="w-full px-space-md py-2.5 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" placeholder="tutor.familia@servidor.com" required="" type="email" />
                    </div>
                    <div className="md:col-span-6 flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">Domicilio Familiar Completo</label>
                      <input className="w-full px-space-md py-2.5 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" placeholder="Calle, Número Ext/Int, Colonia, Alcaldía/Municipio, C.P." required="" type="text" />
                    </div>
                  </div>
                </div>
                
                <div className={`step-pane ${step === 4 ? "" : "hidden"}`} id="step-4">
                  <div className="mb-space-md flex items-center justify-between">
                    <h3 className="font-title-md text-title-md text-primary font-semibold flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[22px]">checklist_rtl</span>
                      Checklist Normativo de Expediente Físico y Digital (SEP)
                    </h3>
                    <span className="font-label-sm text-label-sm text-outline">Paso 4 de 4</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mb-space-md">
                    <div className="space-y-space-sm bg-surface-container-low p-space-md rounded-xl">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-bold">Documentos Entregados en Físico</span>
                      <label className="flex items-center gap-space-sm p-space-sm bg-surface-container-lowest rounded-lg cursor-pointer hover:bg-surface-container transition-all">
                        <input checked="" className="w-4 h-4 rounded text-primary focus:ring-0" type="checkbox" />
                        <div className="flex-1">
                          <span className="font-label-md text-label-md text-on-surface font-semibold block">Acta de Nacimiento (Original y 2 copias)</span>
                          <span className="font-body-sm text-body-sm text-outline">Legible, formato actual sin enmendaduras</span>
                        </div>
                        <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                      </label>
                      <label className="flex items-center gap-space-sm p-space-sm bg-surface-container-lowest rounded-lg cursor-pointer hover:bg-surface-container transition-all">
                        <input checked="" className="w-4 h-4 rounded text-primary focus:ring-0" type="checkbox" />
                        <div className="flex-1">
                          <span className="font-label-md text-label-md text-on-surface font-semibold block">Certificado de Primaria</span>
                          <span className="font-body-sm text-body-sm text-outline">Folio con código de barras validado</span>
                        </div>
                        <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                      </label>
                      <label className="flex items-center gap-space-sm p-space-sm bg-surface-container-lowest rounded-lg cursor-pointer hover:bg-surface-container transition-all">
                        <input checked="" className="w-4 h-4 rounded text-primary focus:ring-0" type="checkbox" />
                        <div className="flex-1">
                          <span className="font-label-md text-label-md text-on-surface font-semibold block">CURP Impresa en Formato Oficial</span>
                          <span className="font-body-sm text-body-sm text-outline">Con leyenda de verificación de Registro Civil</span>
                        </div>
                        <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                      </label>
                    </div>
                    <div className="space-y-space-sm bg-surface-container-low p-space-md rounded-xl">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-bold">Complementos Escolares</span>
                      <label className="flex items-center gap-space-sm p-space-sm bg-surface-container-lowest rounded-lg cursor-pointer hover:bg-surface-container transition-all">
                        <input checked="" className="w-4 h-4 rounded text-primary focus:ring-0" type="checkbox" />
                        <div className="flex-1">
                          <span className="font-label-md text-label-md text-on-surface font-semibold block">Comprobante de Domicilio Vigente</span>
                          <span className="font-body-sm text-body-sm text-outline">No mayor a 3 meses (Agua, Luz o Teléfono)</span>
                        </div>
                        <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                      </label>
                      <label className="flex items-center gap-space-sm p-space-sm bg-surface-container-lowest rounded-lg cursor-pointer hover:bg-surface-container transition-all">
                        <input className="w-4 h-4 rounded text-primary focus:ring-0" type="checkbox" />
                        <div className="flex-1">
                          <span className="font-label-md text-label-md text-on-surface font-semibold block">4 Fotografías Tamaño Infantil</span>
                          <span className="font-body-sm text-body-sm text-outline">Blanco y negro, papel mate, camisa blanca</span>
                        </div>
                        <span className="font-label-sm text-label-sm text-secondary uppercase font-bold">Pendiente</span>
                      </label>
                      <label className="flex items-center gap-space-sm p-space-sm bg-surface-container-lowest rounded-lg cursor-pointer hover:bg-surface-container transition-all">
                        <input checked="" className="w-4 h-4 rounded text-primary focus:ring-0" type="checkbox" />
                        <div className="flex-1">
                          <span className="font-label-md text-label-md text-on-surface font-semibold block">Certificado Médico con Tipo de Sangre</span>
                          <span className="font-body-sm text-body-sm text-outline">Expedido por institución pública de salud</span>
                        </div>
                        <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                      </label>
                    </div>
                  </div>
                  <div className="bg-surface-container-high p-space-md rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-primary text-[22px]">policy</span>
                      <span className="font-body-sm text-body-sm text-on-surface">Al confirmar, el alumno queda en estatus
                        <strong>Inscrito con Expediente Condicionado (4/5)</strong>
                        hasta anexar fotos.</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-space-md flex items-center justify-between border-t border-surface-container">
                  <button onClick={() => setStep(step - 1)} className={`px-space-lg py-2.5 bg-surface-container text-on-surface rounded-lg font-label-lg text-label-lg hover:bg-surface-container-high transition-all ${step === 1 ? "hidden" : ""}`} id="prev-step-btn" type="button">
                    Anterior
                  </button>
                  <div className="flex items-center gap-space-sm ml-auto">
                    <button onClick={() => setStep(step + 1)} className={`px-space-lg py-2.5 bg-primary text-on-primary rounded-lg font-label-lg text-label-lg hover:bg-primary-container shadow transition-all ${step === 4 ? "hidden" : ""}`} id="next-step-btn" type="button">
                      Siguiente Paso →
                    </button>
                    <button className={`px-space-xl py-2.5 bg-secondary text-on-secondary rounded-lg font-label-lg text-label-lg hover:bg-on-secondary-fixed-variant shadow-md transition-all flex items-center gap-2 ${step === 4 ? "" : "hidden"}`} id="submit-form-btn" type="submit">
                      <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
                      <span>Completar Inscripción SEP</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm mb-space-lg">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-md">
              <div>
                <h2 className="font-headline-sm text-headline-sm text-primary">
                  Padrón de Alumnos y Expedientes
                </h2>
                <span className="font-body-sm text-body-sm text-outline">Consulta en tiempo real con vinculación a credencial con
                  código QR y boleta bimestral.</span>
              </div>
              
              <div className="flex items-center gap-space-sm">
                <div className="relative w-full sm:w-80">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
                  <input className="w-full pl-9 pr-4 py-2 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary shadow-inner" id="table-search-input" placeholder="Filtrar por nombre, CURP o matrícula..." type="text" />
                </div>
                <button className="p-2 bg-surface-container text-on-surface rounded-lg hover:bg-surface-container-high" title="Imprimir Lista">
                  <span className="material-symbols-outlined text-[20px]">print</span>
                </button>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-space-xs pt-space-xs">
              <span className="font-label-sm text-label-sm text-outline uppercase font-bold mr-2">Filtros Rápidos:</span>
              
              <select className="px-space-md py-1.5 bg-surface-container-low text-on-surface rounded-lg font-label-md text-label-md focus:outline-none focus:ring-2 focus:ring-primary" id="filter-grade">
                <option value="all">Todos los Grados</option>
                <option value="1">1° Primer Grado</option>
                <option value="2">2° Segundo Grado</option>
                <option value="3">3° Tercer Grado</option>
              </select>
              
              <select className="px-space-md py-1.5 bg-surface-container-low text-on-surface rounded-lg font-label-md text-label-md focus:outline-none focus:ring-2 focus:ring-primary" id="filter-shift">
                <option value="all">Ambos Turnos</option>
                <option value="Matutino">Turno Matutino</option>
                <option value="Vespertino">Turno Vespertino</option>
              </select>
              
              <select className="px-space-md py-1.5 bg-surface-container-low text-on-surface rounded-lg font-label-md text-label-md focus:outline-none focus:ring-2 focus:ring-primary" id="filter-tech">
                <option value="all">Todas las Tecnologías</option>
                <option value="Máquinas-Herramientas">
                  Máquinas-Herramientas
                </option>
                <option value="Electricidad">Electricidad</option>
                <option value="Informática">Informática</option>
                <option value="Dibujo Técnico">Dibujo Técnico</option>
                <option value="Contabilidad">Contabilidad</option>
              </select>
              <button className="ml-auto text-secondary font-label-md text-label-md hover:underline flex items-center gap-1" id="reset-filters">
                <span className="material-symbols-outlined text-[16px]">restart_alt</span>
                Restablecer
              </button>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden mb-space-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                    <th className="py-3 px-space-md">Matrícula / Folio</th>
                    <th className="py-3 px-space-md">Estudiante &amp; CURP</th>
                    <th className="py-3 px-space-md">Grado / Grupo</th>
                    <th className="py-3 px-space-md">Turno</th>
                    <th className="py-3 px-space-md">Taller Técnico</th>
                    <th className="py-3 px-space-md">Estatus SEP</th>
                    <th className="py-3 px-space-md text-right">
                      Acciones Oficiales
                    </th>
                  </tr>
                </thead>
                <tbody className="font-body-md text-body-md text-on-surface" id="student-table-body">
                  
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="py-3.5 px-space-md font-mono text-body-sm font-semibold text-primary">
                      24-EST70-0192
                    </td>
                    <td className="py-3.5 px-space-md">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-9 h-9 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-bold text-label-md shrink-0">
                          AR
                        </div>
                        <div>
                          <span className="font-label-lg text-label-lg font-bold block text-primary">ÁLVAREZ RAMÍREZ DANIELA</span>
                          <span className="font-mono text-body-sm text-outline">AARD090415MDFLN01</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-space-md">
                      <span className="inline-flex items-center px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-md text-label-md font-bold">
                        3° - "A"
                      </span>
                    </td>
                    <td className="py-3.5 px-space-md">
                      <div className="flex items-center gap-1.5 text-body-sm">
                        <span className="material-symbols-outlined text-secondary text-[16px]">wb_sunny</span>
                        <span>Matutino</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-space-md">
                      <span className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        Máquinas-Herramientas
                      </span>
                    </td>
                    <td className="py-3.5 px-space-md">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm uppercase font-bold">
                        <span className="material-symbols-outlined text-secondary text-[14px]">check</span>
                        Completo
                      </span>
                    </td>
                    <td className="py-3.5 px-space-md text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-all" title="Expediente Digital">
                          <span className="material-symbols-outlined text-[18px]">folder_shared</span>
                        </button>
                        <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-all" title="Credencial QR">
                          <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
                        </button>
                        <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-all" title="Boleta de Calificaciones">
                          <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                        </button>
                        <button className="p-1.5 rounded hover:bg-surface-container text-secondary transition-all" title="Editar Registro">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="py-3.5 px-space-md font-mono text-body-sm font-semibold text-primary">
                      24-EST70-0481
                    </td>
                    <td className="py-3.5 px-space-md">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-9 h-9 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-bold text-label-md shrink-0">
                          GC
                        </div>
                        <div>
                          <span className="font-label-lg text-label-lg font-bold block text-primary">GUTIÉRREZ CORONA MATEO</span>
                          <span className="font-mono text-body-sm text-outline">GUCM101122HDFRR09</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-space-md">
                      <span className="inline-flex items-center px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-md text-label-md font-bold">
                        2° - "C"
                      </span>
                    </td>
                    <td className="py-3.5 px-space-md">
                      <div className="flex items-center gap-1.5 text-body-sm">
                        <span className="material-symbols-outlined text-secondary text-[16px]">wb_sunny</span>
                        <span>Matutino</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-space-md">
                      <span className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
                        Informática
                      </span>
                    </td>
                    <td className="py-3.5 px-space-md">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase font-bold">
                        <span className="material-symbols-outlined text-[14px]">pending_actions</span>
                        Docs Pendientes
                      </span>
                    </td>
                    <td className="py-3.5 px-space-md text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-all" title="Expediente Digital">
                          <span className="material-symbols-outlined text-[18px]">folder_shared</span>
                        </button>
                        <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-all" title="Credencial QR">
                          <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
                        </button>
                        <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-all" title="Boleta de Calificaciones">
                          <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                        </button>
                        <button className="p-1.5 rounded hover:bg-surface-container text-secondary transition-all" title="Editar Registro">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="py-3.5 px-space-md font-mono text-body-sm font-semibold text-primary">
                      24-EST70-0834
                    </td>
                    <td className="py-3.5 px-space-md">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-9 h-9 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-bold text-label-md shrink-0">
                          MP
                        </div>
                        <div>
                          <span className="font-label-lg text-label-lg font-bold block text-primary">MARTÍNEZ PADILLA SOFÍA</span>
                          <span className="font-mono text-body-sm text-outline">MAPS110305MDFZN04</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-space-md">
                      <span className="inline-flex items-center px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-md text-label-md font-bold">
                        1° - "B"
                      </span>
                    </td>
                    <td className="py-3.5 px-space-md">
                      <div className="flex items-center gap-1.5 text-body-sm">
                        <span className="material-symbols-outlined text-tertiary-container text-[16px]">bedtime</span>
                        <span>Vespertino</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-space-md">
                      <span className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        Electricidad
                      </span>
                    </td>
                    <td className="py-3.5 px-space-md">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm uppercase font-bold">
                        <span className="material-symbols-outlined text-secondary text-[14px]">check</span>
                        Completo
                      </span>
                    </td>
                    <td className="py-3.5 px-space-md text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-all" title="Expediente Digital">
                          <span className="material-symbols-outlined text-[18px]">folder_shared</span>
                        </button>
                        <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-all" title="Credencial QR">
                          <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
                        </button>
                        <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-all" title="Boleta de Calificaciones">
                          <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                        </button>
                        <button className="p-1.5 rounded hover:bg-surface-container text-secondary transition-all" title="Editar Registro">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="py-3.5 px-space-md font-mono text-body-sm font-semibold text-primary">
                      24-EST70-1120
                    </td>
                    <td className="py-3.5 px-space-md">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-9 h-9 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-bold text-label-md shrink-0">
                          VN
                        </div>
                        <div>
                          <span className="font-label-lg text-label-lg font-bold block text-primary">VÁZQUEZ NAVARRO EMILIANO</span>
                          <span className="font-mono text-body-sm text-outline">VANE100918HDFX003</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-space-md">
                      <span className="inline-flex items-center px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-md text-label-md font-bold">
                        2° - "D"
                      </span>
                    </td>
                    <td className="py-3.5 px-space-md">
                      <div className="flex items-center gap-1.5 text-body-sm">
                        <span className="material-symbols-outlined text-tertiary-container text-[16px]">bedtime</span>
                        <span>Vespertino</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-space-md">
                      <span className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
                        Dibujo Técnico
                      </span>
                    </td>
                    <td className="py-3.5 px-space-md">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm uppercase font-bold">
                        <span className="material-symbols-outlined text-secondary text-[14px]">check</span>
                        Completo
                      </span>
                    </td>
                    <td className="py-3.5 px-space-md text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-all" title="Expediente Digital">
                          <span className="material-symbols-outlined text-[18px]">folder_shared</span>
                        </button>
                        <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-all" title="Credencial QR">
                          <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
                        </button>
                        <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-all" title="Boleta de Calificaciones">
                          <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                        </button>
                        <button className="p-1.5 rounded hover:bg-surface-container text-secondary transition-all" title="Editar Registro">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="py-3.5 px-space-md font-mono text-body-sm font-semibold text-primary">
                      24-EST70-0042
                    </td>
                    <td className="py-3.5 px-space-md">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-9 h-9 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-bold text-label-md shrink-0">
                          CL
                        </div>
                        <div>
                          <span className="font-label-lg text-label-lg font-bold block text-primary">CASTILLO LUNA VALERIA</span>
                          <span className="font-mono text-body-sm text-outline">CALV090214MDFBC08</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-space-md">
                      <span className="inline-flex items-center px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-md text-label-md font-bold">
                        3° - "B"
                      </span>
                    </td>
                    <td className="py-3.5 px-space-md">
                      <div className="flex items-center gap-1.5 text-body-sm">
                        <span className="material-symbols-outlined text-secondary text-[16px]">wb_sunny</span>
                        <span>Matutino</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-space-md">
                      <span className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-outline"></span>
                        Contabilidad
                      </span>
                    </td>
                    <td className="py-3.5 px-space-md">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm uppercase font-bold">
                        <span className="material-symbols-outlined text-secondary text-[14px]">check</span>
                        Completo
                      </span>
                    </td>
                    <td className="py-3.5 px-space-md text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-all" title="Expediente Digital">
                          <span className="material-symbols-outlined text-[18px]">folder_shared</span>
                        </button>
                        <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-all" title="Credencial QR">
                          <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
                        </button>
                        <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-all" title="Boleta de Calificaciones">
                          <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                        </button>
                        <button className="p-1.5 rounded hover:bg-surface-container text-secondary transition-all" title="Editar Registro">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="p-space-md bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm">
              <span className="font-body-sm text-body-sm text-outline">
                Mostrando <strong className="text-on-surface">5</strong> de
                <strong className="text-on-surface">1,240</strong> alumnos
                registrados (Padrón Oficial EST 70)
              </span>
              <div className="flex items-center gap-space-xs">
                <button className="px-3 py-1.5 bg-surface-container rounded-lg font-label-sm text-label-sm text-outline cursor-not-allowed" disabled="">
                  ← Anterior
                </button>
                <button className="px-3 py-1.5 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm font-bold">
                  1
                </button>
                <button className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-label-sm text-label-sm">
                  2
                </button>
                <button className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-label-sm text-label-sm">
                  3
                </button>
                <span className="px-2 text-outline">...</span>
                <button className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-label-sm text-label-sm">
                  124
                </button>
                <button className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-label-sm text-label-sm">
                  Siguiente →
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mb-space-xl">
            <div className="bg-surface-container-low p-space-lg rounded-xl flex items-start gap-space-md">
              <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary text-[28px]">qr_code</span>
              </div>
              <div>
                <h4 className="font-title-sm text-title-sm text-primary mb-1">
                  Credencialización Inteligente
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Cada alumno dado de alta genera automáticamente un token QR
                  encriptado para asistencia en pórtico y préstamo de
                  herramienta de taller.
                </p>
              </div>
            </div>
            <div className="bg-surface-container-low p-space-lg rounded-xl flex items-start gap-space-md">
              <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-[28px]">cloud_sync</span>
              </div>
              <div>
                <h4 className="font-title-sm text-title-sm text-primary mb-1">
                  Sincronización SIGED-SEP
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Los expedientes con estatus completo se transmiten al portal
                  central de secundarias técnicas a las 23:59 hrs en lote
                  diario.
                </p>
              </div>
            </div>
            <div className="bg-surface-container-low p-space-lg rounded-xl flex items-start gap-space-md">
              <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary-container text-[28px]">health_and_safety</span>
              </div>
              <div>
                <h4 className="font-title-sm text-title-sm text-primary mb-1">
                  Seguridad en Talleres
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  El tipo de sangre y alergias se imprimen al reverso de la
                  credencial oficial para acceso normativo a áreas de máquinas y
                  electricidad.
                </p>
              </div>
            </div>
          </div>
          
          
        </div>
      </main>
  );
}
