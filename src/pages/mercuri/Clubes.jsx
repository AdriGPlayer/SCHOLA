import { useState } from "react";

const CTAB_ACTIVE = "tab-btn px-space-md py-2 rounded font-label-md text-label-md transition-all font-bold bg-primary text-on-primary shadow-sm flex items-center gap-space-xs";
const CTAB_IDLE = "tab-btn px-space-md py-2 rounded font-label-md text-label-md transition-all font-semibold text-on-surface-variant hover:text-on-surface flex items-center gap-space-xs";

export default function Clubes() {
  const [tab, setTab] = useState("mis-grupos");
  return (
    <main className="relative pt-16 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <div className="px-margin py-space-xl flex flex-col gap-space-xl max-w-7xl mx-auto w-full">
            <header className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-xl shadow-sm">
              <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-gradient-to-br from-secondary/10 via-primary/5 to-transparent pointer-events-none"></div>
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
                <div className="flex flex-col gap-space-xs max-w-3xl">
                  <div className="flex items-center gap-space-sm flex-wrap">
                    <span className="bg-primary text-on-primary px-space-xs py-0.5 rounded font-label-sm text-label-sm uppercase tracking-wider font-bold">
                      ESTIS No. 70
                    </span>
                    <span className="text-secondary font-label-sm text-label-sm uppercase tracking-widest font-bold">
                      Deporte • Civismo • Ciencia &amp; Cultura
                    </span>
                    <span className="text-on-surface-variant font-label-sm text-label-sm">
                      • Ciclo Escolar 2024-2025
                    </span>
                  </div>
                  <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mt-1">
                    Actividades Extracurriculares y Grupos Representativos
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    Convocatorias, cronogramas de ensayos, partidos oficiales,
                    torneos intersecundarias y acreditación formativa
                    complementaria.
                  </p>
                </div>
                <div className="flex items-center gap-space-sm bg-surface-container px-space-md py-space-sm rounded-lg self-start lg:self-auto shadow-sm">
                  <div className="w-10 h-10 rounded bg-primary text-on-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">military_tech</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Horas Formativas Acumuladas</span>
                    <div className="flex items-baseline gap-space-xs">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">48 / 60</span>
                      <span className="font-label-sm text-label-sm text-secondary font-bold">80% Acreditado</span>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
              <div className="flex items-center gap-1 overflow-x-auto p-1 bg-surface-container rounded-lg" id="filter-tabs" role="tablist">
                <button onClick={() => setTab("mis-grupos")} className={tab === "mis-grupos" ? CTAB_ACTIVE : CTAB_IDLE} data-tab="mis-grupos" type="button">
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>
                  <span>Mis Grupos Inscritos (2)</span>
                </button>
                <button onClick={() => setTab("civicos")} className={tab === "civicos" ? CTAB_ACTIVE : CTAB_IDLE} data-tab="civicos" type="button">
                  <span className="material-symbols-outlined text-[18px]">flag</span>
                  <span>Cívicos y de Honor</span>
                </button>
                <button onClick={() => setTab("deportes")} className={tab === "deportes" ? CTAB_ACTIVE : CTAB_IDLE} data-tab="deportes" type="button">
                  <span className="material-symbols-outlined text-[18px]">sports_soccer</span>
                  <span>Deportes y Selecciones</span>
                </button>
                <button onClick={() => setTab("talleres")} className={tab === "talleres" ? CTAB_ACTIVE : CTAB_IDLE} data-tab="talleres" type="button">
                  <span className="material-symbols-outlined text-[18px]">psychology</span>
                  <span>Talleres y Clubes</span>
                </button>
              </div>
              <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px] text-secondary">info</span>
                <span>Acreditación válida para el Servicio Escolar
                  Comunitario</span>
              </div>
            </div>
            <section className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    Mis Próximos Ensayos y Partidos
                  </h2>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Esta semana escolar
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
                <article className={`bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5 ${tab === "mis-grupos" ? "" : "hidden"}`}>
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-start justify-between gap-space-sm">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-12 h-12 rounded bg-surface-container-high text-primary flex items-center justify-center">
                          <span className="material-symbols-outlined text-[28px]">notifications_active</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm uppercase text-secondary font-bold tracking-wider">
                            Banda de Guerra Águilas Técnicas
                          </span>
                          <h3 className="font-title-md text-title-md text-on-surface font-bold leading-tight">
                            Ensayo General para Desfile del 20 de Noviembre
                          </h3>
                        </div>
                      </div>
                      <span className="bg-surface-container px-space-xs py-1 rounded font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">
                        Prioridad Cívica
                      </span>
                    </div>
                    <div className="w-full h-44 rounded-lg overflow-hidden relative shadow-inner">
                      <div className="w-full h-full bg-cover bg-center" data-alt="Mexican secondary technical school marching band practicing snare drums and brass instruments in an open sunlit schoolyard with red brick walls, disciplined formation, wearing crisp warm terracotta and dark uniforms under clear daylight" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDeV43Oz9Cf2t-c3s6LLaJx4YSWnj1bHMvgN1Ziuu5Skf7ZEak2nYLR2hgGRbfQajyxVCSC-mAtVO7CDYHbSKP7gs-8hFv5fvnokGWmbzjfuoIYNPy1fdOfJHKPlmxVyFb2jBaz9SKKpJ4wwoC8kzyj5eg_iDZOmBAdEyQybcZ2xCK7pWTE8zlmgS__9AkpWgCvJ6257yj9NnSBzasYlWv6ac_B87rIbZ2NWSkgDDyh2IuUS2sd9_hdnw')" }}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex items-end p-space-md">
                        <span className="font-label-sm text-label-sm text-on-primary font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">location_on</span>
                          Patio Cívico Central &amp; Asta Monumental
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm bg-surface-container-lowest p-space-md rounded-lg">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-[20px] text-on-surface-variant">schedule</span>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Horario</span>
                          <span className="font-label-md text-label-md text-on-surface font-bold">Mié y Vie • 14:00 - 15:30 hrs</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-[20px] text-on-surface-variant">person</span>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Instructor</span>
                          <span className="font-label-md text-label-md text-on-surface font-bold">Cabo / Profr. Velázquez</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-space-sm bg-surface-container p-space-sm rounded">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-[18px] text-secondary">check_circle</span>
                        <span className="font-label-sm text-label-sm text-on-surface font-semibold">Pase a contra-turno:</span>
                      </div>
                      <span className="font-label-sm text-label-sm uppercase bg-surface text-secondary px-space-xs py-0.5 rounded font-bold">
                        Autorizado por Prefectura
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-md pt-space-md flex flex-wrap items-center justify-between gap-space-sm">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Instrumento asignado: Caja / Tambor Reglamentario #14
                    </span>
                    <button className="btn-confirm-attendance bg-primary hover:bg-primary-container text-on-primary px-space-md py-2 rounded font-label-md text-label-md font-bold transition-all shadow-sm flex items-center gap-space-xs" type="button">
                      <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
                      <span>Confirmar Asistencia</span>
                    </button>
                  </div>
                </article>
                <article className={`bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5 ${tab === "mis-grupos" ? "" : "hidden"}`}>
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-start justify-between gap-space-sm">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-12 h-12 rounded bg-surface-container-high text-secondary flex items-center justify-center">
                          <span className="material-symbols-outlined text-[28px]">sports_volleyball</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm uppercase text-secondary font-bold tracking-wider">
                            Torneo Intersecundarias Técnicas Zona 04
                          </span>
                          <h3 className="font-title-md text-title-md text-on-surface font-bold leading-tight">
                            Cuartos de Final: Técnica 70 vs. Técnica 14
                          </h3>
                        </div>
                      </div>
                      <span className="bg-secondary text-on-secondary px-space-xs py-1 rounded font-label-sm text-label-sm font-bold uppercase tracking-wider">
                        Oficial DGEST
                      </span>
                    </div>
                    <div className="w-full h-44 rounded-lg overflow-hidden relative shadow-inner">
                      <div className="w-full h-full bg-cover bg-center" data-alt="High school girls volleyball team in red and brown sports uniform gathered in huddle on indoor gymnasium wooden court, energetic team spirit, industrial ceiling rafters, warm natural stadium lighting" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDH2a391nh_Zcm_oFFN2Fn5qwRZqSKOKbnDyruwzypBJrbhq46AkgORed0UiCWWF_F9zVEp7Y4diRzwNx-ulT4cKax9tFH1S_enhhjdAzs8jnl1jg3sBUM5V0qJZyPrv2CMEsaksTslFW9EetpX67iV9COFr-vDtSTL6EmN-KeeVjHdpwjOhT1_47J8UUbzo_0boge6_n1z_S9TnEAI-eyJJCKjBMHnb2RzSxlPpIZ4yg2u3kBYopjn8w')" }}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex items-end p-space-md">
                        <span className="font-label-sm text-label-sm text-on-primary font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">stadium</span>
                          Cancha Techada No. 1 • Sede Central ESTIS 70
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm bg-surface-container-lowest p-space-md rounded-lg">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-[20px] text-on-surface-variant">event</span>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Fecha y Hora</span>
                          <span className="font-label-md text-label-md text-on-surface font-bold">Próximo Martes • 15:00 hrs</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-[20px] text-on-surface-variant">groups</span>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Convocatoria</span>
                          <span className="font-label-md text-label-md text-on-surface font-bold">12 Jugadoras Titulares</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-space-sm bg-surface-container p-space-sm rounded">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-[18px] text-primary">badge</span>
                        <span className="font-label-sm text-label-sm text-on-surface font-semibold">Tu posición: Rematadora #7</span>
                      </div>
                      <span className="font-label-sm text-label-sm uppercase bg-surface text-on-surface px-space-xs py-0.5 rounded font-bold">
                        Convocada Lista Titular
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-md pt-space-md flex flex-wrap items-center justify-between gap-space-sm">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Uniforme: Oficial Guinda y Franja Ocre
                    </span>
                    <div className="flex items-center gap-space-xs">
                      <button className="bg-surface-container hover:bg-surface-container-high text-on-surface px-space-md py-2 rounded font-label-md text-label-md font-semibold transition-colors" type="button">
                        Ver Cuadro de Convocadas
                      </button>
                      <button className="btn-confirm-attendance bg-primary hover:bg-primary-container text-on-primary px-space-md py-2 rounded font-label-md text-label-md font-bold transition-all shadow-sm flex items-center gap-space-xs" type="button">
                        <span className="material-symbols-outlined text-[18px]">sports</span>
                        <span>Confirmar Partido</span>
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            </section>
            <section className="flex flex-col gap-space-md">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-xs">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                    Ciclo Complementario
                  </span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    Convocatorias y Audiciones Abiertas 2024-2025
                  </h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Inscripciones sujetas a validación de historial académico y de
                  conducta
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
                <div className={`bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col justify-between ${tab === "civicos" ? "" : "hidden"}`}>
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <span className="bg-primary text-on-primary text-label-sm font-label-sm px-space-xs py-0.5 rounded font-bold uppercase">
                        Cívico de Honor
                      </span>
                      <span className="text-on-surface-variant text-label-sm font-label-sm">Cierre: 31 Oct</span>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <h3 className="font-title-md text-title-md text-on-surface font-bold">
                        Escolta Oficial de Bandera
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Selección de excelencia para representar a la Técnica 70
                        en ceremonias de izamiento municipal y eventos
                        protocolarios oficiales.
                      </p>
                    </div>
                    <div className="flex flex-col gap-space-xs bg-surface-container-lowest p-space-md rounded-lg">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Requisitos de Selección</span>
                      <ul className="flex flex-col gap-1 text-on-surface font-body-sm text-body-sm">
                        <li className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                          <span>Promedio general mínimo de
                            <strong>9.0</strong></span>
                        </li>
                        <li className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                          <span>Estatura mínima: 1.58 m (marcialidad
                            uniforme)</span>
                        </li>
                        <li className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                          <span>Historial de disciplina intachable en
                            prefectura</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-space-lg flex items-center justify-between gap-space-sm">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Vacantes</span>
                      <span className="font-label-md text-label-md text-on-surface font-bold">3 Lugares (Suplentes)</span>
                    </div>
                    <button className="bg-secondary hover:bg-secondary/90 text-on-secondary px-space-md py-2 rounded font-label-md text-label-md font-bold transition-all shadow-sm flex items-center gap-space-xs" type="button">
                      <span className="material-symbols-outlined text-[18px]">rate_review</span>
                      <span>Postularme a Audición</span>
                    </button>
                  </div>
                </div>
                <div className={`bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col justify-between ${tab === "deportes" ? "" : "hidden"}`}>
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <span className="bg-surface-container-high text-on-surface text-label-sm font-label-sm px-space-xs py-0.5 rounded font-bold uppercase">
                        Deporte Representativo
                      </span>
                      <span className="text-on-surface-variant text-label-sm font-label-sm">Cierre: 15 Nov</span>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <h3 className="font-title-md text-title-md text-on-surface font-bold">
                        Fútbol Soccer (Varonil y Femenil)
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Entrenamientos de pretemporada y filtros tácticos para
                        el Torneo Estatal Deportivo de Escuelas Secundarias
                        Técnicas.
                      </p>
                    </div>
                    <div className="flex flex-col gap-space-xs bg-surface-container-lowest p-space-md rounded-lg">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Detalles de Pretemporada</span>
                      <ul className="flex flex-col gap-1 text-on-surface font-body-sm text-body-sm">
                        <li className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                          <span>Martes y Jueves • 14:15 - 16:00 hrs</span>
                        </li>
                        <li className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                          <span>Campo de Pasto Natural Central</span>
                        </li>
                        <li className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                          <span>Presentar certificado médico vigente</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-space-lg flex items-center justify-between gap-space-sm">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Entrenador</span>
                      <span className="font-label-md text-label-md text-on-surface font-bold">Profr. Martínez (Ed. Física)</span>
                    </div>
                    <button className="bg-primary hover:bg-primary-container text-on-primary px-space-md py-2 rounded font-label-md text-label-md font-bold transition-all shadow-sm flex items-center gap-space-xs" type="button">
                      <span className="material-symbols-outlined text-[18px]">sports_soccer</span>
                      <span>Registrar Prueba</span>
                    </button>
                  </div>
                </div>
                <div className={`bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col justify-between ${tab === "talleres" ? "" : "hidden"}`}>
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <span className="bg-surface-container-high text-on-surface text-label-sm font-label-sm px-space-xs py-0.5 rounded font-bold uppercase">
                        Ciencia &amp; Tecnología
                      </span>
                      <span className="text-on-surface-variant text-label-sm font-label-sm">Permanente</span>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <h3 className="font-title-md text-title-md text-on-surface font-bold">
                        Robótica &amp; Mecatrónica ESTIS
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Taller avanzado de diseño de prototipos seguidores de
                        línea y retos de programación en microcontroladores
                        Arduino.
                      </p>
                    </div>
                    <div className="flex flex-col gap-space-xs bg-surface-container-lowest p-space-md rounded-lg">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Requisitos de Acceso</span>
                      <ul className="flex flex-col gap-1 text-on-surface font-body-sm text-body-sm">
                        <li className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                          <span>Pertenecer al Taller de Informática o
                            Electrónica</span>
                        </li>
                        <li className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                          <span>Sesiones: Sábados 08:30 - 11:30 hrs</span>
                        </li>
                        <li className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                          <span>Preparación para concurso INTERTÉCNICAS</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-space-lg flex items-center justify-between gap-space-sm">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Lugar</span>
                      <span className="font-label-md text-label-md text-on-surface font-bold">Laboratorio Tecnológico #2</span>
                    </div>
                    <button className="bg-primary hover:bg-primary-container text-on-primary px-space-md py-2 rounded font-label-md text-label-md font-bold transition-all shadow-sm flex items-center gap-space-xs" type="button">
                      <span className="material-symbols-outlined text-[18px]">smart_toy</span>
                      <span>Solicitar Ingreso</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
              <div className="lg:col-span-8 bg-surface-container-low rounded-xl p-space-xl shadow-sm flex flex-col justify-between">
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-secondary text-[24px]">workspace_premium</span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Acreditación de Puntos Cívicos y Deportivos
                      </h3>
                    </div>
                    <span className="bg-surface-container px-space-xs py-1 rounded font-label-sm text-label-sm text-primary font-bold">
                      Formación Integral DGEST
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Las actividades extracurriculares certifican horas de
                    formación técnica no escolarizada. Cumplir con un mínimo del
                    <strong>80% de asistencia</strong> y presentar conducta
                    impecable exime al alumno de faenas de guardia cívica y
                    libera el
                    <strong>Servicio Escolar de Convivencia Comunitaria</strong>
                    del segundo grado.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs">
                    <div className="bg-surface-container-lowest p-space-md rounded-lg flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Banda de Guerra</span>
                      <span className="font-title-md text-title-md text-on-surface font-bold">30 Horas</span>
                      <span className="font-body-sm text-body-sm text-secondary font-medium">100% Asistencia Registrada</span>
                      <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden mt-1">
                        <div className="bg-primary h-full w-full"></div>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest p-space-md rounded-lg flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Voleibol Femenil</span>
                      <span className="font-title-md text-title-md text-on-surface font-bold">18 Horas</span>
                      <span className="font-body-sm text-body-sm text-secondary font-medium">92% Asistencia Registrada</span>
                      <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden mt-1">
                        <div className="bg-secondary h-full w-[92%]"></div>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest p-space-md rounded-lg flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Meta Anual Requerida</span>
                      <span className="font-title-md text-title-md text-on-surface font-bold">60 Horas</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Faltan 12 horas para sello final</span>
                      <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden mt-1">
                        <div className="bg-primary h-full w-[80%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-space-lg flex flex-wrap items-center justify-between gap-space-sm pt-space-sm">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[20px] text-secondary">verified</span>
                    <span className="font-body-sm text-body-sm text-on-surface font-medium">Validación firmada por Subdirección Técnica y
                      Coordinación de Asistencia Educativa.</span>
                  </div>
                  <button className="bg-primary text-on-primary hover:bg-primary-container px-space-md py-2 rounded font-label-md text-label-md font-bold transition-all flex items-center gap-space-xs" type="button">
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    <span>Descargar Constancia Parcial en PDF</span>
                  </button>
                </div>
              </div>
              <div className="lg:col-span-4 bg-surface-container p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center gap-space-xs text-secondary font-bold font-label-sm text-label-sm uppercase">
                    <span className="material-symbols-outlined text-[18px]">campaign</span>
                    <span>Avisos de Prefectura y Entrenadores</span>
                  </div>
                  <h4 className="font-title-md text-title-md text-on-surface font-bold">
                    Protocolo de Salida a Contra-turno
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Los alumnos autorizados para entrenamientos vespertinos
                    deben portar su credencial con holograma
                    <strong>ESTIS DEPORTES/HONOR</strong> al ingresar por la
                    puerta número 2. Queda estrictamente prohibido permanecer en
                    pasillos de aulas fuera de las áreas designadas (canchas o
                    patio cívico).
                  </p>
                  <div className="bg-surface-container-lowest p-space-sm rounded mt-space-xs flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[20px] text-primary">security</span>
                    <span className="font-label-sm text-label-sm text-on-surface">Vigencia del Pase Matutino-Vespertino: Noviembre
                      2024</span>
                  </div>
                </div>
                <div className="mt-space-md flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                    <span>Prefecta encargada:</span>
                    <span className="font-bold text-on-surface">Lic. R. Mendoza</span>
                  </div>
                  <a className="inline-flex items-center gap-1 font-label-md text-label-md text-secondary hover:underline font-bold mt-1" href="#">
                    <span>Ver Reglamento General de Selecciones</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
        
      </main>
  );
}
