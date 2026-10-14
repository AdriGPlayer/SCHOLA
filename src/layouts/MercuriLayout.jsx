import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/mercurio/social", icon: "campaign", label: "Muro / Avisos" },
  { to: "/mercurio/horario", icon: "schedule", label: "Mi Horario Escolar" },
  { to: "/mercurio/tareas", icon: "assignment", label: "Tareas y Entregas" },
  { to: "/mercurio/citas", icon: "shield_person", label: "Citatorios e Incidencias" },
  { to: "/mercurio/clubes", icon: "sports_kabaddi", label: "Representativos y Clubes" },
  { to: "/mercurio/perfil", icon: "badge", label: "Mi Perfil y Credencial QR" },
];

const base = "flex items-center gap-space-sm px-space-sm py-2.5 rounded transition-colors";
const inactive = `${base} text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface`;
const active = `${base} bg-primary-container text-on-primary font-bold shadow-[0_2px_8px_rgba(38,22,17,0.08)]`;

export default function MercuriLayout() {
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased min-h-screen">
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between">
        <div className="flex flex-col">
          <div className="h-16 px-gutter flex items-center gap-space-sm bg-primary">
            <div className="w-9 h-9 rounded bg-surface-container-highest flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-primary tracking-tight leading-none">MERCURIO</span>
              <span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-wider mt-0.5">
                Portal Alumno • ESTIS 70
              </span>
            </div>
          </div>
          <div className="p-space-md">
            <div className="bg-surface-container p-space-sm rounded mb-space-sm flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[16px] text-secondary">school</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Ciclo Lectivo</span>
              </div>
              <span className="font-label-md text-label-md text-on-surface font-bold bg-surface px-space-xs py-0.5 rounded">
                2024-2025
              </span>
            </div>
            <div className="bg-surface-container p-space-sm rounded flex flex-col gap-0.5">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Adscripción Activa</span>
              <span className="font-label-md text-label-md text-on-surface font-bold truncate">2° B • Turno Matutino</span>
              <span className="font-body-sm text-body-sm text-secondary truncate">Taller de Informática</span>
            </div>
          </div>
          <nav className="px-space-sm flex flex-col gap-1">
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
        <div className="p-space-md bg-surface-container-high m-space-sm rounded flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[16px] text-secondary">lock</span>
            <span className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider font-bold">
              Conexión Segura Alumno
            </span>
          </div>
          <span className="font-body-sm text-body-sm text-on-surface-variant">ESTIS No. 70 • v3.4.2-sep</span>
        </div>
      </aside>
      <div className="pl-72">
        <header className="fixed top-0 left-72 right-0 h-16 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-gutter flex items-center justify-between gap-space-md">
          <div className="flex-1 max-w-lg">
            <div className="relative flex items-center w-full">
              <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[20px]">search</span>
              <input
                className="w-full bg-surface-container-low pl-10 pr-space-md py-1.5 rounded font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Buscar asignaturas, docentes, avisos o circulares..."
                type="search"
              />
            </div>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="hidden xl:flex items-center gap-space-xs bg-surface-container px-space-sm py-1 rounded">
              <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
              <span className="font-label-sm text-label-sm text-on-surface font-semibold">Subsistema DGEST • Veracruz</span>
            </div>
            <button
              className="relative p-2 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors"
              title="Notificaciones de tareas y citatorios"
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-secondary ring-2 ring-surface"></span>
            </button>
            <div className="flex items-center gap-space-sm pl-space-sm">
              <div className="text-right hidden sm:block">
                <div className="font-label-md text-label-md text-on-surface leading-tight font-bold truncate max-w-[200px]">
                  Álvarez Ramírez Daniela
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant font-medium tracking-tight">
                  Mat. 24-EST70-0192
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
            </div>
          </div>
        </header>
        <Outlet />
      </div>
    </div>
  );
}
