export default function Asistencia() {
  return (
    <main className="relative pt-20 bg-background min-h-screen px-space-lg py-space-lg">
        <div className="flex flex-col w-full gap-space-lg">
          
          <div className="w-full bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md">
            <div className="flex items-start sm:items-center gap-space-md">
              <div className="relative w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
                <img className="w-full h-full object-cover" data-alt="Fotografía institucional escolar de Daniela, alumna de secundaria mexicana, portando el suéter escolar oficial café con cuello blanco, peinado pulcro, fondo neutro beige de control escolar con luz suave de estudio fotográfico oficial." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpnFEeKll0HLKKaFsxLY6Kp49H42vLNRVtVCgq-ajWi5D-xUbBnhXxFrgo6pEyWX-zrQaVs7R6jaOXcwZU6qDcgBaYBGT1negZi-Lmb2lxx7Ki5BnB4kwsFGC_IhKW0rXI_EclPx5TciQ6062rpNYQiFx3ElZTDXiQkClmOlMs8-I0lF91D3m3--Xgp-bH4gtaBST0ZmWaWwjPuRQ2U3dcXiRRtVIAJRPNzk_7LaTY2PQZ76aOw-q5ng" />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-primary ring-2 ring-surface-container-lowest"></span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-headline-sm text-headline-sm text-primary">Daniela Álvarez Ramírez</span>
                  <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm uppercase tracking-wider">Matrícula 2023-0498</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2 mt-0.5">
                  <span>2° Grado · Grupo "B" (Turno Matutino)</span>
                  <span className="w-1 h-1 rounded-full bg-outline"></span>
                  <span className="text-secondary font-semibold">Taller Tecnológico: Informática y Redes</span>
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-space-sm bg-surface-container px-space-md py-2 rounded-xl self-start lg:self-auto shadow-sm">
              <button className="p-1.5 rounded-lg text-primary hover:bg-surface-container-high transition-colors" title="Semana anterior" type="button">
                <span className="material-symbols-outlined text-[20px]">chevron_left</span>
              </button>
              <div className="flex flex-col text-center px-space-sm">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest font-bold">Semana 09 · Ciclo 2024-2025</span>
                <span className="font-title-sm text-title-sm text-primary font-bold">14 al 18 de Octubre, 2024</span>
              </div>
              <button className="p-1.5 rounded-lg text-primary hover:bg-surface-container-high transition-colors" title="Semana siguiente" type="button">
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
              <span className="w-px h-6 bg-outline-variant mx-1"></span>
              <button className="px-2.5 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary-container transition-colors font-semibold" type="button">
                Hoy
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            
            <div className="bg-surface-container-low rounded-xl p-space-md shadow-sm flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Índice Trimestral</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="font-headline-lg text-headline-lg text-primary font-bold">96.4%</span>
                  <span className="font-label-sm text-label-sm text-secondary font-bold">Excelente</span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Mínimo DGEST requerido: 85%</span>
              </div>
              
              <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewbox="0 0 36 36">
                  <path className="text-surface-variant" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
                  <path className="text-secondary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="96.4, 100" strokeLinecap="round" strokeWidth="3.5"></path>
                </svg>
                <span className="material-symbols-outlined text-[20px] text-primary absolute">verified</span>
              </div>
            </div>
            
            <div className="bg-surface-container-low rounded-xl p-space-md shadow-sm flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Módulos Cubiertos</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="font-headline-lg text-headline-lg text-on-surface font-bold">42</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">de 45 clases</span>
                </div>
                <span className="font-body-sm text-body-sm text-secondary font-semibold mt-0.5">35 horas técnicas de aula</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px]">task_alt</span>
              </div>
            </div>
            
            <div className="bg-surface-container-low rounded-xl p-space-md shadow-sm flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Retardos / Justificados</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-headline-lg text-headline-lg text-primary font-bold">2</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">ret.</span>
                  <span className="text-outline-variant font-body-md">/</span>
                  <span className="font-headline-lg text-headline-lg text-on-surface font-bold">1</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">just.</span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">0 Faltas no aclaradas</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[24px]">pending_actions</span>
              </div>
            </div>
            
            <div className="bg-primary text-on-primary rounded-xl p-space-md shadow-md flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-primary-container uppercase tracking-wider font-bold">Trabajo Social</span>
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed">medical_services</span>
              </div>
              <div className="my-1">
                <p className="font-title-sm text-title-sm text-on-primary leading-tight font-semibold">
                  ¿Inasistencia por Salud?
                </p>
                <p className="font-body-sm text-body-sm text-on-primary-container">
                  Sube receta del IMSS/ISSTE antes de 48 hrs.
                </p>
              </div>
              <button className="w-full mt-2 py-2 px-3 rounded bg-secondary text-on-secondary font-label-md text-label-md hover:opacity-90 transition-opacity flex items-center justify-center gap-1 font-semibold shadow-sm" type="button">
                <span className="material-symbols-outlined text-[16px]">upload_file</span>
                <span>Tramitar Justificante</span>
              </button>
            </div>
          </div>
          
          <div className="w-full bg-surface-container-high/70 rounded-xl p-space-md shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">traffic</span>
              <span className="font-title-sm text-title-sm text-primary font-bold">Criterios Oficiales de Registro en Módulo</span>
            </div>
            <div className="flex flex-wrap items-center gap-space-md">
              
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary-container shadow-xs"></span>
                <span className="font-label-sm text-label-sm text-on-surface font-semibold">Puntual / Presente</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-secondary shadow-xs"></span>
                <span className="font-label-sm text-label-sm text-on-surface font-semibold">Retardo (10 a 15 min)</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-error shadow-xs"></span>
                <span className="font-label-sm text-label-sm text-on-surface font-semibold">Inasistencia Injustificada</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-outline shadow-xs"></span>
                <span className="font-label-sm text-label-sm text-on-surface font-semibold">Justificado / Oficial</span>
              </div>
            </div>
          </div>
          
          <div className="w-full bg-surface-container-low rounded-xl shadow-sm p-space-md flex flex-col gap-space-md overflow-hidden">
            <div className="flex items-center justify-between pb-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[22px]">calendar_view_week</span>
                <h2 className="font-title-md text-title-md text-primary font-bold">
                  Horario Semanal y Registro por Módulos de 50 minutos
                </h2>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold bg-surface-container px-3 py-1 rounded">Módulos Escolares: 7 diarios</span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-surface-container text-on-surface">
                    <th className="p-3 font-label-md text-label-md uppercase tracking-wider font-bold w-24">
                      Módulo
                    </th>
                    <th className="p-3 font-label-md text-label-md uppercase tracking-wider font-bold">
                      <div className="flex flex-col">
                        <span>Lunes 14</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant normal-case font-normal">Registro Completo</span>
                      </div>
                    </th>
                    <th className="p-3 font-label-md text-label-md uppercase tracking-wider font-bold">
                      <div className="flex flex-col">
                        <span>Martes 15</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant normal-case font-normal">1 Retardo en Aula</span>
                      </div>
                    </th>
                    <th className="p-3 font-label-md text-label-md uppercase tracking-wider font-bold">
                      <div className="flex flex-col">
                        <span>Miércoles 16</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant normal-case font-normal">Puntualidad 100%</span>
                      </div>
                    </th>
                    <th className="p-3 font-label-md text-label-md uppercase tracking-wider font-bold">
                      <div className="flex flex-col">
                        <span>Jueves 17</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant normal-case font-normal">Incidencia Médica</span>
                      </div>
                    </th>
                    <th className="p-3 font-label-md text-label-md uppercase tracking-wider font-bold">
                      <div className="flex flex-col">
                        <span>Viernes 18</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant normal-case font-normal">Actividad Cívica</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="space-y-1">
                  
                  <tr className="hover:bg-surface-container/40 transition-colors">
                    <td className="p-3 font-label-sm text-label-sm font-bold text-on-surface-variant align-middle bg-surface-container/60 rounded-l">
                      <span className="text-primary block font-bold">1° Módulo</span>
                      07:00 - 07:50
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Español II</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Profra. M. Valdez</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Matemáticas II</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Ing. J. Morales</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Historia II</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Lic. R. Gómez</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-error-container text-on-error-container flex flex-col shadow-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-title-sm text-title-sm font-bold truncate">Ciencias (Física)</span>
                          <span className="px-1.5 py-0.5 rounded bg-error text-on-error font-label-sm text-label-sm font-bold">FALTA</span>
                        </div>
                        <div className="flex items-center justify-between mt-1 font-body-sm text-body-sm">
                          <span>Profr. L. Herrera</span>
                          <span className="font-semibold text-error">Sin justificar</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Inglés Técnico</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Lic. D. Soto</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-surface-container/40 transition-colors">
                    <td className="p-3 font-label-sm text-label-sm font-bold text-on-surface-variant align-middle bg-surface-container/60 rounded-l">
                      <span className="text-primary block font-bold">2° Módulo</span>
                      07:50 - 08:40
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Español II</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Profra. M. Valdez</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Matemáticas II</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Ing. J. Morales</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Ciencias (Física)</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Profr. L. Herrera</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-error-container text-on-error-container flex flex-col shadow-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-title-sm text-title-sm font-bold truncate">Ciencias (Física)</span>
                          <span className="px-1.5 py-0.5 rounded bg-error text-on-error font-label-sm text-label-sm font-bold">FALTA</span>
                        </div>
                        <div className="flex items-center justify-between mt-1 font-body-sm text-body-sm">
                          <span>Profr. L. Herrera</span>
                          <span className="font-semibold text-error">Sin justificar</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Inglés Técnico</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Lic. D. Soto</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-surface-container/40 transition-colors">
                    <td className="p-3 font-label-sm text-label-sm font-bold text-on-surface-variant align-middle bg-surface-container/60 rounded-l">
                      <span className="text-primary block font-bold">3° Módulo</span>
                      08:40 - 09:30
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Formación Cívica</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Mtra. C. Lozano</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Español II</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Profra. M. Valdez</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Taller Informática</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Lab. Redes 2</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container-high text-on-surface flex flex-col shadow-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-title-sm text-title-sm text-secondary font-bold truncate">Matemáticas II</span>
                          <span className="px-1.5 py-0.5 rounded bg-secondary text-on-secondary font-label-sm text-label-sm font-bold">RETARDO</span>
                        </div>
                        <div className="flex items-center justify-between mt-1 font-body-sm text-body-sm">
                          <span className="text-on-surface-variant">Ing. J. Morales</span>
                          <span className="font-semibold text-secondary">08:48 hrs (+8m)</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Educación Física</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Cancha Techada</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  
                  <tr className="bg-surface-container-high/40">
                    <td className="p-2 text-center font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest font-bold">
                      09:30 - 10:00
                    </td>
                    <td className="p-2 text-center font-label-md text-label-md text-primary font-semibold" colSpan="5">
                      <div className="flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">restaurant</span>
                        <span>Receso General Escolar y Desayunador
                          Institucional</span>
                      </div>
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-surface-container/40 transition-colors">
                    <td className="p-3 font-label-sm text-label-sm font-bold text-on-surface-variant align-middle bg-surface-container/60 rounded-l">
                      <span className="text-primary block font-bold">4° Módulo</span>
                      10:00 - 10:50
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Taller Informática</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Profr. A. Silva</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container-high text-on-surface flex flex-col shadow-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-title-sm text-title-sm text-secondary font-bold truncate">Historia II</span>
                          <span className="px-1.5 py-0.5 rounded bg-secondary text-on-secondary font-label-sm text-label-sm font-bold">RETARDO</span>
                        </div>
                        <div className="flex items-center justify-between mt-1 font-body-sm text-body-sm">
                          <span className="text-on-surface-variant">Lic. R. Gómez</span>
                          <span className="font-semibold text-secondary">+12 min (Pase Pref.)</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Taller Informática</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Lab. Redes 2</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Formación Cívica</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Mtra. C. Lozano</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container-high text-on-surface flex flex-col shadow-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-title-sm text-title-sm font-bold truncate">Banda de Guerra</span>
                          <span className="px-1.5 py-0.5 rounded bg-outline text-on-primary font-label-sm text-label-sm font-bold">COMISIÓN</span>
                        </div>
                        <div className="flex items-center justify-between mt-1 font-body-sm text-body-sm text-on-surface-variant">
                          <span>Ensayo de Zona</span>
                          <span className="font-semibold">Oficio #42</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-surface-container/40 transition-colors">
                    <td className="p-3 font-label-sm text-label-sm font-bold text-on-surface-variant align-middle bg-surface-container/60 rounded-l">
                      <span className="text-primary block font-bold">5° Módulo</span>
                      10:50 - 11:40
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Taller Informática</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Profr. A. Silva</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Español II</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Profra. M. Valdez</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Taller Informática</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Lab. Redes 2</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Artes Visuales</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Taller de Dibujo</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container-high text-on-surface flex flex-col shadow-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-title-sm text-title-sm font-bold truncate">Banda de Guerra</span>
                          <span className="px-1.5 py-0.5 rounded bg-outline text-on-primary font-label-sm text-label-sm font-bold">COMISIÓN</span>
                        </div>
                        <div className="flex items-center justify-between mt-1 font-body-sm text-body-sm text-on-surface-variant">
                          <span>Plaza Cívica</span>
                          <span className="font-semibold">Oficio #42</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-surface-container/40 transition-colors">
                    <td className="p-3 font-label-sm text-label-sm font-bold text-on-surface-variant align-middle bg-surface-container/60 rounded-l">
                      <span className="text-primary block font-bold">6° Módulo</span>
                      11:40 - 12:30
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Taller Informática</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Profr. A. Silva</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Ciencias (Física)</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Profr. L. Herrera</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Matemáticas II</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Ing. J. Morales</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Artes Visuales</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Taller de Dibujo</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Historia II</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Lic. R. Gómez</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-surface-container/40 transition-colors">
                    <td className="p-3 font-label-sm text-label-sm font-bold text-on-surface-variant align-middle bg-surface-container/60 rounded-l">
                      <span className="text-primary block font-bold">7° Módulo</span>
                      12:30 - 13:20
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Taller Informática</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Profr. A. Silva</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Historia II</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Lic. R. Gómez</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Español II</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Profra. M. Valdez</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Taller Informática</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Lab. Redes 2</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-2 align-middle">
                      <div className="p-2.5 rounded-lg bg-surface-container flex flex-col shadow-xs">
                        <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Tutoría Grupal</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Prefectura / Aula 2B</span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">Presente</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
            
            <div className="lg:col-span-8 bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">fingerprint</span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-title-md text-title-md text-primary font-bold">
                      Torniquete Peatonal · Puerta Principal ESTIS 70
                    </h3>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Control Automatizado por Credencial Inteligente y Óptica
                      Facial</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span>Torniquete T-02 Activo</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                
                <div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-2 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm font-bold uppercase">Entrada Matutina</span>
                    <span className="material-symbols-outlined text-primary text-[20px]">login</span>
                  </div>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-headline-lg text-headline-lg text-primary font-bold">06:52 hrs</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">Torniquete 2 (Carril A)</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Puntual. Tolerancia límite del plantel: 07:10 hrs.
                  </p>
                  <div className="mt-2 pt-2 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-primary">sensors</span>
                      Lectura QR / RFID #8812A
                    </span>
                    <span className="text-primary font-bold">Validado</span>
                  </div>
                </div>
                
                <div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-2 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold uppercase">Salida Turno</span>
                    <span className="material-symbols-outlined text-secondary text-[20px]">logout</span>
                  </div>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-headline-lg text-headline-lg text-on-surface font-bold">13:25 hrs</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">Torniquete 1 (Carril B)</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Salida oficial al toque de sirena de las 13:20 hrs.
                  </p>
                  <div className="mt-2 pt-2 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-primary">verified_user</span>
                      Retiro Autorizado
                    </span>
                    <span className="text-secondary font-bold">Completado</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 mt-1">
                <span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider">Bitácora Perimetral de la Semana (Puerta de Alumnos)</span>
                <div className="space-y-1.5">
                  <div className="p-2.5 rounded-lg bg-surface-container flex items-center justify-between font-body-sm text-body-sm">
                    <div className="flex items-center gap-3">
                      <span className="font-label-md text-label-md font-bold text-primary">Viernes 18</span>
                      <span className="text-on-surface">Ingreso: 06:48 hrs · Salida: 13:28 hrs</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-variant text-on-surface font-label-sm text-label-sm">Normal</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface-container flex items-center justify-between font-body-sm text-body-sm">
                    <div className="flex items-center gap-3">
                      <span className="font-label-md text-label-md font-bold text-primary">Jueves 17</span>
                      <span className="text-on-surface">Ingreso: 08:35 hrs (Pase Médico) · Salida: 13:22
                        hrs</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">Ingreso Tardío</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface-container flex items-center justify-between font-body-sm text-body-sm">
                    <div className="flex items-center gap-3">
                      <span className="font-label-md text-label-md font-bold text-primary">Miércoles 16</span>
                      <span className="text-on-surface">Ingreso: 06:55 hrs · Salida: 13:30 hrs</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-variant text-on-surface font-label-sm text-label-sm">Normal</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col justify-between gap-space-md">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[22px]">notifications_active</span>
                  <h3 className="font-title-md text-title-md text-primary font-bold">
                    Alertas Push &amp; SMS
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Notificaciones enviadas en tiempo real al teléfono del tutor
                  legal:
                  <strong className="text-on-surface">(+52) 228-845-9921</strong>.
                </p>
                
                <div className="flex flex-col gap-space-sm mt-1">
                  <div className="p-3 rounded-lg bg-surface-container shadow-xs flex flex-col gap-1">
                    <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                      <span className="flex items-center gap-1 font-bold text-primary">
                        <span className="material-symbols-outlined text-[14px]">sms</span>
                        SMS Institucional
                      </span>
                      <span>Hoy 06:53 hrs</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface">
                      "JUNO INFORMA: Daniela Álvarez ingresó por Torniquete 02 a
                      las 06:52 hrs. Que tenga excelente jornada académica."
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-container shadow-xs flex flex-col gap-1">
                    <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                      <span className="flex items-center gap-1 font-bold text-secondary">
                        <span className="material-symbols-outlined text-[14px]">warning</span>
                        Alerta de Retardo
                      </span>
                      <span>Jueves 08:42 hrs</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface">
                      "Prefectura registró ingreso de Daniela a las 08:35 hrs
                      con justificante de consulta médica externa."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-space-sm rounded-lg bg-surface-container flex flex-col gap-2">
                <span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider">Canales Activos</span>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-primary">check_circle</span>
                    <span className="font-label-md text-label-md text-on-surface">Mensajería SMS Directa</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold">Activado</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-primary">check_circle</span>
                    <span className="font-label-md text-label-md text-on-surface">Notificaciones App Móvil</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold">Activado</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full bg-surface-container-low rounded-xl p-space-md shadow-sm flex flex-col md:flex-row items-center gap-space-md">
            <div className="w-full md:w-56 h-36 rounded-lg overflow-hidden shrink-0 bg-surface-container">
              <img className="w-full h-full object-cover" data-alt="Taller de computación y redes de secundaria técnica con computadoras de escritorio dispuestas ordenadamente, cables ethernet organizados, estudiantes uniformados trabajando con concentración y profesor asesorando al fondo, iluminación natural de salón de clases mexicano." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2B-_svg3Tk42q7FDJlx7zv5tBxWI8l0hRSxIPzETUMRztJFvfpKAw-ECE5qU-1TRHZBXGFnjIIzQydXpn63Mel1q7GUXaZxFNOgyhsyZwLVYvv8KofPovTvApZ0sWSa94YBS_XYaSZIu8hE6uG5SL-ni4bz1TAgVrdt4bXg9G8Pk_vmupylTBqEzN8PlDQwHbaqK-DDl1YzSzshpJpodUP8Xx8U0Rvm5vyJhuW7L7Xb91PB6dY_RVeA" />
            </div>
            <div className="flex flex-col justify-center gap-1">
              <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Compromiso Tecnológico y Disciplina Escolar</span>
              <h4 className="font-title-sm text-title-sm text-primary font-bold">
                Reglamento General de Talleres Industriales y Tecnológicos
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Las sesiones de Informática en 2° Grado son de 4 módulos
                consecutivos los días lunes y miércoles. La inasistencia no
                justificada a un módulo práctico requiere recuperación directa
                en horario de contra-turno para no afectar la calificación
                bimestral del taller.
              </p>
              <div className="flex items-center gap-space-md mt-1 font-label-sm text-label-sm text-primary font-semibold">
                <a className="flex items-center gap-1 hover:underline" href="#">
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  Descargar Hoja de Asistencia Oficial PDF
                </a>
                <a className="flex items-center gap-1 hover:underline text-secondary" href="#">
                  <span className="material-symbols-outlined text-[16px]">contact_phone</span>
                  Contactar a Prefectura General
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </main>
  );
}
