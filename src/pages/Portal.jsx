import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Portal() {
  const navigate = useNavigate();
  const [toast, setToast] = useState("");
  const go = (path) => navigate(path);
  const soon = (name) => {
    setToast(`El ${name} aún no está disponible en esta build.`);
    window.setTimeout(() => setToast(""), 3200);
  };
  return (
    <>
    {toast && (
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-inverse-surface text-inverse-on-surface font-label-md text-label-md px-space-md py-space-sm rounded-lg shadow-xl">
        {toast}
      </div>
    )}
    <header className="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(40,24,19,0.06)]">
      <div className="w-full px-gutter md:px-margin h-16 flex items-center justify-between border-b border-surface-container">
        <div className="flex items-center gap-space-md">
          <img alt="Emblema SCHOLA Técnica 70" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1W7scA3SBtciUOadyz8PbNYakeKVwbErRRLmar_McbsHtQ7BXB-bQo9xAQB9EWvGsAva1MCx-AsiPHHWSwyxrRYJe2PkT7IByC6QSQHAhzoyT8rTtvW5ZraywUypKRU6PQsO9omp9yIJ8642ncr1MeXBK2oyMdKAy7Mt_e4WtWhEGka_kn36tLqf7-_RgSb6_xi68ARsUBGSOrSmx09cPbCqKrbogsXWGcKzYnpK8W5ZYYhR-YG9nOO75kI" />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary leading-tight font-bold">SCHOLA</span><span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Secundaria Técnica 70 • Jalisco</span>
          </div>
        </div>
        <div className="flex items-center gap-space-md">
          <span className="hidden sm:inline-flex items-center px-space-sm py-0.5 rounded bg-surface-container text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">Ciclo 2024–2025</span>
          <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[16px] text-secondary">lock</span><span className="hidden md:inline">Acceso Seguro TLS 1.3</span>
          </div>
          <button className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded bg-surface-container text-primary hover:bg-surface-container-high transition-colors font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[16px]">help</span><span className="hidden sm:inline">Mesa de Ayuda</span>
          </button>
        </div>
      </div>
    </header>
    <main className="w-full bg-surface pt-20">
      <div className="max-w-7xl mx-auto px-gutter md:px-margin pt-space-xl pb-space-xl flex flex-col gap-space-xl">
        <div className="text-center flex flex-col items-center gap-space-xs max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm uppercase tracking-widest font-bold mb-space-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>Portal Central de Accesos Institucionales
          </div>
          <h1 className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight">
            Bienvenido a
            <span className="text-primary-container italic font-normal">SCHOLA</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Selecciona tu perfil o subsistema educativo para ingresar a las
            herramientas académicas, operativas y administrativas de la
            Secundaria Técnica 70.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          <div className="group bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-surface-container relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary group-hover:bg-secondary transition-colors"></div>
            <div className="flex flex-col gap-space-md">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors shadow-inner">
                  <span className="material-symbols-outlined text-[28px]">school</span>
                </div>
                <span className="px-space-sm py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">Alumnos</span>
              </div>
              <div>
                <h2 className="font-title-md text-title-md text-primary font-bold">
                  Portal de Alumnos
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                  Consulta de calificaciones por trimestre, horarios de talleres
                  industriales, tareas y credencial técnica digital.
                </p>
              </div>
              <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1">
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Servicios incluidos:</span>
                <ul className="space-y-1 text-on-surface-variant font-body-sm text-body-sm">
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[15px] text-secondary">check_circle</span><span className="">Boletas y evaluaciones por periodo</span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[15px] text-secondary">check_circle</span><span className="">Talleres y Google Classroom</span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[15px] text-secondary">check_circle</span><span className="">Credencial QR institucional</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-space-lg flex flex-col gap-space-xs">
              <button onClick={() => go("/mercurio/social")} className="w-full inline-flex items-center justify-between px-space-md py-space-sm rounded-lg bg-primary text-on-primary hover:bg-tertiary transition-colors font-label-lg text-label-lg shadow-sm group-hover:bg-primary-container">
                <span className="font-semibold">Entrar a Alumnos</span><span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1">
                <span className="">Acceso con CURP</span><a className="hover:text-primary transition-colors underline" href="#">Ayuda de acceso</a>
              </div>
            </div>
          </div>
          <div className="group bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-surface-container relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-secondary"></div>
            <div className="flex flex-col gap-space-md">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors shadow-inner">
                  <span className="material-symbols-outlined text-[28px]">family_restroom</span>
                </div>
                <span className="px-space-sm py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">Padres</span>
              </div>
              <div>
                <h2 className="font-title-md text-title-md text-primary font-bold">
                  Padres y Tutores
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                  Seguimiento académico, boletas oficiales SEP en PDF, reporte
                  de incidencias y circulares con firma digital.
                </p>
              </div>
              <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1">
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Servicios incluidos:</span>
                <ul className="space-y-1 text-on-surface-variant font-body-sm text-body-sm">
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[15px] text-secondary">check_circle</span><span className="">Descarga de boletas oficiales SEP</span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[15px] text-secondary">check_circle</span><span className="">Asistencias y avisos de prefectura</span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[15px] text-secondary">check_circle</span><span className="">Citas con docentes y orientación</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-space-lg flex flex-col gap-space-xs">
              <button onClick={() => go("/juno/avisos")} className="w-full inline-flex items-center justify-between px-space-md py-space-sm rounded-lg bg-primary text-on-primary hover:bg-tertiary transition-colors font-label-lg text-label-lg shadow-sm group-hover:bg-primary-container">
                <span className="font-semibold">Entrar a Padres</span><span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1">
                <span className="">Vinculado a matrícula</span><a className="hover:text-primary transition-colors underline" href="#">Asociar nuevo hijo</a>
              </div>
            </div>
          </div>
          <div className="group bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-surface-container relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary group-hover:bg-secondary transition-colors"></div>
            <div className="flex flex-col gap-space-md">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors shadow-inner">
                  <span className="material-symbols-outlined text-[28px]">history_edu</span>
                </div>
                <span className="px-space-sm py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">Docentes</span>
              </div>
              <div>
                <h2 className="font-title-md text-title-md text-primary font-bold">
                  Portal de Profesores
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                  Captura trimestral de evaluaciones, planeación por proyectos
                  didácticos NEM y pase de lista digital por grupo.
                </p>
              </div>
              <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1">
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Servicios incluidos:</span>
                <ul className="space-y-1 text-on-surface-variant font-body-sm text-body-sm">
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[15px] text-secondary">check_circle</span><span className="">Captura y ponderación trimestral</span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[15px] text-secondary">check_circle</span><span className="">Planeación didáctica y proyectos NEM</span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[15px] text-secondary">check_circle</span><span className="">Pase de lista y reportes diarios</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-space-lg flex flex-col gap-space-xs">
              <button onClick={() => soon("Portal de Profesores (MINERVA)")} className="w-full inline-flex items-center justify-between px-space-md py-space-sm rounded-lg bg-primary text-on-primary hover:bg-tertiary transition-colors font-label-lg text-label-lg shadow-sm group-hover:bg-primary-container">
                <span className="font-semibold">Entrar a Profesores</span><span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1">
                <span className="">Cuenta SEP Institucional</span><a className="hover:text-primary transition-colors underline" href="#">Planeación NEM</a>
              </div>
            </div>
          </div>
          <div className="group bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-surface-container relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-secondary"></div>
            <div className="flex flex-col gap-space-md">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors shadow-inner">
                  <span className="material-symbols-outlined text-[28px]">shield</span>
                </div>
                <span className="px-space-sm py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">Prefectura</span>
              </div>
              <div>
                <h2 className="font-title-md text-title-md text-primary font-bold">
                  Portal de Prefectura
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                  Control de asistencia en torniquetes, pases de salida
                  justificados, credencialización y bitácoras de convivencia.
                </p>
              </div>
              <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1">
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Servicios incluidos:</span>
                <ul className="space-y-1 text-on-surface-variant font-body-sm text-body-sm">
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[15px] text-secondary">check_circle</span><span className="">Puntualidad en torniquetes de acceso</span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[15px] text-secondary">check_circle</span><span className="">Emisión de pases de salida</span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[15px] text-secondary">check_circle</span><span className="">Bitácora de rondines y talleres</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-space-lg flex flex-col gap-space-xs">
              <button onClick={() => go("/jano/monitor")} className="w-full inline-flex items-center justify-between px-space-md py-space-sm rounded-lg bg-primary text-on-primary hover:bg-tertiary transition-colors font-label-lg text-label-lg shadow-sm group-hover:bg-primary-container">
                <span className="font-semibold">Entrar a Prefectura</span><span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1">
                <span className="">Turnos Mat. y Vesp.</span><a className="hover:text-primary transition-colors underline" href="#">Reportar incidencia</a>
              </div>
            </div>
          </div>
          <div className="group bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-surface-container relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary group-hover:bg-secondary transition-colors"></div>
            <div className="flex flex-col gap-space-md">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors shadow-inner">
                  <span className="material-symbols-outlined text-[28px]">admin_panel_settings</span>
                </div>
                <span className="px-space-sm py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">Dirección</span>
              </div>
              <div>
                <h2 className="font-title-md text-title-md text-primary font-bold">
                  Portal de Administración
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                  Gestión de inscripciones, control escolar, expedición de
                  Kardex y estadísticas oficiales de Zona Escolar 04.
                </p>
              </div>
              <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1">
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Servicios incluidos:</span>
                <ul className="space-y-1 text-on-surface-variant font-body-sm text-body-sm">
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[15px] text-secondary">check_circle</span><span className="">Inscripciones y cédulas de grado</span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[15px] text-secondary">check_circle</span><span className="">Certificados oficiales y Kardex SEP</span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[15px] text-secondary">check_circle</span><span className="">Estadística 911 y supervisión</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-space-lg flex flex-col gap-space-xs">
              <button onClick={() => go("/jupiter/alumnos")} className="w-full inline-flex items-center justify-between px-space-md py-space-sm rounded-lg bg-primary text-on-primary hover:bg-tertiary transition-colors font-label-lg text-label-lg shadow-sm group-hover:bg-primary-container">
                <span className="font-semibold">Entrar a Administración</span><span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1">
                <span className="">Doble Factor Activo</span><a className="hover:text-primary transition-colors underline" href="#">Módulo SEP SIGED</a>
              </div>
            </div>
          </div>
          <div className="group bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-surface-container relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-secondary-container"></div>
            <div className="flex flex-col gap-space-md">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors shadow-inner">
                  <span className="material-symbols-outlined text-[28px]">public</span>
                </div>
                <span className="px-space-sm py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">Comunidad</span>
              </div>
              <div>
                <h2 className="font-title-md text-title-md text-primary font-bold">
                  Portal Público y Admisión
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                  Convocatorias de nuevo ingreso 2025–2026, muestra de talleres
                  industriales y vinculación comunitaria.
                </p>
              </div>
              <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1">
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Servicios incluidos:</span>
                <ul className="space-y-1 text-on-surface-variant font-body-sm text-body-sm">
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[15px] text-secondary">check_circle</span><span className="">Convocatoria de preinscripciones</span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[15px] text-secondary">check_circle</span><span className="">Muestra pedagógica de talleres</span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[15px] text-secondary">check_circle</span><span className="">Gaceta y eventos culturales</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-space-lg flex flex-col gap-space-xs">
              <button onClick={() => soon("Portal Público (VESTA)")} className="w-full inline-flex items-center justify-between px-space-md py-space-sm rounded-lg bg-secondary text-on-secondary hover:bg-primary transition-colors font-label-lg text-label-lg shadow-sm">
                <span className="font-semibold">Entrar al Portal Público</span><span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1">
                <span className="">Acceso libre</span><a className="hover:text-primary transition-colors underline" href="#">Convocatoria SEP</a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-space-md pt-space-md border-t border-surface-container text-on-surface-variant font-body-sm text-body-sm">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[16px] text-secondary">support_agent</span><span className="">¿Requieres asistencia con tus credenciales?</span>
          </div>
          <a className="text-primary hover:text-secondary underline font-semibold transition-colors" href="#">Centro de Recuperación de Claves CURP</a><span className="text-outline-variant">•</span><span className="font-label-sm text-label-sm text-primary-fixed-variant">Ext. Soporte 106</span>
        </div>
      </div>
    </main>
    <footer className="w-full bg-surface-container-low text-on-surface mt-space-xl">
      <div className="w-full px-gutter md:px-margin py-space-md border-t border-surface-container flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
        <div className="flex items-center gap-space-sm">
          <span className="font-title-sm text-title-sm text-primary font-bold">SCHOLA</span><span className="text-outline-variant">•</span><span className="">Secundaria Técnica Industrial y de Servicios 70 (C.C.T.
            14DST0070Z)</span>
        </div>
        <div className="flex items-center gap-space-md">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">Excelencia en la Ciencia y la Técnica</span><span className="text-outline-variant">•</span><span className="">© 2024–2025</span>
        </div>
      </div>
    </footer>
    </>
  );
}
