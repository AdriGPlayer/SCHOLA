import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/juno/dashboard", icon: "grid_view", label: "Resumen General" },
  { to: "/juno/avisos", icon: "campaign", label: "Avisos y Circulares" },
  { to: "/juno/asistencia", icon: "fact_check", label: "Asistencia y Torniquetes" },
  { to: "/juno/kardex", icon: "history_edu", label: "Calificaciones y Boletas" },
  { to: "/juno/citatorios", icon: "assignment_turned_in", label: "Citatorios y Firmas" },
  { to: "/juno/finanza", icon: "account_balance_wallet", label: "Finanzas y Talleres" },
  { to: "/juno/docentes", icon: "badge", label: "Docentes y Prefectura" },
  { to: "/juno/perfil", icon: "contact_emergency", label: "Perfil y Credencial" },
];

const base = "flex items-center gap-space-sm px-space-md py-2.5 transition-all";
const inactive = `${base} rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface`;
const active = `${base} bg-primary-container text-on-primary font-semibold rounded-lg shadow-[0_2px_8px_rgba(38,22,17,0.06)]`;

export default function JunoLayout() {
  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased min-h-screen">
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(38,22,17,0.06)] z-50 flex flex-col justify-between overflow-y-auto">
        <div className="flex flex-col">
          <div className="h-20 px-space-lg flex items-center gap-space-sm bg-primary text-on-primary">
            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary font-headline-sm font-bold shadow-[0_2px_8px_rgba(38,22,17,0.12)]">
              <span className="material-symbols-outlined text-[24px]">school</span>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-headline-sm text-headline-sm tracking-tight text-on-primary leading-none">JUNO</span>
                <span className="px-1.5 py-0.5 rounded bg-secondary text-on-secondary font-label-sm text-label-sm tracking-wider uppercase leading-none">
                  TUTOR
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-on-primary-container truncate mt-1">
                ESTIS No. 70 · DGEST Veracruz
              </span>
            </div>
          </div>
          <div className="px-space-md py-space-sm">
            <div className="px-space-sm py-2 rounded-lg bg-surface-container flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider">
                  Ciclo 2024-2025
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-primary font-semibold">Periodo II</span>
            </div>
          </div>
          <div className="px-space-md py-1">
            <span className="px-space-sm font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
              Portal Institucional
            </span>
          </div>
          <nav className="flex flex-col gap-1 px-space-md mt-1">
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
        <div className="p-space-md bg-surface-container-high/60 m-space-md rounded-xl shadow-[0_1px_4px_rgba(38,22,17,0.04)]">
          <div className="flex items-center gap-2 text-secondary mb-1">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">Mesa de Ayuda</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-2">
            Horario de oficina escolar: 7:00 a 14:30 hrs.
          </p>
          <div className="flex items-center justify-between text-on-surface font-label-sm text-label-sm font-semibold">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-primary">call</span>
              Ext. 104
            </span>
            <span className="text-primary">prefectura@estis70.edu.mx</span>
          </div>
        </div>
      </aside>
      <div className="pl-72">
        <header className="fixed top-0 left-72 right-0 h-20 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(38,22,17,0.05)] z-40 flex items-center justify-between px-space-lg">
          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-space-sm bg-surface-container px-space-md py-2 rounded-lg">
              <span className="material-symbols-outlined text-primary text-[20px]">supervisor_account</span>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Alumno Vinculado
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-title-sm text-title-sm text-on-surface font-semibold">Daniela Álvarez Ramírez</span>
                  <span className="px-2 py-0.5 rounded bg-surface-variant text-on-surface font-label-sm text-label-sm font-bold">
                    2° B · Informática
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant text-[18px] cursor-pointer hover:text-on-surface">
                    expand_more
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-2">
              <button
                className="relative p-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[22px]">notifications</span>
                <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-secondary ring-2 ring-surface"></span>
              </button>
              <button
                className="p-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[22px]">help</span>
              </button>
            </div>
            <div className="h-8 w-px bg-outline-variant"></div>
            <div className="flex items-center gap-space-sm">
              <div className="flex flex-col text-right">
                <span className="font-label-lg text-label-lg text-on-surface font-semibold">Roberto Álvarez Morales</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Tutor Legal · Clave 70-T98</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_2px_6px_rgba(49,23,14,0.25)]">
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
