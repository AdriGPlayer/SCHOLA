import { useState } from "react";

const SUBJECT_KEY = {
  all: "",
  taller: "Informática",
  fisica: "Física",
  mate: "Matemáticas",
  espanol: "Español",
};

export default function Tareas() {
  const [tab, setTab] = useState("pending");
  const [subject, setSubject] = useState("all");
  const [fileName, setFileName] = useState("");
  const [syncing, setSyncing] = useState(false);
  const [toast, setToast] = useState("");

  const tabBase =
    "tab-btn px-space-md py-2 rounded font-label-lg text-label-lg transition-all flex items-center gap-space-xs whitespace-nowrap";
  const tabActive = `${tabBase} bg-primary-container text-on-primary font-bold shadow-sm`;
  const tabIdle = `${tabBase} text-on-surface-variant hover:bg-surface-container hover:text-on-surface`;
  const tabBadgeActive = "bg-secondary text-on-secondary px-1.5 py-0.2 rounded-full text-label-sm";
  const tabBadgeIdle = "bg-surface-container-highest text-primary px-1.5 py-0.2 rounded-full text-label-sm";

  const cardVisible = (kw) => tab === "pending" && (subject === "all" || kw === SUBJECT_KEY[subject]);

  return (
    <main className="relative pt-16 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
        {toast && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-inverse-surface text-inverse-on-surface font-label-md text-label-md px-space-md py-space-sm rounded-lg shadow-xl toast-in w-[360px] text-center">
            {toast}
          </div>
        )}
          <div className="px-margin py-space-xl flex flex-col gap-space-xl">
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
              <div className="flex flex-col gap-space-xs max-w-2xl">
                <div className="flex items-center gap-space-xs text-secondary font-label-sm uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[16px]">sync_alt</span>
                  <span>Retícula Oficial SEP • Sincronización Google Classroom
                    activa</span>
                </div>
                <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight">
                  Gestor de Tareas y Entregas Académicas
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Seguimiento técnico-pedagógico, recepción de evidencias
                  digitales y retroalimentación formativa para el 2° Grado Grupo
                  B.
                </p>
              </div>
              
              <div className="flex items-center gap-space-sm bg-surface-container px-space-md py-space-sm rounded-lg shadow-sm">
                <div className="w-3 h-3 rounded-full bg-secondary animate-pulse"></div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Corte Oficial</span>
                  <span className="font-label-md text-label-md text-primary font-bold">2° Trimestre • 2024-2025</span>
                </div>
                <div className="w-px h-6 bg-surface-container-highest mx-1"></div>
                <button onClick={() => {
                    setSyncing(true);
                    setToast("Sincronizando nuevas tareas y entregas desde Google Classroom...");
                    window.setTimeout(() => {
                      setSyncing(false);
                      setToast("Sincronización completada: 2 tareas nuevas y 3 retroalimentaciones.");
                    }, 1600);
                    window.setTimeout(() => setToast(""), 5200);
                  }} className="p-1.5 rounded hover:bg-surface-container-high text-on-surface-variant transition-colors" id="btnSync" title="Sincronizar ahora con Classroom">
                  <span className={`material-symbols-outlined text-[20px] ${syncing ? "animate-spin" : ""}`}>refresh</span>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
              
              <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex items-center justify-between relative overflow-hidden">
                <div className="flex flex-col gap-1 z-10">
                  <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Índice de Entrega Oportuna</span>
                  <div className="flex items-baseline gap-space-xs">
                    <span className="font-headline-xl text-headline-xl text-primary font-bold">98%</span>
                    <span className="font-label-md text-label-md text-secondary font-semibold">+2.4% vs T1</span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Rendimiento sobresaliente en taller</span>
                </div>
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-20 h-20 transform -rotate-90" viewbox="0 0 36 36">
                    <path className="text-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
                    <path className="text-secondary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="98, 100" strokeLinecap="round" strokeWidth="3.5"></path>
                  </svg>
                  <span className="absolute font-label-sm text-label-sm font-bold text-primary">28/29</span>
                </div>
              </div>
              
              <div className="bg-surface-container p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase text-secondary font-bold">Próxima Entrega Inmediata</span>
                  <span className="material-symbols-outlined text-secondary text-[20px]">alarm</span>
                </div>
                <div className="flex flex-col my-space-xs">
                  <span className="font-title-md text-title-md text-primary font-bold line-clamp-1">Práctica 4: Diagrama Raptor</span>
                  <span className="font-label-lg text-label-lg text-secondary font-bold">Mañana a las 23:59 hrs</span>
                </div>
                <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-[16px]">terminal</span>
                  <span>Taller de Informática • Prof. M. H. Delgado</span>
                </div>
              </div>
              
              <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Calificadas en Trimestre</span>
                  <span className="bg-surface-container-highest px-space-xs py-0.5 rounded font-label-sm text-label-sm text-primary font-bold">Trimestre 2</span>
                </div>
                <div className="flex items-baseline gap-space-xs my-space-xs">
                  <span className="font-headline-xl text-headline-xl text-primary font-bold">14</span>
                  <span className="font-title-md text-title-md text-on-surface-variant">/ 15 evaluadas</span>
                </div>
                <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: "93.3%" }}></div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-md pb-space-xs">
              
              <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0">
                <button onClick={() => setTab("pending")} className={tab === "pending" ? tabActive : tabIdle} data-state="pending">
                  <span>Pendientes por Entregar</span>
                  <span className={tab === "pending" ? tabBadgeActive : tabBadgeIdle}>3</span>
                </button>
                <button onClick={() => setTab("review")} className={tab === "review" ? tabActive : tabIdle} data-state="review">
                  <span>En Revisión</span>
                  <span className={tab === "review" ? tabBadgeActive : tabBadgeIdle}>1</span>
                </button>
                <button onClick={() => setTab("graded")} className={tab === "graded" ? tabActive : tabIdle} data-state="graded">
                  <span>Calificadas</span>
                  <span className={tab === "graded" ? tabBadgeActive : tabBadgeIdle}>14</span>
                </button>
                <button onClick={() => setTab("late")} className={tab === "late" ? tabActive : tabIdle} data-state="late">
                  <span>Atrasadas</span>
                  <span className={tab === "late" ? tabBadgeActive : tabBadgeIdle}>0</span>
                </button>
              </div>
              
              <div className="flex items-center gap-space-xs self-end md:self-auto bg-surface-container px-space-sm py-1.5 rounded">
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">filter_list</span>
                <label className="sr-only" htmlFor="subjectSelect">Filtrar por Asignatura</label>
                <select value={subject} onChange={(e) => setSubject(e.target.value)} className="bg-transparent font-label-md text-label-md text-on-surface font-semibold focus:outline-none cursor-pointer" id="subjectSelect">
                  <option value="all">Todas las Asignaturas</option>
                  <option value="taller">
                    Taller de Informática Industrial
                  </option>
                  <option value="fisica">Ciencias II (Física)</option>
                  <option value="mate">Matemáticas II</option>
                  <option value="espanol">Lengua Materna (Español)</option>
                  <option value="historia">Historia de México</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              
              <div className="lg:col-span-8 flex flex-col gap-space-lg">
                
                <article className={`bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col ${cardVisible("Informática") ? "" : "hidden"}`}>
                  <div className="bg-surface-container-low px-space-lg py-space-sm flex flex-wrap items-center justify-between gap-space-sm">
                    <div className="flex items-center gap-space-xs">
                      <span className="p-1 rounded bg-surface-container-high text-primary">
                        <span className="material-symbols-outlined text-[18px]">terminal</span>
                      </span>
                      <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wide">Taller de Informática • Tecnológico</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">• Prof. Mauro Hernández</span>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <span className="bg-secondary-container/40 text-on-secondary-container px-space-xs py-0.5 rounded font-label-sm text-label-sm font-bold uppercase">Urgente</span>
                      <span className="font-label-sm text-label-sm text-secondary font-bold">Vence Mañana, 23:59 hrs</span>
                    </div>
                  </div>
                  <div className="p-space-lg flex flex-col gap-space-md">
                    <div>
                      <h2 className="font-headline-md text-headline-md text-primary">
                        Práctica 4: Diagrama de Flujo y Pseudocódigo en Raptor
                      </h2>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                        Construir el algoritmo para el cálculo automatizado de
                        volúmenes en piezas torneadas con condicionales
                        anidadas. Validar la tabla de variables y adjuntar la
                        captura del test de ejecución sin errores de
                        compilación.
                      </p>
                    </div>
                    
                    <div className="flex flex-col gap-space-xs bg-surface-container p-space-sm rounded">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Material de Apoyo Adjunto</span>
                      <div className="flex flex-wrap items-center gap-space-sm">
                        <a className="inline-flex items-center gap-space-xs bg-surface px-space-sm py-1.5 rounded hover:bg-surface-container-high transition-colors text-primary" href="#">
                          <span className="material-symbols-outlined text-secondary text-[18px]">picture_as_pdf</span>
                          <span className="font-label-md text-label-md font-semibold">Guia_Practica_Raptor_EST70.pdf</span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">(1.8 MB)</span>
                        </a>
                        <a className="inline-flex items-center gap-space-xs bg-surface px-space-sm py-1.5 rounded hover:bg-surface-container-high transition-colors text-primary" href="#">
                          <span className="material-symbols-outlined text-on-tertiary-container text-[18px]">schema</span>
                          <span className="font-label-md text-label-md font-semibold">Rubrica_Algoritmos_V2.pdf</span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">(420 KB)</span>
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-md text-label-md text-primary font-bold">Carga de Evidencia Técnica</label>
                      <div className="group relative rounded-xl p-space-lg flex flex-col items-center justify-center text-center cursor-pointer transition-all bg-surface-container-low hover:bg-surface-container" id="dropzone1">
                        <input onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")} accept=".pdf,.zip,.rar,.png,.jpg" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" id="fileInput1" type="file" />
                        <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-secondary group-hover:scale-105 transition-transform mb-space-xs">
                          <span className="material-symbols-outlined text-[26px]">cloud_upload</span>
                        </div>
                        <p className="font-label-lg text-label-lg text-primary">
                          Arrastra aquí tus archivos o
                          <span className="text-secondary underline underline-offset-2">selecciona de tu equipo</span>
                        </p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                          Archivos permitidos: PDF, código fuente comprimido en
                          ZIP/RAR o captura PNG/JPG (Máx. 25MB)
                        </p>
                        
                        <div className={`mt-space-sm items-center gap-space-xs bg-surface px-space-md py-1.5 rounded-lg shadow-sm ${fileName ? "flex" : "hidden"}`} id="fileSelectedDisplay">
                          <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                          <span className="font-label-md text-label-md text-primary font-semibold" id="fileNameDisplay">{fileName || "Practica4_DanielaAlvarez_2B.zip"}</span>
                          <button onClick={() => setFileName("")} className="text-on-surface-variant hover:text-error ml-2 text-[14px]" id="removeFileBtn" type="button">
                            ✕
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs">
                      <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                        <span className="material-symbols-outlined text-[16px]">folder_special</span>
                        <span>Carpeta drive vinculada:
                          /ESTIS70/Informatica/T2</span>
                      </div>
                      <div className="flex items-center gap-space-sm">
                        <button className="px-space-md py-2 rounded font-label-md text-label-md text-primary hover:bg-surface-container transition-colors" type="button">
                          Guardar Borrador
                        </button>
                        <button onClick={() => {
                            if (!fileName) {
                              setToast("Selecciona primero un archivo de evidencia técnica.");
                              window.setTimeout(() => setToast(""), 3600);
                              return;
                            }
                            setToast("Entrega registrada en Google Classroom y sincronizada con el expediente SEP del alumno.");
                            window.setTimeout(() => setToast(""), 3600);
                          }} className="bg-secondary text-on-secondary px-space-lg py-2 rounded font-label-lg text-label-lg font-bold shadow hover:bg-secondary/90 active:scale-95 transition-all flex items-center gap-space-xs" id="submitBtn1" type="button">
                          <span className="material-symbols-outlined text-[18px]">send</span>
                          <span>Entregar Tarea</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
                
                <article className={`bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col ${cardVisible("Física") ? "" : "hidden"}`}>
                  <div className="bg-surface-container-low px-space-lg py-space-sm flex flex-wrap items-center justify-between gap-space-sm">
                    <div className="flex items-center gap-space-xs">
                      <span className="p-1 rounded bg-surface-container-high text-primary">
                        <span className="material-symbols-outlined text-[18px]">biotech</span>
                      </span>
                      <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wide">Ciencias II (Física)</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">• Profa. Rocío Morales</span>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <span className="bg-surface-container px-space-xs py-0.5 rounded font-label-sm text-label-sm text-on-surface font-semibold">En tiempo</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Vence Viernes, 10:00 hrs</span>
                    </div>
                  </div>
                  <div className="p-space-lg flex flex-col gap-space-md">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-space-md">
                      <div className="flex-1">
                        <h2 className="font-headline-md text-headline-md text-primary">
                          Reporte de Práctica de Laboratorio: Leyes de Newton
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                          Redactar el reporte experimental con hipótesis,
                          registro de tiempos en plano inclinado, cálculo de
                          fricción estática y conclusiones en formato APA
                          institucional. Incluir fotografías de las pesas y
                          cronómetros.
                        </p>
                      </div>
                      <div className="w-full md:w-36 h-24 rounded bg-surface-container overflow-hidden shrink-0">
                        <img className="w-full h-full object-cover" data-alt="Student laboratory table with wooden inclined plane, brass weights, stopwatch, and technical notebook under warm natural workshop lighting at a secondary school in Veracruz Mexico" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTDcpdcTysXLeoJ9J1DTJGZcn6lQplgMz0TuMmsSbSzKHBcgxVIU5EoOzqsK59hQhwXW5Zq7BBNL0PdRuICYqQkMJ6moIY7h563jmAq1l_dpvt6n-vXOMipNPSO9u-iLBPiES2_XS0U6u7aiQvq_ChoIbz7m6AUaujiJbiih4TMeOxsqmQD00KGHS1RubmGQeABLwckrFcIAMF0r9CXuZqaps_jNQaawfJYH6OBjcSApibSuczcAevQQ" />
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs">
                      <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                        <span className="material-symbols-outlined text-[16px]">attach_file</span>
                        <span>Formato requerido: PDF (Plantilla de Laboratorio
                          Oficial)</span>
                      </div>
                      <button className="bg-primary text-on-primary px-space-md py-2 rounded font-label-md text-label-md font-semibold hover:bg-primary-container transition-colors flex items-center gap-space-xs" type="button">
                        <span className="material-symbols-outlined text-[18px]">add_circle</span>
                        <span>Subir Evidencia</span>
                      </button>
                    </div>
                  </div>
                </article>
                
                <article className={`bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col ${cardVisible("Matemáticas") ? "" : "hidden"}`}>
                  <div className="bg-surface-container-low px-space-lg py-space-sm flex flex-wrap items-center justify-between gap-space-sm">
                    <div className="flex items-center gap-space-xs">
                      <span className="p-1 rounded bg-surface-container-high text-primary">
                        <span className="material-symbols-outlined text-[18px]">calculate</span>
                      </span>
                      <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wide">Matemáticas II</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">• Prof. Germán Castillo</span>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <span className="bg-surface-container px-space-xs py-0.5 rounded font-label-sm text-label-sm text-on-surface font-semibold">En tiempo</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Vence Lunes 24, 08:00 hrs</span>
                    </div>
                  </div>
                  <div className="p-space-lg flex flex-col gap-space-md">
                    <div>
                      <h2 className="font-headline-md text-headline-md text-primary">
                        Ejercicios de Sistemas de Ecuaciones 2x2 (Págs. 84-86)
                      </h2>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                        Resolver los 8 problemas de aplicación por el método de
                        reducción (suma y resta) y método gráfico en el cuaderno
                        de cuadrícula chica. Escanear procedimientos completos
                        con firma del tutor al calce.
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs">
                      <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                        <span className="material-symbols-outlined text-[16px]">menu_book</span>
                        <span>Libro Conaliteg: Matemáticas II • Bloque 3</span>
                      </div>
                      <button className="bg-primary text-on-primary px-space-md py-2 rounded font-label-md text-label-md font-semibold hover:bg-primary-container transition-colors flex items-center gap-space-xs" type="button">
                        <span className="material-symbols-outlined text-[18px]">add_circle</span>
                        <span>Subir Evidencia</span>
                      </button>
                    </div>
                  </div>
                </article>
              </div>
              
              <aside className="lg:col-span-4 flex flex-col gap-space-lg">
                
                <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-secondary text-[20px]">mark_chat_read</span>
                      <h3 className="font-title-md text-title-md text-primary font-bold">
                        Últimas Calificaciones
                      </h3>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Recibidas</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Evaluación formativa continua registrada por tu claustro
                    docente conforme al Plan de Estudios SEP.
                  </p>
                  
                  <div className="bg-surface p-space-md rounded-lg shadow-sm flex flex-col gap-space-xs relative overflow-hidden">
                    <div className="flex items-start justify-between gap-space-xs">
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-secondary uppercase font-bold">Taller de Informática</span>
                        <span className="font-label-lg text-label-lg text-primary font-bold">Proyecto 1: Base de Datos Relacional</span>
                      </div>
                      <div className="bg-surface-container-high text-primary px-2 py-1 rounded text-right shrink-0">
                        <span className="font-title-md text-title-md font-bold leading-none">10</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">/10</span>
                      </div>
                    </div>
                    
                    <div className="bg-surface-container-low p-space-sm rounded mt-space-xs flex flex-col gap-1">
                      <div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[14px]">comment</span>
                        <span className="font-semibold">Prof. M. H. Delgado:</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface italic">
                        “Excelente documentación del diagrama entidad-relación y
                        buenas prácticas en la normalización 3FN. Demuestras
                        gran rigor en el diseño de llaves primarias.”
                      </p>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant text-right mt-1">Evaluado: 18 de Febrero</span>
                  </div>
                  
                  <div className="bg-surface p-space-md rounded-lg shadow-sm flex flex-col gap-space-xs">
                    <div className="flex items-start justify-between gap-space-xs">
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-secondary uppercase font-bold">Historia II de México</span>
                        <span className="font-label-lg text-label-lg text-primary font-bold">Línea del Tiempo: México Independiente</span>
                      </div>
                      <div className="bg-surface-container-high text-primary px-2 py-1 rounded text-right shrink-0">
                        <span className="font-title-md text-title-md font-bold leading-none">9.5</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">/10</span>
                      </div>
                    </div>
                    <div className="bg-surface-container-low p-space-sm rounded mt-space-xs flex flex-col gap-1">
                      <div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[14px]">comment</span>
                        <span className="font-semibold">Mtra. Elena Saldaña:</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface italic">
                        “Muy buena síntesis de tratados y periodos
                        constitucionales. Solo asegúrate de contrastar con más
                        fuentes primarias en el próximo reporte.”
                      </p>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant text-right mt-1">Evaluado: 16 de Febrero</span>
                  </div>
                  
                  <div className="bg-surface p-space-md rounded-lg shadow-sm flex flex-col gap-space-xs">
                    <div className="flex items-start justify-between gap-space-xs">
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-secondary uppercase font-bold">Lengua Materna Español</span>
                        <span className="font-label-lg text-label-lg text-primary font-bold">Ensayo Argumentativo de Poesía</span>
                      </div>
                      <div className="bg-surface-container-high text-primary px-2 py-1 rounded text-right shrink-0">
                        <span className="font-title-md text-title-md font-bold leading-none">10</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">/10</span>
                      </div>
                    </div>
                    <div className="bg-surface-container-low p-space-sm rounded mt-space-xs flex flex-col gap-1">
                      <div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[14px]">comment</span>
                        <span className="font-semibold">Prof. Carlos Baeza:</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface italic">
                        “Gran capacidad interpretativa de la métrica y figuras
                        retóricas. Redacción impecable.”
                      </p>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant text-right mt-1">Evaluado: 12 de Febrero</span>
                  </div>
                  
                  <a className="mt-space-xs text-center font-label-md text-label-md text-secondary font-bold hover:underline" href="#">
                    Ver kardex completo de evaluaciones →
                  </a>
                </div>
                
                <div className="bg-surface-container p-space-md rounded-xl flex items-start gap-space-sm">
                  <div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center text-secondary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">router</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-primary font-bold">Laboratorio de Cómputo Disponible</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Si requieres equipo para compilar tu práctica de Raptor,
                      el aula 3 está abierta para asesorías de 14:00 a 15:30
                      hrs.
                    </span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
        
      </main>
  );
}
