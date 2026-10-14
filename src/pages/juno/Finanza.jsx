import { useState } from "react";

export default function Finanza() {
  const [modalCedula, setModalCedula] = useState(false);
  const [modalComprobante, setModalComprobante] = useState(false);
  return (
    <main className="relative pt-20 bg-background min-h-screen px-space-lg py-space-lg">
        <div className="flex flex-col w-full">
          
          <div className="relative overflow-hidden rounded-xl bg-primary-container text-on-primary p-space-lg shadow-md mb-space-lg">
            <div className="absolute -right-12 -bottom-12 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none"></div>
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
              <div className="flex flex-col max-w-2xl">
                <div className="flex items-center gap-space-xs mb-2">
                  <span className="px-2 py-0.5 rounded bg-surface-variant text-on-surface font-label-sm text-label-sm uppercase tracking-wider font-bold">Módulo de Transparencia Hacendaria Escolar</span>
                  <span className="px-2 py-0.5 rounded bg-secondary text-on-secondary font-label-sm text-label-sm uppercase font-bold tracking-widest">ESTIS No. 70</span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-on-primary tracking-tight">
                  Finanzas y Cuotas de Taller
                </h1>
                <p className="font-body-md text-body-md text-on-primary-container mt-1">
                  Estado financiero de
                  <span className="font-semibold text-surface-container-lowest">Daniela Álvarez Ramírez (2° B)</span>. Gestione aportaciones a talleres tecnológicos, seguros y
                  consulte la rendición de cuentas pública de la Mesa Directiva
                  APF.
                </p>
              </div>
              
              <div className="bg-primary/60 backdrop-blur-md rounded-lg p-space-md flex flex-col sm:flex-row items-start sm:items-center gap-space-lg shadow-inner">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-primary-container uppercase tracking-wider">Saldo Pendiente Ciclo</span>
                  <span className="font-headline-lg text-headline-lg text-secondary-fixed font-bold tracking-tight">$350.00
                    <span className="text-label-md font-label-md text-on-primary-container font-normal">MXN</span></span>
                  <span className="font-body-sm text-body-sm text-secondary-fixed-dim flex items-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-[16px]">schedule</span>
                    Vence: 28 Feb 2025
                  </span>
                </div>
                <div className="flex flex-col gap-2 w-full sm:w-auto">
                  <button onClick={() => setModalCedula(true)} className="px-space-md py-2.5 rounded bg-secondary hover:bg-on-secondary-fixed-variant text-on-secondary font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors" type="button">
                    <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                    Generar Cédula de Pago
                  </button>
                  <button className="px-space-md py-2 rounded bg-surface-container-high/20 hover:bg-surface-container-high/30 text-surface-container-lowest font-label-md text-label-md flex items-center justify-center gap-1.5 transition-colors" type="button">
                    <span className="material-symbols-outlined text-[16px]">cloud_upload</span>
                    Reportar Transferencia
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-lg">
            
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md gap-space-sm">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[24px]">account_balance</span>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface">
                        Desglose de Conceptos Obligatorios y Talleres
                      </h2>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Ciclo Escolar 2024-2025 · Especialidad Técnica en
                      Informática
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 self-start sm:self-auto bg-surface-container-low px-2.5 py-1 rounded">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold">1 Pendiente de 4</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-space-sm mt-space-sm">
                  
                  <div className="bg-surface-container-low/70 hover:bg-surface-container-low transition-colors rounded-lg p-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                    <div className="flex items-start gap-space-md">
                      <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[22px]">precision_manufacturing</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-title-sm text-title-sm text-on-surface">Cuota Anual de Mantenimiento a Talleres</span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm uppercase font-semibold">Taller B</span>
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Refacciones de equipo informático, licencias y
                          conectividad de laboratorio.</span>
                        <div className="flex items-center gap-3 text-label-sm font-label-sm text-on-surface-variant mt-1.5">
                          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">event_available</span>
                            Liquidado: 12/Ago/2024</span>
                          <span>·</span>
                          <span className="font-mono">FOL: 70-INF-0824</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1 shrink-0 pt-2 sm:pt-0">
                      <span className="font-title-md text-title-md font-bold text-on-surface">$1,200.00
                        <span className="text-label-sm font-normal text-on-surface-variant">MXN</span></span>
                      <span className="px-2.5 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">check_circle</span>
                        PAGADO
                      </span>
                      <button className="text-primary hover:text-secondary font-label-sm text-label-sm font-semibold flex items-center gap-0.5 mt-1 transition-colors" type="button">
                        <span className="material-symbols-outlined text-[16px]">file_download</span>
                        Recibo Sellado
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-surface-container-low/70 hover:bg-surface-container-low transition-colors rounded-lg p-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                    <div className="flex items-start gap-space-md">
                      <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[22px]">health_and_safety</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-title-sm text-title-sm text-on-surface">Póliza Seguro contra Accidentes en Talleres</span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm uppercase font-semibold">DGEST Cobertura</span>
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Cobertura médica integral en traslados, talleres
                          pesados y prácticas escolares.</span>
                        <div className="flex items-center gap-3 text-label-sm font-label-sm text-on-surface-variant mt-1.5">
                          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">event_available</span>
                            Liquidado: 12/Ago/2024</span>
                          <span>·</span>
                          <span className="font-mono">PÓL: SEG-MX-4991</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1 shrink-0 pt-2 sm:pt-0">
                      <span className="font-title-md text-title-md font-bold text-on-surface">$280.00
                        <span className="text-label-sm font-normal text-on-surface-variant">MXN</span></span>
                      <span className="px-2.5 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">check_circle</span>
                        PAGADO
                      </span>
                      <button className="text-primary hover:text-secondary font-label-sm text-label-sm font-semibold flex items-center gap-0.5 mt-1 transition-colors" type="button">
                        <span className="material-symbols-outlined text-[16px]">file_download</span>
                        Póliza Vigente
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-surface-container-high/40 rounded-lg p-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                    <div className="flex items-start gap-space-md">
                      <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[22px]">diversity_3</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-title-sm text-title-sm text-on-surface">Aportación Voluntaria APF (Mesa Directiva)</span>
                          <span className="px-2 py-0.5 rounded bg-surface-variant text-on-surface font-label-sm text-label-sm uppercase font-semibold">Semestre 2</span>
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Mantenimiento de áreas cívicas, vigilancia y
                          botiquines escolares.</span>
                        <div className="flex items-center gap-3 text-label-sm font-label-sm text-on-surface-variant mt-1.5">
                          <span className="flex items-center gap-1 text-secondary font-semibold"><span className="material-symbols-outlined text-[14px]">pending_actions</span>
                            Comprobante subido el 15/Ene</span>
                          <span>·</span>
                          <span className="font-mono">AUT-BBVA-83921</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1 shrink-0 pt-2 sm:pt-0">
                      <span className="font-title-md text-title-md font-bold text-on-surface">$500.00
                        <span className="text-label-sm font-normal text-on-surface-variant">MXN</span></span>
                      <span className="px-2.5 py-0.5 rounded bg-surface-variant text-on-surface font-label-sm text-label-sm font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">sync</span>
                        EN REVISIÓN
                      </span>
                      <span className="text-body-sm font-body-sm text-on-surface-variant mt-1">Validación: 24 a 48 hrs</span>
                    </div>
                  </div>
                  
                  <div className="bg-error-container/30 rounded-lg p-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                    <div className="flex items-start gap-space-md">
                      <div className="w-10 h-10 rounded-lg bg-error-container flex items-center justify-center text-secondary shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[22px]">lock</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-title-sm text-title-sm text-on-surface">Renta de Casillero Escolar (Locker B-24)</span>
                          <span className="px-2 py-0.5 rounded bg-secondary text-on-secondary font-label-sm text-label-sm uppercase font-bold">Por Vencer</span>
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Edificio B, pasillo de Informática. Llave maestra
                          resguardada en prefectura.</span>
                        <div className="flex items-center gap-3 text-label-sm font-label-sm text-on-surface-variant mt-1.5">
                          <span className="flex items-center gap-1 text-secondary font-bold"><span className="material-symbols-outlined text-[14px]">alarm</span>
                            Límite: 28 de Febrero, 2025</span>
                          <span>·</span>
                          <span>Cuota 2° Semestre</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1 shrink-0 pt-2 sm:pt-0">
                      <span className="font-title-md text-title-md font-bold text-secondary">$350.00
                        <span className="text-label-sm font-normal text-on-surface-variant">MXN</span></span>
                      <span className="px-2.5 py-0.5 rounded bg-secondary text-on-secondary font-label-sm text-label-sm font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">warning</span>
                        PENDIENTE
                      </span>
                      <button onClick={() => setModalComprobante(true)} className="px-3 py-1 mt-1 rounded bg-primary text-on-primary hover:bg-primary-container font-label-sm text-label-sm font-semibold transition-colors" type="button">
                        Pagar Concepto
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-space-md p-space-md bg-surface-container-high/40 rounded-lg flex items-center justify-between gap-space-md">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[24px]">verified_user</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Todos los comprobantes son avalados por la
                      <strong>Tesorería Escolar DGEST</strong> con firma
                      electrónica del Director del Plantel.</span>
                  </div>
                  <button className="text-primary hover:underline font-label-sm text-label-sm font-bold shrink-0" type="button">
                    Descargar Estado de Cuenta PDF
                  </button>
                </div>
              </div>
              
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                <h3 className="font-title-md text-title-md text-on-surface mb-space-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">credit_card</span>
                  Canales de Pago Autorizados para Padres
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mt-2">
                  <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-label-md text-label-md text-on-surface font-bold uppercase">SPEI / Interbancaria</span>
                        <span className="material-symbols-outlined text-primary text-[20px]">account_balance</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        BBVA México · Cuenta Concentradora ESTIS 70
                      </p>
                      <div className="mt-3 p-2 bg-surface-container-lowest rounded">
                        <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">CLABE Interbancaria</span>
                        <span className="font-mono text-label-md font-semibold text-on-surface">012 905 0011 8320 9412</span>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant mt-3 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-primary">info</span>
                      Concepto: CURP del Alumno
                    </span>
                  </div>
                  <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-label-md text-label-md text-on-surface font-bold uppercase">CIE Bancomer</span>
                        <span className="material-symbols-outlined text-primary text-[20px]">domain</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Convenio Institucional en Ventanilla / Cajero Practicaja
                      </p>
                      <div className="mt-3 p-2 bg-surface-container-lowest rounded">
                        <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">Convenio CIE</span>
                        <span className="font-mono text-label-md font-semibold text-on-surface">1849204 (ESTIS 70 DGEST)</span>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant mt-3 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-primary">info</span>
                      Ref: 702024-DAN-ALV
                    </span>
                  </div>
                  <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-label-md text-label-md text-on-surface font-bold uppercase">Cadena OXXO / Pay</span>
                        <span className="material-symbols-outlined text-primary text-[20px]">storefront</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Pago en efectivo presentando código de barras de la
                        cédula.
                      </p>
                      <div className="mt-3 p-2 bg-surface-container-lowest rounded">
                        <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">Acreditación</span>
                        <span className="font-mono text-label-md font-semibold text-on-surface">Inmediata (Torniquete activo)</span>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant mt-3 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-primary">info</span>
                      Comisión estándar +$15 MXN
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 flex flex-col gap-space-md">
              
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                <div className="flex items-center justify-between pb-space-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[24px]">pie_chart</span>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      Destino de Fondos APF
                    </h2>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">Trimestre II</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                  Transparencia aprobada por el Comité de Vigilancia Ciudadana
                  de la ESTIS 70 sobre $412,800 MXN recaudados en el ciclo.
                </p>
                
                <div className="flex flex-col gap-space-md">
                  
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between font-label-md text-label-md">
                      <span className="text-on-surface font-semibold flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded bg-primary"></span> Sala de
                        Cómputo B e Informática
                      </span>
                      <span className="font-mono font-bold text-primary">45%
                        <span className="text-on-surface-variant font-normal">($185,760)</span></span>
                    </div>
                    <div className="w-full h-3 rounded bg-surface-container-high overflow-hidden">
                      <div className="h-full bg-primary rounded transition-all duration-500" style={{ width: "45%" }}></div>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Reemplazo de 25 fuentes de poder, switch Gigabit e
                      internet satelital.</span>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between font-label-md text-label-md">
                      <span className="text-on-surface font-semibold flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded bg-secondary"></span>
                        Techumbre Cancha &amp; Torniquetes
                      </span>
                      <span className="font-mono font-bold text-secondary">30%
                        <span className="text-on-surface-variant font-normal">($123,840)</span></span>
                    </div>
                    <div className="w-full h-3 rounded bg-surface-container-high overflow-hidden">
                      <div className="h-full bg-secondary rounded transition-all duration-500" style={{ width: "30%" }}></div>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Impermeabilización de lámina galvanizada y calibración de
                      lectores RFID.</span>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between font-label-md text-label-md">
                      <span className="text-on-surface font-semibold flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded bg-on-tertiary-container"></span>
                        Laboratorio Física &amp; Primeros Auxilios
                      </span>
                      <span className="font-mono font-bold text-on-tertiary-container">15%
                        <span className="text-on-surface-variant font-normal">($61,920)</span></span>
                    </div>
                    <div className="w-full h-3 rounded bg-surface-container-high overflow-hidden">
                      <div className="h-full bg-on-tertiary-container rounded transition-all duration-500" style={{ width: "15%" }}></div>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Material de cristalería, reactivos y reposición de vendas
                      y camilla rígida.</span>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between font-label-md text-label-md">
                      <span className="text-on-surface font-semibold flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded bg-on-primary-fixed-variant"></span>
                        Banda de Guerra &amp; Club Voleibol
                      </span>
                      <span className="font-mono font-bold text-on-primary-fixed-variant">10%
                        <span className="text-on-surface-variant font-normal">($41,280)</span></span>
                    </div>
                    <div className="w-full h-3 rounded bg-surface-container-high overflow-hidden">
                      <div className="h-full bg-on-primary-fixed-variant rounded transition-all duration-500" style={{ width: "10%" }}></div>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Viáticos y transporte al Torneo Estatal Inter-Técnicas
                      Veracruz 2025.</span>
                  </div>
                </div>
                
                <div className="mt-space-lg pt-space-md bg-surface-container-low p-space-md rounded-lg flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">assignment_turned_in</span>
                      <span className="font-label-md text-label-md font-bold text-on-surface">Acta Trimestral Sellada</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">PDF · 3.4 MB</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Firmado por: Lic. Marco Tulio Vera (Presidente APF) e Ing.
                    Rocío Beltrán (Vigilancia).
                  </p>
                  <a className="mt-1 w-full py-2 bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md font-semibold rounded text-center transition-colors flex items-center justify-center gap-1.5" href="#">
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    Descargar Informe Completo Firmado
                  </a>
                </div>
              </div>
              
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                <div className="flex items-center gap-2 mb-space-sm">
                  <span className="material-symbols-outlined text-secondary text-[24px]">contact_phone</span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    Directorio Oficial de Atención
                  </h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                  Comuníquese directamente con las áreas correspondientes de la
                  ESTIS 70 en caso de aclaraciones de pago o becas.
                </p>
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between p-2.5 rounded bg-surface-container-low">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[18px]">payments</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-semibold text-on-surface">Tesorería &amp; Control Cuotas</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">L.C. Claudia Méndez Estrada</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <a className="font-label-md text-label-md font-bold text-primary hover:text-secondary block" href="tel:+522299890123">Ext. 108</a>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">8:00 - 13:30 h</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded bg-surface-container-low">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[18px]">shield_person</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-semibold text-on-surface">Prefectura de 2° Grado (Turno Matutino)</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Prof. Armando Huesca</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <a className="font-label-md text-label-md font-bold text-primary hover:text-secondary block" href="tel:+522299890123">Ext. 104</a>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">7:00 - 14:00 h</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded bg-surface-container-low">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[18px]">volunteer_activism</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-semibold text-on-surface">Trabajo Social &amp; Becas Benito Juárez</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Trab. Soc. Marisol Pantoja</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <a className="font-label-md text-label-md font-bold text-primary hover:text-secondary block" href="tel:+522299890123">Ext. 112</a>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">8:00 - 14:00 h</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded bg-surface-container-low">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[18px]">groups</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-semibold text-on-surface">Atención Mesa Directiva APF</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Comité Representativo de Padres</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <a className="font-label-sm text-label-sm font-semibold text-secondary hover:underline block" href="mailto:apf@estis70.edu.mx">apf@estis70.edu.mx</a>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Martes &amp; Jueves</span>
                    </div>
                  </div>
                </div>
                <div className="mt-space-md p-2.5 bg-surface-container-high/30 rounded flex items-center justify-between">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Conmutador General ESTIS 70:</span>
                  <span className="font-title-sm text-title-sm font-bold text-on-surface">(229) 989-0123</span>
                </div>
              </div>
            </div>
          </div>
          
          {modalCedula && (
          <div className="fixed inset-0 z-50 bg-primary/70 backdrop-blur-sm flex items-center justify-center p-space-md" id="modal-cedula">
            <div className="bg-surface-container-lowest rounded-xl max-w-xl w-full p-space-lg shadow-xl relative max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-space-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[24px]">qr_code_2</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Cédula Oficial de Recaudación
                  </h3>
                </div>
                <button onClick={() => setModalCedula(false)} className="p-1 rounded text-on-surface-variant hover:bg-surface-container" type="button">
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
              <div className="bg-surface-container-low p-space-md rounded-lg my-space-md">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Plantel Emisor</span>
                    <span className="font-title-sm text-title-sm block text-on-surface">Escuela Sec. Téc. Ind. No. 70</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Clave CCT: 30DST0070Z · Veracruz, Ver.</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-surface-variant text-on-surface font-label-sm text-label-sm font-bold">LÍNEA VÁLIDA</span>
                </div>
                <div className="mt-4 pt-4 flex flex-col gap-2">
                  <div className="flex justify-between font-body-sm text-body-sm">
                    <span className="text-on-surface-variant">Alumno:</span>
                    <span className="font-semibold text-on-surface">Álvarez Ramírez Daniela</span>
                  </div>
                  <div className="flex justify-between font-body-sm text-body-sm">
                    <span className="text-on-surface-variant">Grupo &amp; Turno:</span>
                    <span className="font-semibold text-on-surface">2° Grado "B" · Matutino</span>
                  </div>
                  <div className="flex justify-between font-body-sm text-body-sm">
                    <span className="text-on-surface-variant">Concepto:</span>
                    <span className="font-semibold text-on-surface">Renta Casillero Locker Edificio B</span>
                  </div>
                  <div className="flex justify-between font-title-sm text-title-sm mt-1">
                    <span className="text-on-surface font-bold">Importe a Pagar:</span>
                    <span className="font-bold text-secondary font-mono">$350.00 MXN</span>
                  </div>
                </div>
                
                <div className="mt-4 p-space-md bg-surface-container-lowest rounded flex flex-col items-center justify-center">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Línea de Captura Universal (SPEI / OXXO / Ventanilla)</span>
                  <span className="font-mono font-bold text-title-md text-primary tracking-widest text-center select-all">7024 0938 1029 4810 5928</span>
                  <div className="mt-3 flex items-center justify-center w-full max-w-xs h-12 bg-on-surface/10 rounded">
                    
                    <div className="flex items-center gap-1 h-8 opacity-80">
                      <span className="w-1 h-full bg-on-surface"></span>
                      <span className="w-0.5 h-full bg-on-surface"></span>
                      <span className="w-1.5 h-full bg-on-surface"></span>
                      <span className="w-0.5 h-full bg-on-surface"></span>
                      <span className="w-2 h-full bg-on-surface"></span>
                      <span className="w-1 h-full bg-on-surface"></span>
                      <span className="w-0.5 h-full bg-on-surface"></span>
                      <span className="w-1.5 h-full bg-on-surface"></span>
                      <span className="w-2 h-full bg-on-surface"></span>
                      <span className="w-0.5 h-full bg-on-surface"></span>
                      <span className="w-1 h-full bg-on-surface"></span>
                      <span className="w-1.5 h-full bg-on-surface"></span>
                      <span className="w-0.5 h-full bg-on-surface"></span>
                      <span className="w-2 h-full bg-on-surface"></span>
                      <span className="w-1 h-full bg-on-surface"></span>
                      <span className="w-0.5 h-full bg-on-surface"></span>
                    </div>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant mt-2">Vigencia hasta: 28/Feb/2025 · 23:59 hrs</span>
                </div>
              </div>
              <div className="flex items-center justify-end gap-space-sm">
                <button onClick={() => setModalCedula(false)} className="px-space-md py-2 rounded bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md" type="button">
                  Cerrar
                </button>
                <button onClick={() => window.print()} className="px-space-md py-2 rounded bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md font-semibold flex items-center gap-1.5" type="button">
                  <span className="material-symbols-outlined text-[18px]">print</span>
                  Imprimir Cédula
                </button>
              </div>
            </div>
          </div>
          )}
          
          {modalComprobante && (
          <div className="fixed inset-0 z-50 bg-primary/70 backdrop-blur-sm flex items-center justify-center p-space-md" id="modal-comprobante">
            <div className="bg-surface-container-lowest rounded-xl max-w-lg w-full p-space-lg shadow-xl relative">
              <div className="flex items-center justify-between pb-space-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[24px]">cloud_upload</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Adjuntar Comprobante de Pago
                  </h3>
                </div>
                <button onClick={() => setModalComprobante(false)} className="p-1 rounded text-on-surface-variant hover:bg-surface-container" type="button">
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
              <form className="flex flex-col gap-space-md mt-space-sm" id="form-comprobante" onSubmit={(e) => { e.preventDefault(); setModalComprobante(false); }}>
                <div>
                  <label className="font-label-md text-label-md text-on-surface font-semibold block mb-1">Concepto que reporta</label>
                  <select className="w-full bg-surface-container-low text-on-surface p-2.5 rounded font-body-md text-body-md focus:outline-none">
                    <option value="locker">
                      Renta Casillero Locker B-24 ($350.00 MXN)
                    </option>
                    <option value="apf">
                      Aportación Voluntaria APF ($500.00 MXN)
                    </option>
                    <option value="otro">
                      Mantenimiento de Taller Adicional
                    </option>
                  </select>
                </div>
                <div>
                  <label className="font-label-md text-label-md text-on-surface font-semibold block mb-1">Folio de Autorización / Rastreo Bancario</label>
                  <input className="w-full bg-surface-container-low text-on-surface p-2.5 rounded font-body-md text-body-md focus:outline-none" placeholder="Ej. BBVA-9481230 o Clave de Rastreo SPEI" required="" type="text" />
                </div>
                <div>
                  <label className="font-label-md text-label-md text-on-surface font-semibold block mb-1">Archivo de Ticket o Captura (PDF, JPG, PNG)</label>
                  <div className="p-space-lg bg-surface-container-low rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-surface-container transition-colors">
                    <span className="material-symbols-outlined text-primary text-[36px] mb-1">file_present</span>
                    <span className="font-label-md text-label-md text-on-surface font-semibold">Seleccione o arrastre el archivo</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Tamaño máximo 10MB</span>
                    <input className="hidden" id="file-input" type="file" />
                  </div>
                </div>
                <div className="p-2.5 bg-surface-container-high/40 rounded flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">info</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Tesorería cotejará el movimiento bancario en un lapso de 24
                    a 48 horas hábiles.</span>
                </div>
                <div className="flex items-center justify-end gap-space-sm pt-space-xs">
                  <button onClick={() => setModalComprobante(false)} className="px-space-md py-2 rounded bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md" type="button">
                    Cancelar
                  </button>
                  <button className="px-space-md py-2 rounded bg-secondary text-on-secondary hover:bg-on-secondary-fixed-variant font-label-md text-label-md font-semibold flex items-center gap-1.5" type="submit">
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    Enviar a Revisión
                  </button>
                </div>
              </form>
            </div>
          </div>
          )}
        </div>
      </main>
  );
}
