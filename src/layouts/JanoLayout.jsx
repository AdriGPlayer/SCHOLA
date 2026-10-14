import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/jano/resumen", icon: "grid_view", label: "Resumen y Monitor en Vivo" },
  { to: "/jano/monitor", icon: "door_sliding", label: "Monitor y Evasiones", badge: "Alerta" },
  { to: "/jano/bitacora", icon: "menu_book", label: "Bitácora de Incidencias" },
  { to: "/jano/puntaje", icon: "assignment_late", label: "Control de Conducta" },
  { to: "/jano/citatorios", icon: "gavel", label: "Citatorios y Actas" },
  { to: "/jano/reporte", icon: "analytics", label: "Reportes y Grupos" },
  { to: "/jano/torniquetes", icon: "how_to_reg", label: "Torniquetes y Retardos" },
];

const base = "flex items-center gap-space-sm px-space-md py-2.5 rounded-lg transition-colors font-label-lg text-label-lg";
const inactive = `${base} text-on-surface-variant hover:bg-surface-container hover:text-on-surface`;
const active = `${base} bg-primary-container text-on-primary font-label-lg shadow-sm`;

export default function JanoLayout() {
  return (
    <div className="bg-background font-body-md text-on-surface min-h-screen">
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(49,23,14,0.06)] z-50 flex flex-col justify-between">
        <div className="flex flex-col">
          <div className="px-space-lg pt-space-lg pb-space-md bg-surface-container flex items-center gap-space-sm">
            <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary font-headline-md text-headline-md">
              J
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary leading-none">JANO</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase mt-1">
                Prefectura • ESTIS 70
              </span>
            </div>
          </div>
          <div className="px-space-lg py-space-sm bg-surface-container-high/60 flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">MÓDULO NORTE</span>
            <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary font-bold uppercase">
              <span className="w-2 h-2 rounded-full bg-secondary inline-block animate-pulse"></span>
              Guardia Activa
            </span>
          </div>
          <nav className="flex flex-col gap-1 px-space-md py-space-md">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? active : inactive)}
              >
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-auto px-1.5 py-0.5 rounded-sm bg-error text-on-error font-label-sm text-label-sm uppercase">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="p-space-md bg-surface-container-high/40 m-space-md rounded-lg flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[16px]">phone_in_talk</span>
            <span>Mesa de Guardia Ext. 108</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant/80">
            Conmutador Central Prefectura ESTIS 70
          </p>
        </div>
      </aside>
      <div className="pl-72">
        <header className="fixed top-0 left-72 right-0 h-20 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(49,23,14,0.05)] z-40 px-space-lg flex items-center justify-between">
          <div className="flex items-center gap-space-md">
            <div className="flex flex-col">
              <span className="font-title-md text-title-md text-primary font-bold tracking-tight">
                Escuela Secundaria Técnica Industrial y de Servicios No. 70
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Sistema Integral de Prefectura, Disciplina y Convivencia Institucional
              </span>
            </div>
            <div className="hidden xl:flex items-center gap-space-xs ml-space-md pl-space-md py-1">
              <span className="px-2 py-0.5 rounded-sm bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold uppercase">
                Ciclo 2024-2025
              </span>
              <span className="px-2 py-0.5 rounded-sm bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold uppercase flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">light_mode</span>
                Turno Matutino
              </span>
            </div>
          </div>
          <div className="flex items-center gap-space-md">
            <button
              aria-label="Alertas Perimetrales"
              className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[24px]">warning</span>
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-error rounded-full ring-2 ring-surface"></span>
            </button>
            <div className="h-8 w-px bg-outline-variant/60"></div>
            <div className="flex items-center gap-space-sm">
              <div className="flex flex-col text-right">
                <span className="font-label-lg text-label-lg text-primary leading-tight">Mtro. Efrén Galindo</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Prefecto • Módulo Norte</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
            </div>
          </div>
        </header>
        <Outlet />
        <footer className="w-full bg-surface-container-low py-space-md px-space-lg shadow-[0_-1px_6px_rgba(49,23,14,0.03)]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
            <div>
              <span>© 2024 Dirección General de Educación Secundaria Técnica (DGEST Veracruz) — ESTIS No. 70</span>
            </div>
            <div className="flex items-center gap-space-md">
              <span className="font-label-sm text-label-sm font-semibold uppercase text-primary">Mesa de Guardia: Ext. 108</span>
              <span className="text-outline-variant">•</span>
              <span>Coordinación de Asistencia y Disciplina</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
