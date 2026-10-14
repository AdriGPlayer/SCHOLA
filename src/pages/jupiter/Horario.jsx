import { useState } from "react";

export default function Horario() {
  const [toast, setToast] = useState(null);
  const [syncing, setSyncing] = useState(false);

  const showToast = (title, desc) => {
    setToast({ title, desc });
    window.setTimeout(() => setToast(null), 3600);
  };

  return (
    <main className="relative pt-20 w-full min-h-screen px-space-xl py-space-lg bg-surface">
        <div className="flex flex-col w-full">
          
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-space-lg mb-space-xl">
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center gap-space-sm text-outline">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Subdirección Académica • Ciclo 2024-2025</span>
                <span>•</span>
                <span className="font-label-sm text-label-sm">ESTIS No. 70 "Júpiter"</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Asignación Académica y Generador de Horarios Semanales
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
                Configuración de retícula curricular, adscripción docente y
                distribución horaria por módulos de 50 minutos con balance de
                carga en talleres tecnológicos.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-space-sm bg-surface-container-low p-space-xs rounded-xl shadow-sm">
              <div className="flex items-center gap-space-xs px-space-sm py-1.5 bg-surface-container-lowest rounded-lg shadow-sm">
                <span className="material-symbols-outlined text-[18px] text-outline">group</span>
                <label className="sr-only" htmlFor="filter-group">Seleccionar Grupo</label>
                <select className="bg-transparent font-label-md text-label-md text-on-surface focus:outline-none cursor-pointer" id="filter-group">
                  <option>2° Grado "B" — Matutino</option>
                  <option>1° Grado "A" — Matutino</option>
                  <option>2° Grado "A" — Matutino</option>
                  <option>3° Grado "C" — Vespertino</option>
                </select>
              </div>
              <div className="flex items-center gap-space-xs px-space-sm py-1.5 bg-surface-container-lowest rounded-lg shadow-sm">
                <span className="material-symbols-outlined text-[18px] text-tertiary-container">precision_manufacturing</span>
                <label className="sr-only" htmlFor="filter-tech">Taller Tecnológico</label>
                <select className="bg-transparent font-label-md text-label-md text-on-surface focus:outline-none cursor-pointer" id="filter-tech">
                  <option>Taller: Máquinas y Herramientas II</option>
                  <option>Taller: Electricidad e Instalaciones II</option>
                  <option>Taller: Diseño de Circuitos II</option>
                  <option>Taller: Informática Administrativa II</option>
                </select>
              </div>
              <button onClick={() => { setSyncing(true); window.setTimeout(() => { setSyncing(false); showToast("Matriz Recargada", "La retícula se sincronizó con la base de datos de SICEE."); }, 1200); }} className="flex items-center gap-space-xs px-space-md py-1.5 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all shadow-sm" id="btn-sync">
                <span className={`material-symbols-outlined text-[16px] ${syncing ? "animate-spin" : ""}`}>sync</span>
                <span>Recargar Matriz</span>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md mb-space-xl">
            <div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between shadow-sm">
              <div>
                <div className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Carga Modular Semanal
                </div>
                <div className="font-headline-md text-headline-md text-on-surface mt-0.5">
                  35 / 35 hrs
                </div>
                <div className="font-label-sm text-label-sm text-secondary font-semibold mt-1">
                  100% Cubierto sin vacíos
                </div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px]">view_timeline</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between shadow-sm">
              <div>
                <div className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Verificación de Choques
                </div>
                <div className="font-headline-md text-headline-md text-secondary mt-0.5">
                  0 Conflictos
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                  Plantilla docente validada
                </div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[24px]">verified_user</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between shadow-sm">
              <div>
                <div className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Horas Taller Especializado
                </div>
                <div className="font-headline-md text-headline-md text-tertiary-container mt-0.5">
                  8 Módulos
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                  Edificio Tecnológico C
                </div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary-container">
                <span className="material-symbols-outlined text-[24px]">hardware</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between shadow-sm">
              <div>
                <div className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Docentes Adscritos
                </div>
                <div className="font-headline-md text-headline-md text-on-surface mt-0.5">
                  9 Profesores
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                  1 Suplente registrado
                </div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px]">co_present</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
            
            <section className="lg:col-span-4 flex flex-col gap-space-lg">
              <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col">
                <div className="flex items-center gap-space-xs mb-space-sm pb-space-xs border-b border-outline-variant/30">
                  <span className="material-symbols-outlined text-secondary text-[22px]">assignment_ind</span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    Vincular Materia a Profesor
                  </h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
                  Configure la asignación de plazas docentes y espacios físicos
                  para su inyección en la retícula oficial de la ESTIS 70.
                </p>
                <form className="flex flex-col gap-space-md" id="assignment-form" onSubmit={(e) => { e.preventDefault(); showToast("¡Retícula Actualizada con Éxito!", "El módulo docente ha sido incorporado a la matriz horaria oficial."); }}>
                  
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md text-on-surface" htmlFor="subject-select">Asignatura Curricular</label>
                    <div className="relative">
                      <select className="w-full bg-surface-container-lowest px-space-md py-2.5 rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm appearance-none pr-8" id="subject-select">
                        <option value="mat">Matemáticas II (5 hrs/sem)</option>
                        <option value="esp">
                          Lengua Materna: Español II (5 hrs/sem)
                        </option>
                        <option selected="" value="tec">
                          Taller: Máquinas y Herramientas II (8 hrs/sem)
                        </option>
                        <option value="fis">
                          Ciencias II: Énfasis en Física (6 hrs/sem)
                        </option>
                        <option value="civ">
                          Formación Cívica y Ética II (4 hrs/sem)
                        </option>
                        <option value="his">
                          Historia de México II (4 hrs/sem)
                        </option>
                        <option value="ing">
                          Lengua Extranjera: Inglés II (3 hrs/sem)
                        </option>
                        <option value="edf">
                          Educación Física II (2 hrs/sem)
                        </option>
                        <option value="art">
                          Artes Visuales II (2 hrs/sem)
                        </option>
                      </select>
                      <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">expand_more</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md text-on-surface" htmlFor="teacher-main">Docente Titular (Clave SEP)</label>
                    <div className="relative">
                      <select className="w-full bg-surface-container-lowest px-space-md py-2.5 rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm appearance-none pr-8" id="teacher-main">
                        <option selected="">
                          Prof. Armando Estrada Lugo (Cve. T-8823)
                        </option>
                        <option>
                          Mtra. Guadalupe Rentería Vega (Cve. M-1049)
                        </option>
                        <option>
                          Ing. Héctor Silva Castañeda (Cve. F-4491)
                        </option>
                        <option>
                          Lic. Sandra Morales Ibarra (Cve. E-3281)
                        </option>
                        <option>
                          Prof. David Quintero Salcido (Cve. C-0922)
                        </option>
                      </select>
                      <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">badge</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md text-on-surface-variant flex items-center justify-between" htmlFor="teacher-sub">
                      <span>Docente Suplente / Co-tutor</span>
                      <span className="font-label-sm text-label-sm text-outline">Opcional</span>
                    </label>
                    <div className="relative">
                      <select className="w-full bg-surface-container-lowest px-space-md py-2.5 rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm appearance-none pr-8" id="teacher-sub">
                        <option selected="">
                          Téc. Rogelio Domínguez (Auxiliar de Taller)
                        </option>
                        <option>Sin docente suplente asignado</option>
                        <option>
                          Mtro. Carlos Peña (Disponibilidad Módulos 1-3)
                        </option>
                      </select>
                      <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">group_add</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-space-sm">
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md text-on-surface" htmlFor="module-count">Carga Semanal</label>
                      <div className="flex items-center bg-surface-container-lowest rounded-lg px-space-sm py-2 shadow-sm">
                        <input className="w-full bg-transparent text-on-surface font-label-lg text-label-lg focus:outline-none text-center" id="module-count" max="12" min="1" type="number" value="8" />
                        <span className="text-outline font-label-sm text-label-sm">móds</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md text-on-surface" htmlFor="classroom-select">Espacio Físico</label>
                      <select className="w-full bg-surface-container-lowest px-space-sm py-2 rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" id="classroom-select">
                        <option>Taller de Metalmecánica (Edif. C)</option>
                        <option>Aula 14 (Edificio A - Planta Alta)</option>
                        <option>Laboratorio de Ciencias Naturales</option>
                        <option>Cancha Polideportiva Este</option>
                        <option>Aula de Cómputo II</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="bg-surface-container p-space-sm rounded-lg flex items-center gap-space-sm mt-space-xs">
                    <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface font-semibold">Disponibilidad Docente: 100%</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Prof. Armando Estrada sin choques en Turno
                        Matutino</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-space-sm py-3 bg-primary-container text-surface-container-lowest rounded-lg font-label-lg text-label-lg flex items-center justify-center gap-space-xs hover:bg-primary transition-all shadow-md" type="submit">
                    <span className="material-symbols-outlined text-[20px]">add_task</span>
                    <span>Vincular a Retícula Semanal</span>
                  </button>
                </form>
              </div>
              
              <div className="bg-surface-container-low p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Especialidad Industrial</span>
                  <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">Tecnología II</span>
                </div>
                <div className="flex items-center gap-space-md">
                  <div className="w-16 h-16 rounded-lg bg-surface-container-high overflow-hidden shrink-0">
                    <img className="w-full h-full object-cover" data-alt="Secondary vocational technical students in heavy khaki workshop coats working diligently at metal lathe equipment and blueprint stations in an illuminated school workshop with terracotta brick background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW06fjS0rOiUNdYFvJA0TY6Nnh10BF1xoHhnG6lXD4P0vSOmVgb5_p8ua0BJtrL6b-u7Nbsh_e8es9yCn1_z0HdyhBOZvTnAVyBEyv67cw-f3N8VUlu57cQ-s0yfACPryatNTSWZTaT_gfr0b2pUw44gBXZfkAlGiks0caXMTnedKkryNSmMV1zYCMYxkHMI4YAWZZ0LF2oeArDwQn8DtraOKVgBpKzrWwW_xIszWsZjfhQIRniyYUNw" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-title-sm text-title-sm text-on-surface">
                      Taller Máquinas y Herramientas
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Capacidad: 28 bancos de trabajo, 6 tornos paralelos y 2
                      fresadoras manuales operativas.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="lg:col-span-8 flex flex-col gap-space-md">
              
              <div className="bg-surface-container-low p-space-md rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                
                <div className="flex flex-wrap items-center gap-space-sm">
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider mr-1">Ramas:</span>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-surface-container-high">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
                    <span className="font-label-sm text-label-sm text-on-surface">Troncales</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-tertiary-fixed">
                    <span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-fixed-variant"></span>
                    <span className="font-label-sm text-label-sm text-on-tertiary-fixed">Tecnología Industrial</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-secondary-fixed">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                    <span className="font-label-sm text-label-sm text-on-secondary-fixed-variant">Científico / Lab</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-surface-container">
                    <span className="w-2.5 h-2.5 rounded-full bg-outline"></span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Educación Integral</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-space-xs shrink-0">
                  <button onClick={() => showToast("PDF Generado", "La retícula horaria se descargó en formato oficial firmado por la Subdirección Académica.")} className="flex items-center gap-space-xs px-space-sm py-1.5 bg-surface-container-lowest text-on-surface font-label-md text-label-md rounded-lg shadow-sm hover:bg-surface-container transition-all" id="btn-pdf">
                    <span className="material-symbols-outlined text-[18px] text-secondary">picture_as_pdf</span>
                    <span>Descargar PDF</span>
                  </button>
                  <button onClick={() => showToast("Horario Publicado", "La matriz horaria ya está visible para docentes, alumnos y tutores en el portal escolar.")} className="flex items-center gap-space-xs px-space-sm py-1.5 bg-secondary text-on-secondary font-label-md text-label-md rounded-lg shadow-sm hover:opacity-95 transition-all" id="btn-publish">
                    <span className="material-symbols-outlined text-[18px]">publish</span>
                    <span>Publicar Portal</span>
                  </button>
                  <button onClick={() => showToast("Notificación Enviada", "Se avisó a 32 docentes vía SICEE sobre la actualización de su carga horaria.")} className="p-1.5 bg-surface-container-lowest text-on-surface rounded-lg shadow-sm hover:bg-surface-container transition-all" id="btn-notify" title="Notificar a Docentes vía SICEE">
                    <span className="material-symbols-outlined text-[18px] text-primary">send</span>
                  </button>
                </div>
              </div>
              
              <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                
                <div className="grid grid-cols-6 bg-surface-container text-center py-2.5 px-space-sm">
                  <div className="font-label-md text-label-md text-outline uppercase tracking-wider text-left pl-space-sm">
                    Módulo / Horario
                  </div>
                  <div className="font-label-md text-label-md text-on-surface font-bold">
                    Lunes
                  </div>
                  <div className="font-label-md text-label-md text-on-surface font-bold">
                    Martes
                  </div>
                  <div className="font-label-md text-label-md text-on-surface font-bold">
                    Miércoles
                  </div>
                  <div className="font-label-md text-label-md text-on-surface font-bold">
                    Jueves
                  </div>
                  <div className="font-label-md text-label-md text-on-surface font-bold">
                    Viernes
                  </div>
                </div>
                
                <div className="flex flex-col p-space-sm gap-space-xs">
                  
                  <div className="grid grid-cols-6 gap-space-xs items-stretch min-h-[72px]">
                    <div className="flex flex-col justify-center px-space-sm bg-surface-container-low rounded-lg">
                      <span className="font-label-sm text-label-sm font-bold text-on-surface">1° Módulo</span>
                      <span className="font-body-sm text-body-sm text-outline">07:00 - 07:50</span>
                    </div>
                    
                    <div className="bg-primary/5 hover:bg-primary/10 transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold text-primary block leading-tight">Español II</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block">Mtra. Rentería</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-outline text-[10px]">Aula 14</span>
                    </div>
                    
                    <div className="bg-primary/5 hover:bg-primary/10 transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold text-primary block leading-tight">Matemáticas II</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block">Mtro. Quintero</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-outline text-[10px]">Aula 14</span>
                    </div>
                    
                    <div className="bg-tertiary-fixed text-on-tertiary-fixed hover:bg-tertiary-fixed-dim transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer shadow-sm">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold block leading-tight">Técnica: Máquinas II</span>
                        <span className="font-body-sm text-body-sm text-on-tertiary-fixed-variant text-[11px] block">Prof. Estrada Lugo</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-tertiary-fixed-variant text-[10px] font-semibold">Taller Metalmecánico</span>
                    </div>
                    
                    <div className="bg-primary/5 hover:bg-primary/10 transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold text-primary block leading-tight">Historia II</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block">Lic. Morales</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-outline text-[10px]">Aula 14</span>
                    </div>
                    
                    <div className="bg-primary/5 hover:bg-primary/10 transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold text-primary block leading-tight">Matemáticas II</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block">Mtro. Quintero</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-outline text-[10px]">Aula 14</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-6 gap-space-xs items-stretch min-h-[72px]">
                    <div className="flex flex-col justify-center px-space-sm bg-surface-container-low rounded-lg">
                      <span className="font-label-sm text-label-sm font-bold text-on-surface">2° Módulo</span>
                      <span className="font-body-sm text-body-sm text-outline">07:50 - 08:40</span>
                    </div>
                    
                    <div className="bg-primary/5 hover:bg-primary/10 transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold text-primary block leading-tight">Español II</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block">Mtra. Rentería</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-outline text-[10px]">Aula 14</span>
                    </div>
                    
                    <div className="bg-primary/5 hover:bg-primary/10 transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold text-primary block leading-tight">Matemáticas II</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block">Mtro. Quintero</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-outline text-[10px]">Aula 14</span>
                    </div>
                    
                    <div className="bg-tertiary-fixed text-on-tertiary-fixed hover:bg-tertiary-fixed-dim transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer shadow-sm">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold block leading-tight">Técnica: Máquinas II</span>
                        <span className="font-body-sm text-body-sm text-on-tertiary-fixed-variant text-[11px] block">Prof. Estrada Lugo</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-tertiary-fixed-variant text-[10px] font-semibold">Taller Metalmecánico</span>
                    </div>
                    
                    <div className="bg-primary/5 hover:bg-primary/10 transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold text-primary block leading-tight">Inglés II</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block">Lic. Morales</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-outline text-[10px]">Aula 14</span>
                    </div>
                    
                    <div className="bg-surface-container hover:bg-surface-container-high transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold text-on-surface block leading-tight">Artes Visuales</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block">Prof. Valadez</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-outline text-[10px]">Aula de Artes</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-6 gap-space-xs items-stretch min-h-[72px]">
                    <div className="flex flex-col justify-center px-space-sm bg-surface-container-low rounded-lg">
                      <span className="font-label-sm text-label-sm font-bold text-on-surface">3° Módulo</span>
                      <span className="font-body-sm text-body-sm text-outline">08:40 - 09:30</span>
                    </div>
                    
                    <div className="bg-secondary-fixed text-on-secondary-fixed-variant hover:bg-secondary-container/20 transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold block leading-tight">Ciencias II (Física)</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block">Ing. Silva Castañeda</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-secondary font-semibold text-[10px]">Laboratorio Central</span>
                    </div>
                    
                    <div className="bg-primary/5 hover:bg-primary/10 transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold text-primary block leading-tight">Civismo II</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block">Mtro. Quintero</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-outline text-[10px]">Aula 14</span>
                    </div>
                    
                    <div className="bg-tertiary-fixed text-on-tertiary-fixed hover:bg-tertiary-fixed-dim transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer shadow-sm">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold block leading-tight">Técnica: Máquinas II</span>
                        <span className="font-body-sm text-body-sm text-on-tertiary-fixed-variant text-[11px] block">Prof. Estrada Lugo</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-tertiary-fixed-variant text-[10px] font-semibold">Taller Metalmecánico</span>
                    </div>
                    
                    <div className="bg-secondary-fixed text-on-secondary-fixed-variant hover:bg-secondary-container/20 transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold block leading-tight">Ciencias II (Física)</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block">Ing. Silva Castañeda</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-secondary font-semibold text-[10px]">Laboratorio Central</span>
                    </div>
                    
                    <div className="bg-primary/5 hover:bg-primary/10 transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold text-primary block leading-tight">Español II</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block">Mtra. Rentería</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-outline text-[10px]">Aula 14</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-6 gap-space-xs items-center bg-surface-container-high/60 py-2 px-space-xs rounded-lg">
                    <div className="flex items-center gap-1 px-space-sm">
                      <span className="material-symbols-outlined text-[16px] text-tertiary">restaurant</span>
                      <span className="font-label-sm text-label-sm font-bold text-tertiary uppercase">09:30 - 10:00</span>
                    </div>
                    <div className="col-span-5 text-center font-label-md text-label-md text-on-surface tracking-widest uppercase">
                      Descanso Pedagógico y Servicio de Comedor Escolar
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-6 gap-space-xs items-stretch min-h-[72px]">
                    <div className="flex flex-col justify-center px-space-sm bg-surface-container-low rounded-lg">
                      <span className="font-label-sm text-label-sm font-bold text-on-surface">4° Módulo</span>
                      <span className="font-body-sm text-body-sm text-outline">10:00 - 10:50</span>
                    </div>
                    
                    <div className="bg-surface-container hover:bg-surface-container-high transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold text-on-surface block leading-tight">Educación Física</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block">Prof. Zavala R.</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-outline text-[10px]">Canchas Exteriores</span>
                    </div>
                    
                    <div className="bg-secondary-fixed text-on-secondary-fixed-variant hover:bg-secondary-container/20 transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold block leading-tight">Ciencias II (Física)</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block">Ing. Silva Castañeda</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-secondary font-semibold text-[10px]">Aula 14</span>
                    </div>
                    
                    <div className="bg-tertiary-fixed text-on-tertiary-fixed hover:bg-tertiary-fixed-dim transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer shadow-sm">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold block leading-tight">Técnica: Máquinas II</span>
                        <span className="font-body-sm text-body-sm text-on-tertiary-fixed-variant text-[11px] block">Prof. Estrada Lugo</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-tertiary-fixed-variant text-[10px] font-semibold">Taller Metalmecánico</span>
                    </div>
                    
                    <div className="bg-primary/5 hover:bg-primary/10 transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold text-primary block leading-tight">Matemáticas II</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block">Mtro. Quintero</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-outline text-[10px]">Aula 14</span>
                    </div>
                    
                    <div className="bg-tertiary-fixed text-on-tertiary-fixed hover:bg-tertiary-fixed-dim transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer shadow-sm">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold block leading-tight">Técnica: Máquinas II</span>
                        <span className="font-body-sm text-body-sm text-on-tertiary-fixed-variant text-[11px] block">Prof. Estrada Lugo</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-tertiary-fixed-variant text-[10px] font-semibold">Taller Metalmecánico</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-6 gap-space-xs items-stretch min-h-[72px]">
                    <div className="flex flex-col justify-center px-space-sm bg-surface-container-low rounded-lg">
                      <span className="font-label-sm text-label-sm font-bold text-on-surface">5° Módulo</span>
                      <span className="font-body-sm text-body-sm text-outline">10:50 - 11:40</span>
                    </div>
                    
                    <div className="bg-surface-container hover:bg-surface-container-high transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold text-on-surface block leading-tight">Educación Física</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block">Prof. Zavala R.</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-outline text-[10px]">Canchas Exteriores</span>
                    </div>
                    
                    <div className="bg-primary/5 hover:bg-primary/10 transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold text-primary block leading-tight">Historia II</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block">Lic. Morales</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-outline text-[10px]">Aula 14</span>
                    </div>
                    
                    <div className="bg-primary/5 hover:bg-primary/10 transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold text-primary block leading-tight">Español II</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block">Mtra. Rentería</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-outline text-[10px]">Aula 14</span>
                    </div>
                    
                    <div className="bg-primary/5 hover:bg-primary/10 transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold text-primary block leading-tight">Civismo II</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block">Mtro. Quintero</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-outline text-[10px]">Aula 14</span>
                    </div>
                    
                    <div className="bg-tertiary-fixed text-on-tertiary-fixed hover:bg-tertiary-fixed-dim transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer shadow-sm">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold block leading-tight">Técnica: Máquinas II</span>
                        <span className="font-body-sm text-body-sm text-on-tertiary-fixed-variant text-[11px] block">Prof. Estrada Lugo</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-tertiary-fixed-variant text-[10px] font-semibold">Taller Metalmecánico</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-6 gap-space-xs items-stretch min-h-[72px]">
                    <div className="flex flex-col justify-center px-space-sm bg-surface-container-low rounded-lg">
                      <span className="font-label-sm text-label-sm font-bold text-on-surface">6° Módulo</span>
                      <span className="font-body-sm text-body-sm text-outline">11:40 - 12:30</span>
                    </div>
                    
                    <div className="bg-primary/5 hover:bg-primary/10 transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold text-primary block leading-tight">Inglés II</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block">Lic. Morales</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-outline text-[10px]">Aula 14</span>
                    </div>
                    
                    <div className="bg-primary/5 hover:bg-primary/10 transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold text-primary block leading-tight">Inglés II</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block">Lic. Morales</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-outline text-[10px]">Aula 14</span>
                    </div>
                    
                    <div className="bg-secondary-fixed text-on-secondary-fixed-variant hover:bg-secondary-container/20 transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold block leading-tight">Ciencias II (Física)</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block">Ing. Silva Castañeda</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-secondary font-semibold text-[10px]">Aula 14</span>
                    </div>
                    
                    <div className="bg-surface-container hover:bg-surface-container-high transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold text-on-surface block leading-tight">Tutoría Grupal</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block">Lic. M. Valenzuela</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-outline text-[10px]">Aula 14</span>
                    </div>
                    
                    <div className="bg-tertiary-fixed text-on-tertiary-fixed hover:bg-tertiary-fixed-dim transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer shadow-sm">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold block leading-tight">Técnica: Máquinas II</span>
                        <span className="font-body-sm text-body-sm text-on-tertiary-fixed-variant text-[11px] block">Prof. Estrada Lugo</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-tertiary-fixed-variant text-[10px] font-semibold">Taller Metalmecánico</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-6 gap-space-xs items-stretch min-h-[72px]">
                    <div className="flex flex-col justify-center px-space-sm bg-surface-container-low rounded-lg">
                      <span className="font-label-sm text-label-sm font-bold text-on-surface">7° Módulo</span>
                      <span className="font-body-sm text-body-sm text-outline">12:30 - 13:20</span>
                    </div>
                    
                    <div className="bg-primary/5 hover:bg-primary/10 transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold text-primary block leading-tight">Historia II</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block">Lic. Morales</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-outline text-[10px]">Aula 14</span>
                    </div>
                    
                    <div className="bg-surface-container hover:bg-surface-container-high transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold text-on-surface block leading-tight">Club de Ajedrez</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block">Prof. Valadez</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-outline text-[10px]">Biblioteca</span>
                    </div>
                    
                    <div className="bg-primary/5 hover:bg-primary/10 transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold text-primary block leading-tight">Matemáticas II</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block">Mtro. Quintero</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-outline text-[10px]">Aula 14</span>
                    </div>
                    
                    <div className="bg-primary/5 hover:bg-primary/10 transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold text-primary block leading-tight">Español II</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block">Mtra. Rentería</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-outline text-[10px]">Aula 14</span>
                    </div>
                    
                    <div className="bg-tertiary-fixed text-on-tertiary-fixed hover:bg-tertiary-fixed-dim transition-colors p-space-xs rounded-lg flex flex-col justify-between cursor-pointer shadow-sm">
                      <div>
                        <span className="font-label-sm text-label-sm font-bold block leading-tight">Técnica: Máquinas II</span>
                        <span className="font-body-sm text-body-sm text-on-tertiary-fixed-variant text-[11px] block">Prof. Estrada Lugo</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-tertiary-fixed-variant text-[10px] font-semibold">Taller Metalmecánico</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-surface-container-low px-space-md py-space-sm flex items-center justify-between text-outline">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
                    <span className="font-label-sm text-label-sm">Fórmula de horario avalada por Inspección de Zona Escolar
                      No. 04</span>
                  </div>
                  <span className="font-label-sm text-label-sm">Última modificación: Hoy 09:14 hrs por M. Valenzuela</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                
                <div className="bg-surface-container-low p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-space-xs">
                      <h4 className="font-title-sm text-title-sm text-on-surface">
                        Ocupación: Taller de Metalmecánica
                      </h4>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Turno Matutino</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                      El espacio físico asignado cuenta con 8 horas para 2°B y
                      12 horas compartidas con 3°A.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between font-label-sm text-label-sm">
                      <span className="text-on-surface font-semibold">Disponibilidad en Taller</span>
                      <span className="text-secondary font-bold">20 de 25 hrs (80%)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                      <div className="h-full bg-secondary rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-surface-container-low p-space-md rounded-xl shadow-sm flex items-center gap-space-md">
                  <div className="w-14 h-14 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0">
                    <img className="w-full h-full object-cover rounded-xl" data-alt="Senior Mexican technical workshop teacher in industrial protective lab attire holding technical drafting caliper in an engineering classroom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsQk2QXy81L2eU3z8vHSeKjk-sIOECdB8vTuqPsQQJTVtoCQwFvXVYTE6pe0NvlV548OZtK0JRUCmW8jD22XhEjeE8ydMSt2YuI5XyrPGVClMoCgnUKymmKZPD6XMj8EFebtkifNphSLZEjzHaGSKPkfwNItTsXp-nWYak-bzFgNV5RWpjCJ0xUA8YHfBv9hIsjHOOMf2-0uWAzxEkXEBYacBwNQ-4QBmOoIVRoGT11u0VfNUPwK6x9A" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="font-title-sm text-title-sm text-on-surface">Prof. Armando Estrada Lugo</span>
                      <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-outline">Plaza Definitiva: 30 Horas Totales</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Asignadas hoy: 8 hrs en 2°B. Sin traslape con otros
                      grados.</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
          
          <div className={`fixed bottom-6 right-6 z-50 bg-primary-container text-surface-container-lowest px-space-lg py-space-md rounded-xl shadow-2xl flex items-center gap-space-md transition-all duration-300 ${toast ? "" : "opacity-0 translate-y-4 pointer-events-none"}`} id="toast-success">
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-on-secondary shrink-0">
              <span className="material-symbols-outlined text-[18px]">done</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md font-bold text-surface-container-lowest">{toast?.title || "¡Retícula Actualizada con Éxito!"}</span>
              <span className="font-body-sm text-body-sm text-on-primary-container">{toast?.desc || "El módulo docente ha sido incorporado a la matriz horaria oficial."}</span>
            </div>
          </div>
          
        </div>
      </main>
  );
}
