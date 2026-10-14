import { useState } from "react";

export default function Avisos() {
  const [circularSigned, setCircularSigned] = useState(false);
  const [permisoSigned, setPermisoSigned] = useState(false);
  const [toast, setToast] = useState("");

  const flash = (msg) => {
    setToast(msg);
    window.setTimeout(() => setToast(""), 3600);
  };

  return (
    <main className="relative pt-20 bg-background min-h-screen px-space-lg py-space-lg">
        <div className="flex flex-col w-full">
        {toast && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-inverse-surface text-inverse-on-surface font-label-md text-label-md px-space-md py-space-sm rounded-lg shadow-xl toast-in w-[340px] text-center">
            {toast}
          </div>
        )}
          
          <div className="mb-space-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md p-space-md bg-surface-container-low rounded-xl shadow-sm">
            <div className="flex items-center gap-space-md">
              <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-[26px]">mark_email_read</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-headline-sm text-headline-sm text-primary tracking-tight">Gaceta Escolar &amp; Acuses Digitales</span>
                  <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase font-bold tracking-wider">Norma DGEST 2024</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Firmas y confirmaciones amparadas bajo token de validación
                  institucional para el tutor:
                  <span className="font-semibold text-primary">Roberto Álvarez Morales</span>.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-space-sm bg-surface-container px-space-md py-2 rounded-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Folio Activo Tutor</span>
                <span className="font-label-md text-label-md text-primary font-bold tracking-widest font-mono">TUT-70-VER-8942-DX</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-space-sm mb-space-lg no-scrollbar">
            <button className="px-space-md py-2 rounded-full bg-primary text-on-primary font-label-md text-label-md font-semibold shadow-sm flex items-center gap-1.5 whitespace-nowrap">
              <span className="material-symbols-outlined text-[18px]">all_inbox</span>
              Todas las Circulares
              <span className="ml-1 px-1.5 py-0.2 rounded-full bg-surface text-primary text-[11px] font-bold">5</span>
            </button>
            <button className="px-space-md py-2 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap">
              <span className="material-symbols-outlined text-[18px] text-secondary">notification_important</span>
              Convocatorias a Juntas
              <span className="ml-1 px-1.5 py-0.2 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[11px] font-bold">1 urgente</span>
            </button>
            <button className="px-space-md py-2 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap">
              <span className="material-symbols-outlined text-[18px] text-tertiary">shield</span>
              Avisos de Prefectura
            </button>
            <button className="px-space-md py-2 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap">
              <span className="material-symbols-outlined text-[18px] text-primary">event_busy</span>
              Suspensión y C.T.E.
            </button>
            <button className="px-space-md py-2 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap">
              <span className="material-symbols-outlined text-[18px] text-primary-container">precision_manufacturing</span>
              Talleres Industriales
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
            
            <div className="lg:col-span-8 flex flex-col gap-space-lg">
              
              <article className="bg-surface-container-low rounded-xl shadow-md p-space-lg relative overflow-hidden">
                
                <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-secondary-container/10 pointer-events-none blur-2xl"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm mb-space-md">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-secondary text-on-secondary font-label-sm text-label-sm font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                      <span className="material-symbols-outlined text-[14px]">priority_high</span>
                      Convocatoria Urgente con Acuse
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Circular Oficial No. DG-048/2024</span>
                  </div>
                  <span className="font-label-sm text-label-sm font-semibold text-secondary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">schedule</span>
                    Vence en 36 hrs
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md text-primary font-bold mb-space-xs tracking-tight">
                  Asamblea General Extraordinaria: Entrega de Boletas del
                  Segundo Periodo
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                  Dirección del Plantel y la Sociedad de Padres de Familia
                  convocan con carácter obligatorio a los tutores legales del 2°
                  Grado Grupo “B” para la rendición de cuentas académicas y
                  entrega física de evaluaciones trimestrales.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm mb-space-md bg-surface-container p-space-md rounded-lg">
                  <div className="flex items-start gap-space-sm">
                    <div className="w-8 h-8 rounded bg-surface text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase block">Fecha y Hora</span>
                      <span className="font-title-sm text-title-sm text-on-surface font-semibold">Viernes 29 Nov</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant block">07:30 a 09:30 hrs</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-sm">
                    <div className="w-8 h-8 rounded bg-surface text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[20px]">meeting_room</span>
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase block">Ubicación</span>
                      <span className="font-title-sm text-title-sm text-on-surface font-semibold">Auditorio "Gral. Cárdenas"</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant block">Nave Principal · Planta Alta</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-sm">
                    <div className="w-8 h-8 rounded bg-surface text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[20px]">badge</span>
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase block">Requisito Acceso</span>
                      <span className="font-title-sm text-title-sm text-on-surface font-semibold">INE + Credencial Alumno</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant block">Presentar acuse digital</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-space-lg p-space-md rounded-lg bg-surface-container-high/40">
                  <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider block mb-2">Orden del Día Protocolario:</span>
                  <ol className="list-decimal list-inside space-y-1 font-body-sm text-body-sm text-on-surface">
                    <li>
                      Pase de lista biométrico por prefectura a las 07:30 hrs en
                      puerta 2.
                    </li>
                    <li>
                      Informe de avances en competencias técnicas del Taller de
                      Informática.
                    </li>
                    <li>
                      Firma de libro de actas y entrega individualizada de la
                      Boleta Oficial DGEST.
                    </li>
                    <li>
                      Acuerdos de cuota para insumos de laboratorio de
                      mantenimiento y cómputo.
                    </li>
                  </ol>
                </div>
                
                <div className="p-space-md rounded-xl bg-surface-container flex flex-col sm:flex-row items-center justify-between gap-space-md shadow-sm transition-all duration-300" id="acuse-box">
                  <div className="flex items-center gap-space-md w-full sm:w-auto">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 shadow-sm ${circularSigned ? "bg-emerald-100 text-emerald-700" : "bg-surface text-primary"}`} id="stamp-icon">
                      <span className="material-symbols-outlined text-[26px]">{circularSigned ? "verified" : "draw"}</span>
                    </div>
                    <div>
                      <span className="font-title-sm text-title-sm text-on-surface font-bold block" id="stamp-title">{circularSigned ? "Notificación Confirmada y Archivada" : "Confirmación de Notificación Pendiente"}</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant" id="stamp-desc">
                        {circularSigned
                          ? "Tu asistencia quedó registrada con estampa criptográfica ante la Subdirección Escolar."
                          : "Al confirmar, se emite una estampa criptográfica que acredita tu asistencia ante la Subdirección Escolar."}
                      </p>
                    </div>
                  </div>
                  <div className="w-full sm:w-auto shrink-0 flex items-center justify-end">
                    <button onClick={() => { if (circularSigned) return; setCircularSigned(true); flash("Circular ADM-092 firmada. Se emitió la estampa criptográfica de confirmación."); }} className={`w-full sm:w-auto px-space-lg py-3 rounded-lg font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-md transition-all ${circularSigned ? "bg-emerald-100 text-emerald-800 cursor-default" : "bg-primary hover:bg-primary-container text-on-primary"}`} id="btn-firmar-circular">
                      <span className="material-symbols-outlined text-[20px]">{circularSigned ? "check_circle" : "verified_user"}</span>
                      <span>{circularSigned ? "Confirmado" : "Confirmar Lectura y Asistencia"}</span>
                    </button>
                  </div>
                </div>
              </article>
              
              <article className="bg-surface-container-low rounded-xl shadow-sm p-space-lg">
                <div className="flex items-center justify-between gap-space-sm mb-space-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-bold uppercase tracking-wider">
                      Circular Administrativa ADM-092
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Emitida: 12 de Noviembre</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">task_alt</span>
                    Firmado el 13 Nov
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs">
                  Organización y Logística: Desfile Cívico-Deportivo del 20 de
                  Noviembre
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                  Se informa a la comunidad técnica el rol de participación del
                  contingente estudiantil, carros temáticos de los talleres
                  industriales y la Banda de Guerra "Águilas Técnicas".
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm mb-space-md">
                  <div className="p-space-sm rounded bg-surface-container">
                    <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider block">18 Nov · 16:00 hrs</span>
                    <span className="font-title-sm text-title-sm text-on-surface font-semibold block">Entrega Uniformes de Gala</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Recepción en Prefectura con vale foliado firmado.
                    </p>
                  </div>
                  <div className="p-space-sm rounded bg-surface-container">
                    <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider block">19 Nov · 08:00 hrs</span>
                    <span className="font-title-sm text-title-sm text-on-surface font-semibold block">Ensayo General Banda</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Patio cívico central. Asistencia con ropa deportiva
                      oficial.
                    </p>
                  </div>
                  <div className="p-space-sm rounded bg-surface-container">
                    <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider block">20 Nov · 06:45 hrs</span>
                    <span className="font-title-sm text-title-sm text-on-surface font-semibold block">Salida Contingente</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Autobuses del plantel desde el Boulevard Manuel Ávila
                      Camacho.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-space-sm text-on-surface-variant">
                  <span className="font-label-sm text-label-sm flex items-center gap-1.5 font-mono">
                    <span className="material-symbols-outlined text-[16px] text-primary">fingerprint</span>
                    Acuse tutor verificado · ID: ACU-20NOV-9844
                  </span>
                  <a className="font-label-md text-label-md text-primary font-bold hover:underline flex items-center gap-1" href="#">
                    Descargar Croquis en PDF
                    <span className="material-symbols-outlined text-[16px]">download</span>
                  </a>
                </div>
              </article>
              
              <article className="bg-surface-container-low rounded-xl shadow-sm p-space-lg">
                <div className="flex items-center justify-between gap-space-sm mb-space-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-tertiary-container text-on-tertiary font-label-sm text-label-sm font-bold uppercase tracking-wider">
                      Aviso Operativo Prefectura
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Ref: PREF-TOR-2024</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Informativo General</span>
                </div>
                <div className="flex flex-col md:flex-row gap-space-md items-start mt-2">
                  <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[32px]">contactless</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">
                      Mantenimiento Preventivo de Torniquetes y Disposiciones de
                      Presentación
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-sm">
                      Durante los días 25 y 26 de noviembre se recalibrarán los
                      lectores RFID de los torniquetes peatonales en el acceso
                      de Calle 4. Por consiguiente, el registro de puntualidad
                      matutino se efectuará con escáner manual por los prefectos
                      de guardia.
                    </p>
                    <div className="p-space-sm rounded bg-surface-container-high/50 flex flex-col gap-1 text-on-surface font-body-sm text-body-sm">
                      <span className="font-label-sm text-label-sm text-primary font-bold uppercase">Recordatorio de Normativa Oficial:</span>
                      <p>
                        • Los alumnos deben portar la credencial institucional
                        visible al cuello en todo momento.
                      </p>
                      <p>
                        • Varones: Corte de cabello tipo casquete regular (sin
                        tintes, desvanecidos extremos ni figuras).
                      </p>
                      <p>
                        • Mujeres: Cabello debidamente recogido con coleta
                        durante las prácticas en talleres industriales.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            
            <div className="lg:col-span-4 flex flex-col gap-space-lg">
              
              <section className="bg-surface-container-low rounded-xl shadow-sm p-space-md flex flex-col gap-space-md">
                <div className="flex items-center justify-between pb-space-xs">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[22px]">assignment_ind</span>
                    <h3 className="font-title-md text-title-md text-on-surface font-bold">
                      Citatorios &amp; Orientación
                    </h3>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-surface-variant text-primary font-label-sm text-label-sm font-bold">1 Especial</span>
                </div>
                
                <div className="p-space-md rounded-lg bg-surface shadow-sm relative overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded bg-surface-container-highest text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider">
                      Academia de Informática
                    </span>
                    <span className="font-label-sm text-label-sm font-bold text-secondary flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">star</span>
                      Mérito Académico
                    </span>
                  </div>
                  <h4 className="font-title-sm text-title-sm text-primary font-bold mb-1">
                    Convocatoria &amp; Permiso: Muestra Tecnológica
                    Intersecundarias Xalapa 2024
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                    Felicitamos a Daniela Álvarez Ramírez por su pase a la fase
                    estatal del Encuentro de Robótica y Proyectos Digitales. Se
                    solicita la anuencia formal del tutor.
                  </p>
                  <div className="bg-surface-container-low p-space-sm rounded mb-space-sm flex flex-col gap-1">
                    <div className="flex justify-between font-label-sm text-label-sm">
                      <span className="text-on-surface-variant">Sede:</span>
                      <span className="font-semibold text-on-surface">Inst. Tecnológico de Xalapa</span>
                    </div>
                    <div className="flex justify-between font-label-sm text-label-sm">
                      <span className="text-on-surface-variant">Fecha:</span>
                      <span className="font-semibold text-on-surface">5 y 6 de Diciembre</span>
                    </div>
                    <div className="flex justify-between font-label-sm text-label-sm">
                      <span className="text-on-surface-variant">Docente a cargo:</span>
                      <span className="font-semibold text-on-surface">Ing. Maricela Pozos V.</span>
                    </div>
                  </div>
                  
                  <div id="permiso-btn-container">
                    {permisoSigned ? (
                      <div className="flex items-center gap-space-sm bg-emerald-50 text-emerald-900 p-space-sm rounded-lg">
                        <span className="material-symbols-outlined text-emerald-600 text-[22px]">verified</span>
                        <div className="flex flex-col">
                          <span className="font-label-md text-label-md font-bold">Consentimiento Firmado</span>
                          <span className="font-label-sm text-label-sm">Tutor: Ing. Maricela Pozos V. • {new Date().toLocaleDateString("es-MX")}</span>
                        </div>
                      </div>
                    ) : (
                      <button onClick={() => { setPermisoSigned(true); flash("Consentimiento del tutor firmado para el Desfile Cívico-Deportivo del 20 de Noviembre."); }} className="w-full py-2.5 rounded bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 transition-colors">
                        <span className="material-symbols-outlined text-[18px]">verified</span>
                        Firmar Consentimiento del Tutor
                      </button>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
                  <button className="p-space-sm rounded-lg bg-surface hover:bg-surface-container transition-colors flex flex-col items-center text-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-primary text-[24px]">contact_support</span>
                    <span className="font-label-md text-label-md text-primary font-bold leading-tight">Solicitar Cita con Orientación</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Lic. Martha Valdés</span>
                  </button>
                  <button className="p-space-sm rounded-lg bg-surface hover:bg-surface-container transition-colors flex flex-col items-center text-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-secondary text-[24px]">assignment_turned_in</span>
                    <span className="font-label-md text-label-md text-secondary font-bold leading-tight">Justificar Inasistencia</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Cargar receta o comprobante</span>
                  </button>
                </div>
              </section>
              
              <section className="bg-surface-container-low rounded-xl shadow-sm p-space-md flex flex-col gap-space-md">
                <div className="flex items-center justify-between pb-space-xs">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[22px]">calendar_today</span>
                    <h3 className="font-title-md text-title-md text-on-surface font-bold">
                      Agenda Oficial DGEST
                    </h3>
                  </div>
                  <span className="font-label-sm text-label-sm text-primary font-bold uppercase">Noviembre 2024</span>
                </div>
                
                <div className="flex flex-col gap-space-sm">
                  
                  <div className="p-space-sm rounded-lg bg-surface flex items-start gap-space-sm shadow-sm">
                    <div className="w-12 h-12 rounded bg-error-container text-on-error-container flex flex-col items-center justify-center shrink-0">
                      <span className="font-title-sm text-title-sm font-bold leading-none">29</span>
                      <span className="font-label-sm text-label-sm uppercase font-bold leading-none mt-0.5">NOV</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="px-1.5 py-0.2 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-bold uppercase">Sin Clases</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">Sesión Ordinaria</span>
                      </div>
                      <h5 className="font-title-sm text-title-sm text-on-surface font-semibold truncate mt-0.5">
                        Consejo Técnico Escolar (C.T.E.)
                      </h5>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight mt-0.5">
                        Suspensión de labores docentes para todos los talleres y
                        turnos.
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-space-sm rounded-lg bg-surface flex items-start gap-space-sm shadow-sm">
                    <div className="w-12 h-12 rounded bg-surface-container text-primary flex flex-col items-center justify-center shrink-0">
                      <span className="font-title-sm text-title-sm font-bold leading-none">30</span>
                      <span className="font-label-sm text-label-sm uppercase font-bold leading-none mt-0.5">NOV</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="px-1.5 py-0.2 rounded bg-surface-container-highest text-primary font-label-sm text-label-sm font-bold uppercase">Administración</span>
                      </div>
                      <h5 className="font-title-sm text-title-sm text-on-surface font-semibold truncate mt-0.5">
                        Cierre de Cuota de Mantenimiento
                      </h5>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight mt-0.5">
                        Fecha límite voluntaria para aportaciones a laboratorios
                        técnicos.
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-space-sm rounded-lg bg-surface flex items-start gap-space-sm shadow-sm">
                    <div className="w-12 h-12 rounded bg-surface-container text-on-surface-variant flex flex-col items-center justify-center shrink-0">
                      <span className="font-title-sm text-title-sm font-bold leading-none">19</span>
                      <span className="font-label-sm text-label-sm uppercase font-bold leading-none mt-0.5">DIC</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="px-1.5 py-0.2 rounded bg-surface-variant text-on-surface-variant font-label-sm text-label-sm font-bold uppercase">Periodo Receso</span>
                      </div>
                      <h5 className="font-title-sm text-title-sm text-on-surface font-semibold truncate mt-0.5">
                        Inicio de Vacaciones Decembrinas
                      </h5>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight mt-0.5">
                        Reanudación oficial el día 8 de Enero 2025.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-space-xs text-center">
                  <a className="inline-flex items-center gap-1.5 text-primary font-label-md text-label-md font-bold hover:underline" href="#">
                    <span className="material-symbols-outlined text-[18px]">calendar_add_on</span>
                    Sincronizar Calendario con Google / iOS
                  </a>
                </div>
              </section>
              
              <section className="p-space-md rounded-xl bg-surface-container shadow-sm flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined text-[20px]">verified</span>
                  <span className="font-label-md text-label-md font-bold uppercase tracking-wider">Historial de Folios Firmados</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Todos los acuses suscritos en la plataforma JUNO cuentan con
                  estampa de tiempo oficial y son válidos ante la Supervisión de
                  Zona Escolar 04.
                </p>
                <div className="mt-2 flex items-center justify-between text-on-surface font-label-sm text-label-sm font-semibold bg-surface px-space-sm py-2 rounded">
                  <span>Acuses firmados en 2024:
                    <strong className="text-primary">14</strong></span>
                  <span className="text-secondary font-bold">100% al corriente</span>
                </div>
              </section>
            </div>
          </div>
          
          
        </div>
      </main>
  );
}
