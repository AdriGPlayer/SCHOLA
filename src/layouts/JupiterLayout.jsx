import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/jupiter/resumen", icon: "space_dashboard", label: "Resumen General" },
  { to: "/jupiter/alumnos", icon: "group", label: "Alumnos y Matrícula" },
  { to: "/jupiter/docentes", icon: "badge", label: "Docentes y Personal" },
  { to: "/jupiter/estructura", icon: "meeting_room", label: "Grupos y Generaciones" },
  { to: "/jupiter/horario", icon: "menu_book", label: "Asignación Académica" },
  { to: "/jupiter/horarios", icon: "calendar_clock", label: "Horarios Escolares" },
  { to: "/jupiter/parametros", icon: "tune", label: "Parámetros y Ciclo" },
];

const base = "flex items-center gap-space-sm px-space-md py-space-sm rounded-lg transition-all";
const inactive = `${base} text-on-surface-variant hover:bg-surface-container hover:text-on-surface`;
const active = `${base} bg-primary-container text-surface-container-lowest font-bold shadow-[0_1px_4px_rgba(38,22,17,0.08)]`;

export default function JupiterLayout() {
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased min-h-screen">
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(38,22,17,0.04)] z-50 flex flex-col justify-between">
        <div className="flex flex-col">
          <div className="h-20 px-space-lg flex items-center gap-space-sm bg-primary">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
              <span className="material-symbols-outlined text-on-secondary text-[24px]">school</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-headline-sm text-headline-sm text-surface truncate tracking-tight">JÚPITER</span>
              <span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-wider truncate">
                ESTIS No. 70
              </span>
            </div>
          </div>
          <div className="px-space-md py-space-sm">
            <div className="px-space-sm py-space-xs mb-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                Gestión Administrativa
              </span>
            </div>
            <nav className="flex flex-col gap-space-xs">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => (isActive ? active : inactive)}
                >
                  <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                  <span className="font-label-lg text-label-lg">{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
        <div className="p-space-md bg-surface-container">
          <div className="flex items-center justify-between px-space-sm py-space-xs">
            <div className="flex items-center gap-space-xs">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                Sede Central Activa
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-outline">v4.2.1</span>
          </div>
        </div>
      </aside>
      <div className="pl-72">
        <header className="fixed top-0 left-72 right-0 h-20 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(38,22,17,0.04)] z-40 px-space-xl flex items-center justify-between">
          <div className="flex items-center gap-space-lg flex-1 max-w-2xl">
            <div className="relative w-full max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                search
              </span>
              <input
                className="w-full pl-10 pr-4 py-2 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Búsqueda rápida por CURP, Matrícula o Nombre..."
                type="text"
              />
            </div>
            <div className="hidden xl:flex items-center gap-space-xs bg-surface-container-high px-space-sm py-1.5 rounded-lg">
              <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
              <span className="font-label-sm text-label-sm text-on-surface uppercase">Ciclo 2024-2025</span>
              <span className="text-outline-variant">•</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Turnos: M y V</span>
            </div>
          </div>
          <div className="flex items-center gap-space-md shrink-0">
            <div className="hidden md:flex flex-col text-right">
              <span className="font-label-lg text-label-lg text-on-surface">Lic. M. Valenzuela</span>
              <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">Control Escolar</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </header>
        <Outlet />
      </div>
    </div>
  );
}
