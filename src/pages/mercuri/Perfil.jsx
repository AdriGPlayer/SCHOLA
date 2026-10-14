import { useState } from "react";

export default function Perfil() {
  const [flipped, setFlipped] = useState(false);
  const [toast, setToast] = useState("");
  return (
    <main className="relative pt-16 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
        {toast && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-inverse-surface text-inverse-on-surface font-label-md text-label-md px-space-md py-space-sm rounded-lg shadow-xl toast-in w-[320px] text-center">
            {toast}
          </div>
        )}
          <div className="px-margin py-space-lg flex flex-col gap-space-lg">
            
            <div className="bg-surface-container-high rounded-xl p-space-lg relative overflow-hidden shadow-sm">
              <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none select-none text-primary">
                <span className="material-symbols-outlined text-[280px]">badge</span>
              </div>
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
                <div className="flex flex-col sm:flex-row sm:items-center gap-space-md">
                  <div className="relative">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden shadow-md bg-surface-container-highest">
                      <img className="w-full h-full object-cover" data-alt="Fotografía de identificación oficial de estudiante mexicana de secundaria de 14 años, peinada con prolijidad, vistiendo uniforme escolar técnico formal con cuello polo blanco y ribetes en color café tabaco oscuro institucional. Fotografía de estudio nítida con fondo neutro marfil, iluminación cenital uniforme y expresión académica confiada." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnOzkAtnzztOwxH2aJGCOj_OnIW83t4G4yLAVPqFC5vPv2lL60UEiXz80-w1V21xVBUK7dUIFV3tXv-DShJT6dYj5ejwNTL-2NMHCjHubcP-_VL76S9HZSNp4F74atBu7oW0Z6z7qa2L6cMdZGD-DzxlnNapghZfjwE7kuXGkfbTDaqN4AlMxd3b1PAJAPRVRCKsas_OpWm39VP40DLuhMlOsuUHbflQKRnkFto2wL5MU2azLHTiP2Og" />
                    </div>
                    <span className="absolute -bottom-1.5 -right-1.5 bg-secondary text-on-secondary text-label-sm font-label-sm px-1.5 py-0.5 rounded shadow">2° B</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="bg-primary text-on-primary px-2 py-0.5 rounded text-label-sm font-label-sm uppercase tracking-wider">Alumna Regular Activa</span>
                      <span className="text-on-surface-variant font-body-sm text-body-sm">Ciclo 2024-2025</span>
                    </div>
                    <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">
                      Daniela Álvarez Ramírez
                    </h1>
                    <div className="flex flex-wrap items-center gap-x-space-md gap-y-1 mt-1 text-on-surface-variant font-label-md text-label-md">
                      <span className="flex items-center gap-1"><strong className="text-on-surface">Matrícula:</strong>
                        24-EST70-0192</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><strong className="text-on-surface">CURP:</strong>
                        AARD090415MDFLN01</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-secondary font-bold"><span className="material-symbols-outlined text-[16px]">terminal</span>
                        Taller de Informática y Redes</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row lg:flex-col items-start lg:items-end justify-between border-t lg:border-t-0 pt-space-sm lg:pt-0 gap-2">
                  <div className="flex items-center gap-1.5 bg-surface-container-lowest px-3 py-1.5 rounded-lg shadow-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 animate-pulse"></span>
                    <span className="font-label-md text-label-md text-on-surface font-semibold">Torniquetes Habilitados</span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Acceso Plantel: Matutino 06:45 - 13:40 hrs</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
              
              <div className="xl:col-span-6 flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-secondary text-[22px]">credit_card</span>
                    <h2 className="font-headline-sm text-headline-sm text-primary">
                      Credencial Digital ESTIS 70
                    </h2>
                  </div>
                  <div className="flex items-center gap-1 bg-surface-container px-2 py-1 rounded">
                    <button onClick={() => setFlipped(false)} className={`px-2.5 py-1 text-label-sm font-label-sm rounded transition-all ${flipped ? "text-on-surface hover:text-primary" : "bg-primary text-on-primary shadow-sm"}`} id="btn-front">
                      Frente
                    </button>
                    <button onClick={() => setFlipped(true)} className={`px-2.5 py-1 text-label-sm font-label-sm rounded transition-all ${flipped ? "bg-primary text-on-primary shadow-sm" : "text-on-surface hover:text-primary"}`} id="btn-back">
                      Reverso
                    </button>
                  </div>
                </div>
                
                <div className="relative w-full aspect-[1.586/1] max-w-xl mx-auto perspective-[1000px]">
                  
                  <div className={`w-full h-full rounded-2xl bg-gradient-to-br from-[#3B2219] via-[#4A2C21] to-[#2E150B] text-on-primary p-space-md sm:p-space-lg flex flex-col justify-between shadow-xl relative overflow-hidden transition-all duration-500 ${flipped ? "hidden" : ""}`} id="card-face-front">
                    
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffdbcf_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
                    <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-secondary opacity-20 blur-2xl pointer-events-none"></div>
                    
                    <div className="flex items-start justify-between relative z-10 border-b border-primary-fixed-dim/20 pb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded bg-surface-container-highest flex items-center justify-center text-primary font-bold shadow">
                          <span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm tracking-widest text-primary-fixed uppercase leading-none font-bold">SEP • DGEST • SEV</span>
                          <span className="font-title-sm text-title-sm text-on-primary font-bold tracking-tight">ESC. SEC. TÉCNICA IND. No. 70</span>
                          <span className="font-label-sm text-label-sm text-tertiary-fixed-dim text-[9px] leading-tight">Clave CCT: 30DST0070Z • Veracruz</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-label-sm text-label-sm bg-secondary px-2 py-0.5 rounded text-on-secondary font-bold tracking-wider uppercase">ALUMNO</span>
                        <p className="font-label-sm text-[10px] text-primary-fixed-dim mt-0.5">
                          Vig: 2024-2025
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-space-md my-auto relative z-10 py-1">
                      <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-lg bg-surface-container-high overflow-hidden shadow-md flex-shrink-0">
                        <img className="w-full h-full object-cover" data-alt="Retrato fotográfico nítido de Daniela Álvarez Ramírez con credencial oficial enmarcada, rostro sonriente y uniforme reglamentario marrón y blanco de la Técnica 70." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC73YOuYc73zutVZ49Sty0LumcgHCIiJ8C3vvyEnnGVIyDEnJatHr0swN9TDKAohTuOl6R3hxpW97DUCSrfXDjZaCd_mUHWaFshOYERNZTjSBI7Gc2GjKv60qkQn0YldTJ6bOCj_Wr7gCCh8BJu_tMlXxzBJ288B118ZwQpigtZBaJu6owDlgPtwtIqwvNp0-2o8o0HWyNiEpGXzWiL508cpoE0uJnj6XFXwOErrqzOBjZI7aXFbgFKA" />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-wider">Estudiante Oficial</span>
                        <h3 className="font-headline-sm text-headline-sm text-on-primary font-bold tracking-tight truncate leading-tight">
                          Daniela Álvarez R.
                        </h3>
                        <div className="mt-1 space-y-0.5 font-label-md text-label-md text-surface-container-highest">
                          <p className="truncate">
                            <span className="text-primary-fixed-dim font-normal">Mat:</span>
                            <span className="font-bold tracking-wider">24-EST70-0192</span>
                          </p>
                          <p>
                            <span className="text-primary-fixed-dim font-normal">Grado:</span>
                            2° "B" • Matutino
                          </p>
                          <p className="truncate text-secondary-fixed font-semibold">
                            <span className="text-primary-fixed-dim font-normal">Tec:</span>
                            Informática y Redes
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-center justify-center p-1.5 bg-surface-container-lowest rounded-lg shadow-inner flex-shrink-0">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-white p-1">
                          
                          <svg className="w-full h-full text-primary" fill="currentColor" viewbox="0 0 100 100">
                            <rect fill="currentColor" height="30" rx="2" width="30" x="0" y="0"></rect>
                            <rect fill="white" height="20" rx="1" width="20" x="5" y="5"></rect>
                            <rect fill="currentColor" height="12" width="12" x="9" y="9"></rect>
                            <rect fill="currentColor" height="30" rx="2" width="30" x="70" y="0"></rect>
                            <rect fill="white" height="20" rx="1" width="20" x="75" y="5"></rect>
                            <rect fill="currentColor" height="12" width="12" x="79" y="9"></rect>
                            <rect fill="currentColor" height="30" rx="2" width="30" x="0" y="70"></rect>
                            <rect fill="white" height="20" rx="1" width="20" x="5" y="75"></rect>
                            <rect fill="currentColor" height="12" width="12" x="9" y="79"></rect>
                            <rect fill="currentColor" height="8" width="8" x="38" y="10"></rect>
                            <rect fill="currentColor" height="14" width="8" x="52" y="15"></rect>
                            <rect fill="currentColor" height="8" width="12" x="36" y="26"></rect>
                            <rect fill="currentColor" height="16" width="16" x="42" y="42"></rect>
                            <rect fill="currentColor" height="10" width="12" x="15" y="42"></rect>
                            <rect fill="currentColor" height="18" width="10" x="72" y="42"></rect>
                            <rect fill="currentColor" height="10" width="14" x="36" y="70"></rect>
                            <rect fill="currentColor" height="12" width="14" x="56" y="66"></rect>
                            <rect fill="currentColor" height="18" width="14" x="78" y="72"></rect>
                            <rect fill="currentColor" height="6" width="24" x="42" y="86"></rect>
                          </svg>
                        </div>
                        <span className="text-[8px] font-mono text-on-surface font-bold mt-1 tracking-tighter">SEC: 88F9-24B</span>
                      </div>
                    </div>
                    
                    <div className="flex items-end justify-between relative z-10 pt-1 text-[9px] text-primary-fixed-dim">
                      <div className="flex items-center gap-1 font-mono tracking-widest text-surface-container-high">
                        ||| | ||||| || |||||| | ||||| |||| |||
                      </div>
                      <div className="flex items-center gap-1 font-label-sm text-label-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        <span>Firma Digital Tokenizada</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`w-full h-full rounded-2xl bg-[#2E150B] text-surface-container-lowest p-space-md sm:p-space-lg flex flex-col justify-between shadow-xl relative overflow-hidden transition-all duration-500 ${flipped ? "" : "hidden"}`} id="card-face-back">
                    
                    <div className="absolute top-4 left-0 right-0 h-10 bg-primary shadow-inner"></div>
                    <div className="mt-12 flex flex-col gap-2 relative z-10">
                      <div className="bg-surface-container-high p-2 rounded text-on-surface">
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Firma Autorizada de la Dirección del Plantel</span>
                        <div className="flex items-center justify-between mt-1">
                          <div className="font-headline-sm italic text-primary text-headline-sm font-serif">
                            Prof. M. Morales R.
                          </div>
                          <span className="font-label-sm text-[9px] text-on-surface-variant font-mono">SELLO DIGITAL DGEST-VER</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-surface-container-low font-body-sm text-body-sm">
                        <div className="bg-primary/50 p-2 rounded">
                          <span className="font-label-sm text-label-sm text-primary-fixed uppercase">Tipo de Sangre:</span>
                          <p className="font-title-sm text-title-sm font-bold text-on-primary">
                            O Positivo (O+)
                          </p>
                        </div>
                        <div className="bg-primary/50 p-2 rounded">
                          <span className="font-label-sm text-label-sm text-primary-fixed uppercase">Alergias Conocidas:</span>
                          <p className="font-title-sm text-title-sm font-bold text-on-primary">
                            Ninguna Reportada
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-secondary/20 p-2 rounded flex items-center justify-between">
                        <div>
                          <span className="font-label-sm text-label-sm text-secondary-fixed uppercase font-bold">En caso de Accidente:</span>
                          <p className="font-label-md text-label-md text-on-primary font-bold">
                            Sr. Roberto Álvarez (Padre)
                          </p>
                        </div>
                        <span className="font-mono text-label-md text-label-md text-surface-container-lowest font-bold">228-812-4901</span>
                      </div>
                    </div>
                    
                    <div className="text-[9px] text-primary-fixed-dim text-center leading-snug">
                      Esta credencial es propiedad de la ESTIS 70 y es de porte
                      obligatorio para el ingreso a laboratorios, talleres
                      técnicos y biblioteca. En caso de extravío, devolver en
                      Dirección del Plantel: Av. Tecnológico 100, Col.
                      Constituyentes.
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-space-sm">
                  <button className="flex-1 min-w-[170px] bg-primary text-on-primary hover:bg-primary-container px-4 py-2.5 rounded font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-sm transition-colors" type="button">
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    Descargar en PDF
                  </button>
                  <button className="flex-1 min-w-[170px] bg-surface-container-high hover:bg-surface-container-highest text-primary px-4 py-2.5 rounded font-label-lg text-label-lg flex items-center justify-center gap-2 transition-colors" type="button">
                    <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
                    Añadir a Wallet
                  </button>
                  <button className="p-2.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-colors" title="Refrescar Token Dinámico" type="button">
                    <span className="material-symbols-outlined text-[20px]">sync</span>
                  </button>
                </div>
                
                <div className="bg-surface-container p-space-md rounded-xl flex items-center justify-between gap-space-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-[24px]">verified_user</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface font-bold">
                        Permiso de Taller Activo
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Habilitada para Sala de Cómputo B y Préstamo de Redes
                      </p>
                    </div>
                  </div>
                  <span className="bg-surface-container-highest text-primary font-label-sm text-label-sm px-2 py-1 rounded font-bold">NIVEL 2</span>
                </div>
              </div>
              
              <div className="xl:col-span-6 flex flex-col gap-space-lg">
                
                <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[22px]">analytics</span>
                      <h2 className="font-headline-sm text-headline-sm text-primary">
                        Resumen Académico
                      </h2>
                    </div>
                    <a className="font-label-md text-label-md text-secondary font-bold hover:underline flex items-center gap-1" href="#">
                      Kardex en JÚPITER
                      <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                    </a>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
                    <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Promedio General</span>
                      <span className="font-headline-lg text-headline-lg text-primary font-bold mt-1">9.6</span>
                      <span className="font-body-sm text-body-sm text-emerald-800 font-semibold flex items-center gap-0.5 mt-0.5">
                        <span className="material-symbols-outlined text-[14px]">trending_up</span>
                        Top 5% del Turno
                      </span>
                    </div>
                    <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Banda / Torneos</span>
                      <span className="font-headline-lg text-headline-lg text-secondary font-bold mt-1">34 hrs</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Representativo Cívico</span>
                    </div>
                    <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Asistencia General</span>
                      <span className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">98.2%</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">1 Falta Justificada</span>
                    </div>
                  </div>
                  
                  <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm uppercase font-bold">
                      <span>Evaluaciones Trimestrales SEP</span>
                      <span>Estatus Boleta</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 rounded bg-surface-container-low">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded bg-primary text-on-primary text-label-sm font-label-sm flex items-center justify-center font-bold">1T</span>
                          <div>
                            <p className="font-label-md text-label-md text-on-surface font-bold">
                              Primer Trimestre (Sep - Nov 2024)
                            </p>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">
                              Promedio Registrado:
                              <strong className="text-primary">9.8</strong>
                            </p>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-label-sm text-label-sm font-bold">Validada SEP</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-surface-container-low">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded bg-secondary text-on-secondary text-label-sm font-label-sm flex items-center justify-center font-bold">2T</span>
                          <div>
                            <p className="font-label-md text-label-md text-on-surface font-bold">
                              Segundo Trimestre (Dic - Mar 2025)
                            </p>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">
                              Promedio Registrado:
                              <strong className="text-primary">9.5</strong>
                            </p>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-label-sm text-label-sm font-bold">Validada SEP</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-surface-container opacity-75">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded bg-on-surface-variant text-surface text-label-sm font-label-sm flex items-center justify-center font-bold">3T</span>
                          <div>
                            <p className="font-label-md text-label-md text-on-surface font-bold">
                              Tercer Trimestre (Abr - Jun 2025)
                            </p>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">
                              Captura abierta a docentes
                            </p>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 bg-surface-container-highest text-on-surface-variant rounded font-label-sm text-label-sm font-bold">En Curso</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[22px]">supervisor_account</span>
                    <h2 className="font-headline-sm text-headline-sm text-primary">
                      Tutor Legal y Domicilio Oficial
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    
                    <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Tutor Primario Registrado</span>
                      <p className="font-title-sm text-title-sm text-on-surface font-bold">
                        Roberto Álvarez Morales
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Parentesco: Padre / Tutor Legal Legalizado
                      </p>
                      <div className="mt-3 pt-3 border-t border-surface-container flex flex-col gap-1.5 font-body-sm text-body-sm">
                        <div className="flex items-center gap-2 text-on-surface">
                          <span className="material-symbols-outlined text-[16px] text-secondary">call</span>
                          <span className="font-medium">228-812-4901</span>
                          <span className="bg-emerald-100 text-emerald-800 text-[9px] px-1.5 py-0.2 rounded font-bold">VERIFICADO</span>
                        </div>
                        <div className="flex items-center gap-2 text-on-surface truncate">
                          <span className="material-symbols-outlined text-[16px] text-secondary">mail</span>
                          <span className="truncate">r.alvarez.fam@gmail.com</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col justify-between">
                      <div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider">Sectorización Escolar</span>
                        <p className="font-title-sm text-title-sm text-on-surface font-bold mt-1">
                          Zona Escolar No. 04
                        </p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                          C. Prolongación Tabasco No. 142, Col. Progreso
                          Macuiltépetl, C.P. 91130, Xalapa, Veracruz.
                        </p>
                      </div>
                      <div className="bg-surface-container p-2 rounded mt-3 flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">Comprobante de Domicilio</span>
                        <span className="font-label-sm text-label-sm text-primary font-bold">Vigente (Enero 2025)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col gap-space-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-[24px]">security</span>
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-primary">
                      Seguridad y Credenciales de Acceso
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Control de accesos y servicios federados de la Secretaría
                      de Educación
                    </p>
                  </div>
                </div>
                <span className="bg-primary text-on-primary font-label-sm text-label-sm px-2.5 py-1 rounded">2FA ACTIVO</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                
                <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col justify-between gap-space-md">
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">lock_reset</span>
                      <h3 className="font-title-sm text-title-sm text-on-surface">
                        Contraseña de Portal MERCURIO
                      </h3>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Actualizada hace 45 días. Esta clave protege el acceso a
                      boletas, citatorios e historial de incidencias de
                      prefectura.
                    </p>
                  </div>
                  <form className="flex flex-col gap-space-sm" onSubmit={(e) => {
                    e.preventDefault();
                    setToast("Solicitud recibida. La dirección del plantel autorizará el cambio de contraseña.");
                    window.setTimeout(() => setToast(""), 3600);
                  }}>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Nueva Contraseña</label>
                      <input className="bg-surface-container px-3 py-2 rounded text-on-surface font-mono text-body-sm focus:outline-none" readOnly="" type="password" value="••••••••••••" />
                    </div>
                    <button className="bg-primary text-on-primary hover:bg-primary-container px-4 py-2 rounded font-label-md text-label-md font-semibold transition-colors flex items-center justify-center gap-1.5 self-start" type="submit">
                      <span className="material-symbols-outlined text-[18px]">key</span>
                      Modificar Clave de Acceso
                    </button>
                  </form>
                </div>
                
                <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col justify-between gap-space-md">
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[20px]">school</span>
                        <h3 className="font-title-sm text-title-sm text-on-surface">
                          Cuenta Institucional Google
                        </h3>
                      </div>
                      <span className="bg-emerald-100 text-emerald-800 font-label-sm text-label-sm px-2 py-0.5 rounded font-bold">VINCULADA</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Espacio oficial para Google Classroom, Taller de
                      Informática y Correo de Tareas Escolares de la ESTIS 70.
                    </p>
                  </div>
                  <div className="bg-surface-container p-space-sm rounded flex items-center justify-between gap-space-sm">
                    <div className="min-w-0">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Identificador Oficial Alumno:</span>
                      <p className="font-label-md text-label-md text-primary font-bold truncate">
                        daniela.alvarez@estis70.edu.mx
                      </p>
                    </div>
                    <a className="p-2 rounded hover:bg-surface-container-high text-primary flex-shrink-0" href="https://classroom.google.com" target="_blank" title="Abrir Google Classroom">
                      <span className="material-symbols-outlined text-[22px]">open_in_new</span>
                    </a>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Almacenamiento Ilimitado Educativo</span>
                    <button className="font-label-sm text-label-sm text-secondary font-bold hover:underline" type="button">
                      Sincronizar Permisos
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
