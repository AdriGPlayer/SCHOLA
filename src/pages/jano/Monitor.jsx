export default function Monitor() {
  return (
    <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          
          <section className="px-margin pt-space-lg pb-space-md">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
              <div className="max-w-4xl">
                <div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-wider mb-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-ping"></span>
                  <span>Sincronización en Directo • Sistema JANO ESTIS 70</span>
                  <span className="text-outline-variant">•</span>
                  <span className="text-on-surface-variant font-medium">Ciclo Activo 2024-2025</span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Monitor de Módulos en Vivo y Alerta de Evasiones Escolares
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1.5 leading-relaxed">
                  Monitoreo cruzado entre torniquete de acceso, pase de lista de
                  módulo anterior y módulo en curso para detectar salidas no
                  autorizadas de aula o taller.
                </p>
              </div>
              
              <div className="flex items-center gap-space-sm bg-surface-container-low px-space-md py-space-sm rounded-lg shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">timer</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Módulo 3 en Curso</span>
                  <span className="font-title-md text-title-md text-primary font-bold">08:40 — 09:30 hrs</span>
                  <span className="font-body-sm text-body-sm text-secondary font-semibold">Quedan 28 min de sesión</span>
                </div>
              </div>
            </div>
            
            <div className="mt-space-md flex flex-wrap items-center gap-2 p-2 bg-surface-container-high/50 rounded-lg text-on-surface-variant font-label-sm text-label-sm">
              <span className="flex items-center gap-1 font-bold text-primary">
                <span className="material-symbols-outlined text-[16px] text-primary">sync_saved_locally</span>
                Cruce Biométrico:
              </span>
              <span className="px-2 py-0.5 rounded-sm bg-surface-container-lowest text-on-surface shadow-xs">Pase de Lista Digital: 98.4% completado</span>
              <span className="px-2 py-0.5 rounded-sm bg-surface-container-lowest text-on-surface shadow-xs">Torniquetes Entrada Matutina: 1,048 validados</span>
              <span className="px-2 py-0.5 rounded-sm bg-surface-container-lowest text-on-surface shadow-xs">Guardias en Campo: 4 Prefectos en rondín</span>
              <div className="ml-auto flex items-center gap-1 text-primary cursor-pointer hover:underline">
                <span className="material-symbols-outlined text-[14px]">refresh</span>
                Actualizar matriz
              </div>
            </div>
          </section>
          
          <section className="px-margin py-space-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-gutter">
              
              <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm uppercase tracking-wide text-on-surface-variant">Torniquetes Activos</span>
                    <span className="font-headline-xl text-headline-xl text-primary font-bold mt-1">1,048</span>
                  </div>
                  <div className="w-11 h-11 rounded-lg bg-surface-container flex items-center justify-center text-primary shadow-xs">
                    <span className="material-symbols-outlined text-[24px]">sensor_door</span>
                  </div>
                </div>
                <div className="mt-space-md pt-space-xs flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
                  <span className="flex items-center gap-1 text-primary font-semibold">
                    <span className="material-symbols-outlined text-[16px]">how_to_reg</span>
                    96.2% asistencia
                  </span>
                  <span>41 bajas/ausencias</span>
                </div>
              </div>
              
              <div className="p-space-lg rounded-xl bg-secondary-container/20 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
                <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-secondary-container/30 pointer-events-none"></div>
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="font-label-sm text-label-sm uppercase tracking-wide text-secondary font-bold">Alertas Evasión</span>
                      <span className="px-1.5 py-0.5 rounded-sm bg-secondary text-on-secondary font-label-sm text-label-sm font-bold animate-pulse">Crítico</span>
                    </div>
                    <span className="font-headline-xl text-headline-xl text-secondary font-bold mt-1">14</span>
                  </div>
                  <div className="w-11 h-11 rounded-lg bg-secondary text-on-secondary flex items-center justify-center shadow-xs">
                    <span className="material-symbols-outlined text-[24px]">person_off</span>
                  </div>
                </div>
                <div className="mt-space-md pt-space-xs flex items-center justify-between font-body-sm text-body-sm text-on-secondary-container">
                  <span className="font-semibold">Sin presencia en Módulo 3</span>
                  <span className="text-secondary font-bold">8 por verificar</span>
                </div>
              </div>
              
              <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm uppercase tracking-wide text-on-surface-variant">Retardos en Módulos 1-2</span>
                    <span className="font-headline-xl text-headline-xl text-primary font-bold mt-1">28</span>
                  </div>
                  <div className="w-11 h-11 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shadow-xs">
                    <span className="material-symbols-outlined text-[24px]">more_time</span>
                  </div>
                </div>
                <div className="mt-space-md pt-space-xs flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
                  <span className="text-on-tertiary-fixed-variant font-semibold">18 canalizados a aula</span>
                  <span>10 con sello prefectura</span>
                </div>
              </div>
              
              <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm uppercase tracking-wide text-on-surface-variant">Pases Autorizados</span>
                    <span className="font-headline-xl text-headline-xl text-primary font-bold mt-1">6</span>
                  </div>
                  <div className="w-11 h-11 rounded-lg bg-surface-container flex items-center justify-center text-primary shadow-xs">
                    <span className="material-symbols-outlined text-[24px]">local_hospital</span>
                  </div>
                </div>
                <div className="mt-space-md pt-space-xs flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
                  <span className="text-primary font-semibold">4 Enfermería Médica</span>
                  <span>2 Taller Industrial</span>
                </div>
              </div>
            </div>
          </section>
          
          <section className="px-margin py-space-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
              
              <div className="lg:col-span-8 flex flex-col gap-space-md">
                <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md">
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                    <div>
                      <div className="flex items-center gap-space-xs">
                        <span className="w-3 h-3 rounded-full bg-secondary"></span>
                        <h2 className="font-headline-md text-headline-md text-primary tracking-tight">
                          Radar de Discrepancias / Evasión de Módulo Activo
                        </h2>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                        Módulo 3: 08:40 — 09:30 hrs • Detección algorítmica de
                        saltones de clase e inasistencias selectivas
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-1 bg-surface-container-high/60 p-1 rounded-lg">
                      <button className="px-3 py-1 rounded-md text-on-primary bg-primary font-label-sm text-label-sm font-semibold transition-all shadow-xs">
                        Todos (14)
                      </button>
                      <button className="px-3 py-1 rounded-md text-on-surface-variant font-label-sm text-label-sm font-semibold hover:bg-surface-container transition-all">
                        Sin Justificar (8)
                      </button>
                      <button className="px-3 py-1 rounded-md text-on-surface-variant font-label-sm text-label-sm font-semibold hover:bg-surface-container transition-all">
                        Justificados (6)
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-space-sm" id="lista-discrepancias">
                    
                    <div className="radar-card p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors shadow-xs flex flex-col gap-space-sm" data-tipo="critico">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-space-sm">
                          <div className="w-10 h-10 rounded-full bg-secondary-container/40 flex items-center justify-center font-bold text-secondary text-title-sm shrink-0">
                            DA
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-title-sm text-title-sm text-primary font-bold">Daniela Álvarez Ramírez</span>
                              <span className="px-2 py-0.5 rounded-sm bg-surface-container text-primary font-label-sm text-label-sm font-semibold">2° B • Informática</span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">Matrícula: 2023-TEC70-0418 • Aula habitual:
                              Edificio B-4</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 sm:self-start">
                          <span className="px-2.5 py-1 rounded-sm bg-secondary text-on-secondary font-label-sm text-label-sm font-bold uppercase tracking-wider flex items-center gap-1 shadow-xs">
                            <span className="material-symbols-outlined text-[14px]">report</span>
                            AUSENCIA NO JUSTIFICADA EN AULA
                          </span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-surface-container-lowest p-space-sm rounded-lg font-body-sm text-body-sm">
                        <div className="flex flex-col">
                          <span className="text-on-surface-variant font-label-sm text-label-sm uppercase">Módulo Anterior (M2)</span>
                          <div className="flex items-center gap-1 text-primary font-semibold">
                            <span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
                            Español II (07:50 - 08:40)
                          </div>
                          <span className="text-on-surface-variant text-[11px]">Asistencia confirmada por Profa. Vega</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-on-surface-variant font-label-sm text-label-sm uppercase">Módulo Actual (M3)</span>
                          <div className="flex items-center gap-1 text-secondary font-bold">
                            <span className="material-symbols-outlined text-[16px] text-secondary">cancel</span>
                            Ciencias II (Física - Aula 12)
                          </div>
                          <span className="text-secondary text-[11px] font-semibold">Reportó Mtro. Carrión a las 08:43</span>
                        </div>
                        <div className="flex flex-col justify-center bg-surface-container-high/40 p-2 rounded-md">
                          <span className="text-on-surface-variant font-label-sm text-label-sm">Tiempo sin Reporte:</span>
                          <span className="font-headline-sm text-headline-sm text-secondary font-bold leading-tight">22 min</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                        <span className="font-body-sm text-body-sm text-on-surface-variant italic">
                          Último avistamiento por cámara: Pasillo Laboratorio B
                          a las 08:42 hrs.
                        </span>
                        <div className="flex flex-wrap items-center gap-2">
                          <button className="px-3 py-1.5 rounded-lg bg-surface-container text-primary font-label-sm text-label-sm font-semibold hover:bg-surface-container-high transition-colors flex items-center gap-1" type="button">
                            <span className="material-symbols-outlined text-[16px]">radar</span>
                            Localizar en Rondín
                          </button>
                          <button className="px-3 py-1.5 rounded-lg bg-secondary text-on-secondary font-label-sm text-label-sm font-bold hover:bg-on-secondary-fixed-variant transition-colors flex items-center gap-1 shadow-sm" type="button">
                            <span className="material-symbols-outlined text-[16px]">directions_run</span>
                            Prefecto a Canchas/Baños
                          </button>
                          <button className="px-2.5 py-1.5 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-primary font-label-sm text-label-sm font-semibold" type="button">
                            + Incidencia
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="radar-card p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors shadow-xs flex flex-col gap-space-sm" data-tipo="critico">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-space-sm">
                          <div className="w-10 h-10 rounded-full bg-secondary-container/40 flex items-center justify-center font-bold text-secondary text-title-sm shrink-0">
                            CN
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-title-sm text-title-sm text-primary font-bold">Carlos Iván Navarrete</span>
                              <span className="px-2 py-0.5 rounded-sm bg-surface-container text-primary font-label-sm text-label-sm font-semibold">3° A • Máquinas Herramientas</span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">Matrícula: 2022-TEC70-0112 • Taller Central</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 sm:self-start">
                          <span className="px-2.5 py-1 rounded-sm bg-tertiary-container text-on-tertiary font-label-sm text-label-sm font-bold uppercase tracking-wider flex items-center gap-1 shadow-xs">
                            <span className="material-symbols-outlined text-[14px]">visibility</span>
                            VISTO EN PATIO CÍVICO (SIN PASE)
                          </span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-surface-container-lowest p-space-sm rounded-lg font-body-sm text-body-sm">
                        <div className="flex flex-col">
                          <span className="text-on-surface-variant font-label-sm text-label-sm uppercase">Módulo Anterior (M2)</span>
                          <div className="flex items-center gap-1 text-primary font-semibold">
                            <span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
                            Taller Mecánico I (07:50 - 08:40)
                          </div>
                          <span className="text-on-surface-variant text-[11px]">Validado por Prof. Domínguez</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-on-surface-variant font-label-sm text-label-sm uppercase">Módulo Actual (M3)</span>
                          <div className="flex items-center gap-1 text-secondary font-bold">
                            <span className="material-symbols-outlined text-[16px] text-secondary">cancel</span>
                            Historia de México (Aula 22)
                          </div>
                          <span className="text-secondary text-[11px] font-semibold">Sin justificante médico ni pase</span>
                        </div>
                        <div className="flex flex-col justify-center bg-surface-container-high/40 p-2 rounded-md">
                          <span className="text-on-surface-variant font-label-sm text-label-sm">Ubicación detectada:</span>
                          <span className="font-title-sm text-title-sm text-primary font-bold leading-tight">Patio / Gradas Sur</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                        <span className="font-body-sm text-body-sm text-secondary font-medium">
                          Reincidencia: 2da llamada de atención por salto de
                          módulo en el mes.
                        </span>
                        <div className="flex flex-wrap items-center gap-2">
                          <button className="px-3 py-1.5 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold hover:bg-primary transition-colors flex items-center gap-1" type="button">
                            <span className="material-symbols-outlined text-[16px]">sms</span>
                            Notificar a Tutor
                          </button>
                          <button className="px-3 py-1.5 rounded-lg bg-surface-container text-primary font-label-sm text-label-sm font-bold hover:bg-surface-container-high transition-colors flex items-center gap-1" type="button">
                            <span className="material-symbols-outlined text-[16px]">contract_edit</span>
                            Generar Citatorio
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="radar-card p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors shadow-xs flex flex-col gap-space-sm" data-tipo="critico">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-space-sm">
                          <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-primary text-title-sm shrink-0">
                            MS
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-title-sm text-title-sm text-primary font-bold">Mariana Soto</span>
                              <span className="px-2 py-0.5 rounded-sm bg-surface-container text-primary font-label-sm text-label-sm font-semibold">1° C • Contabilidad</span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">Matrícula: 2024-TEC70-0899 • Aula 04</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 sm:self-start">
                          <span className="px-2.5 py-1 rounded-sm bg-surface-container-highest text-on-primary-fixed-variant font-label-sm text-label-sm font-bold uppercase tracking-wider flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">timelapse</span>
                            Retardo en Aula (+14 min)
                          </span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-surface-container-lowest p-space-sm rounded-lg font-body-sm text-body-sm">
                        <div className="flex flex-col">
                          <span className="text-on-surface-variant font-label-sm text-label-sm uppercase">Módulo Anterior (M2)</span>
                          <div className="flex items-center gap-1 text-primary font-semibold">
                            <span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
                            Matemáticas I
                          </div>
                          <span className="text-on-surface-variant text-[11px]">Asistencia completa</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-on-surface-variant font-label-sm text-label-sm uppercase">Módulo Actual (M3)</span>
                          <div className="flex items-center gap-1 text-primary font-semibold">
                            <span className="material-symbols-outlined text-[16px] text-primary">login</span>
                            Inglés I (Aula 04)
                          </div>
                          <span className="text-on-surface-variant text-[11px]">Reporta llegada tardía a puerta</span>
                        </div>
                        <div className="flex flex-col justify-center bg-surface-container-high/40 p-2 rounded-md">
                          <span className="text-on-surface-variant font-label-sm text-label-sm">Motivo declarado:</span>
                          <span className="font-body-sm text-body-sm text-primary font-semibold leading-tight">Entrega material biblioteca</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-2 pt-1">
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Docente solicita confirmación de prefectura antes de
                          registrar falta.
                        </span>
                        <button className="px-3 py-1.5 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold hover:bg-primary transition-colors flex items-center gap-1 shadow-xs" type="button">
                          <span className="material-symbols-outlined text-[16px]">approval</span>
                          Autorizar Ingreso con Sello
                        </button>
                      </div>
                    </div>
                    
                    <div className="radar-card p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors shadow-xs flex flex-col gap-space-sm" data-tipo="justificado">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-space-sm">
                          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-bold text-primary text-title-sm shrink-0">
                            LM
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-title-sm text-title-sm text-primary font-bold">Luis Fernando Méndez</span>
                              <span className="px-2 py-0.5 rounded-sm bg-surface-container text-primary font-label-sm text-label-sm font-semibold">2° D • Electricidad</span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">Matrícula: 2023-TEC70-0610 • Taller
                              Electricidad</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 sm:self-start">
                          <span className="px-2.5 py-1 rounded-sm bg-surface-container-high text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">verified</span>
                            Salida a Enfermería Validada
                          </span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-surface-container-lowest p-space-sm rounded-lg font-body-sm text-body-sm">
                        <div className="flex flex-col">
                          <span className="text-on-surface-variant font-label-sm text-label-sm uppercase">Módulo Anterior (M2)</span>
                          <div className="flex items-center gap-1 text-primary font-semibold">
                            <span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
                            Geografía
                          </div>
                          <span className="text-on-surface-variant text-[11px]">Asistencia normal</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-on-surface-variant font-label-sm text-label-sm uppercase">Módulo Actual (M3)</span>
                          <div className="flex items-center gap-1 text-primary font-semibold">
                            <span className="material-symbols-outlined text-[16px] text-primary">local_hospital</span>
                            Consultorio Escolar
                          </div>
                          <span className="text-on-surface-variant text-[11px]">Dra. Mendoza - Cefalea intensa</span>
                        </div>
                        <div className="flex flex-col justify-center bg-surface-container-high/40 p-2 rounded-md">
                          <span className="text-on-surface-variant font-label-sm text-label-sm">Estatus Justificante:</span>
                          <span className="font-title-sm text-title-sm text-primary font-bold">Con Justificante de Módulo</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-2 pt-1 font-body-sm text-body-sm">
                        <span className="text-on-surface-variant">Folio Médico: ENF-70-2024-098 • Salida permitida
                          hasta 09:30 hrs.</span>
                        <button className="px-2.5 py-1 rounded-lg bg-surface-container text-primary font-label-sm text-label-sm font-semibold hover:bg-surface-container-high" type="button">
                          Ver Folio
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-title-md text-title-md text-primary font-bold">
                        Distribución Perimetral de Ausencias por Sector
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Frecuencia de evasión en el ciclo matutino según
                        registros de prefectura
                      </p>
                    </div>
                    <span className="px-2 py-1 rounded-sm bg-surface-container font-label-sm text-label-sm text-primary font-semibold">Semana 11</span>
                  </div>
                  
                  <div className="w-full bg-surface-container-lowest p-space-md rounded-xl shadow-xs">
                    <svg className="w-full h-36" fill="none" preserveAspectRatio="none" viewbox="0 0 600 120" xmlns="http://www.w3.org/2000/svg">
                      
                      <line className="text-outline-variant/30" stroke="currentColor" strokeDasharray="3 3" x1="0" x2="600" y1="20" y2="20"></line>
                      <line className="text-outline-variant/30" stroke="currentColor" strokeDasharray="3 3" x1="0" x2="600" y1="60" y2="60"></line>
                      <line className="text-outline-variant/30" stroke="currentColor" strokeDasharray="3 3" x1="0" x2="600" y1="100" y2="100"></line>
                      
                      
                      <rect className="fill-primary-container" height="45" rx="4" width="45" x="40" y="55"></rect>
                      <text className="fill-primary font-bold text-[11px] font-body-sm" textAnchor="middle" x="62" y="47">
                        4 cas.
                      </text>
                      
                      <rect className="fill-secondary" height="70" rx="4" width="45" x="150" y="30"></rect>
                      <text className="fill-secondary font-bold text-[11px] font-body-sm" textAnchor="middle" x="172" y="22">
                        9 cas.
                      </text>
                      
                      <rect className="fill-secondary" height="80" rx="4" width="45" x="260" y="20"></rect>
                      <text className="fill-secondary font-bold text-[11px] font-body-sm" textAnchor="middle" x="282" y="12">
                        12 cas.
                      </text>
                      
                      <rect className="fill-primary-container" height="55" rx="4" width="45" x="370" y="45"></rect>
                      <text className="fill-primary font-bold text-[11px] font-body-sm" textAnchor="middle" x="392" y="37">
                        6 cas.
                      </text>
                      
                      <rect className="fill-primary-container" height="30" rx="4" width="45" x="480" y="70"></rect>
                      <text className="fill-primary font-bold text-[11px] font-body-sm" textAnchor="middle" x="502" y="62">
                        2 cas.
                      </text>
                    </svg>
                    <div className="grid grid-cols-5 text-center font-label-sm text-label-sm text-on-surface-variant pt-2">
                      <span>Edif. A Aulas</span>
                      <span className="font-bold text-secondary">Edif. B Talleres</span>
                      <span className="font-bold text-secondary">Canchas/Gradas</span>
                      <span>Sanitarios N.</span>
                      <span>Cooperativa</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-4 flex flex-col gap-space-md">
                
                <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-[20px] text-primary">security</span>
                      <h3 className="font-title-md text-title-md text-primary font-bold">
                        Rondines de Prefectura
                      </h3>
                    </div>
                    <span className="px-2 py-0.5 rounded-sm bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold uppercase">
                      Activo
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Ubicación y cobertura en vivo de los prefectos de guardia
                    durante el Módulo 3.
                  </p>
                  <div className="flex flex-col gap-space-sm">
                    
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="font-label-lg text-label-lg text-primary font-bold">Zona A: Talleres y Pasillos Norte</span>
                        <span className="px-1.5 py-0.5 rounded-sm bg-surface-container text-primary font-label-sm text-label-sm font-semibold">En patrulla</span>
                      </div>
                      <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
                        <span>Prefecto:
                          <strong>Mtra. Gloria Reséndiz</strong></span>
                        <span className="text-primary font-semibold">Ext. 112</span>
                      </div>
                      <div className="w-full bg-surface-container-high h-1.5 rounded-full mt-1 overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: "85%" }}></div>
                      </div>
                      <div className="flex justify-between text-[11px] text-on-surface-variant font-body-sm mt-0.5">
                        <span>Último check: Lab. Química (08:52)</span>
                        <span>85% cubierto</span>
                      </div>
                    </div>
                    
                    <div className="p-space-sm rounded-lg bg-secondary-container/15 flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="font-label-lg text-label-lg text-secondary font-bold">Zona B: Canchas y Gradas</span>
                        <span className="px-1.5 py-0.5 rounded-sm bg-secondary text-on-secondary font-label-sm text-label-sm font-bold animate-pulse">Inspección</span>
                      </div>
                      <div className="flex items-center justify-between text-body-sm font-body-sm text-on-secondary-container">
                        <span>Prefecto: <strong>Prof. Sergio Velasco</strong></span>
                        <span className="text-secondary font-bold">Ext. 114</span>
                      </div>
                      <div className="w-full bg-secondary-container/40 h-1.5 rounded-full mt-1 overflow-hidden">
                        <div className="bg-secondary h-full rounded-full" style={{ width: "60%" }}></div>
                      </div>
                      <div className="flex justify-between text-[11px] text-secondary font-body-sm mt-0.5">
                        <span>Reporta: 3 alumnos en gradas</span>
                        <span>60% cubierto</span>
                      </div>
                    </div>
                    
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="font-label-lg text-label-lg text-primary font-bold">Zona C: Sanitarios y Comedor</span>
                        <span className="px-1.5 py-0.5 rounded-sm bg-surface-container text-primary font-label-sm text-label-sm font-semibold">Completado</span>
                      </div>
                      <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
                        <span>Prefecto: <strong>Mtro. Efrén Galindo</strong></span>
                        <span className="text-primary font-semibold">Ext. 108</span>
                      </div>
                      <div className="w-full bg-surface-container-high h-1.5 rounded-full mt-1 overflow-hidden">
                        <div className="bg-tertiary-container h-full rounded-full" style={{ width: "100%" }}></div>
                      </div>
                      <div className="flex justify-between text-[11px] text-on-surface-variant font-body-sm mt-0.5">
                        <span>Sin novedades reportadas</span>
                        <span>100% cubierto</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-lg text-label-lg font-semibold transition-colors flex items-center justify-center gap-1.5" type="button">
                    <span className="material-symbols-outlined text-[18px]">radio</span>
                    Abrir Frecuencia de Radio
                  </button>
                </div>
                
                <div className="bg-surface-container-low rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[20px] text-secondary">bolt</span>
                    <h3 className="font-title-md text-title-md text-primary font-bold">
                      Acciones Operativas Masivas
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Disparadores directos sobre la red de prefectura, terminales
                    docentes y torniquetes perimetrales.
                  </p>
                  <div className="flex flex-col gap-space-sm">
                    
                    <button className="w-full p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high text-left flex items-start gap-space-sm transition-all shadow-xs" type="button">
                      <div className="w-9 h-9 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[20px]">notifications_active</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-lg text-label-lg text-primary font-bold">Emitir Alerta a Docentes de 2°</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Notifica en tabletas de pase de lista verificar
                          asistencia presencial en pupitre.</span>
                      </div>
                    </button>
                    
                    <button className="w-full p-space-sm rounded-lg bg-secondary text-on-secondary hover:bg-on-secondary-fixed-variant text-left flex items-start gap-space-sm transition-all shadow-md" type="button">
                      <div className="w-9 h-9 rounded-lg bg-white/20 text-on-secondary flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[20px]">lock</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-lg text-label-lg text-on-secondary font-bold">Cierre de Torniquetes Perimetrales</span>
                        <span className="font-body-sm text-body-sm text-white/90">Bloqueo preventivo de salida hacia calle Francisco I.
                          Madero.</span>
                      </div>
                    </button>
                    
                    <button className="w-full p-space-sm rounded-lg bg-surface-container-lowest hover:bg-surface-container text-left flex items-start gap-space-sm transition-all shadow-xs" type="button">
                      <div className="w-9 h-9 rounded-lg bg-surface-container text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[20px]">file_download</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-lg text-label-lg text-primary font-bold">Exportar Bitácora del Turno</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Genera acta oficial en formato DGEST para Dirección y
                          Trabajo Social.</span>
                      </div>
                    </button>
                  </div>
                </div>
                
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
                  <div className="relative h-44 w-full">
                    <img className="w-full h-full object-cover" data-alt="Technical high school courtyard in Mexico during class hours with covered corridors, terracotta brick pillars, clean concrete grounds, empty benches, warm daylight casting soft architectural shadows, conveying disciplined academic vigilance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz1EiN0ZT-C9PZxaFqHAm6MARwF8evZpw4rDQvAJo93hQoP2HM6WHU1nuyGH5p4XDBpTJr7sfjSmLWONTLBzxT7i5y_0F1qmFx5VwDBjB5jdZxkpmPtCtjhIfvaLlSpOHkljeURqff84mIQawSpWDEzkRSvggYY72O-sQTaqEAomShXZiCOrK_R_fDJ99JP-bxYDUbcGWX79b0NlVddPOeJGj4WqE6o_SYF3bX3K5J7eTQ3BoQuIqTEQ" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-on-primary font-body-sm">
                      <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider">Cámara 07 • Patio de Honor</span>
                      <span className="flex items-center gap-1 font-label-sm text-label-sm font-semibold">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        EN VIVO
                      </span>
                    </div>
                  </div>
                  <div className="p-space-md flex flex-col gap-1">
                    <span className="font-title-sm text-title-sm text-primary font-bold">Inspección de Pasillos y Perímetros</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Personal de intendencia y prefectura coordinan vigilancia
                      en las 18 áreas críticas identificadas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <div className="fixed bottom-6 right-6 z-50 transform translate-y-20 opacity-0 transition-all duration-300 pointer-events-none" id="toast-notificacion">
            <div className="bg-primary text-on-primary px-space-lg py-space-md rounded-xl shadow-xl flex items-center gap-space-sm border border-outline-variant/30">
              <span className="material-symbols-outlined text-[22px] text-tertiary-fixed">check_circle</span>
              <div className="flex flex-col">
                <span className="font-label-lg text-label-lg font-bold" id="toast-titulo">Acción Registrada</span>
                <span className="font-body-sm text-body-sm text-surface-variant" id="toast-mensaje">La solicitud ha sido enviada al módulo correspondiente.</span>
              </div>
            </div>
          </div>
          
        </div>
      </main>
  );
}
