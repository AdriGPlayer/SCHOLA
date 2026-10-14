import { useState } from "react";

export default function Docentes() {
  const [toast, setToast] = useState("");
  const flash = (msg) => { setToast(msg); window.setTimeout(() => setToast(""), 3600); };
  return (
    <main className="relative pt-20 w-full min-h-screen px-space-xl py-space-lg bg-surface">
        <div className="flex flex-col w-full">
        {toast && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-inverse-surface text-inverse-on-surface font-label-md text-label-md px-space-md py-space-sm rounded-lg shadow-xl toast-in w-[340px] text-center">
            {toast}
          </div>
        )}
          <div className="flex flex-col gap-space-xl pb-16">
            
            <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
              <div className="flex flex-col gap-space-xs max-w-3xl">
                <div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[16px]">domain</span>
                  <span>ESTIS No. 70 • Órgano Académico Técnico</span>
                  <span className="text-outline-variant">•</span>
                  <span className="text-outline">Subdirección Técnica Pedagógica</span>
                </div>
                <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight">
                  Alta y Gestión de Docentes y Personal Técnico
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Padrón oficial de recursos humanos, control de plazas SEP,
                  especialidades de formación tecnológica y asignación de
                  laboratorios prácticos para el ciclo 2024–2025.
                </p>
              </div>
              <div className="flex items-center gap-space-sm shrink-0">
                <button className="px-space-md py-2.5 bg-primary text-surface font-label-lg text-label-lg rounded-lg shadow-sm hover:bg-primary-container hover:text-surface-container-lowest transition-colors flex items-center gap-2" type="button">
                  <span className="material-symbols-outlined text-[20px]">person_add</span>
                  <span>Registrar Nuevo Docente</span>
                </button>
                <button className="px-space-md py-2.5 bg-surface-container-high text-on-surface font-label-lg text-label-lg rounded-lg hover:bg-surface-container-highest transition-colors flex items-center gap-2" type="button">
                  <span className="material-symbols-outlined text-[20px]">file_download</span>
                  <span>Exportar Plantilla DGETI</span>
                </button>
              </div>
            </section>
            
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
              
              <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between gap-space-md">
                <div className="flex items-start justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Plaza Docente Activa</span>
                  <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[22px]">badge</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline-xl text-headline-xl text-primary font-bold">68</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">profesores</span>
                  </div>
                  <span className="font-body-sm text-body-sm text-outline mt-1">42 con plaza de base federal definitiva</span>
                </div>
                <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: "88%" }}></div>
                </div>
              </div>
              
              <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between gap-space-md">
                <div className="flex items-start justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Personal de Taller</span>
                  <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[22px]">construction</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline-xl text-headline-xl text-secondary font-bold">14</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">instructores técnicos</span>
                  </div>
                  <span className="font-body-sm text-body-sm text-outline mt-1">Maquinaria, Circuitos y Diseño Gráfico</span>
                </div>
                <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
              
              <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between gap-space-md">
                <div className="flex items-start justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Cobertura Académica</span>
                  <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-on-secondary-container">
                    <span className="material-symbols-outlined text-[22px]">task_alt</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline-xl text-headline-xl text-primary font-bold">100%</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">cubierta</span>
                  </div>
                  <span className="font-body-sm text-body-sm text-outline mt-1">1,940 horas-semana asignadas sin déficit</span>
                </div>
                <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary-container h-full rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
              
              <div className="p-space-lg rounded-xl bg-surface-container-high shadow-sm flex flex-col justify-between gap-space-md relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Turno Matutino / Vespertino</span>
                  <span className="px-2 py-0.5 rounded bg-surface text-secondary font-label-sm text-label-sm">Balance 60/40</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-primary font-bold">Sin vacancias críticas</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">1 interinato en validación médica (Matemáticas II)</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-1 font-label-sm text-label-sm text-secondary font-semibold">
                  <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                  <span>Corte quincenal SEP: 30 de Octubre</span>
                </div>
              </div>
            </section>
            
            <section className="bg-surface-container-low rounded-xl p-space-xl shadow-sm" id="form-registro-docente">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-space-lg gap-4">
                <div className="flex items-center gap-space-md">
                  <div className="w-12 h-12 rounded-lg bg-primary text-surface flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[28px]">post_add</span>
                  </div>
                  <div>
                    <h2 className="font-headline-md text-headline-md text-primary font-bold">
                      Alta de Profesor / Personal Docente
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Ingrese la clave presupuestal oficial y la acreditación de
                      la Dirección General de Educación Secundaria Técnica.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="px-3 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase font-semibold">Formulario Oficial F-EST-04</span>
                </div>
              </div>
              <form className="flex flex-col gap-space-xl" onSubmit={(e) => { e.preventDefault(); flash("Docente registrado y enviado a validación de la Subdirección Académica."); }}>
                
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                    <h3 className="font-title-sm text-title-sm text-primary font-bold uppercase tracking-wider">
                      1. Identidad y Claves Oficiales
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                    
                    <div className="lg:col-span-2 flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">Nombre Completo (Apellidos primero)</label>
                      <input className="w-full px-4 py-2.5 bg-surface rounded-lg text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest shadow-sm" placeholder="Ej. Mendoza Carbajal, Rodolfo" required="" type="text" />
                    </div>
                    
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">RFC con Homoclave</label>
                      <input className="w-full px-4 py-2.5 bg-surface rounded-lg text-on-surface font-body-md text-body-md uppercase placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest shadow-sm" maxLength="13" placeholder="MECR8004128X3" required="" type="text" />
                    </div>
                    
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">CURP</label>
                      <input className="w-full px-4 py-2.5 bg-surface rounded-lg text-on-surface font-body-md text-body-md uppercase placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest shadow-sm" maxLength="18" placeholder="MECR800412HDFNRD01" required="" type="text" />
                    </div>
                    
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">Número de Empleado SEP</label>
                      <input className="w-full px-4 py-2.5 bg-surface rounded-lg text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest shadow-sm" placeholder="SEP-70-98442" required="" type="text" />
                    </div>
                    
                    <div className="lg:col-span-2 flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">Clave Presupuestal Analítica</label>
                      <input className="w-full px-4 py-2.5 bg-surface rounded-lg text-on-surface font-body-md text-body-md uppercase placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest shadow-sm" placeholder="110074213 E0463 00.0 0341" required="" type="text" />
                    </div>
                    
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">Correo Institucional</label>
                      <input className="w-full px-4 py-2.5 bg-surface rounded-lg text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest shadow-sm" placeholder="docente@secundaria70.edu.mx" type="email" />
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                    <h3 className="font-title-sm text-title-sm text-primary font-bold uppercase tracking-wider">
                      2. Perfil Académico y Especialidad Tecnológica
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                    
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">Título Profesional / Grado</label>
                      <input className="w-full px-4 py-2.5 bg-surface rounded-lg text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest shadow-sm" placeholder="Ingeniero Mecánico Electricista / Lic. en Pedagogía" required="" type="text" />
                    </div>
                    
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">Área de Especialidad Curricular</label>
                      <select className="w-full px-4 py-2.5 bg-surface rounded-lg text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest shadow-sm">
                        <option value="tecnologias">
                          Tecnologías Industriales y Talleres
                        </option>
                        <option value="ciencias">
                          Ciencias (Biología, Física, Química)
                        </option>
                        <option value="matematicas">
                          Matemáticas y Razonamiento Lógico
                        </option>
                        <option value="espanol">
                          Lengua Materna / Español
                        </option>
                        <option value="historia">
                          Historia, Geografía y Formación Cívica
                        </option>
                        <option value="educacion_fisica">
                          Educación Física y Salud Integral
                        </option>
                        <option value="ingles">
                          Lengua Extranjera (Inglés)
                        </option>
                      </select>
                    </div>
                    
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">Nivel de Habilitación USICAMM</label>
                      <select className="w-full px-4 py-2.5 bg-surface rounded-lg text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest shadow-sm">
                        <option value="k1">
                          Nivel C1 - Habilitado Definitivo
                        </option>
                        <option value="k2">
                          Nivel B2 - Acreditación Técnica
                        </option>
                        <option value="k3">
                          En Proceso de Evaluación Periódica
                        </option>
                        <option value="k4">
                          Técnico Superior Acreditado por Competencia
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                    <h3 className="font-title-sm text-title-sm text-primary font-bold uppercase tracking-wider">
                      3. Régimen Laboral y Asignación de Espacios
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                    
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">Horas Asignadas (Semana)</label>
                      <div className="relative">
                        <input className="w-full px-4 py-2.5 bg-surface rounded-lg text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest shadow-sm" max="48" min="4" required="" type="number" value="42" />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 font-label-sm text-label-sm text-outline">hrs / sem</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">Régimen / Tipo de Plaza</label>
                      <select className="w-full px-4 py-2.5 bg-surface rounded-lg text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest shadow-sm">
                        <option value="base">
                          Base Definitiva (Código 10)
                        </option>
                        <option value="interinato">
                          Interinato Limitado (Código 95)
                        </option>
                        <option value="hsm">
                          Horas-Semana-Mes (HSM Gravable)
                        </option>
                        <option value="provisional">
                          Alta Provisional (Código 20)
                        </option>
                      </select>
                    </div>
                    
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">Turno Operativo</label>
                      <select className="w-full px-4 py-2.5 bg-surface rounded-lg text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest shadow-sm">
                        <option value="matutino">
                          Matutino (07:00 a 14:00)
                        </option>
                        <option value="vespertino">
                          Vespertino (13:30 a 20:30)
                        </option>
                        <option value="mixto">Mixto Continuo</option>
                      </select>
                    </div>
                    
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">Taller o Laboratorio a Cargo</label>
                      <select className="w-full px-4 py-2.5 bg-surface rounded-lg text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest shadow-sm">
                        <option value="taller_mecanica">
                          Taller de Máquinas y Herramientas N-1
                        </option>
                        <option value="lab_computo_b">
                          Aula de Cómputo e Informática B
                        </option>
                        <option value="lab_electronica">
                          Laboratorio de Electrotecnia y Robótica
                        </option>
                        <option value="lab_quimica">
                          Laboratorio Multidisciplinario de Ciencias
                        </option>
                        <option value="diseno_arquitectonico">
                          Taller de Dibujo y Modelado Técnico
                        </option>
                        <option value="ninguno">
                          Sin resguardo de laboratorio (Docencia general)
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-between pt-space-md gap-4">
                  <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-secondary text-[18px]">verified_user</span>
                    <span>La información se transmitirá a la Dirección General de
                      Segunda Enseñanza Técnica.</span>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-6 py-2.5 bg-surface-container-highest text-on-surface font-label-lg text-label-lg rounded-lg hover:bg-surface-variant transition-colors" type="reset">
                      Limpiar Campos
                    </button>
                    <button className="w-full sm:w-auto px-6 py-2.5 bg-secondary text-on-secondary font-label-lg text-label-lg rounded-lg shadow-sm hover:bg-on-secondary-container transition-colors flex items-center justify-center gap-2" type="submit">
                      <span className="material-symbols-outlined text-[20px]">save</span>
                      <span>Guardar y Validar Plaza</span>
                    </button>
                  </div>
                </div>
              </form>
            </section>
            
            <section className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h2 className="font-headline-sm text-headline-sm text-primary font-bold">
                    Espacios de Formación Técnica Resguardados
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Infraestructura técnica activa bajo responsabilidad directa
                    de la plantilla docente registrada.
                  </p>
                </div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">4 Talleres Centrales</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                
                <div className="rounded-xl overflow-hidden bg-surface-container-low shadow-sm flex flex-col">
                  <div className="h-44 w-full relative">
                    <img className="w-full h-full object-cover" data-alt="Interior of a vocational technical high school mechanics workshop with industrial metal lathes, workbenches with precision hand tools, warm morning sunlight streaming through industrial windows, terracotta and warm beige walls, orderly atmosphere of craftsmanship." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0j6p7bG0m-hjzh0Nf8oueJ84Zgaabl20g3fEddKItrPhJMY7p9WoIM0sZwSe4yyVUdEYPm9thJsVtT9kqdopmHRo0YXHWWxHJIhibhNT2z1tmwkamGP_mMV9wLMFmKy4feBLXhqEJ7pLXcE1gApKGSIn6dTsaJoUlNv4qwgCRzIgw1tutGniL5v6IxfAMs1YIeEiY1YRRG6Dz4ybYUITRnln1Vdo_QuvnNQEbtZOxvdP06B_cqyFl_A" />
                    <div className="absolute bottom-2 left-2 bg-primary/90 text-surface px-2.5 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider">
                      Nave Tecnológica 1
                    </div>
                  </div>
                  <div className="p-space-md flex flex-col gap-1">
                    <span className="font-title-sm text-title-sm text-primary font-bold">Taller de Máquinas y Herramientas</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">A cargo de: Ing. Horacio Peña (Turno Matutino y
                      Mixto)</span>
                    <div className="flex items-center gap-2 mt-2 font-label-sm text-label-sm text-secondary">
                      <span className="material-symbols-outlined text-[16px]">build_circle</span>
                      <span>18 tornos paralelos • 4 fresadoras universales</span>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-xl overflow-hidden bg-surface-container-low shadow-sm flex flex-col">
                  <div className="h-44 w-full relative">
                    <img className="w-full h-full object-cover" data-alt="High school technical computer laboratory with neat rows of desktop monitors, students architectural drafting software manuals, warm ambient classroom lighting, cream colored acoustic wall panels, espresso brown desks." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9QnQ1U21Hwz9TlKFKSbEBJEm3JLhAO56JtzBK3PI2f38TPOipk8CjW3a0u1Vr3meWO7M4F6UU6j1zdzqwyqwX9W_lfqi8qTzTJhzgki2QzgfNdbJ8xWy4VsEq5AiggiScaWymbP3RTv0K9ouzmaBdh6fQaVGP7HV8FFca59V2VXC0loOkE7sdQJFB35b4kNVBBT-V8Z5pMO5vdnh3xwzayXumHlogrthHrECDZc7XvaiFNjnwtAb4_A" />
                    <div className="absolute bottom-2 left-2 bg-primary/90 text-surface px-2.5 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider">
                      Edificio B - Planta Alta
                    </div>
                  </div>
                  <div className="p-space-md flex flex-col gap-1">
                    <span className="font-title-sm text-title-sm text-primary font-bold">Aula de Cómputo B e Informática</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">A cargo de: L.I. Brenda Soto (Turnos M y V)</span>
                    <div className="flex items-center gap-2 mt-2 font-label-sm text-label-sm text-secondary">
                      <span className="material-symbols-outlined text-[16px]">devices</span>
                      <span>45 estaciones CAD • Red Ethernet Gigabit</span>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-xl overflow-hidden bg-surface-container-low shadow-sm flex flex-col">
                  <div className="h-44 w-full relative">
                    <img className="w-full h-full object-cover" data-alt="Technical school electronics laboratory with oscilloscope stations, soldering irons, breadboards and robotics parts neatly organized on wooden work surfaces, warm interior ambient lights, institutional technical educational ambiance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD6wQjBZXoNGepTfTYVDwZdkaxfFiKjim8HUz0KaK5PduGLzn5_4yywi3jA4KAGCROSxS5o2XGex2SYj6NF_B1ZIFU3-uOgWBtuoir_ERzD5MK7-6-hlELJIZwGw8Aont3dp-whLKaZ-7d7-eYlpjoEqEK8SD4lX0pYZUQtPsoVje8QK9z-dlRbZgz9EqYq64RVQznvNfZa4sGmVkPWaBtXsm-gCp_hIzo1dPgbHXMfWW-ZA_PVDwX4Q" />
                    <div className="absolute bottom-2 left-2 bg-primary/90 text-surface px-2.5 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider">
                      Edificio C - Planta Baja
                    </div>
                  </div>
                  <div className="p-space-md flex flex-col gap-1">
                    <span className="font-title-sm text-title-sm text-primary font-bold">Laboratorio de Circuitos y Robótica</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">A cargo de: Mtro. Fernando Garza (Turno Matutino)</span>
                    <div className="flex items-center gap-2 mt-2 font-label-sm text-label-sm text-secondary">
                      <span className="material-symbols-outlined text-[16px]">precision_manufacturing</span>
                      <span>Osciloscopios analógicos • Microcontroladores PIC</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="flex flex-col gap-space-lg">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                <div>
                  <h2 className="font-headline-md text-headline-md text-primary font-bold">
                    Directorio de Plantilla Docente
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Relación nominal de plazas cubiertas, turnos asignados y
                    asignaturas del plan de estudios.
                  </p>
                </div>
                
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center bg-surface-container-high rounded-lg p-1">
                    <button className="px-3 py-1.5 rounded bg-surface font-label-md text-label-md text-primary font-bold shadow-sm" type="button">
                      Todos (82)
                    </button>
                    <button className="px-3 py-1.5 rounded font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" type="button">
                      Técnicos (14)
                    </button>
                    <button className="px-3 py-1.5 rounded font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" type="button">
                      Académicos (68)
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <select className="px-3 py-2 bg-surface-container-low rounded-lg text-on-surface font-label-md text-label-md focus:outline-none">
                      <option>Todos los turnos</option>
                      <option>Matutino</option>
                      <option>Vespertino</option>
                      <option>Mixto</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider">
                        <th className="py-3.5 px-space-md">
                          Profesor / Cédula SEP
                        </th>
                        <th className="py-3.5 px-space-md">
                          Especialidad &amp; Materias
                        </th>
                        <th className="py-3.5 px-space-md">
                          Taller / Laboratorio Asignado
                        </th>
                        <th className="py-3.5 px-space-md text-center">
                          Carga Horaria
                        </th>
                        <th className="py-3.5 px-space-md">Estatus Plaza</th>
                        <th className="py-3.5 px-space-md text-right">
                          Acciones de Gestión
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y-0 text-on-surface font-body-sm text-body-sm">
                      
                      <tr className="hover:bg-surface-container transition-colors">
                        <td className="py-4 px-space-md">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary text-surface flex items-center justify-center font-bold text-sm shrink-0">
                              RC
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="font-title-sm text-title-sm text-primary font-bold">Ing. Rodolfo Carbajal Mendoza</span>
                              <span className="font-label-sm text-label-sm text-outline">SEP-70-4491 • RFC: CAMR720514-8J1</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-space-md">
                          <div className="flex flex-col">
                            <span className="font-semibold text-primary">Tecnologías Industriales</span>
                            <span className="text-on-surface-variant">Máquinas y Herramientas I, II y III (1°B, 2°A,
                              3°B)</span>
                          </div>
                        </td>
                        <td className="py-4 px-space-md">
                          <div className="flex items-center gap-1.5 text-primary">
                            <span className="material-symbols-outlined text-[18px] text-secondary">handyman</span>
                            <span>Taller de Máquinas N-1</span>
                          </div>
                        </td>
                        <td className="py-4 px-space-md text-center">
                          <div className="inline-flex flex-col items-center">
                            <span className="font-title-sm text-title-sm text-primary font-bold">42 hrs</span>
                            <span className="font-label-sm text-label-sm text-outline">Matutino</span>
                          </div>
                        </td>
                        <td className="py-4 px-space-md">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                            Base Definitiva
                          </span>
                        </td>
                        <td className="py-4 px-space-md text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-2 rounded bg-surface-container text-on-surface hover:bg-surface-container-highest transition-colors" title="Ver Expediente" type="button">
                              <span className="material-symbols-outlined text-[18px]">folder_shared</span>
                            </button>
                            <button className="px-3 py-1.5 bg-primary text-surface font-label-sm text-label-sm rounded hover:bg-primary-container transition-colors" type="button">
                              Modificar Carga
                            </button>
                          </div>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-surface-container transition-colors">
                        <td className="py-4 px-space-md">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-surface-container-highest text-primary flex items-center justify-center font-bold text-sm shrink-0">
                              BS
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="font-title-sm text-title-sm text-primary font-bold">Lic. Brenda Soto Carrillo</span>
                              <span className="font-label-sm text-label-sm text-outline">SEP-70-8820 • RFC: SOCB841103-PL9</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-space-md">
                          <div className="flex flex-col">
                            <span className="font-semibold text-primary">Tecnologías de la Información</span>
                            <span className="text-on-surface-variant">Informática Técnica I y II (1°A, 1°C, 2°B)</span>
                          </div>
                        </td>
                        <td className="py-4 px-space-md">
                          <div className="flex items-center gap-1.5 text-primary">
                            <span className="material-symbols-outlined text-[18px] text-secondary">computer</span>
                            <span>Aula de Cómputo B</span>
                          </div>
                        </td>
                        <td className="py-4 px-space-md text-center">
                          <div className="inline-flex flex-col items-center">
                            <span className="font-title-sm text-title-sm text-primary font-bold">36 hrs</span>
                            <span className="font-label-sm text-label-sm text-outline">Mixto</span>
                          </div>
                        </td>
                        <td className="py-4 px-space-md">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                            Base Definitiva
                          </span>
                        </td>
                        <td className="py-4 px-space-md text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-2 rounded bg-surface-container text-on-surface hover:bg-surface-container-highest transition-colors" title="Ver Expediente" type="button">
                              <span className="material-symbols-outlined text-[18px]">folder_shared</span>
                            </button>
                            <button className="px-3 py-1.5 bg-primary text-surface font-label-sm text-label-sm rounded hover:bg-primary-container transition-colors" type="button">
                              Modificar Carga
                            </button>
                          </div>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-surface-container transition-colors">
                        <td className="py-4 px-space-md">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-surface-container-highest text-primary flex items-center justify-center font-bold text-sm shrink-0">
                              AV
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="font-title-sm text-title-sm text-primary font-bold">Mtro. Alejandro Valdés Ríos</span>
                              <span className="font-label-sm text-label-sm text-outline">SEP-70-1192 • RFC: VARA780911-3H7</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-space-md">
                          <div className="flex flex-col">
                            <span className="font-semibold text-primary">Ciencias Experimentales</span>
                            <span className="text-on-surface-variant">Física Fundamental II y Química III (2°C, 3°A,
                              3°C)</span>
                          </div>
                        </td>
                        <td className="py-4 px-space-md">
                          <div className="flex items-center gap-1.5 text-on-surface-variant">
                            <span className="material-symbols-outlined text-[18px]">science</span>
                            <span>Lab. Multidisciplinario</span>
                          </div>
                        </td>
                        <td className="py-4 px-space-md text-center">
                          <div className="inline-flex flex-col items-center">
                            <span className="font-title-sm text-title-sm text-primary font-bold">40 hrs</span>
                            <span className="font-label-sm text-label-sm text-outline">Matutino</span>
                          </div>
                        </td>
                        <td className="py-4 px-space-md">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                            Base Definitiva
                          </span>
                        </td>
                        <td className="py-4 px-space-md text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-2 rounded bg-surface-container text-on-surface hover:bg-surface-container-highest transition-colors" title="Ver Expediente" type="button">
                              <span className="material-symbols-outlined text-[18px]">folder_shared</span>
                            </button>
                            <button className="px-3 py-1.5 bg-primary text-surface font-label-sm text-label-sm rounded hover:bg-primary-container transition-colors" type="button">
                              Modificar Carga
                            </button>
                          </div>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-surface-container transition-colors">
                        <td className="py-4 px-space-md">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-sm shrink-0">
                              LE
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="font-title-sm text-title-sm text-primary font-bold">Profra. Lorena Esquivel Garza</span>
                              <span className="font-label-sm text-label-sm text-outline">SEP-70-6510 • RFC: EEGL910228-4K1</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-space-md">
                          <div className="flex flex-col">
                            <span className="font-semibold text-primary">Matemáticas</span>
                            <span className="text-on-surface-variant">Matemáticas y Geometría I y II (1°D, 2°D)</span>
                          </div>
                        </td>
                        <td className="py-4 px-space-md">
                          <div className="flex items-center gap-1.5 text-outline">
                            <span className="material-symbols-outlined text-[18px]">meeting_room</span>
                            <span>Aula Regular 14</span>
                          </div>
                        </td>
                        <td className="py-4 px-space-md text-center">
                          <div className="inline-flex flex-col items-center">
                            <span className="font-title-sm text-title-sm text-primary font-bold">24 hrs</span>
                            <span className="font-label-sm text-label-sm text-outline">Vespertino</span>
                          </div>
                        </td>
                        <td className="py-4 px-space-md">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                            Interinato (Cód. 95)
                          </span>
                        </td>
                        <td className="py-4 px-space-md text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-2 rounded bg-surface-container text-on-surface hover:bg-surface-container-highest transition-colors" title="Ver Expediente" type="button">
                              <span className="material-symbols-outlined text-[18px]">folder_shared</span>
                            </button>
                            <button className="px-3 py-1.5 bg-primary text-surface font-label-sm text-label-sm rounded hover:bg-primary-container transition-colors" type="button">
                              Modificar Carga
                            </button>
                          </div>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-surface-container transition-colors">
                        <td className="py-4 px-space-md">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-surface-container-highest text-primary flex items-center justify-center font-bold text-sm shrink-0">
                              FG
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="font-title-sm text-title-sm text-primary font-bold">Ing. Fernando Garza Obregón</span>
                              <span className="font-label-sm text-label-sm text-outline">SEP-70-3309 • RFC: GAOF751201-9U4</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-space-md">
                          <div className="flex flex-col">
                            <span className="font-semibold text-primary">Electrotecnia y Robótica</span>
                            <span className="text-on-surface-variant">Sistemas Eléctricos y Circuitos (2°A, 3°A)</span>
                          </div>
                        </td>
                        <td className="py-4 px-space-md">
                          <div className="flex items-center gap-1.5 text-primary">
                            <span className="material-symbols-outlined text-[18px] text-secondary">memory</span>
                            <span>Lab. Circuitos &amp; Robótica</span>
                          </div>
                        </td>
                        <td className="py-4 px-space-md text-center">
                          <div className="inline-flex flex-col items-center">
                            <span className="font-title-sm text-title-sm text-primary font-bold">42 hrs</span>
                            <span className="font-label-sm text-label-sm text-outline">Matutino</span>
                          </div>
                        </td>
                        <td className="py-4 px-space-md">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                            Base Definitiva
                          </span>
                        </td>
                        <td className="py-4 px-space-md text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-2 rounded bg-surface-container text-on-surface hover:bg-surface-container-highest transition-colors" title="Ver Expediente" type="button">
                              <span className="material-symbols-outlined text-[18px]">folder_shared</span>
                            </button>
                            <button className="px-3 py-1.5 bg-primary text-surface font-label-sm text-label-sm rounded hover:bg-primary-container transition-colors" type="button">
                              Modificar Carga
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="px-space-md py-3.5 bg-surface-container-high flex flex-col sm:flex-row items-center justify-between gap-3 text-body-sm text-on-surface-variant">
                  <span className="font-body-sm text-body-sm">Mostrando 5 de 82 plazas docentes activas auditadas</span>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1 rounded bg-surface text-on-surface font-label-sm text-label-sm disabled:opacity-50" disabled="">
                      Anterior
                    </button>
                    <span className="font-label-sm text-label-sm font-bold text-primary px-2">Página 1 de 17</span>
                    <button className="px-3 py-1 rounded bg-surface text-on-surface font-label-sm text-label-sm hover:bg-surface-container-lowest">
                      Siguiente
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
  );
}
