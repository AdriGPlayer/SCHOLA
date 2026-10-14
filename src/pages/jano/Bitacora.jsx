import { useState } from "react";

export default function Bitacora() {
  const [toast, setToast] = useState(false);
  return (
    <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <div className="px-space-md sm:px-space-lg lg:px-margin py-space-lg flex flex-col gap-space-lg">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-xs">
              <div className="flex flex-col max-w-3xl">
                <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider mb-1">
                  <span>Prefectura General</span>
                  <span>/</span>
                  <span className="text-secondary font-bold">Bitácora en Turno</span>
                  <span>/</span>
                  <span>Protocolo DGEST</span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
                  Registro Operativo y Bitácora de Incidencias Disciplinarias
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                  Levantamiento inmediato de incidencias de conducta, uniforme,
                  uso de celular indebido, riñas y faltas en talleres de la
                  Técnica 70.
                </p>
              </div>
              
              <div className="flex items-center gap-space-sm flex-wrap">
                <div className="bg-surface-container-high px-space-md py-space-xs rounded-xl shadow-sm flex items-center gap-space-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant leading-none uppercase">En Guardia Hoy</span>
                    <span className="font-title-sm text-title-sm text-primary font-bold leading-tight">14 Registros</span>
                  </div>
                </div>
                <div className="bg-tertiary-container text-on-tertiary-container px-space-md py-space-xs rounded-xl shadow-sm flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[18px]">gavel</span>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-tertiary-container/80 leading-none uppercase">Citatorios Hoy</span>
                    <span className="font-title-sm text-title-sm text-on-tertiary font-bold leading-tight">3 Urgentes</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
              
              <div className="xl:col-span-8 bg-surface-container-lowest rounded-xl shadow-md p-space-md sm:p-space-lg flex flex-col gap-space-lg relative overflow-hidden">
                
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-container via-secondary to-tertiary"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pt-1">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[20px]">edit_note</span>
                    </div>
                    <div>
                      <h2 className="font-headline-sm text-headline-sm text-primary leading-tight font-semibold">
                        Levantamiento Rápido de Incidencia
                      </h2>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Folio Oficial #24-70-B<span className="text-secondary font-bold">0419</span>
                        • Folio Sistémico Inalterable
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold uppercase self-start sm:self-auto">
                    <span className="material-symbols-outlined text-[14px] text-secondary">verified_user</span>
                    Mtro. Efrén Galindo (Prefecto)
                  </span>
                </div>
                <form className="flex flex-col gap-space-md" id="incidentForm">
                  
                  <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col md:flex-row gap-space-md items-start md:items-center justify-between">
                    <div className="w-full md:w-3/5 flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider flex items-center gap-1" htmlFor="studentSearch">
                        <span className="material-symbols-outlined text-[15px] text-primary">person_search</span>
                        Buscar Alumno (Nombre, CURP o Matrícula Técnica)
                      </label>
                      <div className="relative w-full">
                        <input className="w-full bg-surface-container-lowest text-primary px-space-md py-2.5 rounded-lg shadow-sm font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container" id="studentSearch" placeholder="Ej. García López Brenda o MAT-2023-1492..." type="text" value="Hernández Ruiz, Kevin Yael" />
                        <span className="absolute right-3 top-3 text-secondary material-symbols-outlined text-[18px]">check_circle</span>
                      </div>
                    </div>
                    
                    <div className="w-full md:w-2/5 flex items-center gap-space-sm bg-surface-container-lowest p-space-xs pr-space-md rounded-xl shadow-sm">
                      <img className="w-12 h-12 rounded-lg object-cover bg-surface-dim" data-alt="Fotografía escolar oficial de credencial de estudiante de secundaria técnica varón joven en uniforme deportivo blanco y guinda con fondo institucional gris claro." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsorcpbxBGe3Z6sIaD70Zkmg4iE-bUwAqgHffc5kLzrlhExoyQzGfvGTWGQLhIeEIaftgmmdlhIAopPkHWl56Vm2TKD0zvUhZslR4-BA3cEJGEWDyxB7AakIUZ9j52S46ecEu9XYMm9vL5g55xTkfCXB2RmA1_bfmlqF2ZAbABvecBCh9r5d6uEuMLUZWhZGLvgfWm_q3r1etd4XwYXbNzWYuc2eOt_VKxiR6hE6f7hhcfk-2N4zr1gg" />
                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-1">
                          <span className="font-title-sm text-title-sm text-primary font-bold truncate">2° “B” Matutino</span>
                          <span className="px-1.5 py-0.2 rounded-sm bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">INFO-2</span>
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant truncate">Taller de Informática Aplicada</span>
                        <span className="font-label-sm text-label-sm text-secondary font-bold">Mat: 23-B-088 • Tutor: Sra. Ruiz M.</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider" htmlFor="incidentType">
                        Tipo de Incidencia Tipificada
                      </label>
                      <select className="w-full bg-surface-container-low text-primary px-space-md py-2.5 rounded-lg font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container" id="incidentType">
                        <option value="uniforme">
                          Falta de uniforme reglamentario (calzado/suéter ajeno)
                        </option>
                        <option selected="" value="celular">
                          Uso indebido de celular en clase o laboratorio
                        </option>
                        <option value="evasion">
                          Evasión de clase (salirse del aula sin pase)
                        </option>
                        <option value="respeto">
                          Falta de respeto a docente o compañero
                        </option>
                        <option value="rina">
                          Juego brusco / riña o conato en canchas
                        </option>
                        <option value="taller">
                          Incumplimiento de seguridad en taller industrial (sin
                          bata/lentes)
                        </option>
                      </select>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider">
                        Nivel de Gravedad y Deducción
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        <label className="cursor-pointer bg-surface-container-low has-[:checked]:bg-surface-variant p-2 rounded-lg text-center flex flex-col items-center justify-center transition-colors">
                          <input className="hidden" name="gravedad" type="radio" value="leve" />
                          <span className="font-label-sm text-label-sm text-on-surface font-bold uppercase">Leve</span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">-1 a 2 pts</span>
                        </label>
                        <label className="cursor-pointer bg-surface-container-low has-[:checked]:bg-primary-fixed p-2 rounded-lg text-center flex flex-col items-center justify-center transition-colors">
                          <input checked="" className="hidden" name="gravedad" type="radio" value="moderada" />
                          <span className="font-label-sm text-label-sm text-on-primary-fixed font-bold uppercase">Moderada</span>
                          <span className="font-body-sm text-body-sm text-on-primary-fixed-variant font-medium">-3 a 5 pts</span>
                        </label>
                        <label className="cursor-pointer bg-surface-container-low has-[:checked]:bg-secondary-fixed p-2 rounded-lg text-center flex flex-col items-center justify-center transition-colors">
                          <input className="hidden" name="gravedad" type="radio" value="grave" />
                          <span className="font-label-sm text-label-sm text-secondary font-bold uppercase flex items-center gap-0.5">
                            <span className="material-symbols-outlined text-[13px]">warning</span>
                            Grave
                          </span>
                          <span className="font-body-sm text-body-sm text-on-secondary-fixed-variant font-medium">-6 a 10 pts</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider" htmlFor="reporter">
                        Docente / Prefecto que Reporta
                      </label>
                      <div className="relative">
                        <input className="w-full bg-surface-container-low text-primary px-space-md py-2 rounded-lg font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container" id="reporter" type="text" value="Prof. Marco Aurelio Domínguez (Matemáticas II)" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider" htmlFor="locationPlace">
                        Lugar del Evento / Módulo
                      </label>
                      <select className="w-full bg-surface-container-low text-primary px-space-md py-2 rounded-lg font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container" id="locationPlace">
                        <option selected="">
                          Aula 14 - Edificio B (Segundo Piso)
                        </option>
                        <option>
                          Taller de Soldadura y Máquinas Herramienta
                        </option>
                        <option>Canchas Techadas y Explanada Cívica</option>
                        <option>Pasillos Módulo Norte / Sanitarios</option>
                        <option>
                          Laboratorio Multidisciplinario de Ciencias
                        </option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider flex items-center justify-between" htmlFor="hechos">
                      <span>Descripción Circunstanciada de los Hechos</span>
                      <span className="text-outline font-normal">Máx. 500 caracteres</span>
                    </label>
                    <textarea className="w-full bg-surface-container-low text-primary p-space-md rounded-lg font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container leading-relaxed" id="hechos" placeholder="Describa fecha, hora exacta, actitud del alumno, si entregó el dispositivo o prenda y testigos presentes..." rows="3">
El alumno fue sorprendido utilizando teléfono móvil para reproducir videos durante la exposición del tema de álgebra. Al solicitarle guardarlo en su mochila, mostró negativa inicial y reticencia verbal. El dispositivo quedó en resguardo de prefectura bajo recibo.</textarea>
                  </div>
                  
                  <div className="bg-surface-container p-space-md rounded-xl flex flex-col sm:flex-row items-center justify-between gap-space-md">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary-container shadow-sm">
                        <span className="material-symbols-outlined text-[22px]">add_a_photo</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-lg text-label-lg text-primary font-bold">Evidencia Fotográfica o Nota Escrita</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">IMG_20241022_1044_resguardo.jpg (1.8 MB
                          adjuntado)</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <button className="px-space-md py-1.5 bg-surface-container-lowest hover:bg-surface-variant rounded-lg text-primary font-label-sm text-label-sm font-semibold transition-colors shadow-sm" type="button">
                        Cambiar Archivo
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-xs">
                    <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                      <span className="material-symbols-outlined text-[18px] text-secondary">sms</span>
                      <span>Disparador SMS Tutor y Notificación Juno Móvil
                        activos.</span>
                    </div>
                    <div className="flex items-center gap-space-sm w-full sm:w-auto">
                      <button className="w-1/3 sm:w-auto px-space-md py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-lg text-label-lg transition-colors" type="button">
                        Limpiar
                      </button>
                      <button className="w-2/3 sm:w-auto px-space-lg py-2.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-lg text-label-lg font-bold shadow-md flex items-center justify-center gap-space-xs transition-transform active:scale-[0.98]" id="submitBtn" type="submit">
                        <span className="material-symbols-outlined text-[20px]">send</span>
                        <span>Registrar Incidencia y Notificar a Tutor</span>
                      </button>
                    </div>
                  </div>
                </form>
                
                <div className={`absolute inset-x-space-md top-4 bg-tertiary text-on-tertiary p-space-md rounded-xl shadow-xl items-center justify-between z-20 transition-all ${toast ? "flex" : "hidden"}`} id="toastSuccess">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-[24px] text-tertiary-fixed">task_alt</span>
                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg font-bold">Incidencia Guardada Exitosamente</span>
                      <span className="font-body-sm text-body-sm text-on-tertiary/90">Folio #24-70-B0419 emitido. Se envió SMS a la C. Martha
                        Ruiz.</span>
                    </div>
                  </div>
                  <button onClick={() => setToast(false)} className="p-1 text-on-tertiary/70 hover:text-on-tertiary" type="button">
                    <span className="material-symbols-outlined text-[20px]">close</span>
                  </button>
                </div>
              </div>
              
              <div className="xl:col-span-4 flex flex-col gap-space-md">
                
                <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider">Historial del Alumno Seleccionado</span>
                    <span className="px-2 py-0.5 rounded-sm bg-error text-on-error font-label-sm text-label-sm uppercase font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px]">notification_important</span>
                      3ra en el Mes
                    </span>
                  </div>
                  
                  <div className="bg-surface-container-low rounded-xl p-space-md flex items-center gap-space-md">
                    
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <svg className="w-16 h-16 -rotate-90" viewbox="0 0 36 36">
                        
                        <path className="text-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
                        
                        <path className="text-secondary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="72, 100" strokeLinecap="round" strokeWidth="3.5"></path>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <span className="font-headline-sm text-headline-sm text-primary font-bold leading-none">7.2</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant text-[9px] leading-none">de 10</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg text-primary font-bold">Puntaje Conductual Actual</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Acumula
                        <strong className="text-secondary font-bold">-2.8 pts</strong>
                        en el bimestre. Umbral de suspensión preventiva a los
                        6.0 pts.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Incidentes Previos (Octubre 2024):</span>
                    <div className="p-2.5 rounded-lg bg-surface-container-high/40 flex items-start gap-space-xs">
                      <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5">do_not_step</span>
                      <div className="flex flex-col flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-label-sm text-label-sm text-primary font-bold">Evasión de clase (Taller)</span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">14 Oct</span>
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Prefecto: Estrada • -1.5 pts</span>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-surface-container-high/40 flex items-start gap-space-xs">
                      <span className="material-symbols-outlined text-[16px] text-on-tertiary-container mt-0.5">checkroom</span>
                      <div className="flex flex-col flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-label-sm text-label-sm text-primary font-bold">Falta de Uniforme Oficial</span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">03 Oct</span>
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Sin credencial ni suéter • -1.0 pt</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-space-xs flex flex-col gap-2">
                    <button className="w-full py-2 px-space-md rounded-lg bg-secondary text-on-secondary hover:bg-on-secondary-fixed-variant transition-colors font-label-sm text-label-sm font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm">
                      <span className="material-symbols-outlined text-[16px]">mail</span>
                      Emitir Citatorio Urgente a Tutor
                    </button>
                    <button className="w-full py-2 px-space-md rounded-lg bg-surface-container-high hover:bg-surface-variant text-primary transition-colors font-label-sm text-label-sm font-bold uppercase tracking-wider flex items-center justify-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">handshake</span>
                      Canalizar a Trabajo Social y Psicología
                    </button>
                  </div>
                </div>
                
                <div className="bg-surface-container rounded-xl p-space-md flex items-center gap-space-md">
                  <img className="w-16 h-16 rounded-lg object-cover flex-shrink-0" data-alt="Taller técnico industrial de educación secundaria con tornos mecánicos y equipo de seguridad industrial donde se promueve la disciplina técnica." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSD78Ci-JElSqPjOrpRk1vF-vJjsLbZyrxdQdQ6P93HrQZz6b-ZLsgHiU7ghANU9KKXs0ggEqiOFOlfSu2snoPH3Ck_WEiyitfmS-iE4GLoUAwL-ESjm3s5wrjblpJV-AvyMzFxjvFN7zF8bqXECT0RxS3oZ5FRf8C0094h4G6J2z4py4bjYU1syEZbfVPg3fl9WZnykyjWe4HiNzTVrsj0W_HOJ_ZHo_8n0sAUl35k4oUcJbRIzP2PQ" />
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-tertiary font-bold uppercase tracking-wider">Reglamento General DGEST</span>
                    <span className="font-title-sm text-title-sm text-primary font-bold leading-snug">Art. 44: Seguridad en Talleres</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight mt-0.5">
                      Toda falta en área de maquinaria genera citatorio
                      obligatorio y acta administrativa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-space-md mt-space-sm">
              
              <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
                  <div>
                    <h2 className="font-headline-md text-headline-md text-primary font-bold">
                      Bitácora General de Incidencias
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Registro cronológico auditado • Turno Matutino y
                      Vespertino • Ciclo 2024-2025
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-space-xs">
                    <button className="px-space-md py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1 transition-colors">
                      <span className="material-symbols-outlined text-[16px]">file_download</span>
                      <span>Exportar XLS / DGEST</span>
                    </button>
                    <button className="px-space-md py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1 transition-colors">
                      <span className="material-symbols-outlined text-[16px]">print</span>
                      <span>Imprimir Libro Diario</span>
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-xs pt-space-xs">
                  
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant mb-1 font-semibold uppercase">Grado</span>
                    <select className="w-full bg-surface-container-low text-primary px-space-sm py-1.5 rounded-lg font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary-container">
                      <option selected="">Todos (1°, 2°, 3°)</option>
                      <option>1° Grado</option>
                      <option>2° Grado</option>
                      <option>3° Grado</option>
                    </select>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant mb-1 font-semibold uppercase">Turno</span>
                    <select className="w-full bg-surface-container-low text-primary px-space-sm py-1.5 rounded-lg font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary-container">
                      <option selected="">Matutino</option>
                      <option>Vespertino</option>
                      <option>Ambos Turnos</option>
                    </select>
                  </div>
                  
                  <div className="flex flex-col col-span-2 sm:col-span-1 lg:col-span-2">
                    <span className="font-label-sm text-label-sm text-on-surface-variant mb-1 font-semibold uppercase">Tipo de Falta</span>
                    <select className="w-full bg-surface-container-low text-primary px-space-sm py-1.5 rounded-lg font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary-container">
                      <option selected="">Todas las Tipificaciones</option>
                      <option>Falta de Uniforme</option>
                      <option>Uso de Celular</option>
                      <option>Evasión de Aula / Fuga</option>
                      <option>Riña / Agresión Física</option>
                      <option>Falta en Taller Técnico</option>
                    </select>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant mb-1 font-semibold uppercase">Estatus</span>
                    <select className="w-full bg-surface-container-low text-primary px-space-sm py-1.5 rounded-lg font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary-container">
                      <option selected="">Todos los Estados</option>
                      <option>Abierta</option>
                      <option>En Aclaración</option>
                      <option>Resuelta con Acta</option>
                    </select>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant mb-1 font-semibold uppercase">Búsqueda Rápida</span>
                    <div className="relative">
                      <input className="w-full bg-surface-container-low text-primary px-space-sm py-1.5 rounded-lg font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary-container" placeholder="Filtrar tabla..." type="text" />
                      <span className="material-symbols-outlined text-[16px] text-outline absolute right-2 top-2">search</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    
                    <thead>
                      <tr className="bg-surface-container-high/60 text-primary font-label-sm text-label-sm uppercase tracking-wider">
                        <th className="py-3 px-space-md">Folio / Hora</th>
                        <th className="py-3 px-space-md">Alumno y Grupo</th>
                        <th className="py-3 px-space-md">Incidencia Tipificada</th>
                        <th className="py-3 px-space-md">Gravedad</th>
                        <th className="py-3 px-space-md">Estatus Institucional</th>
                        <th className="py-3 px-space-md">Reportó</th>
                        <th className="py-3 px-space-md text-right">
                          Acciones Inmediatas
                        </th>
                      </tr>
                    </thead>
                    
                    <tbody className="font-body-md text-body-md text-on-surface divide-y-0">
                      
                      <tr className="hover:bg-surface-container-low/80 transition-colors bg-error-container/20">
                        <td className="py-3.5 px-space-md align-middle">
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md text-primary font-bold">#24-70-B0418</span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">Hoy • 10:15 AM</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md align-middle">
                          <div className="flex items-center gap-space-xs">
                            <img className="w-8 h-8 rounded-full object-cover bg-surface-container-high flex-shrink-0" data-alt="Fotografía escolar de credencial de alumna adolescente seria de secundaria técnica con peinado formal sobre fondo neutro." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsjpIbe9ed_7k9cMMUx1dBIpspzAtIDrOEpfU5sfe_byiCdID4VNSUSD4DAOhvVkjB2nMj7iLfv3lxFdIj6RIcC1jAaTkJ8Rde8nXmrhPnXOcNxdaPO3KCcoboOaXqDVYegl5TQ4nSOev-F2_8DIi7mig3wMEYU-4TFEPVh7kS2PLvvBJzbALf_yFEtvHgTkCOvOBmGBEMhFkjQRnrO_s1QUqikHtiAYSmpbh43ws0eJOZet4Ft6IoOQ" />
                            <div className="flex flex-col min-w-0">
                              <span className="font-title-sm text-title-sm text-primary font-bold truncate">Morales Soto, Daniela</span>
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">3° “A” Matutino</span>
                                <span className="px-1.5 py-0.2 rounded-sm bg-error text-on-error font-label-sm text-label-sm uppercase font-bold">
                                  3ra Incidencia
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md align-middle">
                          <div className="flex flex-col">
                            <span className="font-label-lg text-label-lg text-primary font-bold flex items-center gap-1">
                              <span className="material-symbols-outlined text-[16px] text-secondary">sports_kabaddi</span>
                              Riña / Agresión verbal en canchas
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              Confrontación directa durante el receso deportivo.
                            </span>
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md align-middle">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold uppercase">
                            <span className="w-2 h-2 rounded-full bg-secondary"></span>
                            Grave (-8 pts)
                          </span>
                        </td>
                        <td className="py-3.5 px-space-md align-middle">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-secondary text-on-secondary font-label-sm text-label-sm font-bold uppercase">
                            Citatorio Urgente
                          </span>
                        </td>
                        <td className="py-3.5 px-space-md align-middle">
                          <div className="flex flex-col">
                            <span className="font-label-sm text-label-sm text-primary font-semibold">Pref. J. Mendoza</span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Guardia Canchas</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md align-middle text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button className="p-1.5 rounded-lg bg-surface-container-high hover:bg-secondary hover:text-on-secondary text-primary transition-colors" title="Generar Citatorio Oficial">
                              <span className="material-symbols-outlined text-[18px]">gavel</span>
                            </button>
                            <button className="p-1.5 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary text-primary transition-colors" title="Turnar a Dirección">
                              <span className="material-symbols-outlined text-[18px]">shield_person</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-surface-container-low/80 transition-colors">
                        <td className="py-3.5 px-space-md align-middle">
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md text-primary font-bold">#24-70-B0417</span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">Hoy • 09:30 AM</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md align-middle">
                          <div className="flex items-center gap-space-xs">
                            <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold text-label-md flex-shrink-0">
                              RC
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="font-title-sm text-title-sm text-primary font-bold truncate">Ramírez Cruz, Emiliano</span>
                              <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">2° “D” Matutino • Taller Soldadura</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md align-middle">
                          <div className="flex flex-col">
                            <span className="font-label-lg text-label-lg text-primary font-bold flex items-center gap-1">
                              <span className="material-symbols-outlined text-[16px] text-tertiary">construction</span>
                              Falta de seguridad en taller industrial
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              Operando esmeril sin careta ni peto de cuero.
                              Riesgo de proyección.
                            </span>
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md align-middle">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold uppercase">
                            <span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
                            Moderada (-4 pts)
                          </span>
                        </td>
                        <td className="py-3.5 px-space-md align-middle">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container-high text-primary font-label-sm text-label-sm font-bold uppercase">
                            En Aclaración
                          </span>
                        </td>
                        <td className="py-3.5 px-space-md align-middle">
                          <div className="flex flex-col">
                            <span className="font-label-sm text-label-sm text-primary font-semibold">Ing. Valenzuela</span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Profesor Taller</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md align-middle text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button className="p-1.5 rounded-lg bg-surface-container-high hover:bg-secondary hover:text-on-secondary text-primary transition-colors" title="Generar Citatorio Oficial">
                              <span className="material-symbols-outlined text-[18px]">gavel</span>
                            </button>
                            <button className="p-1.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-primary transition-colors" title="Ver Expediente">
                              <span className="material-symbols-outlined text-[18px]">visibility</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-surface-container-low/80 transition-colors">
                        <td className="py-3.5 px-space-md align-middle">
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md text-primary font-bold">#24-70-B0416</span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">Hoy • 08:40 AM</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md align-middle">
                          <div className="flex items-center gap-space-xs">
                            <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold text-label-md flex-shrink-0">
                              VP
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="font-title-sm text-title-sm text-primary font-bold truncate">Vázquez Peña, Rodrigo</span>
                              <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">1° “C” Matutino • Dibujo Técnico</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md align-middle">
                          <div className="flex flex-col">
                            <span className="font-label-lg text-label-lg text-primary font-bold flex items-center gap-1">
                              <span className="material-symbols-outlined text-[16px] text-tertiary">door_open</span>
                              Evasión de clase (salirse del aula)
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              Localizado en área de sanitarios sin pase de
                              prefectura.
                            </span>
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md align-middle">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-variant text-primary font-label-sm text-label-sm font-bold uppercase">
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            Leve (-2 pts)
                          </span>
                        </td>
                        <td className="py-3.5 px-space-md align-middle">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold uppercase">
                            Resuelta con Acta
                          </span>
                        </td>
                        <td className="py-3.5 px-space-md align-middle">
                          <div className="flex flex-col">
                            <span className="font-label-sm text-label-sm text-primary font-semibold">Pref. Efrén Galindo</span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Rondín Pasillos</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md align-middle text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button className="p-1.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-primary transition-colors" title="Ver Acta Firmada">
                              <span className="material-symbols-outlined text-[18px]">description</span>
                            </button>
                            <button className="p-1.5 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary text-primary transition-colors" title="Imprimir Comprobante">
                              <span className="material-symbols-outlined text-[18px]">print</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-surface-container-low/80 transition-colors">
                        <td className="py-3.5 px-space-md align-middle">
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md text-primary font-bold">#24-70-B0415</span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">Ayer • 13:10 PM</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md align-middle">
                          <div className="flex items-center gap-space-xs">
                            <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold text-label-md flex-shrink-0">
                              GG
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="font-title-sm text-title-sm text-primary font-bold truncate">González Garza, Alondra</span>
                              <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">3° “B” Matutino • Electricidad</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md align-middle">
                          <div className="flex flex-col">
                            <span className="font-label-lg text-label-lg text-primary font-bold flex items-center gap-1">
                              <span className="material-symbols-outlined text-[16px] text-outline">checkroom</span>
                              Falta de uniforme reglamentario
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              Presenta sudadera particular con capucha no
                              permitida por reglamento.
                            </span>
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md align-middle">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-variant text-primary font-label-sm text-label-sm font-bold uppercase">
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            Leve (-1 pt)
                          </span>
                        </td>
                        <td className="py-3.5 px-space-md align-middle">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container-high text-primary font-label-sm text-label-sm font-bold uppercase">
                            Abierta
                          </span>
                        </td>
                        <td className="py-3.5 px-space-md align-middle">
                          <div className="flex flex-col">
                            <span className="font-label-sm text-label-sm text-primary font-semibold">Torniquete Acceso</span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Vigilancia Entrada</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md align-middle text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button className="p-1.5 rounded-lg bg-surface-container-high hover:bg-secondary hover:text-on-secondary text-primary transition-colors" title="Generar Citatorio">
                              <span className="material-symbols-outlined text-[18px]">gavel</span>
                            </button>
                            <button className="p-1.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-primary transition-colors" title="Ver Historial">
                              <span className="material-symbols-outlined text-[18px]">visibility</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="p-space-md bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-md">
                  <div className="flex items-center gap-space-md flex-wrap">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Mostrando 4 de 14 incidencias activas en el periodo</span>
                    <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                      <span className="w-2 h-2 rounded-full bg-secondary inline-block"></span>
                      <span>Grave (Citatorio Inmediato)</span>
                      <span className="w-2 h-2 rounded-full bg-on-tertiary-container inline-block ml-2"></span>
                      <span>Moderada</span>
                      <span className="w-2 h-2 rounded-full bg-primary inline-block ml-2"></span>
                      <span>Leve</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold opacity-50 cursor-not-allowed">
                      Anterior
                    </button>
                    <button className="px-2.5 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm font-bold">
                      1
                    </button>
                    <button className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">
                      2
                    </button>
                    <button className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">
                      3
                    </button>
                    <button className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">
                      Siguiente
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </main>
  );
}
