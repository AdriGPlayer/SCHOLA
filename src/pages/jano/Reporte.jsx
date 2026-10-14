export default function Reporte() {
  return (
    <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <div className="px-space-xl py-space-lg flex flex-col gap-space-lg">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md bg-surface-container-low p-space-lg rounded-xl shadow-sm">
              <div className="flex flex-col gap-space-xs max-w-3xl">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm tracking-wider uppercase">DGEST Veracruz • Supervisión Zona 04</span>
                  <span className="px-2 py-0.5 rounded bg-surface-variant text-on-surface-variant font-label-sm text-label-sm font-semibold">ESTIS No. 70</span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Reportes Estadísticos de Convivencia y Emisión de Citatorios
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Análisis comparativo de grupos con mayor índice de incidencias
                  escolares y gestión de actas oficiales ante padres de familia.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-space-sm">
                <div className="relative inline-block text-left">
                  <select className="bg-surface font-label-lg text-label-lg text-primary rounded px-space-md py-2.5 shadow-sm appearance-none pr-9 focus:outline-none focus:ring-0" id="periodoSelect">
                    <option value="semana">Esta semana</option>
                    <option value="mes">Mes actual</option>
                    <option selected="" value="trimestre1">
                      Trimestre I (Activo)
                    </option>
                    <option value="ciclo">Ciclo 2024-2025 completo</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-on-surface-variant pointer-events-none text-[20px]">expand_more</span>
                </div>
                <button className="flex items-center gap-2 bg-primary font-label-lg text-label-lg text-on-primary px-space-md py-2.5 rounded shadow-sm hover:bg-primary-container transition-colors" id="btnExportar">
                  <span className="material-symbols-outlined text-[18px]">download_for_offline</span>
                  <span>Exportar a Supervisión Zona 04</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg">
              <div className="xl:col-span-7 flex flex-col gap-space-md bg-surface-container p-space-lg rounded-xl shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Métrica de Vulnerabilidad Grupal</span>
                    <h2 className="font-headline-sm text-headline-sm text-primary">
                      Top Grupos con Mayor Número de Incidencias en el Trimestre
                    </h2>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">warning</span>
                    Corte Oficial
                  </span>
                </div>
                <div className="flex flex-col gap-space-md pt-space-xs">
                  <div className="flex flex-col gap-1 p-space-sm rounded-lg bg-surface hover:bg-surface-bright transition-colors shadow-sm">
                    <div className="flex items-center justify-between text-on-surface">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded bg-secondary text-on-secondary flex items-center justify-center font-label-md text-label-md font-bold">1</span>
                        <div>
                          <span className="font-title-sm text-title-sm text-primary">1° "D"</span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant ml-1">(Turno Vespertino)</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-headline-sm text-headline-sm text-secondary font-bold">48</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">incidencias</span>
                      </div>
                    </div>
                    <div className="w-full bg-surface-variant rounded-full h-3 overflow-hidden">
                      <div className="bg-secondary h-3 rounded-full transition-all duration-500" style={{ width: "100%" }}></div>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-secondary">info</span>
                      Frecuencia crítica: Retardo sistemático de torniquete y
                      uniforme incompleto.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 p-space-sm rounded-lg bg-surface hover:bg-surface-bright transition-colors shadow-sm">
                    <div className="flex items-center justify-between text-on-surface">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded bg-primary-container text-on-primary flex items-center justify-center font-label-md text-label-md font-bold">2</span>
                        <div>
                          <span className="font-title-sm text-title-sm text-primary">2° "B"</span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant ml-1">(Turno Matutino)</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-headline-sm text-headline-sm text-primary font-bold">34</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">incidencias</span>
                      </div>
                    </div>
                    <div className="w-full bg-surface-variant rounded-full h-3 overflow-hidden">
                      <div className="bg-primary-container h-3 rounded-full transition-all duration-500" style={{ width: "71%" }}></div>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-tertiary">priority_high</span>
                      Patrón: Evasiones reiteradas de módulo y uso indebido de
                      telefonía móvil.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 p-space-sm rounded-lg bg-surface hover:bg-surface-bright transition-colors shadow-sm">
                    <div className="flex items-center justify-between text-on-surface">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded bg-surface-container-highest text-on-surface flex items-center justify-center font-label-md text-label-md font-bold">3</span>
                        <div>
                          <span className="font-title-sm text-title-sm text-primary">3° "A"</span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant ml-1">(Turno Matutino)</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-headline-sm text-headline-sm text-primary font-bold">29</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">incidencias</span>
                      </div>
                    </div>
                    <div className="w-full bg-surface-variant rounded-full h-3 overflow-hidden">
                      <div className="bg-surface-tint h-3 rounded-full transition-all duration-500" style={{ width: "60%" }}></div>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-outline">schedule</span>
                      Reincidencia media: Retardos post-receso y ausentismo en
                      taller de Electrotecnia.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 p-space-sm rounded-lg bg-tertiary-fixed/30 hover:bg-tertiary-fixed/40 transition-colors shadow-sm">
                    <div className="flex items-center justify-between text-on-surface">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded bg-tertiary text-on-tertiary flex items-center justify-center font-label-md text-label-md font-bold">★</span>
                        <div>
                          <span className="font-title-sm text-title-sm text-tertiary font-bold">1° "A"</span>
                          <span className="font-label-sm text-label-sm text-on-tertiary-fixed-variant ml-1">(Turno Matutino)</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-headline-sm text-headline-sm text-on-tertiary-fixed-variant font-bold">12</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">incidencias</span>
                      </div>
                    </div>
                    <div className="w-full bg-surface-variant rounded-full h-3 overflow-hidden">
                      <div className="bg-on-tertiary-fixed-variant h-3 rounded-full transition-all duration-500" style={{ width: "25%" }}></div>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-tertiary-fixed-variant flex items-center gap-1 font-semibold">
                      <span className="material-symbols-outlined text-[16px]">verified</span>
                      Reconocimiento cívico: Grupo con mejor índice de
                      convivencia y puntualidad integral.
                    </p>
                  </div>
                </div>
              </div>
              <div className="xl:col-span-5 flex flex-col gap-space-md bg-surface-container p-space-lg rounded-xl shadow-sm justify-between">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider">Diagnóstico Categórico</span>
                  <h2 className="font-headline-sm text-headline-sm text-primary">
                    Desglose por Tipología de Incidencias
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Distribución porcentual acumulada sobre 123 reportes
                    activos.
                  </p>
                </div>
                <div className="flex items-center justify-center py-space-sm relative">
                  <svg className="w-56 h-56 transform -rotate-90" viewbox="0 0 160 160">
                    <circle className="text-surface-variant" cx="80" cy="80" fill="transparent" r="62" stroke="currentColor" strokeWidth="20"></circle>
                    <circle className="text-secondary" cx="80" cy="80" fill="transparent" r="62" stroke="currentColor" strokeDasharray="389.5" strokeDashoffset="0" strokeWidth="20"></circle>
                    <circle className="text-primary-container" cx="80" cy="80" fill="transparent" r="62" stroke="currentColor" strokeDasharray="389.5" strokeDashoffset="241.5" strokeWidth="20"></circle>
                    <circle className="text-surface-tint" cx="80" cy="80" fill="transparent" r="62" stroke="currentColor" strokeDasharray="389.5" strokeDashoffset="307.7" strokeWidth="20"></circle>
                    <circle className="text-tertiary" cx="80" cy="80" fill="transparent" r="62" stroke="currentColor" strokeDasharray="389.5" strokeDashoffset="335" strokeWidth="20"></circle>
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center text-center">
                    <span className="font-headline-xl text-headline-xl text-primary font-bold">123</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Reportes</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-space-sm">
                  <div className="p-space-sm rounded-lg bg-surface shadow-sm flex flex-col">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="w-3 h-3 rounded-full bg-secondary"></span>
                      <span className="font-label-sm text-label-sm text-primary font-bold">38%</span>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant leading-tight">Evasión de módulo / Salirse de clase</span>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface shadow-sm flex flex-col">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="w-3 h-3 rounded-full bg-primary-container"></span>
                      <span className="font-label-sm text-label-sm text-primary font-bold">27%</span>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant leading-tight">Retardo en acceso general (torniquetes)</span>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface shadow-sm flex flex-col">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="w-3 h-3 rounded-full bg-surface-tint"></span>
                      <span className="font-label-sm text-label-sm text-primary font-bold">21%</span>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant leading-tight">Falta de uniforme técnico o credencial</span>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface shadow-sm flex flex-col">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="w-3 h-3 rounded-full bg-tertiary"></span>
                      <span className="font-label-sm text-label-sm text-primary font-bold">14%</span>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant leading-tight">Indisciplina en aula o taller tecnológico</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
              <div className="lg:col-span-5 bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center gap-space-sm pb-space-xs">
                  <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">assignment_add</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      Generador de Citatorio Oficial
                    </h3>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Protocolo Normativo DGEST • ESTIS 70</span>
                  </div>
                </div>
                <form className="flex flex-col gap-space-sm" id="formCitatorio">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md text-primary font-semibold" htmlFor="inputAlumno">Alumno Convocado</label>
                    <input className="bg-surface text-primary font-body-md text-body-md px-3.5 py-2 rounded focus:outline-none focus:ring-0 shadow-sm" id="inputAlumno" placeholder="Ej. Gómez Castillo, Diego Armando (2° B)" required="" type="text" value="Gómez Castillo, Diego Armando" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md text-primary font-semibold" htmlFor="inputTutor">Padre o Tutor Registrado</label>
                    <input className="bg-surface text-primary font-body-md text-body-md px-3.5 py-2 rounded focus:outline-none focus:ring-0 shadow-sm" id="inputTutor" placeholder="Nombre completo del tutor legal" required="" type="text" value="Roberto Álvarez Morales" />
                  </div>
                  <div className="grid grid-cols-2 gap-space-sm">
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md text-primary font-semibold" htmlFor="inputFecha">Fecha de Audiencia</label>
                      <input className="bg-surface text-primary font-body-md text-body-md px-3.5 py-2 rounded focus:outline-none focus:ring-0 shadow-sm" id="inputFecha" required="" type="date" value="2024-11-28" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md text-primary font-semibold" htmlFor="inputHora">Hora Sugerida</label>
                      <input className="bg-surface text-primary font-body-md text-body-md px-3.5 py-2 rounded focus:outline-none focus:ring-0 shadow-sm" id="inputHora" required="" type="time" value="09:30" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md text-primary font-semibold" htmlFor="inputMotivo">Motivo Oficial</label>
                    <select className="bg-surface text-primary font-body-md text-body-md px-3.5 py-2 rounded focus:outline-none focus:ring-0 shadow-sm" id="inputMotivo">
                      <option value="Acumulación de retardos y evasión de módulo">
                        Acumulación de retardos y evasión de módulo
                      </option>
                      <option value="Conducta disruptiva en taller tecnológico">
                        Conducta disruptiva en taller tecnológico
                      </option>
                      <option value="Falta de uniforme reglamentario e identificación">
                        Falta de uniforme reglamentario e identificación
                      </option>
                      <option value="Firma de acta de compromiso académico y disciplinario">
                        Firma de acta de compromiso disciplinario
                      </option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md text-primary font-semibold" htmlFor="inputPrefecto">Prefecto Responsable</label>
                    <input className="bg-surface-variant/40 text-on-surface-variant font-body-md text-body-md px-3.5 py-2 rounded focus:outline-none shadow-sm cursor-not-allowed" id="inputPrefecto" readOnly="" type="text" value="Mtro. Efrén Galindo (Módulo Norte)" />
                  </div>
                  <button className="mt-space-xs flex items-center justify-center gap-2 bg-primary font-label-lg text-label-lg text-on-primary py-3 rounded shadow hover:bg-primary-container transition-colors" type="submit">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    <span>Generar y Registrar Citatorio</span>
                  </button>
                </form>
                <div className="p-space-sm bg-surface rounded-lg shadow-sm flex items-start gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">policy</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Conforme a la circular DGEST No. 14/2024, el citatorio
                    otorga acuse digital y citación física obligatoria para la
                    preservación del orden escolar.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-7 flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold tracking-wider">Bitácora de Seguimiento</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      Citatorios Emitidos y Actas de Audiencia
                    </h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">4 Actas en Proceso</span>
                </div>
                <div className="flex flex-col gap-space-sm" id="listaCitatorios">
                  <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-xs hover:bg-surface-container transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2 py-0.5 rounded bg-surface-variant text-on-surface-variant font-label-sm text-label-sm font-mono font-bold">CIT-PREF-2024-089</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">done_all</span>
                        Firmado en Juno por el padre
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-1">
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Alumno / Grupo:</span>
                        <span className="font-title-sm text-title-sm text-primary">Gómez Castillo, Diego Armando (2° B)</span>
                      </div>
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Padre o Tutor:</span>
                        <span className="font-body-md text-body-md text-on-surface">Roberto Álvarez Morales</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-on-surface-variant font-body-sm text-body-sm">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-primary">calendar_today</span>
                        <span>28 Nov 2024, 09:30 hrs • Módulo Norte</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button className="p-1.5 rounded bg-surface text-primary hover:bg-primary hover:text-on-primary transition-colors shadow-sm" title="Imprimir Acta Oficial">
                          <span className="material-symbols-outlined text-[18px]">print</span>
                        </button>
                        <button className="p-1.5 rounded bg-surface text-primary hover:bg-primary hover:text-on-primary transition-colors shadow-sm" title="Reagendar">
                          <span className="material-symbols-outlined text-[18px]">event_repeat</span>
                        </button>
                        <button className="p-1.5 rounded bg-surface text-secondary hover:bg-secondary hover:text-on-secondary transition-colors shadow-sm" title="Enviar recordatorio WhatsApp/SMS">
                          <span className="material-symbols-outlined text-[18px]">send_to_mobile</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-xs hover:bg-surface-container transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2 py-0.5 rounded bg-surface-variant text-on-surface-variant font-label-sm text-label-sm font-mono font-bold">CIT-PREF-2024-088</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">pending_actions</span>
                        Pendiente de confirmación
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-1">
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Alumno / Grupo:</span>
                        <span className="font-title-sm text-title-sm text-primary">Vázquez Peña, Mariana (1° D)</span>
                      </div>
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Padre o Tutor:</span>
                        <span className="font-body-md text-body-md text-on-surface">Martha Peña Rosado</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-on-surface-variant font-body-sm text-body-sm">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-primary">calendar_today</span>
                        <span>27 Nov 2024, 15:45 hrs • Prefectura T.V.</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button className="p-1.5 rounded bg-surface text-primary hover:bg-primary hover:text-on-primary transition-colors shadow-sm" title="Imprimir">
                          <span className="material-symbols-outlined text-[18px]">print</span>
                        </button>
                        <button className="p-1.5 rounded bg-surface text-primary hover:bg-primary hover:text-on-primary transition-colors shadow-sm" title="Reagendar">
                          <span className="material-symbols-outlined text-[18px]">event_repeat</span>
                        </button>
                        <button className="p-1.5 rounded bg-secondary text-on-secondary hover:bg-secondary-container transition-colors shadow-sm" title="Enviar Recordatorio">
                          <span className="material-symbols-outlined text-[18px]">send_to_mobile</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-xs hover:bg-surface-container transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2 py-0.5 rounded bg-surface-variant text-on-surface-variant font-label-sm text-label-sm font-mono font-bold">CIT-PREF-2024-085</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-surface-container-highest text-primary font-label-sm text-label-sm font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">check_circle</span>
                        Asistió y firmó acta física
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-1">
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Alumno / Grupo:</span>
                        <span className="font-title-sm text-title-sm text-primary">Hernández Solano, Javier (3° A)</span>
                      </div>
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Padre o Tutor:</span>
                        <span className="font-body-md text-body-md text-on-surface">Lic. Javier Hernández Cruz</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-on-surface-variant font-body-sm text-body-sm">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-primary">task_alt</span>
                        <span>Concluido • Compromiso de 15 días cumplido</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button className="px-2.5 py-1 rounded bg-surface text-primary font-label-sm text-label-sm font-semibold hover:bg-surface-container transition-colors shadow-sm flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">folder_shared</span>
                          Ver Expediente
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-space-md rounded-xl bg-error-container/40 shadow-sm flex flex-col gap-space-xs hover:bg-error-container/60 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2 py-0.5 rounded bg-surface text-on-surface font-label-sm text-label-sm font-mono font-bold">CIT-PREF-2024-081</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-error text-on-error font-label-sm text-label-sm font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">error</span>
                        Incomparecencia (2da Convocatoria)
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-1">
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Alumno / Grupo:</span>
                        <span className="font-title-sm text-title-sm text-primary">Rios Orozco, Brandon Raúl (1° D)</span>
                      </div>
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Padre o Tutor:</span>
                        <span className="font-body-md text-body-md text-on-surface">Silvia Orozco Nava</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-on-error-container font-body-sm text-body-sm">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">warning</span>
                        <span>Turnado a Trabajo Social y Dirección del
                          Plantel</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button className="px-2.5 py-1 rounded bg-error text-on-error font-label-sm text-label-sm font-semibold hover:bg-error/90 transition-colors shadow-sm flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">home_pin</span>
                          Notificación Domiciliar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
              <div className="relative overflow-hidden rounded-xl bg-surface-container shadow-sm h-48">
                <div className="bg-cover bg-center w-full h-full" data-alt="Technical high school students collaborating quietly inside a warm wood and brick classroom workshop at Escuela Secundaria Tecnica, natural morning window light, high contrast, warm terracotta and dark coffee tones." style={{ backgroundImage: "url(&quot", https: "//lh3.googleusercontent.com/aida-public/AB6AXuBe9XYCo7xlZMWPXTO56DOh2TgSSPEIHA8nJxBpyx-vr05oxXlp7qbIcY6tpFOb9_78RX53lvc3IUSXrTCBGSwIDUx1hxnW63LEGvfwdnT0tmWi2aMRTP5GDygpd89zGNCc3Hc2JyfbWh1uI02r2F-THrLoazVuyOoXy3qakV6NNRyocfj4aqNTnuyibKI5u_vEpKcV4ydqBBKHAEITnsP399DUvnnwXelyC6JxCNaj0s5KOiBKzXLKYQ&quot" }}></div>
                <div className="absolute inset-0 bg-primary/60 flex flex-col justify-end p-space-md text-on-primary">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold text-secondary-fixed">Talleres Tecnológicos</span>
                  <span className="font-title-sm text-title-sm font-bold">Monitoreo de Permanencia en Aulas Prácticas</span>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl bg-surface-container shadow-sm h-48">
                <div className="bg-cover bg-center w-full h-full" data-alt="Mexican secondary school courtyard with clean architectural brick walkways, students wearing neat beige and maroon technical uniforms in the distance, sunny Veracruz atmosphere, documentary editorial style." style={{ backgroundImage: "url(&quot", https: "//lh3.googleusercontent.com/aida-public/AB6AXuBK1T6WuobB_0KySdpUnWymVZpi421UBF1UOI9tZs9YMbcVb6RllkrrBTz3SOzrw8kDKj48vJRHtKmG07Q3a2hLTg_gMHRLULC9eptPJMw_xd7D9ipK8a29XrnCYMT_VofMLLwHlvL9kyet-Q8bQ0DXcKbBqR36M2_O3IXNdKFG3ViU3xxC7CVnufcAPTJZ8gSIkhhQ02t1tuToSxlo_7jbZx-MToDSulYeUEl_6cvJCr5OpiZls9UBrw&quot" }}></div>
                <div className="absolute inset-0 bg-primary/60 flex flex-col justify-end p-space-md text-on-primary">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold text-secondary-fixed">Plaza Cívica ESTIS 70</span>
                  <span className="font-title-sm text-title-sm font-bold">Rondines Perimetrales y Control de Módulos</span>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl bg-surface-container shadow-sm h-48">
                <div className="bg-cover bg-center w-full h-full" data-alt="School disciplinary prefect office with administrative dossiers, institutional seal on parchment stationery, warm amber desk lamp light, precise documentation atmosphere." style={{ backgroundImage: "url(&quot", https: "//lh3.googleusercontent.com/aida-public/AB6AXuAI7iW10VwFu4lzPkHKLnONN4GuxAiJImyqEkztqXVs5YkQyy0eyrOmpjdQsYuTTWPPCiiOOckV_xHRjcD9tOMOnTuCEVr138_Eml36SFQfS3jHAPNV2K-vFrT-kA4tBjmryMhamrHIyRD4HLM-2wIsRKtH3ZCb-XbBOKF0bSvXoUvz4PETnd5zWyPO4zw14gexwS3sx6g9YupE55RS4yRh2DEwUSEJ42qHaFyRHZW1UGcLtf_E8tVOag&quot" }}></div>
                <div className="absolute inset-0 bg-primary/60 flex flex-col justify-end p-space-md text-on-primary">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold text-secondary-fixed">Mesa de Audiencias</span>
                  <span className="font-title-sm text-title-sm font-bold">Atención Personalizada a Padres de Familia</span>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed bottom-6 right-6 bg-primary text-on-primary px-space-md py-3 rounded-lg shadow-xl flex items-center gap-2 transform translate-y-24 opacity-0 transition-all duration-300 pointer-events-none z-50" id="toastNotif">
            <span className="material-symbols-outlined text-[20px] text-secondary-fixed">check_circle</span>
            <span className="font-body-sm text-body-sm" id="toastMsg">Notificación institucional procesada.</span>
          </div>
          
        </div>
      </main>
  );
}
