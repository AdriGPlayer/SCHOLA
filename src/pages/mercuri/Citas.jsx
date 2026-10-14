export default function Citas() {
  return (
    <main className="relative pt-16 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          
          <div className="px-margin pt-space-lg pb-space-md">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-md">
              <div>
                <div className="flex items-center gap-space-xs mb-1">
                  <span className="inline-flex items-center gap-1 bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[14px] text-secondary">gavel</span>
                    Prefectura • Dpto. Trabajo Social
                  </span>
                  <span className="text-on-surface-variant font-label-sm text-label-sm">• Oficio Normativo DGEST/2024</span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Área de Convivencia Escolar, Prefectura e Incidencias
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mt-1">
                  Seguimiento formativo, justificación de inasistencias y
                  citatorios oficiales con firma de tutor legal.
                </p>
              </div>
              
              <div className="flex items-center gap-space-sm flex-shrink-0">
                <a className="inline-flex items-center gap-space-xs bg-surface-container-high hover:bg-surface-container text-primary px-space-md py-2 rounded font-label-md text-label-md transition-colors shadow-sm" href="#solicitar-justificante">
                  <span className="material-symbols-outlined text-[18px] text-secondary">assignment_add</span>
                  Nuevo Justificante
                </a>
                <button className="inline-flex items-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary px-space-md py-2 rounded font-label-md text-label-md transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">print</span>
                  Kárdex Disciplinario
                </button>
              </div>
            </div>
          </div>
          
          <div className="px-margin pb-space-xl flex flex-col gap-space-lg">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
              
              <div className="lg:col-span-8 bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col justify-between relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-48 h-48 bg-surface-container-high rounded-full blur-2xl opacity-50 pointer-events-none"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md mb-space-md relative z-10">
                  <div className="flex items-center gap-space-md">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary shadow-sm">
                      <span className="material-symbols-outlined text-[28px] text-tertiary-container" style={{ fontVariationSettings: "&quot" }}>verified_user</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-space-xs">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Semáforo de Conducta Oficial</span>
                      </div>
                      <h2 className="font-headline-sm text-headline-sm text-primary">
                        Expediente Favorable • Estatus Regular
                      </h2>
                    </div>
                  </div>
                  <span className="self-start sm:self-auto bg-surface-container-highest text-primary font-label-md text-label-md px-space-sm py-1 rounded shadow-sm">
                    Bimestre II • Ciclo 2024-2025
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-space-sm relative z-10">
                  <div className="bg-surface p-space-sm rounded shadow-sm flex items-center justify-between">
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Puntualidad</span>
                      <div className="font-headline-sm text-headline-sm text-primary font-bold">
                        96.4%
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">1 retardo justificado</span>
                    </div>
                    
                    <div className="w-11 h-11 relative flex items-center justify-center">
                      <svg className="w-11 h-11 transform -rotate-90" viewbox="0 0 36 36">
                        <path className="text-surface-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
                        <path className="text-primary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="96, 100" strokeLinecap="round" strokeWidth="3.5"></path>
                      </svg>
                      <span className="absolute font-label-sm text-label-sm text-primary font-bold">96</span>
                    </div>
                  </div>
                  <div className="bg-surface p-space-sm rounded shadow-sm flex items-center justify-between">
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Asistencia General</span>
                      <div className="font-headline-sm text-headline-sm text-primary font-bold">
                        98.1%
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">42 / 43 jornadas</span>
                    </div>
                    <div className="w-11 h-11 relative flex items-center justify-center">
                      <svg className="w-11 h-11 transform -rotate-90" viewbox="0 0 36 36">
                        <path className="text-surface-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
                        <path className="text-secondary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="98, 100" strokeLinecap="round" strokeWidth="3.5"></path>
                      </svg>
                      <span className="absolute font-label-sm text-label-sm text-secondary font-bold">98</span>
                    </div>
                  </div>
                  <div className="bg-surface p-space-sm rounded shadow-sm flex items-center justify-between">
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Reportes Graves</span>
                      <div className="font-headline-sm text-headline-sm text-primary font-bold">
                        0
                      </div>
                      <span className="font-body-sm text-body-sm text-emerald-700 font-medium">Libre de actas</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-[20px]">check_circle</span>
                    </div>
                  </div>
                </div>
                <div className="mt-space-md pt-space-xs flex items-start gap-space-xs text-on-surface-variant bg-surface-container/60 p-2.5 rounded">
                  <span className="material-symbols-outlined text-[18px] text-secondary flex-shrink-0 mt-0.5">info</span>
                  <p className="font-body-sm text-body-sm leading-tight">
                    <strong>Disposición de Convivencia Escolar:</strong> Los
                    citatorios emitidos por Prefectura deben ser presentados y
                    firmados obligatoriamente por el padre, madre o tutor legal
                    registrado en la cédula institucional al ingresar al
                    plantel.
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-4 bg-primary text-on-primary rounded-xl p-space-lg shadow-sm flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-overlay" data-alt="Architectural Mexican secondary school corridor with students in uniforms walking beside brick columns, bathed in warm Veracruz morning light." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBfkbME1wduSZK0uADJKHu3eShGgua52S6ZRyW_Cs2RR4ucLeYQMCFC0PADoMkkaaNEFBzsfphadnK_3yFf_7ZexCFG_d2xFCqoJu-xbVuq5ttETgEGUbSBzcBDXmP-jbkkC0VxrLEXIV8_ZOn6XZfeB9gw3hamMzl4B3rc6J3sbfJ-h-7NK-k_0fJE2JYjOlywcvsp3o6asKL3S1TcyGfA-yYjVh3CAC6F-A8WlLyxEmHq1tJQbERPg')" }}></div>
                <div className="relative z-10 flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-wider">Prefectura Módulo Norte</span>
                    <span className="bg-primary-container text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded">Turno Matutino</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-primary">
                    Mtro. Efrén Galindo
                  </h3>
                  <p className="font-body-sm text-body-sm text-primary-fixed-dim">
                    Prefecto titular a cargo del bloque de 2° Grado (Grupos A,
                    B, C y D). Atención a padres: 07:45 - 09:30 hrs con cita
                    previa.
                  </p>
                </div>
                <div className="relative z-10 pt-space-md flex items-center justify-between bg-primary-container/80 p-space-sm rounded backdrop-blur-sm">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-secondary-fixed text-[20px]">call</span>
                    <span className="font-label-sm text-label-sm text-on-primary">Ext. Prefectura: #108</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-primary-fixed-variant bg-primary-fixed px-2 py-0.5 rounded font-bold">Oficina B-04</span>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-container rounded-xl p-space-lg shadow-md relative">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pb-space-sm">
                <div className="flex items-center gap-space-sm">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-secondary text-on-secondary">
                    <span className="material-symbols-outlined text-[20px]">notification_important</span>
                  </span>
                  <div>
                    <div className="flex items-center gap-space-xs">
                      <span className="font-label-sm text-label-sm uppercase font-bold text-secondary">Citatorio Oficial Activo</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">• Folio PREF-70-24/089</span>
                    </div>
                    <h2 className="font-headline-md text-headline-md text-primary">
                      Citatorio Preventivo / Reunión de Orientación Educativa
                    </h2>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-secondary-container text-on-secondary-container px-space-md py-1 rounded font-label-md text-label-md font-bold self-start md:self-auto shadow-sm">
                  <span className="material-symbols-outlined text-[16px]">hourglass_top</span>
                  Pendiente de Presentación
                </div>
              </div>
              
              <div className="mt-space-md bg-surface p-space-lg rounded shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md pb-space-md">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Fecha de Audiencia</span>
                    <span className="font-title-sm text-title-sm text-primary font-bold">Jueves 17 de Octubre, 2024</span>
                    <span className="font-body-sm text-body-sm text-secondary font-semibold">08:30 AM (Tolerancia 10 min)</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Lugar Asignado</span>
                    <span className="font-title-sm text-title-sm text-primary font-bold">Módulo de Orientación Vocacional</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Edificio Central, Planta Alta</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Autoridad Convocante</span>
                    <span className="font-title-sm text-title-sm text-primary font-bold">Profr. Efrén Galindo Ruiz</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Prefecto Turno Matutino</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Tutor Requerido</span>
                    <span className="font-title-sm text-title-sm text-primary font-bold">Álvarez M. Roberto (Padre)</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Identificación INE obligatoria</span>
                  </div>
                </div>
                
                <div className="pt-space-md flex flex-col gap-space-xs bg-surface-container-low p-space-md rounded">
                  <span className="font-label-sm text-label-sm uppercase font-bold text-primary">Motivo de la Convocatoria Institucional:</span>
                  <p className="font-body-md text-body-md text-on-surface">
                    Revisión y firma de acuerdo formativo para la incorporación
                    de la alumna al proyecto extracurricular y certamen
                    interescolar de
                    <strong>Informática y Banda de Guerra 2024</strong>. Se
                    requiere formalizar el cronograma de ensayos a contra-turno
                    y entrega de responsiva de traslado por parte del tutor
                    registrado.
                  </p>
                </div>
                
                <div className="mt-space-md pt-space-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-md">
                  <div className="flex items-center gap-space-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px] text-secondary">verified</span>
                    <span className="font-body-sm text-body-sm">Sello Digital:
                      <strong>DGEST-ESTIS70-PREF-0192A</strong></span>
                  </div>
                  <div className="flex flex-wrap items-center gap-space-sm">
                    <button className="inline-flex items-center justify-center gap-space-xs bg-surface-container hover:bg-surface-container-high text-on-surface px-space-md py-2 rounded font-label-md text-label-md transition-colors shadow-sm" type="button">
                      <span className="material-symbols-outlined text-[18px] text-secondary">picture_as_pdf</span>
                      Descargar Formato Oficial PDF
                    </button>
                    <button className="inline-flex items-center justify-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary px-space-md py-2 rounded font-label-md text-label-md transition-colors shadow-sm" id="btnConfirmNotif" type="button">
                      <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
                      Confirmar Notificación del Padre
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-gutter items-start">
              
              <div className="xl:col-span-7 bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[22px]">history_edu</span>
                    <h2 className="font-headline-sm text-headline-sm text-primary">
                      Bitácora de Incidencias y Justificantes
                    </h2>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Ciclo 2024-2025</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant -mt-2">
                  Historial oficial archivado por la oficina de Asistencia y
                  Disciplina Escolar de la Secundaria Técnica 70.
                </p>
                
                <div className="flex flex-col gap-space-sm mt-1">
                  
                  <div className="bg-surface p-space-md rounded shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                    <div className="flex items-start gap-space-sm">
                      <div className="w-9 h-9 rounded bg-surface-container-high text-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[20px]">medication</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-space-xs">
                          <span className="font-label-md text-label-md text-primary font-bold">Justificante Médico por Inasistencia</span>
                          <span className="bg-surface-container text-on-surface font-label-sm text-label-sm px-1.5 py-0.2 rounded font-semibold">Folio J-104</span>
                        </div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                          Ausencia médica de 24 horas por cuadro respiratorio
                          agudo. Respaldo ISSSTE Clínica Xalapa.
                        </div>
                        <div className="flex items-center gap-space-md mt-1 text-on-surface-variant font-label-sm text-label-sm">
                          <span>Fecha: <strong>03 Oct 2024</strong></span>
                          <span>Autorizó:
                            <strong>Trabajo Social (Lic. Morales)</strong></span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 self-start sm:self-center">
                      <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-900 font-label-sm text-label-sm px-2.5 py-1 rounded font-bold uppercase tracking-wide">
                        <span className="material-symbols-outlined text-[14px]">check</span>
                        Aprobado
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-surface p-space-md rounded shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                    <div className="flex items-start gap-space-sm">
                      <div className="w-9 h-9 rounded bg-surface-container-high text-on-surface-variant flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[20px]">badge</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-space-xs">
                          <span className="font-label-md text-label-md text-primary font-bold">Incidencia Leve • Falta de Credencial Física</span>
                          <span className="bg-surface-container text-on-surface font-label-sm text-label-sm px-1.5 py-0.2 rounded font-semibold">Torniquete #02</span>
                        </div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                          Olvido de credencial PVC en acceso matutino (06:55
                          AM). Alumna validó ingreso con QR en MERCURIO móvil.
                        </div>
                        <div className="flex items-center gap-space-md mt-1 text-on-surface-variant font-label-sm text-label-sm">
                          <span>Fecha: <strong>18 Sep 2024</strong></span>
                          <span>Registró:
                            <strong>Prefectura Matutina</strong></span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 self-start sm:self-center">
                      <span className="inline-flex items-center gap-1 bg-surface-container-highest text-primary font-label-sm text-label-sm px-2.5 py-1 rounded font-bold uppercase tracking-wide">
                        <span className="material-symbols-outlined text-[14px]">task_alt</span>
                        Solventado
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-surface p-space-md rounded shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                    <div className="flex items-start gap-space-sm">
                      <div className="w-9 h-9 rounded bg-surface-container-high text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[20px]">fact_check</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-space-xs">
                          <span className="font-label-md text-label-md text-primary font-bold">Acta Informativa de Inicio de Ciclo</span>
                          <span className="bg-surface-container text-on-surface font-label-sm text-label-sm px-1.5 py-0.2 rounded font-semibold">Folio REG-008</span>
                        </div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                          Recepción de reglamento escolar firmado por tutor y
                          entrega de responsiva de taller técnico.
                        </div>
                        <div className="flex items-center gap-space-md mt-1 text-on-surface-variant font-label-sm text-label-sm">
                          <span>Fecha: <strong>28 Ago 2024</strong></span>
                          <span>Control: <strong>Dirección Escolar</strong></span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 self-start sm:self-center">
                      <span className="inline-flex items-center gap-1 bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-2.5 py-1 rounded font-bold uppercase tracking-wide">
                        <span className="material-symbols-outlined text-[14px]">inventory</span>
                        Archivado
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-space-sm bg-surface rounded flex items-center justify-between text-on-surface-variant">
                  <span className="font-body-sm text-body-sm">Mostrando los últimos 3 registros del ciclo activo.</span>
                  <button className="font-label-sm text-label-sm text-secondary font-bold hover:underline flex items-center gap-0.5">
                    Ver expediente histórico completo
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
              </div>
              
              <div className="xl:col-span-5 bg-surface-container-high rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md" id="solicitar-justificante">
                <div className="flex items-center gap-space-xs">
                  <div className="w-8 h-8 rounded bg-primary text-on-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">edit_calendar</span>
                  </div>
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-primary">
                      Solicitar Justificante Escolar
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
                      Trabajo Social y Prefectura de la ESTIS 70
                    </p>
                  </div>
                </div>
                <p className="font-body-md text-body-md text-on-surface">
                  El plazo máximo para tramitar un justificante es de
                  <strong>72 horas hábiles</strong> posteriores al día de
                  inasistencia del alumno.
                </p>
                
                <form className="flex flex-col gap-space-md bg-surface p-space-md rounded shadow-sm" id="justificanteForm">
                  
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md text-primary font-bold" htmlFor="tipoMotivo">
                      Tipo de Causa o Incidencia *
                    </label>
                    <select className="bg-surface-container-low px-3 py-2 rounded text-body-md font-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" id="tipoMotivo" required="">
                      <option disabled="" selected="" value="">
                        Seleccione la causal oficial...
                      </option>
                      <option value="medica">
                        Motivo de Salud / Consulta Médica Oficial
                      </option>
                      <option value="duelo">
                        Causa Familiar de Fuerza Mayor o Duelo
                      </option>
                      <option value="tramite">
                        Trámite Oficial de Identidad (INE, Pasaporte, CURP)
                      </option>
                      <option value="representativo">
                        Comisión Cívica, Deportiva o Tecnológica
                      </option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-space-sm">
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase" htmlFor="fechaInicio">
                        Desde (Día) *
                      </label>
                      <input className="bg-surface-container-low px-2 py-1.5 rounded text-body-md font-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" id="fechaInicio" required="" type="date" value="2024-10-14" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase" htmlFor="fechaFin">
                        Hasta (Día) *
                      </label>
                      <input className="bg-surface-container-low px-2 py-1.5 rounded text-body-md font-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" id="fechaFin" required="" type="date" value="2024-10-15" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md text-primary font-bold" htmlFor="explicacion">
                      Descripción Breve de los Hechos *
                    </label>
                    <textarea className="bg-surface-container-low p-2.5 rounded text-body-md font-body-md text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary shadow-sm resize-none" id="explicacion" placeholder="Especifique la clínica, diagnóstico o situación que motivó la falta..." required="" rows="3"></textarea>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md text-primary font-bold">
                      Evidencia Adjunta (Receta, Certificado o Carta) *
                    </label>
                    <div className="bg-surface-container-low hover:bg-surface-container rounded p-space-md text-center cursor-pointer transition-colors flex flex-col items-center justify-center gap-1 shadow-sm" id="dropzone">
                      <span className="material-symbols-outlined text-[32px] text-secondary">cloud_upload</span>
                      <span className="font-label-md text-label-md text-primary font-semibold" id="fileNameDisplay">Subir archivo PDF, JPG o PNG</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Máximo 5MB • Con sello o cédula visible</span>
                      <input accept=".pdf,.jpg,.jpeg,.png" className="hidden" id="fileInput" type="file" />
                    </div>
                  </div>
                  
                  <label className="flex items-start gap-space-xs cursor-pointer select-none pt-1">
                    <input className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary" required="" type="checkbox" />
                    <span className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
                      Bajo protesta de decir verdad, ratifico que la información
                      médica o documental adjunta es fidedigna y autorizo la
                      verificación con la institución emisora.
                    </span>
                  </label>
                  
                  <button className="w-full bg-secondary hover:bg-on-secondary-container text-on-secondary py-2.5 rounded font-label-lg text-label-lg transition-colors flex items-center justify-center gap-space-xs shadow-md" type="submit">
                    <span className="material-symbols-outlined text-[20px]">send_time_extension</span>
                    Enviar Solicitud a Trabajo Social
                  </button>
                </form>
                
                <div className="hidden bg-emerald-50 text-emerald-950 p-space-md rounded shadow-sm flex items-start gap-space-sm" id="confirmSuccessBox">
                  <span className="material-symbols-outlined text-emerald-700 text-[24px]">task_alt</span>
                  <div>
                    <h4 className="font-label-lg text-label-lg font-bold">
                      Solicitud Registrada con Éxito
                    </h4>
                    <p className="font-body-sm text-body-sm mt-0.5">
                      Se ha turnado a la
                      <strong>Lic. Morales (Trabajo Social)</strong> con folio
                      de seguimiento temporal <strong>#TS-70-2024-411</strong>.
                      Recibirá notificación en menos de 24 horas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-container-high rounded-xl p-space-md shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md text-on-surface-variant">
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded bg-primary text-on-primary flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-[22px]">balance</span>
                </div>
                <div>
                  <div className="font-label-md text-label-md text-primary font-bold">
                    Marco Normativo para la Convivencia Escolar DGEST Veracruz
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    Acuerdo 09/08/23 relativo a los derechos y obligaciones de
                    alumnos en Escuelas Secundarias Técnicas.
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-space-md flex-shrink-0">
                <button className="font-label-sm text-label-sm text-primary hover:text-secondary font-bold underline">
                  Descargar Reglamento Interior 2024 (PDF)
                </button>
                <span className="text-outline">•</span>
                <button className="font-label-sm text-label-sm text-primary hover:text-secondary font-bold underline">
                  Línea de Mediación Escolar
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </main>
  );
}
