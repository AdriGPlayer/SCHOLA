export default function Social() {
  return (
    <main className="relative pt-16 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <div className="px-margin py-space-lg flex flex-col gap-space-lg max-w-[1440px] mx-auto w-full">
            
            <div className="relative bg-surface-container-low rounded-xl p-space-lg shadow-sm overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-surface-variant/40 rounded-full blur-2xl pointer-events-none"></div>
              <div className="flex items-center gap-space-md relative z-10">
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center text-on-primary font-headline-md text-headline-md shadow-md">
                    DA
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-surface-container flex items-center justify-center shadow-sm">
                    <span className="w-3 h-3 rounded-full bg-secondary"></span>
                  </span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-space-xs flex-wrap">
                    <h1 className="font-headline-md text-headline-md text-on-surface leading-tight">
                      ¡Hola de nuevo, Daniela!
                    </h1>
                    <span className="bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded uppercase tracking-wider font-bold">2° B Matutino</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-[18px] text-tertiary">memory</span>
                    Especialidad: Taller de Informática y Sistemas Digitales •
                    Semestre Activo
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-space-sm bg-surface-container px-space-md py-2.5 rounded-lg shadow-sm w-full md:w-auto justify-between md:justify-end">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-surface flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[20px]">notifications_active</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Avisos Nuevos</span>
                    <span className="font-title-sm text-title-sm text-on-surface font-bold">3 pendientes</span>
                  </div>
                </div>
                <div className="w-px h-8 bg-surface-variant mx-1"></div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-surface flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">event_available</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Próx. Evento</span>
                    <span className="font-title-sm text-title-sm text-on-surface font-bold">Viernes 20</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center justify-between overflow-x-auto pb-1 gap-space-xs scrollbar-none" id="feed-filter-bar">
                <div className="flex items-center gap-space-xs min-w-max">
                  <button className="px-space-md py-2 rounded font-label-lg text-label-lg bg-primary text-on-primary shadow-sm flex items-center gap-1.5 transition-transform active:scale-95" type="button">
                    <span className="material-symbols-outlined text-[18px]">dynamic_feed</span>
                    Todo el Muro
                  </button>
                  <button className="px-space-md py-2 rounded font-label-lg text-label-lg bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors flex items-center gap-1.5" type="button">
                    <span className="material-symbols-outlined text-[18px]">account_balance</span>
                    Dirección &amp; Subdirección
                  </button>
                  <button className="px-space-md py-2 rounded font-label-lg text-label-lg bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors flex items-center gap-1.5" type="button">
                    <span className="material-symbols-outlined text-[18px]">security</span>
                    Avisos de Prefectura
                  </button>
                  <button className="px-space-md py-2 rounded font-label-lg text-label-lg bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors flex items-center gap-1.5" type="button">
                    <span className="material-symbols-outlined text-[18px]">celebration</span>
                    Eventos y Kermesse
                  </button>
                  <button className="px-space-md py-2 rounded font-label-lg text-label-lg bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors flex items-center gap-1.5" type="button">
                    <span className="material-symbols-outlined text-[18px]">terminal</span>
                    Mi Taller Técnico
                  </button>
                </div>
                <div className="hidden lg:flex items-center gap-1 font-label-md text-label-md text-on-surface-variant bg-surface-container px-space-sm py-1.5 rounded">
                  <span className="material-symbols-outlined text-[16px]">tune</span>
                  Orden: Recientes primero
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              
              <div className="lg:col-span-8 flex flex-col gap-space-lg">
                
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-start gap-space-sm">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary font-bold font-title-sm shrink-0">
                      DA
                    </div>
                    <div className="flex-1">
                      <textarea className="w-full bg-surface-container-low p-space-sm rounded font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary resize-none" placeholder="¿Tienes alguna duda sobre honores, convocatorias, talleres o justificaciones escolares? Pregunta a la comunidad técnica..." rows="2"></textarea>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-1 text-on-surface-variant">
                      <button className="flex items-center gap-1 px-2.5 py-1.5 rounded hover:bg-surface-container text-on-surface-variant font-label-md text-label-md transition-colors" type="button">
                        <span className="material-symbols-outlined text-[18px] text-tertiary">help_center</span>
                        <span className="hidden sm:inline">Duda General</span>
                      </button>
                      <button className="flex items-center gap-1 px-2.5 py-1.5 rounded hover:bg-surface-container text-on-surface-variant font-label-md text-label-md transition-colors" type="button">
                        <span className="material-symbols-outlined text-[18px] text-secondary">handyman</span>
                        <span className="hidden sm:inline">Tema de Taller</span>
                      </button>
                      <button className="flex items-center gap-1 px-2.5 py-1.5 rounded hover:bg-surface-container text-on-surface-variant font-label-md text-label-md transition-colors" type="button">
                        <span className="material-symbols-outlined text-[18px] text-primary">groups</span>
                        <span className="hidden sm:inline">Sociedad Alumnos</span>
                      </button>
                    </div>
                    <button className="bg-primary hover:bg-primary-container text-on-primary px-space-md py-1.5 rounded font-label-lg text-label-lg flex items-center gap-1.5 transition-all shadow-sm" type="button">
                      <span className="material-symbols-outlined text-[16px]">send</span>
                      Publicar Duda
                    </button>
                  </div>
                </div>
                
                <article className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
                  
                  <div className="p-space-md flex items-start justify-between bg-surface-container-low/50">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-12 h-12 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold shadow-sm">
                        <span className="material-symbols-outlined text-[26px]">account_balance</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-title-sm text-title-sm text-on-surface font-bold">Dirección General Técnica 70</span>
                          <span className="inline-flex items-center gap-0.5 bg-surface-container px-2 py-0.5 rounded text-secondary font-label-sm text-label-sm font-bold">
                            <span className="material-symbols-outlined text-[14px]">verified</span>
                            Oficial Técnica 70
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                          <span>Circular Oficial DGEST-VER-084</span>
                          <span>•</span>
                          <span>Hace 3 horas</span>
                          <span>•</span>
                          <span className="material-symbols-outlined text-[14px]">public</span>
                        </div>
                      </div>
                    </div>
                    <button className="p-1 rounded text-on-surface-variant hover:bg-surface-container transition-colors" title="Opciones" type="button">
                      <span className="material-symbols-outlined text-[20px]">more_vert</span>
                    </button>
                  </div>
                  
                  <div className="px-space-md py-space-sm flex flex-col gap-space-sm">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      Convocatoria Oficial: Desfile Cívico-Deportivo del 20 de
                      Noviembre &amp; Concurso de Escoltas Zona 04
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                      A toda la comunidad estudiantil de la Escuela Secundaria
                      Técnica Industrial No. 70: Se abre el registro para
                      integrar el contingente oficial de representatividad
                      cívica, Banda de Guerra "Águilas Técnicas" y tablas
                      gimnásticas conmemorativas del 114 Aniversario de la
                      Revolución Mexicana.
                    </p>
                    <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm">
                      <div className="flex items-center gap-space-xs text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-[24px]">flag</span>
                        <div className="flex flex-col">
                          <span className="font-label-md text-label-md font-bold">Ensayos en Patio Cívico General</span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Lunes, Miércoles y Viernes de 13:40 a 14:50 hrs.
                            Auditorio B.</span>
                        </div>
                      </div>
                      <button className="bg-secondary text-on-secondary px-space-md py-1.5 rounded font-label-md text-label-md hover:bg-secondary/90 transition-colors shrink-0" type="button">
                        Ver Convocatoria PDF
                      </button>
                    </div>
                  </div>
                  
                  <div className="px-space-md pb-space-sm">
                    <div className="relative rounded-lg overflow-hidden h-72 w-full bg-surface-container">
                      <img className="w-full h-full object-cover" data-alt="High school marching band students and honor guard standing in strict formal formation on an open-air school courtyard during golden hour, wearing crisp white and navy technical school uniforms with Mexican flag ribbons and polished brass drums, rich warm earthy color grading." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5lu01o3Yo7gNVZwcRGaG1axzoDSeYfPfv1i3lWUeuVYpeaGiHIrLf0LpUI3LNLSFtuNRsiqWD8XlyMEl_QRSkCbQ7Ob5ckTrE1YVZbz9Wu1tCm0cp1fq1C1f3ErA6rTLBZnXfvJwGsPVKJo_UfQKpIjps84X5-2-LuDc8-dmSCF_kEmnvvyA0ShaQHLcaJ1DAvHKDhTFPV2OycGCuTq5R1sQblLn6BEA7ymxEL-ZveRVmcpZPqCM2Zw" />
                      <div className="absolute bottom-3 left-3 bg-primary/90 backdrop-blur-md text-on-primary px-3 py-1 rounded font-label-sm text-label-sm tracking-wider uppercase font-bold flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[14px]">military_tech</span>
                        Banda de Guerra y Escolta Oficial
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-space-md bg-surface-container-lowest flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
                      <div className="flex items-center gap-1">
                        <span className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-on-secondary text-[11px]">
                          <span className="material-symbols-outlined text-[12px]">favorite</span>
                        </span>
                        <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-on-primary text-[11px] -ml-2">
                          <span className="material-symbols-outlined text-[12px]">save_as</span>
                        </span>
                        <span className="ml-1 font-label-md text-label-md font-bold text-on-surface">148 reacciones</span>
                      </div>
                      <div className="flex items-center gap-space-md">
                        <span>32 comentarios de alumnos</span>
                        <span>19 compartidos</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-space-xs">
                      <button className="flex-1 py-2 rounded hover:bg-surface-container-low text-on-surface font-label-md text-label-md flex items-center justify-center gap-1.5 transition-colors text-secondary font-bold" type="button">
                        <span className="material-symbols-outlined text-[20px]">favorite</span>
                        Me Enorgullece
                      </button>
                      <button className="flex-1 py-2 rounded hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-md text-label-md flex items-center justify-center gap-1.5 transition-colors" type="button">
                        <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                        Comentar
                      </button>
                      <button className="flex-1 py-2 rounded hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-md text-label-md flex items-center justify-center gap-1.5 transition-colors" type="button">
                        <span className="material-symbols-outlined text-[20px]">bookmark</span>
                        Guardar
                      </button>
                      <button className="flex-1 py-2 rounded hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-md text-label-md flex items-center justify-center gap-1.5 transition-colors" type="button">
                        <span className="material-symbols-outlined text-[20px]">share</span>
                        Compartir
                      </button>
                    </div>
                    
                    <div className="bg-surface-container-low p-space-sm rounded-lg flex items-start gap-space-sm mt-1">
                      <div className="w-8 h-8 rounded bg-surface flex items-center justify-center font-bold text-primary text-[12px]">
                        MR
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-label-md text-label-md font-bold text-on-surface">Mateo Ramos • 3° A Máquinas</span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Hace 1h</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface mt-0.5">
                          ¿Alumnos de turno vespertino también podemos
                          audicionar para percusión de la banda de guerra?
                        </p>
                        <div className="mt-1 flex items-center gap-3 text-secondary font-label-sm text-label-sm font-bold">
                          <button className="hover:underline" type="button">
                            Responder
                          </button>
                          <span className="text-on-surface-variant font-normal">Prof. Rosales confirmó que sí en Prefectura</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                
                <article className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
                  <div className="p-space-md flex items-start justify-between">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-12 h-12 rounded-lg bg-surface-container-high text-tertiary flex items-center justify-center font-bold">
                        <span className="material-symbols-outlined text-[26px]">precision_manufacturing</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <span className="font-title-sm text-title-sm text-on-surface font-bold">Academia de Informática &amp; Robótica</span>
                          <span className="bg-surface-container px-2 py-0.5 rounded text-tertiary-container font-label-sm text-label-sm font-bold">Mi Especialidad</span>
                        </div>
                        <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                          <span>Ing. Morales Vázquez</span>
                          <span>•</span>
                          <span>Ayer a las 16:45</span>
                          <span>•</span>
                          <span className="material-symbols-outlined text-[14px]">groups</span>
                        </div>
                      </div>
                    </div>
                    <button className="p-1 rounded text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
                      <span className="material-symbols-outlined text-[20px]">more_vert</span>
                    </button>
                  </div>
                  <div className="px-space-md py-space-xs flex flex-col gap-space-xs">
                    <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                      Excelente sesión práctica de calibración de sensores
                      ultrasónicos y servomotores con las brigadas de 2° B.
                      Listos los prototipos automatizados que se presentarán en
                      la Muestra Tecnológica Interescolar 2024. ¡Felicitaciones
                      a los equipos por su disciplina en banco de trabajo! 🤖⚡
                    </p>
                    <div className="flex items-center gap-2 flex-wrap pt-1 font-label-sm text-label-sm text-secondary font-bold">
                      <span>#TécnicasVeracruz</span>
                      <span>#OrgulloESTIS70</span>
                      <span>#RoboticaEscolar</span>
                      <span>#Informatica2B</span>
                    </div>
                  </div>
                  
                  <div className="p-space-md grid grid-cols-3 gap-space-xs">
                    <div className="col-span-2 h-64 rounded-lg overflow-hidden relative">
                      <img className="w-full h-full object-cover" data-alt="Mexican middle school students in lab coats and technical uniforms collaborating over an electronic robotics breadboard with microcontrollers and LEDs in a modern technical school laboratory, bright warm workshop lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuaGy8NRDaorC1hRdJ-EpBVwcZw1vYonU_ZATyDmpfAE9a4bD4D5wLtKtRu_BSnH65v2YYNn7ZGc2hZgVcgPsDjBWprv-yVoW3rb5GfRyTKSCReUvJW_rGlD3I03RK3BeMp8xxibzV10DH0xB_FbFoD4S-zGfq2n4w5bHOtdYlo2sCr0xvj9OZMDC0W30ILQ-JBGCiLN81hH7bcYRMMdoQXPOY0HsOqkPgN_MEQD7SKrPZvxN0wBDUhQ" />
                      <div className="absolute bottom-2 left-2 bg-primary/80 backdrop-blur-md px-2 py-0.5 rounded text-on-primary font-label-sm text-label-sm">
                        Banco de Pruebas 03
                      </div>
                    </div>
                    <div className="flex flex-col gap-space-xs h-64">
                      <div className="h-1/2 rounded-lg overflow-hidden relative">
                        <img className="w-full h-full object-cover" data-alt="Close up of mechanical robotic gripper arm constructed with 3D printed terracotta orange plastic components and Arduino boards on an oak workshop desk." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbluRTrbe-LD3h5omRwF8-a0Mz2hGw8lM2h9tMM2ZHcHBH0QcEet2ijgvRkGfMYIkrutwt2j1vVIc5uAWT9DNFG3i4zKRTFeHjMp-Vhn31pD9ieCDa9qN4lRioi5SjPf7BXxMYhnb1pi1K1zjeMzKVf2MAdv_0MRTOzQQ1NHe1QLUhFP_g3XEUlfQO9CUZ1sqJ7aEmj5YHm6NbIPN3GHSEyOHLPqB7zVD5WU4EGpqOV7NGSpw1fkoTVw" />
                      </div>
                      <div className="h-1/2 rounded-lg overflow-hidden relative">
                        <img className="w-full h-full object-cover" data-alt="Students testing a line follower robotic vehicle on a white grid track on the classroom floor, smiling teachers supervising." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6y5z9R1MeY87fuB2z0rxoNIM99hX-KO-_vTt_ze-TOW2Oi4QvPrWejILj2C1Gu4olCOonfsrpmfeJkdP9B6EgsHsZo7OSHOTcJ-xr2teKVeZ5qbALfCFQXDTNmJxP2g0lSL9GiMQyh5SGiaJKzdxHCAokGblMDW2Vb3G9EHRY7VZhbvT3M5K6jZyoE4Z2Ggja_LrN-yel-mBySC8nsgZNs12t83Hg17RYr7fw5xlRkUT6stzPq5Fm7g" />
                        <div className="absolute inset-0 bg-primary/60 flex items-center justify-center text-on-primary font-title-sm text-title-sm font-bold">
                          +4 fotos
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-space-md py-space-sm bg-surface-container-low flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
                    <div className="flex items-center gap-1 font-label-md text-label-md text-on-surface font-semibold">
                      <span className="material-symbols-outlined text-[18px] text-secondary">thumb_up</span>
                      89 alumnos reaccionaron
                    </div>
                    <div className="flex items-center gap-space-md">
                      <button className="hover:text-primary font-label-md text-label-md" type="button">
                        Reaccionar
                      </button>
                      <button className="hover:text-primary font-label-md text-label-md" type="button">
                        Comentar
                      </button>
                      <button className="hover:text-primary font-label-md text-label-md" type="button">
                        Compartir
                      </button>
                    </div>
                  </div>
                </article>
                
                <article className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
                  <div className="p-space-md flex items-start justify-between bg-error-container/30">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-12 h-12 rounded-lg bg-secondary text-on-secondary flex items-center justify-center font-bold shadow-sm">
                        <span className="material-symbols-outlined text-[26px]">badge</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <span className="font-title-sm text-title-sm text-on-surface font-bold">Jefatura de Prefectura Escolar</span>
                          <span className="bg-error-container text-on-error-container px-2 py-0.5 rounded font-label-sm text-label-sm font-bold uppercase tracking-wider">Aviso Obligatorio</span>
                        </div>
                        <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                          <span>Turnos Matutino y Vespertino</span>
                          <span>•</span>
                          <span>Hoy 07:15 AM</span>
                        </div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-[24px]">priority_high</span>
                  </div>
                  <div className="p-space-md flex flex-col gap-space-sm">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      Recordatorio: Credencial Escolar Digital/Física para
                      Acceso a Torniquetes &amp; Uniforme de Gala
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                      Se recuerda a todos los alumnos que a partir del próximo
                      lunes es estrictamente obligatorio portar la credencial
                      escolar visible (física o con el código QR del portal
                      MERCURIO) para el paso por torniquetes de acceso peatonal.
                      Asimismo, para los honores a la bandera corresponde el
                      <strong>uniforme de gala completo</strong> (suéter
                      institucional café, camisa blanca de cuello,
                      pantalón/falda reglamentario y calzado escolar lustrado).
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-1">
                      <div className="bg-surface-container-low p-space-sm rounded-lg flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-[28px]">qr_code_scanner</span>
                        <div className="flex flex-col">
                          <span className="font-label-md text-label-md font-bold text-on-surface">Torniquetes Puerta Norte</span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Lector óptico activado desde 06:45 hrs.</span>
                        </div>
                      </div>
                      <div className="bg-surface-container-low p-space-sm rounded-lg flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-tertiary text-[28px]">dry_cleaning</span>
                        <div className="flex flex-col">
                          <span className="font-label-md text-label-md font-bold text-on-surface">Revisión de Uniforme</span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Sin suéteres o prendas no oficiales.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-space-md py-space-sm bg-surface-container-lowest flex items-center justify-between text-on-surface-variant font-label-md text-label-md">
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1 text-on-surface hover:text-secondary" type="button">
                        <span className="material-symbols-outlined text-[18px]">check_circle</span>
                        Enterado (312 alumnos)
                      </button>
                    </div>
                    <button className="text-secondary hover:underline flex items-center gap-1 font-bold" type="button">
                      <span className="material-symbols-outlined text-[16px]">print</span>
                      Ver Reglamento de Disciplina
                    </button>
                  </div>
                </article>
                
                <article className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
                  <div className="p-space-md flex items-start justify-between">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-12 h-12 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center font-bold">
                        <span className="material-symbols-outlined text-[26px]">sports_soccer</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <span className="font-title-sm text-title-sm text-on-surface font-bold">Sociedad de Alumnos ESTIS 70</span>
                          <span className="bg-surface-container px-2 py-0.5 rounded text-on-surface-variant font-label-sm text-label-sm font-semibold">Comité Deportivo</span>
                        </div>
                        <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                          <span>Publicado por Rodrigo Valdés (3° C)</span>
                          <span>•</span>
                          <span>Ayer</span>
                        </div>
                      </div>
                    </div>
                    <button className="p-1 rounded text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
                      <span className="material-symbols-outlined text-[20px]">more_vert</span>
                    </button>
                  </div>
                  <div className="px-space-md py-space-xs flex flex-col gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      ¡Este viernes arrancan las eliminatorias del Torneo
                      Relámpago de Fútbol 7 y Voleibol Mixto! ⚽🏐
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                      Ven a apoyar a tu grupo en las canchas principales durante
                      el receso extendido y la jornada vespertina. El equipo
                      ganador representará a nuestra escuela en la Copa de
                      Secundarias Técnicas de la Región. Habrá venta de
                      antojitos y aguas frescas organizada por la sociedad
                      pro-fondos de graduación.
                    </p>
                  </div>
                  <div className="px-space-md py-space-sm">
                    <div className="relative rounded-lg overflow-hidden h-56 w-full bg-surface-container">
                      <img className="w-full h-full object-cover" data-alt="Energetic outdoor sports scene on a Mexican secondary school basketball and soccer multi-court, teenagers playing volleyball with enthusiastic classmates cheering from concrete bleachers shaded by trees." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAocBg1h4eguS_bJvvY6X-IfXjJuhZ0wcX5mKGIh8h6d4Gze2MFpBzWSNvoxNXbfqvdcd03IBcd37DiGtsurfYvLO9osnwP9y2__etSuK8yonXqqd6AYXnBDEq4aSkrvqsy-kYz-2uIDHCH3y2T1fF3WdccEB0YXKBDMLs4CpF5B8xUMtX5-zUbX3arpj4dercXRGTgAigqdbgc-6yoHUV1XwX4gSpIT_Dif_M4bI-uf2FBV2mtZJHzWg" />
                      <div className="absolute top-3 right-3 bg-secondary text-on-secondary font-label-sm text-label-sm px-2.5 py-1 rounded font-bold uppercase shadow-sm">
                        Viernes 11:30 AM • Canchas 1 y 2
                      </div>
                    </div>
                  </div>
                  <div className="p-space-md bg-surface-container-lowest flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
                    <div className="flex items-center gap-1 font-label-md text-label-md text-on-surface font-semibold">
                      <span className="material-symbols-outlined text-[18px] text-secondary">local_fire_department</span>
                      204 alumnos asistirán
                    </div>
                    <div className="flex items-center gap-space-md">
                      <button className="hover:text-primary font-label-md text-label-md flex items-center gap-1" type="button">
                        <span className="material-symbols-outlined text-[16px]">how_to_reg</span>
                        Inscribir a mi grupo
                      </button>
                      <button className="hover:text-primary font-label-md text-label-md flex items-center gap-1" type="button">
                        <span className="material-symbols-outlined text-[16px]">share</span>
                        Compartir
                      </button>
                    </div>
                  </div>
                </article>
              </div>
              
              <aside className="lg:col-span-4 flex flex-col gap-space-lg">
                
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-[22px] text-secondary">calendar_month</span>
                      <h3 className="font-title-sm text-title-sm text-on-surface font-bold">
                        Calendario Escolar Clave
                      </h3>
                    </div>
                    <a className="font-label-sm text-label-sm text-secondary hover:underline font-bold uppercase" href="#">Ver Todo</a>
                  </div>
                  <div className="flex flex-col gap-space-sm">
                    
                    <div className="flex items-start gap-space-sm p-space-xs rounded-lg hover:bg-surface-container-low transition-colors">
                      <div className="w-12 h-14 rounded-lg bg-surface-container flex flex-col items-center justify-center shrink-0">
                        <span className="font-label-sm text-label-sm text-secondary font-bold uppercase leading-none">NOV</span>
                        <span className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight mt-0.5">18</span>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-md text-label-md text-on-surface font-bold truncate">Suspensión Oficial SEP</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Conmemoración del 20 de Noviembre</span>
                        <span className="font-label-sm text-label-sm text-secondary mt-0.5 font-semibold">Sin actividades académicas</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-space-sm p-space-xs rounded-lg hover:bg-surface-container-low transition-colors">
                      <div className="w-12 h-14 rounded-lg bg-surface-container flex flex-col items-center justify-center shrink-0">
                        <span className="font-label-sm text-label-sm text-tertiary font-bold uppercase leading-none">NOV</span>
                        <span className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight mt-0.5">22</span>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-md text-label-md text-on-surface font-bold truncate">Corte 1er Trimestre</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Cierre de captura de calificaciones</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5 font-semibold">Plataforma DGEST</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-space-sm p-space-xs rounded-lg hover:bg-surface-container-low transition-colors">
                      <div className="w-12 h-14 rounded-lg bg-surface-container flex flex-col items-center justify-center shrink-0">
                        <span className="font-label-sm text-label-sm text-primary font-bold uppercase leading-none">NOV</span>
                        <span className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight mt-0.5">29</span>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-md text-label-md text-on-surface font-bold truncate">Consejo Técnico Escolar</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Reunión de colegiado docente mensual</span>
                        <span className="font-label-sm text-label-sm text-secondary mt-0.5 font-semibold">Solo personal directivo</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-surface-container-low rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[20px] text-tertiary">storefront</span>
                    <h3 className="font-title-sm text-title-sm text-on-surface font-bold">
                      Servicios del Plantel Hoy
                    </h3>
                  </div>
                  
                  <div className="bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-label-md text-label-md text-on-surface font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-secondary">restaurant</span>
                        Menú Nutritivo de Cafetería
                      </span>
                      <span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface font-bold">$45 MXN</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Guisado de pollo en salsa verde con arroz integral,
                      frijoles refritos, ensalada y agua fresca de jamaica
                      natural.
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-label-md text-label-md text-on-surface font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-primary">local_library</span>
                        Biblioteca 'Dr. Manuel Gamio'
                      </span>
                      <span className="font-label-sm text-label-sm text-secondary font-bold">Abierta</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Préstamo de libros de texto SEP y sala de cómputo
                      disponible hasta las 14:30 hrs. Sala de silencio
                      disponible.
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-label-md text-label-md text-on-surface font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-secondary">medical_services</span>
                        Enfermería &amp; Primeros Auxilios
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Módulo A-102</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Campaña de vacunación contra influenza para comunidad
                      técnica de 09:00 a 12:00 hrs.
                    </p>
                  </div>
                </div>
                
                <div className="bg-primary text-on-primary rounded-xl p-space-md shadow-md flex flex-col gap-space-sm relative overflow-hidden">
                  <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-primary-container rounded-full blur-xl pointer-events-none"></div>
                  <div className="flex items-center gap-space-xs relative z-10">
                    <span className="material-symbols-outlined text-[24px] text-primary-fixed-dim">support_agent</span>
                    <span className="font-headline-sm text-headline-sm font-bold text-on-primary">Orientación Educativa</span>
                  </div>
                  <p className="font-body-md text-body-md text-primary-fixed-dim relative z-10 leading-relaxed">
                    ¿Necesitas apoyo académico, asesoría emocional o mediación
                    escolar con tutores? El departamento de Trabajo Social y
                    Psicología está contigo de forma confidencial.
                  </p>
                  <div className="flex flex-col gap-2 pt-1 relative z-10">
                    <a className="bg-surface text-on-surface hover:bg-surface-container py-2 px-space-sm rounded font-label-md text-label-md text-center font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm" href="#">
                      <span className="material-symbols-outlined text-[18px] text-secondary">chat</span>
                      Solicitar Cita con Orientadora
                    </a>
                    <div className="flex items-center justify-between text-primary-fixed-dim font-label-sm text-label-sm px-1">
                      <span>Lic. Patricia Méndez • Cubículo 4</span>
                      <span>Lunes a Viernes</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-surface-container rounded-xl p-space-md flex flex-col gap-space-xs text-center items-center">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">school</span>
                  </div>
                  <span className="font-headline-sm text-headline-sm text-on-surface italic mt-1 leading-snug">
                    "La Técnica al Servicio de la Patria"
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mt-1">
                    DGEST • Zona Escolar 04 • Veracruz
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs mt-1">
                    Portal Estudiantil MERCURIO. Cualquier consulta técnica o
                    problema de acceso repórtalo en el Taller de Cómputo.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
        
      </main>
  );
}
