export default function Puntaje() {
  return (
    <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <div className="px-margin pt-space-lg pb-space-xl flex flex-col gap-space-xl">
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
              <div className="flex flex-col max-w-3xl">
                <div className="flex items-center gap-space-xs mb-1">
                  <span className="px-2 py-0.5 rounded-sm bg-primary-container text-on-primary font-label-sm text-label-sm uppercase tracking-wider">Módulo Disciplinario DGEST</span>
                  <span className="text-on-surface-variant font-label-sm text-label-sm uppercase">Acuerdo 97 Art. 44-52</span>
                </div>
                <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight">
                  Sistema de Puntaje de Conducta Escolar y Matriz de
                  Reincidencias
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">
                  Seguimiento al puntaje formativo de convivencia (Base 100
                  puntos por ciclo) y detección de patrones de reincidencia en
                  lapsos de tiempo.
                </p>
              </div>
              
              <div className="flex items-center gap-space-md self-start lg:self-auto bg-surface-container-low p-2 rounded-xl shadow-sm">
                <div className="flex flex-col px-3 py-1 bg-surface-container rounded-lg">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Población Módulo Norte</span>
                  <span className="font-title-sm text-title-sm text-primary font-bold">482 Alumnos</span>
                </div>
                <div className="flex flex-col px-3 py-1 bg-surface-container-high rounded-lg">
                  <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">En Observación</span>
                  <span className="font-title-sm text-title-sm text-secondary font-bold">14 Casos</span>
                </div>
                <button className="px-space-md py-2.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container transition-colors flex items-center gap-2 font-label-lg text-label-lg shadow-sm" type="button">
                  <span className="material-symbols-outlined text-[18px]">add_circle</span>
                  <span>Registrar Incidencia</span>
                </button>
              </div>
            </div>
            
            <div className="bg-surface-container-low p-space-md rounded-xl shadow-sm flex flex-col md:flex-row gap-space-md items-center justify-between">
              <div className="relative w-full md:w-2/3">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[22px]">search</span>
                <input className="w-full bg-surface-container-lowest text-on-surface pl-11 pr-4 py-2.5 rounded-lg font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" placeholder="Buscar por Nombre, Matrícula o Especialidad Técnica..." type="text" value="Daniela Álvarez Ramírez - 2° B Informática" />
              </div>
              <div className="flex items-center gap-space-sm w-full md:w-auto justify-end">
                <span className="font-label-md text-label-md text-on-surface-variant">Filtrar por Taller:</span>
                <span className="px-3 py-1.5 rounded-lg bg-surface-container text-primary font-label-md text-label-md font-semibold">Informática (Grupo B)</span>
                <button className="p-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">tune</span>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              
              <div className="lg:col-span-5 bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col gap-space-lg">
                
                <div className="flex items-start gap-space-md">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden shadow-sm shrink-0 bg-surface-container-highest">
                    <img className="w-full h-full object-cover" data-alt="Fotografía credencial escolar de una estudiante mexicana de secundaria técnica sonriendo con uniforme formal blanco y cuello guinda sobre fondo institucional neutro iluminado de manera suave y profesional" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqeMQxjIapKQohXgt4t5ph6AiAIsOXW6PZYqw4Xj3ihHV6BIXbdTttdd1-9bVI2eTeZHb56nCa43VSTKKRccBRv0R5PgsPiJCJnq1ianY4cFy7o_Boczhj--Fx1kb_Kzi24ujW9-VFsHP7GJWyuVF_t9m_WBpFmQDTXQZCJBJv2wOwRKKzmEiukBnrftxod-W_LgBGinrvhvD8_NIKAlQ7eXE2pwxZGb7uS3E919lxu0c_qf67lNkrBw" />
                    <div className="absolute bottom-0 inset-x-0 bg-primary/75 text-on-primary text-center py-0.5 font-label-sm text-label-sm font-bold">
                      2° B
                    </div>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-sm bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold uppercase">Matrícula: EST-23094</span>
                      <span className="px-2 py-0.5 rounded-sm bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Turno Matutino</span>
                    </div>
                    <h2 className="font-headline-md text-headline-md text-primary font-bold mt-1 truncate">
                      Daniela Álvarez Ramírez
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant font-medium">
                      Técnica en Informática • Asesor: Profr. Armando Celis
                    </p>
                  </div>
                </div>
                
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Puntaje Formativo Actual</span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="font-headline-xl text-headline-xl text-primary font-bold">92</span>
                        <span className="font-headline-md text-headline-md text-on-surface-variant font-normal">/ 100 pts</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md font-bold">
                        <span className="w-2.5 h-2.5 rounded-full bg-secondary-container"></span>
                        Conducta Regular con Observaciones
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Margen de Seguridad: 12 pts</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 pt-2">
                    <div className="w-full bg-surface-container rounded-full h-3 overflow-hidden flex">
                      <div className="bg-primary h-full transition-all" style={{ width: "92%" }}></div>
                      <div className="bg-secondary h-full transition-all" style={{ width: "8%" }}></div>
                    </div>
                    <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant px-0.5">
                      <span>0 pts (Expulsión / Traslado)</span>
                      <span>75 pts (Límite Preventivo)</span>
                      <span className="text-primary font-bold">100 pts (Óptimo)</span>
                    </div>
                  </div>
                  
                  <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-1.5 font-body-sm text-body-sm">
                    <div className="flex justify-between items-center text-on-surface-variant">
                      <span>Base Anual de Inicio de Ciclo</span>
                      <span className="font-semibold text-primary">+100 pts</span>
                    </div>
                    <div className="flex justify-between items-center text-secondary">
                      <span>Retardos acumulados en torniquete (3
                        reincidencias)</span>
                      <span className="font-bold">-5 pts</span>
                    </div>
                    <div className="flex justify-between items-center text-secondary">
                      <span>Salida no autorizada de aula (Laboratorio de
                        Física)</span>
                      <span className="font-bold">-3 pts</span>
                    </div>
                    <div className="flex justify-between items-center pt-1.5 text-primary font-title-sm text-title-sm font-bold bg-surface-container-high/40 px-2 rounded">
                      <span>Balance Vigente en Plataforma JANO</span>
                      <span>92 pts</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-space-sm">
                  <div className="bg-surface-container p-3 rounded-lg flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Tutor Legal</span>
                    <span className="font-label-lg text-label-lg text-primary font-bold truncate">Sra. Carmen Ramírez T.</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Tel: (228) 841-9032</span>
                  </div>
                  <div className="bg-surface-container p-3 rounded-lg flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Estado de Citatorios</span>
                    <span className="font-label-lg text-label-lg text-secondary font-bold">Sin Citatorio Activo</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Último: Ninguno en el ciclo</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between pb-space-md">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                        Historial Cronológico de Incidencias y Bonificaciones
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Expediente digital auditado por la Coordinación de
                        Asistencia Escolar
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 bg-surface-container px-2 py-1 rounded-lg">
                      <span className="material-symbols-outlined text-[18px] text-on-surface-variant">calendar_month</span>
                      <span className="font-label-md text-label-md text-primary font-semibold">Primer Trimestre 2024</span>
                    </div>
                  </div>
                  
                  <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-outline-variant/60">
                    
                    <div className="relative flex flex-col gap-1">
                      <span className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full bg-secondary ring-4 ring-surface-container-low"></span>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-label-lg text-label-lg text-primary font-bold">18 de Octubre, 2024</span>
                          <span className="px-2 py-0.5 rounded-sm bg-error-container text-on-error-container font-label-sm text-label-sm font-bold uppercase">-2 Puntos</span>
                        </div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">08:12 hrs • Prefecto Módulo Norte</span>
                      </div>
                      <p className="font-title-sm text-title-sm text-on-surface font-semibold">
                        Retardo en ingreso a módulo (+12 min en clase de
                        Historia)
                      </p>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Llegó transcurridos 12 minutos del pase de lista del
                        Mtro. Gómez. Reportó haber permanecido en el patio
                        cívico sin autorización. Se notifica vía app al tutor.
                      </p>
                    </div>
                    
                    <div className="relative flex flex-col gap-1">
                      <span className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full bg-on-tertiary-container ring-4 ring-surface-container-low"></span>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-label-lg text-label-lg text-primary font-bold">04 de Octubre, 2024</span>
                          <span className="px-2 py-0.5 rounded-sm bg-surface-variant text-on-surface-variant font-label-sm text-label-sm font-bold uppercase">Apercibimiento Verbal</span>
                        </div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">11:35 hrs • Profr. Armando Celis</span>
                      </div>
                      <p className="font-title-sm text-title-sm text-on-surface font-semibold">
                        Falta de bata institucional en Taller de Informática
                      </p>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        La alumna ingresó al centro de cómputo sin bata
                        reglamentaria para práctica con componentes
                        electrónicos. Se le amonesta verbalmente de acuerdo al
                        manual de taller sin descuento en plataforma.
                      </p>
                    </div>
                    
                    <div className="relative flex flex-col gap-1">
                      <span className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full bg-secondary ring-4 ring-surface-container-low"></span>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-label-lg text-label-lg text-primary font-bold">22 de Septiembre, 2024</span>
                          <span className="px-2 py-0.5 rounded-sm bg-error-container text-on-error-container font-label-sm text-label-sm font-bold uppercase">-3 Puntos</span>
                        </div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">10:05 hrs • Prefecta G. Lozano</span>
                      </div>
                      <p className="font-title-sm text-title-sm text-on-surface font-semibold">
                        Evasión temporal de aula (Área de Sanitarios)
                      </p>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Localizada por guardia de prefectura en el pasillo
                        posterior de sanitarios de alumnas durante el horario de
                        Física Teórica con el Profr. Navarrete. Registrada con
                        boleta amarilla.
                      </p>
                    </div>
                    
                    <div className="relative flex flex-col gap-1">
                      <span className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-surface-container-low"></span>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-label-lg text-label-lg text-primary font-bold">10 de Septiembre, 2024</span>
                          <span className="px-2 py-0.5 rounded-sm bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold uppercase">Restitución de Puntos</span>
                        </div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">07:50 hrs • Servicios Médicos</span>
                      </div>
                      <p className="font-title-sm text-title-sm text-on-surface font-semibold">
                        Justificante médico entregado y validado
                      </p>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Se presenta folio IMSS No. 892-A por consulta dental que
                        acreditó inasistencia previa. Se cancela retardo
                        penalizado de inicio de semana sin afectación al
                        acumulado formativo.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-space-md flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-high/30 p-space-sm rounded-lg mt-space-md">
                  <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    <span>Expediente revisado y validado en sesión colegiada de
                      prefectos.</span>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <button className="px-3 py-1.5 rounded-lg bg-surface-container text-primary font-label-md text-label-md hover:bg-surface-container-high transition-colors">
                      Descargar Kárdex PDF
                    </button>
                    <button className="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors">
                      Generar Acta Parcial
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-container text-on-primary p-space-lg rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between gap-space-lg">
              <div className="flex items-start gap-space-md max-w-3xl">
                <div className="w-12 h-12 rounded-xl bg-on-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[28px] text-tertiary-fixed">military_tech</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-tertiary-fixed uppercase font-bold tracking-wider">Reglamento General de Estudiantes Técnicos • Incentivos
                    Cívicos</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-primary font-bold mt-0.5">
                    Bonificación Formativa: Servicio Comunitario y Banda de
                    Guerra (+5 pts)
                  </h3>
                  <p className="font-body-md text-body-md text-on-primary/80 mt-1">
                    Los estudiantes que acumulen penalizaciones leves pueden
                    restituir hasta 5 puntos mediante 10 horas de servicio
                    cívico, mantenimiento del taller técnico institucional o
                    integración constante a la Banda de Guerra o Escolta
                    Oficial.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-space-sm shrink-0 w-full md:w-auto">
                <button className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed font-label-lg text-label-lg font-bold hover:bg-tertiary-fixed-dim transition-colors text-center shadow-sm">
                  Solicitar Restitución Cívica
                </button>
                <button className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-on-primary/10 text-on-primary font-label-lg text-label-lg font-medium hover:bg-on-primary/20 transition-colors text-center">
                  Ver Estatuto Art. 52
                </button>
              </div>
            </div>
            
            <div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md pb-space-sm">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h3 className="font-headline-md text-headline-md text-primary font-bold">
                      Matriz de Alumnos en Riesgo Disciplinario
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold uppercase">Casos Críticos</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Detección preventiva por patrones de reincidencia acumulada
                    en ventanas de tiempo seleccionadas.
                  </p>
                </div>
                
                <div className="flex items-center p-1 bg-surface-container rounded-xl shadow-inner gap-1 overflow-x-auto">
                  <button className="px-3 py-1.5 rounded-lg font-label-md text-label-md transition-colors text-on-surface-variant hover:text-primary" type="button">
                    Últimos 7 días
                  </button>
                  <button className="px-3 py-1.5 rounded-lg font-label-md text-label-md transition-colors bg-primary text-on-primary shadow-sm" type="button">
                    Últimos 15 días
                  </button>
                  <button className="px-3 py-1.5 rounded-lg font-label-md text-label-md transition-colors text-on-surface-variant hover:text-primary" type="button">
                    Últimos 30 días
                  </button>
                  <button className="px-3 py-1.5 rounded-lg font-label-md text-label-md transition-colors text-on-surface-variant hover:text-primary" type="button">
                    Todo el Trimestre
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">
                      <th className="py-3 px-4 rounded-l-lg">Estudiante</th>
                      <th className="py-3 px-4">Grado y Especialidad</th>
                      <th className="py-3 px-4 text-center">Incidencias (15 d)</th>
                      <th className="py-3 px-4 text-center">Incidencias Totales</th>
                      <th className="py-3 px-4 text-center">Puntaje Actual</th>
                      <th className="py-3 px-4">Nivel de Riesgo</th>
                      <th className="py-3 px-4 rounded-r-lg">Acción Requerida</th>
                    </tr>
                  </thead>
                  <tbody className="font-body-md text-body-md divide-y-0 space-y-2">
                    
                    <tr className="bg-surface-container-lowest hover:bg-surface-container transition-colors rounded-lg group shadow-sm">
                      <td className="py-3.5 px-4 rounded-l-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-label-md">
                            RH
                          </div>
                          <div className="flex flex-col">
                            <span className="font-title-sm text-title-sm text-primary font-bold">Rodrigo Hernández Soto</span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">Matrícula: EST-22108</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-on-surface">
                        3° C • Soldadura y Forja
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="px-2 py-0.5 rounded-md bg-error-container text-on-error-container font-bold font-label-sm text-label-sm">4 incidencias</span>
                      </td>
                      <td className="py-3.5 px-4 text-center font-semibold text-primary">
                        8 eventos
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="font-title-md text-title-md font-bold text-secondary">68 pts</span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold uppercase">
                          <span className="w-2 h-2 rounded-full bg-error"></span>
                          Riesgo Alto
                        </span>
                      </td>
                      <td className="py-3.5 px-4 rounded-r-lg">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-bold shadow-sm whitespace-nowrap">Citatorio Urgente DGEST</span>
                          <button className="p-1 rounded-lg hover:bg-surface-container-high text-on-surface-variant" title="Ver Expediente Completo">
                            <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    
                    <tr className="bg-surface-container-lowest hover:bg-surface-container transition-colors rounded-lg shadow-sm">
                      <td className="py-3.5 px-4 rounded-l-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-bold text-label-md">
                            MM
                          </div>
                          <div className="flex flex-col">
                            <span className="font-title-sm text-title-sm text-primary font-bold">Mateo Morales Velasco</span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">Matrícula: EST-23419</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-on-surface">
                        2° A • Electricidad
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="px-2 py-0.5 rounded-md bg-surface-container-high text-secondary font-bold font-label-sm text-label-sm">3 incidencias</span>
                      </td>
                      <td className="py-3.5 px-4 text-center font-semibold text-primary">
                        5 eventos
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="font-title-md text-title-md font-bold text-secondary">74 pts</span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-highest text-secondary font-label-sm text-label-sm font-bold uppercase">
                          <span className="w-2 h-2 rounded-full bg-secondary"></span>
                          Riesgo Moderado
                        </span>
                      </td>
                      <td className="py-3.5 px-4 rounded-r-lg">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded-lg bg-surface-container text-primary font-label-md text-label-md font-semibold whitespace-nowrap">Carta Compromiso Tutor</span>
                          <button className="p-1 rounded-lg hover:bg-surface-container-high text-on-surface-variant" title="Ver Expediente Completo">
                            <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    
                    <tr className="bg-surface-container-lowest hover:bg-surface-container transition-colors rounded-lg shadow-sm">
                      <td className="py-3.5 px-4 rounded-l-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-bold text-label-md">
                            VP
                          </div>
                          <div className="flex flex-col">
                            <span className="font-title-sm text-title-sm text-primary font-bold">Valeria Peña Castillo</span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">Matrícula: EST-21980</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-on-surface">
                        3° B • Contabilidad
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="px-2 py-0.5 rounded-md bg-surface-container-high text-on-surface-variant font-bold font-label-sm text-label-sm">2 incidencias</span>
                      </td>
                      <td className="py-3.5 px-4 text-center font-semibold text-primary">
                        6 eventos
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="font-title-md text-title-md font-bold text-primary">76 pts</span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold uppercase">
                          <span className="w-2 h-2 rounded-full bg-on-tertiary-fixed-variant"></span>
                          Canalización
                        </span>
                      </td>
                      <td className="py-3.5 px-4 rounded-r-lg">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded-lg bg-surface-container text-primary font-label-md text-label-md font-semibold whitespace-nowrap">Canalización a Psicología DGEST</span>
                          <button className="p-1 rounded-lg hover:bg-surface-container-high text-on-surface-variant" title="Ver Expediente Completo">
                            <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    
                    <tr className="bg-surface-container-high/40 hover:bg-surface-container transition-colors rounded-lg shadow-sm">
                      <td className="py-3.5 px-4 rounded-l-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-label-md">
                            DA
                          </div>
                          <div className="flex flex-col">
                            <span className="font-title-sm text-title-sm text-primary font-bold">Daniela Álvarez Ramírez (Consultada)</span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">Matrícula: EST-23094</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-on-surface">
                        2° B • Informática
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-bold font-label-sm text-label-sm">1 incidencia</span>
                      </td>
                      <td className="py-3.5 px-4 text-center font-semibold text-primary">
                        3 eventos
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="font-title-md text-title-md font-bold text-primary">92 pts</span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm font-bold uppercase">
                          <span className="w-2 h-2 rounded-full bg-outline"></span>
                          Preventivo Leve
                        </span>
                      </td>
                      <td className="py-3.5 px-4 rounded-r-lg">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded-lg bg-surface-container text-on-surface-variant font-label-md text-label-md whitespace-nowrap">Monitoreo en Aula</span>
                          <button className="p-1 rounded-lg hover:bg-surface-container-high text-on-surface-variant" title="Ver Expediente Completo">
                            <span className="material-symbols-outlined text-[18px]">check_circle</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-sm text-on-surface-variant font-body-sm text-body-sm">
                <span>Mostrando 4 de 14 casos que requieren seguimiento
                  protocolario en el periodo.</span>
                <div className="flex items-center gap-space-sm">
                  <button className="px-3 py-1.5 rounded-lg bg-surface-container text-primary font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">print</span>
                    <span>Imprimir Actas de Citatorio en Lote</span>
                  </button>
                  <button className="px-3 py-1.5 rounded-lg bg-surface-container text-primary font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">file_download</span>
                    <span>Exportar CSV</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}
