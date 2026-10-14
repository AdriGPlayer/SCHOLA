export default function Horario() {
  return (
    <main className="relative pt-16 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <div className="px-margin py-space-xl flex flex-col gap-space-xl max-w-7xl mx-auto w-full">
            
            <div className="relative bg-surface-container-low rounded-xl p-space-lg shadow-sm overflow-hidden">
              <div className="absolute -right-8 -top-8 w-64 h-64 bg-surface-container-highest/40 rounded-full blur-3xl pointer-events-none"></div>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg relative z-10">
                <div className="flex items-start sm:items-center gap-space-md">
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md">
                      <span className="material-symbols-outlined text-[32px]">engineering</span>
                    </div>
                    <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-secondary ring-2 ring-surface-container-low" title="Ciclo 2024-2025 Activo"></span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-wrap items-center gap-x-space-sm gap-y-1 mb-1">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary bg-surface-container px-space-xs py-0.5 rounded">Cédula Técnica Alumno</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">ESTIS No. 70 • Clave CCT: 30DST0070Z</span>
                    </div>
                    <h1 className="font-headline-md text-headline-md text-primary tracking-tight font-bold">
                      Álvarez Ramírez Daniela
                    </h1>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      2° Grado • Grupo "B" • Turno Matutino • Especialidad en
                      Computación
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap sm:flex-nowrap gap-space-sm">
                  <div className="flex-1 sm:flex-initial bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex items-center gap-space-sm">
                    <div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[20px]">meeting_room</span>
                    </div>
                    <div className="flex flex-col pr-space-xs">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Aula Regular</span>
                      <span className="font-label-lg text-label-lg text-on-surface font-bold">Aula 14 (Edificio B)</span>
                    </div>
                  </div>
                  <div className="flex-1 sm:flex-initial bg-primary-container text-on-primary p-space-sm rounded-lg shadow-sm flex items-center gap-space-sm">
                    <div className="w-10 h-10 rounded bg-primary flex items-center justify-center text-primary-fixed">
                      <span className="material-symbols-outlined text-[20px]">memory</span>
                    </div>
                    <div className="flex flex-col pr-space-xs">
                      <span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase">Taller Técnico</span>
                      <span className="font-label-lg text-label-lg text-on-primary font-bold">Informática y Redes</span>
                      <span className="font-label-sm text-label-sm text-surface-variant">Lab C • Planta Alta</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
              
              <div className="relative bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between mb-space-sm">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-ping"></span>
                    <span className="font-label-sm text-label-sm uppercase font-bold text-secondary">Módulo en Curso</span>
                  </div>
                  <span className="font-label-sm text-label-sm bg-surface-container px-space-xs py-0.5 rounded text-on-surface-variant">3er Módulo</span>
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">
                    Taller de Informática
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">person</span>
                    Ing. Zavala Morán • Lab C
                  </div>
                </div>
                <div className="mt-space-md pt-space-xs flex items-center justify-between text-on-surface-variant font-label-md text-label-md">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">schedule</span>
                    08:40 - 09:30</span>
                  <span className="text-secondary font-bold">25 min restantes</span>
                </div>
              </div>
              
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="font-label-sm text-label-sm uppercase font-bold text-on-surface-variant">Carga Lectiva</span>
                  <span className="material-symbols-outlined text-primary text-[20px]">view_timeline</span>
                </div>
                <div>
                  <div className="flex items-baseline gap-space-xs">
                    <span className="font-headline-xl text-headline-xl text-primary font-bold">35</span>
                    <span className="font-label-lg text-label-lg text-on-surface-variant">módulos / sem</span>
                  </div>
                  <div className="w-full bg-surface-container rounded-full h-1.5 mt-2 overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: "22.8%" }}></div>
                  </div>
                </div>
                <div className="mt-space-md pt-space-xs flex items-center justify-between font-label-md text-label-md text-on-surface-variant">
                  <span className="text-secondary font-bold">8 hrs Taller Especializado</span>
                  <span>Troncales: 27 hrs</span>
                </div>
              </div>
              
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="font-label-sm text-label-sm uppercase font-bold text-on-surface-variant">Siguiente Período</span>
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">restaurant</span>
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">
                    Receso Pedagógico
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Patio Cívico &amp; Cafetería Escolar
                  </div>
                </div>
                <div className="mt-space-md pt-space-xs flex items-center justify-between text-on-surface-variant font-label-md text-label-md">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">schedule</span>
                    09:30 - 10:00</span>
                  <span className="bg-surface-container px-space-xs py-0.5 rounded font-label-sm text-label-sm text-on-surface">30 minutos</span>
                </div>
              </div>
              
              <div className="bg-surface-container p-space-md rounded-xl shadow-sm flex flex-col justify-between gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase font-bold text-on-surface">Validación de Horario</span>
                  <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="w-full bg-primary hover:bg-primary-container text-on-primary py-2 px-space-sm rounded font-label-lg text-label-lg flex items-center justify-center gap-space-xs transition-colors shadow-sm" type="button">
                    <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                    <span>Descargar Horario Oficial PDF</span>
                  </button>
                  <button className="w-full bg-surface-container-lowest hover:bg-surface-container-high text-on-surface py-2 px-space-sm rounded font-label-lg text-label-lg flex items-center justify-center gap-space-xs transition-colors shadow-sm" type="button">
                    <span className="material-symbols-outlined text-[18px]">sync</span>
                    <span>Sincronizar Google Calendar</span>
                  </button>
                </div>
                <div className="text-center font-label-sm text-label-sm text-on-surface-variant">
                  Actualizado al 23 de Septiembre 2024
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-space-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-sm">
                  <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                  </div>
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Malla Curricular Semanal
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Distribución de 7 módulos diarios • Jornada Matutina
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-space-xs">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase mr-1">Leyenda:</span>
                  <span className="flex items-center gap-1 font-label-sm text-label-sm bg-surface-container-lowest px-2 py-1 rounded shadow-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                    Troncales
                  </span>
                  <span className="flex items-center gap-1 font-label-sm text-label-sm bg-primary-container text-on-primary px-2 py-1 rounded shadow-sm font-bold">
                    <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim"></span>
                    Taller Técnico
                  </span>
                  <span className="flex items-center gap-1 font-label-sm text-label-sm bg-surface-container-high text-on-surface px-2 py-1 rounded shadow-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                    Ciencias / Lab
                  </span>
                  <span className="flex items-center gap-1 font-label-sm text-label-sm bg-surface-container px-2 py-1 rounded shadow-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-outline"></span>
                    Cívica / Ed. Física
                  </span>
                </div>
              </div>
              
              <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[960px] text-left border-collapse">
                    <thead>
                      <tr className="bg-surface-container-low text-on-surface">
                        <th className="py-space-sm px-space-md font-label-sm text-label-sm uppercase tracking-wider w-28 text-center">
                          Horario
                        </th>
                        <th className="py-space-sm px-space-md font-label-md text-label-md uppercase tracking-wider text-center w-[18%]">
                          Lunes
                        </th>
                        <th className="py-space-sm px-space-md font-label-md text-label-md uppercase tracking-wider text-center w-[18%]">
                          Martes
                        </th>
                        <th className="py-space-sm px-space-md font-label-md text-label-md uppercase tracking-wider text-center w-[18%] bg-surface-container-high/60">
                          Miércoles (Hoy)
                        </th>
                        <th className="py-space-sm px-space-md font-label-md text-label-md uppercase tracking-wider text-center w-[18%]">
                          Jueves
                        </th>
                        <th className="py-space-sm px-space-md font-label-md text-label-md uppercase tracking-wider text-center w-[18%]">
                          Viernes
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-container">
                      
                      <tr className="hover:bg-surface-container-low/40 transition-colors">
                        <td className="p-space-sm text-center bg-surface-container-lowest font-label-sm text-label-sm text-on-surface-variant font-bold">
                          <div className="text-on-surface">07:00 - 07:50</div>
                          <div className="text-secondary text-[10px]">
                            1° Módulo
                          </div>
                        </td>
                        
                        <td className="p-1.5">
                          <div className="bg-surface-container p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Troncal</span>
                              <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight truncate">
                                Español II
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Prof. Delgado M.
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">
                              Aula 14 • Edif. B
                            </div>
                          </div>
                        </td>
                        
                        <td className="p-1.5">
                          <div className="bg-surface-container p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Troncal</span>
                              <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight truncate">
                                Matemáticas II
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Mtra. Rivas H.
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">
                              Aula 14 • Edif. B
                            </div>
                          </div>
                        </td>
                        
                        <td className="p-1.5 bg-surface-container-high/30">
                          <div className="bg-surface-container p-space-sm rounded-lg flex flex-col justify-between h-24 shadow-sm hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Troncal</span>
                              <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight truncate">
                                Historia de México
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Mtro. Morales G.
                              </div>
                            </div>
                            <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                              <span>Aula 14</span>
                              <span className="text-on-surface-variant font-bold">Concluida</span>
                            </div>
                          </div>
                        </td>
                        
                        <td className="p-1.5">
                          <div className="bg-surface-container-high p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Científica</span>
                              <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight truncate">
                                Ciencias II (Física)
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Dra. Salcedo L.
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">
                              Laboratorio 2
                            </div>
                          </div>
                        </td>
                        
                        <td className="p-1.5">
                          <div className="bg-surface-container p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Troncal</span>
                              <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight truncate">
                                Lengua Extranjera (Inglés)
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Prof. Estrada T.
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">
                              Aula 14 • Edif. B
                            </div>
                          </div>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-surface-container-low/40 transition-colors">
                        <td className="p-space-sm text-center bg-surface-container-lowest font-label-sm text-label-sm text-on-surface-variant font-bold">
                          <div className="text-on-surface">07:50 - 08:40</div>
                          <div className="text-secondary text-[10px]">
                            2° Módulo
                          </div>
                        </td>
                        <td className="p-1.5">
                          <div className="bg-surface-container p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Troncal</span>
                              <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight truncate">
                                Español II
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Prof. Delgado M.
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">
                              Aula 14 • Edif. B
                            </div>
                          </div>
                        </td>
                        <td className="p-1.5">
                          <div className="bg-surface-container p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Troncal</span>
                              <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight truncate">
                                Matemáticas II
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Mtra. Rivas H.
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">
                              Aula 14 • Edif. B
                            </div>
                          </div>
                        </td>
                        <td className="p-1.5 bg-surface-container-high/30">
                          <div className="bg-surface-container-high p-space-sm rounded-lg flex flex-col justify-between h-24 shadow-sm hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Científica</span>
                              <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight truncate">
                                Ciencias II (Física)
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Dra. Salcedo L.
                              </div>
                            </div>
                            <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                              <span>Lab. 2</span>
                              <span className="text-on-surface-variant font-bold">Concluida</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-1.5">
                          <div className="bg-surface-container-high p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Científica</span>
                              <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight truncate">
                                Ciencias II (Física)
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Dra. Salcedo L.
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">
                              Laboratorio 2
                            </div>
                          </div>
                        </td>
                        <td className="p-1.5">
                          <div className="bg-surface-container p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Troncal</span>
                              <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight truncate">
                                Lengua Extranjera (Inglés)
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Prof. Estrada T.
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">
                              Aula 14 • Edif. B
                            </div>
                          </div>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-surface-container-low/40 transition-colors">
                        <td className="p-space-sm text-center bg-surface-container-lowest font-label-sm text-label-sm text-on-surface-variant font-bold">
                          <div className="text-on-surface">08:40 - 09:30</div>
                          <div className="text-secondary text-[10px]">
                            3er Módulo
                          </div>
                        </td>
                        <td className="p-1.5">
                          <div className="bg-surface-container p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Troncal</span>
                              <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight truncate">
                                Formación Cívica y Ética
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Lic. Mendoza C.
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">
                              Aula 14 • Edif. B
                            </div>
                          </div>
                        </td>
                        <td className="p-1.5">
                          <div className="bg-surface-container p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Troncal</span>
                              <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight truncate">
                                Español II
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Prof. Delgado M.
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">
                              Aula 14 • Edif. B
                            </div>
                          </div>
                        </td>
                        
                        <td className="p-1.5 bg-surface-container-high/60">
                          <div className="bg-primary-container text-on-primary p-space-sm rounded-lg flex flex-col justify-between h-24 shadow-md ring-2 ring-secondary">
                            <div>
                              <div className="flex items-center justify-between">
                                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed font-bold">Especialidad Técnica</span>
                                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                              </div>
                              <div className="font-label-lg text-label-lg text-on-primary font-bold leading-tight truncate">
                                Taller de Informática
                              </div>
                              <div className="font-body-sm text-body-sm text-surface-variant truncate">
                                Ing. Zavala Morán
                              </div>
                            </div>
                            <div className="flex items-center justify-between font-label-sm text-label-sm text-primary-fixed-dim">
                              <span>Lab C • Planta Alta</span>
                              <span className="bg-secondary text-on-secondary px-1.5 py-0.5 rounded font-bold uppercase text-[9px]">EN CURSO</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-1.5">
                          <div className="bg-surface-container p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Troncal</span>
                              <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight truncate">
                                Matemáticas II
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Mtra. Rivas H.
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">
                              Aula 14 • Edif. B
                            </div>
                          </div>
                        </td>
                        <td className="p-1.5">
                          <div className="bg-surface-container p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Formativa</span>
                              <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight truncate">
                                Educación Física II
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Prof. Cruz Navarrete
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">
                              Canchas Techadas
                            </div>
                          </div>
                        </td>
                      </tr>
                      
                      <tr className="bg-surface-container-high/40">
                        <td className="py-2 px-space-sm text-center font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                          09:30 - 10:00
                        </td>
                        <td className="py-2 px-space-md text-center" colSpan="5">
                          <div className="flex items-center justify-center gap-space-sm text-on-surface-variant font-label-md text-label-md">
                            <span className="material-symbols-outlined text-[18px] text-secondary">lunch_dining</span>
                            <span className="font-bold text-on-surface">RECESO PEDAGÓGICO Y DESAYUNO ESCOLAR (30
                              MINUTOS)</span>
                            <span className="text-body-sm text-on-surface-variant">• Áreas asignadas: Patio Central y
                              Cafetería</span>
                          </div>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-surface-container-low/40 transition-colors">
                        <td className="p-space-sm text-center bg-surface-container-lowest font-label-sm text-label-sm text-on-surface-variant font-bold">
                          <div className="text-on-surface">10:00 - 10:50</div>
                          <div className="text-secondary text-[10px]">
                            4° Módulo
                          </div>
                        </td>
                        <td className="p-1.5">
                          <div className="bg-primary-container text-on-primary p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed font-bold">Taller Técnico</span>
                              <div className="font-label-lg text-label-lg text-on-primary font-bold leading-tight truncate">
                                Taller de Informática
                              </div>
                              <div className="font-body-sm text-body-sm text-surface-variant truncate">
                                Ing. Zavala Morán
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-primary-fixed-dim">
                              Lab C • Planta Alta
                            </div>
                          </div>
                        </td>
                        <td className="p-1.5">
                          <div className="bg-surface-container p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Troncal</span>
                              <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight truncate">
                                Historia de México
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Mtro. Morales G.
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">
                              Aula 14 • Edif. B
                            </div>
                          </div>
                        </td>
                        <td className="p-1.5 bg-surface-container-high/30">
                          <div className="bg-primary-container text-on-primary p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed font-bold">Taller Técnico</span>
                              <div className="font-label-lg text-label-lg text-on-primary font-bold leading-tight truncate">
                                Taller de Informática
                              </div>
                              <div className="font-body-sm text-body-sm text-surface-variant truncate">
                                Ing. Zavala Morán
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-primary-fixed-dim">
                              Lab C • Planta Alta
                            </div>
                          </div>
                        </td>
                        <td className="p-1.5">
                          <div className="bg-surface-container p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Troncal</span>
                              <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight truncate">
                                Formación Cívica y Ética
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Lic. Mendoza C.
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">
                              Aula 14 • Edif. B
                            </div>
                          </div>
                        </td>
                        <td className="p-1.5">
                          <div className="bg-surface-container p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Formativa</span>
                              <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight truncate">
                                Educación Física II
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Prof. Cruz Navarrete
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">
                              Canchas Techadas
                            </div>
                          </div>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-surface-container-low/40 transition-colors">
                        <td className="p-space-sm text-center bg-surface-container-lowest font-label-sm text-label-sm text-on-surface-variant font-bold">
                          <div className="text-on-surface">10:50 - 11:40</div>
                          <div className="text-secondary text-[10px]">
                            5° Módulo
                          </div>
                        </td>
                        <td className="p-1.5">
                          <div className="bg-primary-container text-on-primary p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed font-bold">Taller Técnico</span>
                              <div className="font-label-lg text-label-lg text-on-primary font-bold leading-tight truncate">
                                Taller de Informática
                              </div>
                              <div className="font-body-sm text-body-sm text-surface-variant truncate">
                                Ing. Zavala Morán
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-primary-fixed-dim">
                              Lab C • Planta Alta
                            </div>
                          </div>
                        </td>
                        <td className="p-1.5">
                          <div className="bg-surface-container p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Troncal</span>
                              <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight truncate">
                                Español II
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Prof. Delgado M.
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">
                              Aula 14 • Edif. B
                            </div>
                          </div>
                        </td>
                        <td className="p-1.5 bg-surface-container-high/30">
                          <div className="bg-primary-container text-on-primary p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed font-bold">Taller Técnico</span>
                              <div className="font-label-lg text-label-lg text-on-primary font-bold leading-tight truncate">
                                Taller de Informática
                              </div>
                              <div className="font-body-sm text-body-sm text-surface-variant truncate">
                                Ing. Zavala Morán
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-primary-fixed-dim">
                              Lab C • Planta Alta
                            </div>
                          </div>
                        </td>
                        <td className="p-1.5">
                          <div className="bg-surface-container p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Troncal</span>
                              <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight truncate">
                                Artes Visuales II
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Mtra. Ponce Soto
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">
                              Aula de Expresión
                            </div>
                          </div>
                        </td>
                        <td className="p-1.5">
                          <div className="bg-surface-container p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Troncal</span>
                              <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight truncate">
                                Matemáticas II
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Mtra. Rivas H.
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">
                              Aula 14 • Edif. B
                            </div>
                          </div>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-surface-container-low/40 transition-colors">
                        <td className="p-space-sm text-center bg-surface-container-lowest font-label-sm text-label-sm text-on-surface-variant font-bold">
                          <div className="text-on-surface">11:40 - 12:30</div>
                          <div className="text-secondary text-[10px]">
                            6° Módulo
                          </div>
                        </td>
                        <td className="p-1.5">
                          <div className="bg-primary-container text-on-primary p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed font-bold">Taller Técnico</span>
                              <div className="font-label-lg text-label-lg text-on-primary font-bold leading-tight truncate">
                                Taller de Informática
                              </div>
                              <div className="font-body-sm text-body-sm text-surface-variant truncate">
                                Ing. Zavala Morán
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-primary-fixed-dim">
                              Lab C • Planta Alta
                            </div>
                          </div>
                        </td>
                        <td className="p-1.5">
                          <div className="bg-surface-container-high p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Científica</span>
                              <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight truncate">
                                Ciencias II (Física)
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Dra. Salcedo L.
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">
                              Laboratorio 2
                            </div>
                          </div>
                        </td>
                        <td className="p-1.5 bg-surface-container-high/30">
                          <div className="bg-surface-container p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Troncal</span>
                              <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight truncate">
                                Matemáticas II
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Mtra. Rivas H.
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">
                              Aula 14 • Edif. B
                            </div>
                          </div>
                        </td>
                        <td className="p-1.5">
                          <div className="bg-surface-container p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Troncal</span>
                              <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight truncate">
                                Artes Visuales II
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Mtra. Ponce Soto
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">
                              Aula de Expresión
                            </div>
                          </div>
                        </td>
                        <td className="p-1.5">
                          <div className="bg-surface-container p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Troncal</span>
                              <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight truncate">
                                Tutoría y Socioemocional
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Lic. Mendoza C.
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">
                              Aula 14 • Edif. B
                            </div>
                          </div>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-surface-container-low/40 transition-colors">
                        <td className="p-space-sm text-center bg-surface-container-lowest font-label-sm text-label-sm text-on-surface-variant font-bold">
                          <div className="text-on-surface">12:30 - 13:20</div>
                          <div className="text-secondary text-[10px]">
                            7° Módulo
                          </div>
                        </td>
                        <td className="p-1.5">
                          <div className="bg-surface-container p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Troncal</span>
                              <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight truncate">
                                Lengua Extranjera (Inglés)
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Prof. Estrada T.
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">
                              Aula 14 • Edif. B
                            </div>
                          </div>
                        </td>
                        <td className="p-1.5">
                          <div className="bg-surface-container p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Troncal</span>
                              <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight truncate">
                                Historia de México
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Mtro. Morales G.
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">
                              Aula 14 • Edif. B
                            </div>
                          </div>
                        </td>
                        <td className="p-1.5 bg-surface-container-high/30">
                          <div className="bg-surface-container p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Troncal</span>
                              <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight truncate">
                                Español II
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Prof. Delgado M.
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">
                              Aula 14 • Edif. B
                            </div>
                          </div>
                        </td>
                        <td className="p-1.5">
                          <div className="bg-primary-container text-on-primary p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed font-bold">Taller Técnico</span>
                              <div className="font-label-lg text-label-lg text-on-primary font-bold leading-tight truncate">
                                Taller de Informática
                              </div>
                              <div className="font-body-sm text-body-sm text-surface-variant truncate">
                                Ing. Zavala Morán
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-primary-fixed-dim">
                              Lab C • Planta Alta
                            </div>
                          </div>
                        </td>
                        <td className="p-1.5">
                          <div className="bg-surface-container p-space-sm rounded-lg flex flex-col justify-between h-24 hover:shadow-md transition-shadow">
                            <div>
                              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Formativa</span>
                              <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight truncate">
                                Autonomía Curricular
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Plantel Docente
                              </div>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">
                              Aula Audiovisual
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              
              <div className="lg:col-span-5 bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded bg-primary text-on-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">policy</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                      Normativa del Taller Técnico
                    </h3>
                    <span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">Laboratorio de Informática y Redes</span>
                  </div>
                </div>
                <div className="flex flex-col gap-space-sm">
                  <div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-start gap-space-sm shadow-sm">
                    <div className="w-7 h-7 rounded bg-surface-container flex items-center justify-center shrink-0 text-secondary mt-0.5">
                      <span className="material-symbols-outlined text-[16px]">checkroom</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface font-bold">Bata Institucional Obligatoria</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Uso forzoso de bata color blanco o beige reglamentaria
                        de la ESTIS 70 con escudo bordado para acceso a mesas de
                        ensamblaje.
                      </p>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-start gap-space-sm shadow-sm">
                    <div className="w-7 h-7 rounded bg-surface-container flex items-center justify-center shrink-0 text-secondary mt-0.5">
                      <span className="material-symbols-outlined text-[16px]">no_food</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface font-bold">Prohibición Estricta de Alimentos y Líquidos</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Queda estrictamente prohibido introducir recipientes con
                        agua, golosinas o alimentos a la zona de terminales y
                        racks de telecomunicaciones.
                      </p>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-start gap-space-sm shadow-sm">
                    <div className="w-7 h-7 rounded bg-surface-container flex items-center justify-center shrink-0 text-secondary mt-0.5">
                      <span className="material-symbols-outlined text-[16px]">lan</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface font-bold">Políticas de Uso de Terminal y Red DGEST</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Cada alumno es responsable de la estación asignada
                        (PC-LabC-18). Prohibida la instalación de software no
                        autorizado o alteración de direcciones IP.
                      </p>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-start gap-space-sm shadow-sm">
                    <div className="w-7 h-7 rounded bg-surface-container flex items-center justify-center shrink-0 text-secondary mt-0.5">
                      <span className="material-symbols-outlined text-[16px]">assignment_turned_in</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface font-bold">Bitácora de Entrega al Término del Módulo</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Firma de bitácora técnica con el jefe de taller antes de
                        salir. Orden de periféricos, apagado de monitor y silla
                        colocada en su posición.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-space-sm bg-surface-container rounded-lg flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Jefe de Academia Técnica:</span>
                  <span className="font-label-md text-label-md text-primary font-bold">Ing. Roberto Zavala M.</span>
                </div>
              </div>
              
              <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[20px]">badge</span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Plantilla Docente • 2° Grupo "B"
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Canales oficiales de orientación y asesoría curricular
                      </p>
                    </div>
                  </div>
                  <span className="font-label-sm text-label-sm bg-surface-container px-space-xs py-1 rounded text-on-surface font-semibold self-start sm:self-auto">7 Catedráticos</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
                  <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col justify-between gap-2 hover:bg-surface-container transition-colors">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="font-label-sm text-label-sm text-secondary uppercase font-bold">Taller Técnico Informática</span>
                        <div className="font-label-lg text-label-lg text-on-surface font-bold">
                          Ing. Roberto Zavala Morán
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-[12px] font-bold">
                        RZ
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <a className="font-label-sm text-label-sm text-primary hover:text-secondary flex items-center gap-1 font-semibold" href="mailto:rzavala@estis70.edu.mx">
                        <span className="material-symbols-outlined text-[14px]">mail</span>
                        rzavala@estis70.edu.mx
                      </a>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Cubículo 4</span>
                    </div>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col justify-between gap-2 hover:bg-surface-container transition-colors">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Matemáticas II</span>
                        <div className="font-label-lg text-label-lg text-on-surface font-bold">
                          Mtra. Elena Rivas Hernández
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-surface-container text-on-surface flex items-center justify-center text-[12px] font-bold">
                        ER
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <a className="font-label-sm text-label-sm text-primary hover:text-secondary flex items-center gap-1 font-semibold" href="mailto:erivas@estis70.edu.mx">
                        <span className="material-symbols-outlined text-[14px]">mail</span>
                        erivas@estis70.edu.mx
                      </a>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Cubículo 2</span>
                    </div>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col justify-between gap-2 hover:bg-surface-container transition-colors">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Español II</span>
                        <div className="font-label-lg text-label-lg text-on-surface font-bold">
                          Prof. Carlos Delgado Martínez
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-surface-container text-on-surface flex items-center justify-center text-[12px] font-bold">
                        CD
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <a className="font-label-sm text-label-sm text-primary hover:text-secondary flex items-center gap-1 font-semibold" href="mailto:cdelgado@estis70.edu.mx">
                        <span className="material-symbols-outlined text-[14px]">mail</span>
                        cdelgado@estis70.edu.mx
                      </a>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Cubículo 1</span>
                    </div>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col justify-between gap-2 hover:bg-surface-container transition-colors">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Ciencias II (Física)</span>
                        <div className="font-label-lg text-label-lg text-on-surface font-bold">
                          Dra. Beatriz Salcedo López
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-surface-container text-on-surface flex items-center justify-center text-[12px] font-bold">
                        BS
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <a className="font-label-sm text-label-sm text-primary hover:text-secondary flex items-center gap-1 font-semibold" href="mailto:bsalcedo@estis70.edu.mx">
                        <span className="material-symbols-outlined text-[14px]">mail</span>
                        bsalcedo@estis70.edu.mx
                      </a>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Lab. Física</span>
                    </div>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col justify-between gap-2 hover:bg-surface-container transition-colors">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Historia de México</span>
                        <div className="font-label-lg text-label-lg text-on-surface font-bold">
                          Mtro. Gonzalo Morales Guerra
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-surface-container text-on-surface flex items-center justify-center text-[12px] font-bold">
                        GM
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <a className="font-label-sm text-label-sm text-primary hover:text-secondary flex items-center gap-1 font-semibold" href="mailto:gmorales@estis70.edu.mx">
                        <span className="material-symbols-outlined text-[14px]">mail</span>
                        gmorales@estis70.edu.mx
                      </a>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Cubículo 5</span>
                    </div>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col justify-between gap-2 hover:bg-surface-container transition-colors">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Formación Cívica y Tutoría</span>
                        <div className="font-label-lg text-label-lg text-on-surface font-bold">
                          Lic. Carmen Mendoza Corona
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-surface-container text-on-surface flex items-center justify-center text-[12px] font-bold">
                        CM
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <a className="font-label-sm text-label-sm text-primary hover:text-secondary flex items-center gap-1 font-semibold" href="mailto:cmendoza@estis70.edu.mx">
                        <span className="material-symbols-outlined text-[14px]">mail</span>
                        cmendoza@estis70.edu.mx
                      </a>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Orientación</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-space-sm bg-surface-container rounded-lg flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary text-[20px]">info</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Las solicitudes de aclaración de calificaciones y
                    justificación de faltas deben tramitarse mediante la
                    Prefectura Escolar o el sistema de citatorios del
                    portal.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}
