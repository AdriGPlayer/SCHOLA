import { useState } from "react";

export default function Estructura() {
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
          
          <section className="relative w-full rounded-xl bg-surface-container-low p-space-xl overflow-hidden shadow-sm mb-space-xl">
            <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-space-lg">
              <div className="flex flex-col max-w-2xl">
                <div className="flex items-center gap-space-xs mb-space-xs">
                  <span className="px-2 py-0.5 rounded bg-primary-container text-surface-container-lowest font-label-sm text-label-sm uppercase tracking-wider">
                    SUBDIRECCIÓN ACADÉMICA
                  </span>
                  <span className="text-outline">•</span>
                  <span className="font-label-md text-label-md text-on-surface-variant font-semibold">
                    ESTIS NO. 70
                  </span>
                </div>
                <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                  Estructura Escolar: Grupos y Generaciones
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                  Configuración distributiva de matrículas, aulas físicas
                  asignadas y módulos de formación técnica especializada.
                </p>
              </div>
              
              <div className="flex flex-wrap items-center gap-space-md bg-surface-container p-space-md rounded-lg shadow-sm">
                <div className="flex flex-col min-w-[180px]">
                  <label className="font-label-sm text-label-sm text-outline uppercase font-bold tracking-wider mb-1">
                    Ciclo Escolar
                  </label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-surface-container-lowest text-on-surface font-label-lg text-label-lg px-3 py-2 pr-8 rounded focus:outline-none shadow-sm cursor-pointer">
                      <option selected="" value="2024-2025">
                        2024 - 2025 (Vigente)
                      </option>
                      <option value="2023-2024">2023 - 2024 (Histórico)</option>
                      <option value="2025-2026">
                        2025 - 2026 (Planificación)
                      </option>
                    </select>
                    <span className="material-symbols-outlined pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                      expand_more
                    </span>
                  </div>
                </div>
                <div className="flex flex-col min-w-[260px]">
                  <label className="font-label-sm text-label-sm text-outline uppercase font-bold tracking-wider mb-1">
                    Generación Trienal
                  </label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-surface-container-lowest text-on-surface font-label-lg text-label-lg px-3 py-2 pr-8 rounded focus:outline-none shadow-sm cursor-pointer">
                      <option selected="" value="gen2024-2027">
                        2024-2027 "Ing. Manuel Sandoval Vallarta"
                      </option>
                      <option value="gen2023-2026">
                        2023-2026 "Dra. Elvia Carrillo Puerto"
                      </option>
                      <option value="gen2022-2025">
                        2022-2025 "Profr. Moisés Sáenz Garza"
                      </option>
                    </select>
                    <span className="material-symbols-outlined pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                      expand_more
                    </span>
                  </div>
                </div>
                <div className="flex items-end self-end">
                  <button className="h-10 px-4 rounded bg-primary text-on-primary hover:bg-primary-container transition-all flex items-center gap-2 shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">tune</span>
                    <span className="font-label-md text-label-md">Filtrar Base</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md mt-space-lg pt-space-md">
              <div className="flex flex-col p-space-md rounded-lg bg-surface-container-lowest shadow-sm">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Matrícula Instalada</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-headline-md text-headline-md text-on-surface font-bold">1,080</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">estudiantes</span>
                </div>
                <div className="w-full bg-surface-container-high h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: "86%" }}></div>
                </div>
              </div>
              <div className="flex flex-col p-space-md rounded-lg bg-surface-container-lowest shadow-sm">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Grupos Autorizados</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-headline-md text-headline-md text-on-surface font-bold">28</span>
                  <span className="font-body-sm text-body-sm text-secondary font-semibold">14 Mat. / 14 Vesp.</span>
                </div>
                <span className="font-body-sm text-body-sm text-outline mt-1">Acreditación SEP Activa</span>
              </div>
              <div className="flex flex-col p-space-md rounded-lg bg-surface-container-lowest shadow-sm">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Talleres Tecnológicos</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-headline-md text-headline-md text-on-surface font-bold">6</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">laboratorios</span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">100% Asesorías cubiertas</span>
              </div>
              <div className="flex flex-col p-space-md rounded-lg bg-surface-container-lowest shadow-sm">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Espacios Físicos</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-headline-md text-headline-md text-secondary font-bold">2 Aulas Libres</span>
                </div>
                <span className="font-body-sm text-body-sm text-outline mt-1">Edificios B y C disponibles</span>
              </div>
            </div>
          </section>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            
            <div className="lg:col-span-4 flex flex-col rounded-xl bg-surface-container-low p-space-lg shadow-sm">
              <div className="flex items-center justify-between pb-space-sm mb-space-md">
                <div className="flex items-center gap-space-xs">
                  <div className="w-8 h-8 rounded bg-secondary-container flex items-center justify-center text-on-secondary-container">
                    <span className="material-symbols-outlined text-[20px]">add_circle</span>
                  </div>
                  <div>
                    <h2 className="font-title-md text-title-md text-on-surface">
                      Crear Nuevo Grupo
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Apertura formal de grupo pedagógico
                    </p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm uppercase font-semibold">
                  Alta DGAIR
                </span>
              </div>
              <form className="flex flex-col gap-space-md" onSubmit={(e) => { e.preventDefault(); flash("Aula registrada. La estructura física se actualizó en el plano escolar y en el inventario SEP."); }}>
                
                <div className="grid grid-cols-2 gap-space-sm">
                  <div className="flex flex-col">
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold mb-1">Grado Escolar</label>
                    <select className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md px-3 py-2 rounded focus:outline-none shadow-sm cursor-pointer">
                      <option value="1">1° Primer Grado</option>
                      <option value="2">2° Segundo Grado</option>
                      <option value="3">3° Tercer Grado</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold mb-1">Letra de Grupo</label>
                    <select className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md px-3 py-2 rounded focus:outline-none shadow-sm cursor-pointer">
                      <option value="A">Grupo A</option>
                      <option value="B">Grupo B</option>
                      <option value="C">Grupo C</option>
                      <option value="D">Grupo D</option>
                      <option value="E">Grupo E</option>
                      <option value="F">Grupo F</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <label className="font-label-sm text-label-sm text-on-surface font-semibold mb-1">Turno Oficial</label>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="flex flex-col p-2.5 rounded bg-surface-container-lowest hover:bg-surface-container cursor-pointer transition-all">
                      <div className="flex items-center gap-2">
                        <input checked="" className="accent-primary w-4 h-4" name="turno" type="radio" value="matutino" />
                        <span className="font-label-md text-label-md font-semibold text-on-surface">Matutino</span>
                      </div>
                      <span className="font-body-sm text-body-sm text-outline mt-1 pl-6">07:00 a 13:30 hrs</span>
                    </label>
                    <label className="flex flex-col p-2.5 rounded bg-surface-container-lowest hover:bg-surface-container cursor-pointer transition-all">
                      <div className="flex items-center gap-2">
                        <input className="accent-primary w-4 h-4" name="turno" type="radio" value="vespertino" />
                        <span className="font-label-md text-label-md font-semibold text-on-surface">Vespertino</span>
                      </div>
                      <span className="font-body-sm text-body-sm text-outline mt-1 pl-6">13:45 a 20:00 hrs</span>
                    </label>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <label className="font-label-sm text-label-sm text-on-surface font-semibold mb-1">Docente Asesor / Tutor</label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-surface-container-lowest text-on-surface font-body-md text-body-md px-3 py-2 pr-8 rounded focus:outline-none shadow-sm cursor-pointer">
                      <option value="">
                        Seleccionar del claustro docente...
                      </option>
                      <option value="1">
                        Profr. Roberto Méndez Salgado (Matemáticas)
                      </option>
                      <option value="2">
                        Mtra. Guadalupe Herrera Ramos (Español)
                      </option>
                      <option value="3">
                        Ing. Carlos Navarrete Ríos (Electricidad)
                      </option>
                      <option value="4">
                        Biol. Beatriz Corona Velarde (Ciencias)
                      </option>
                      <option value="5">
                        Lic. Fernando Ortega Solano (Historia)
                      </option>
                    </select>
                    <span className="material-symbols-outlined pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                      search
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <label className="font-label-sm text-label-sm text-on-surface font-semibold mb-1">Aula Física Asignada</label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-surface-container-lowest text-on-surface font-body-md text-body-md px-3 py-2 pr-8 rounded focus:outline-none shadow-sm cursor-pointer">
                      <option value="A08">
                        Aula 08 - Edificio A (Planta Baja)
                      </option>
                      <option selected="" value="A12">
                        Aula 12 - Edificio B (Nivel Superior)
                      </option>
                      <option value="A14">
                        Aula 14 - Edificio B (Nivel Superior)
                      </option>
                      <option value="A21">
                        Aula 21 - Edificio C (Planta Baja)
                      </option>
                      <option value="LAB-A">
                        Taller Polivalente Tecnológico 1
                      </option>
                    </select>
                    <span className="material-symbols-outlined pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                      meeting_room
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <label className="font-label-sm text-label-sm text-on-surface font-semibold mb-1">Especialidad Tecnológica Troncal</label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-surface-container-lowest text-on-surface font-body-md text-body-md px-3 py-2 pr-8 rounded focus:outline-none shadow-sm cursor-pointer">
                      <option value="MAQ">
                        Máquinas - Herramientas y Sistemas de Control
                      </option>
                      <option selected="" value="ELE">
                        Electrotecnia y Mantenimiento Industrial
                      </option>
                      <option value="DIS">
                        Diseño y Comunicación Gráfica Técnica
                      </option>
                      <option value="INFO">
                        Informática y Sistemas Digitales
                      </option>
                      <option value="CIR">
                        Circuitos Electrónicos y Mecatrónica
                      </option>
                      <option value="ROT">
                        Distribución Rotativa de Exploración (1er Grado)
                      </option>
                    </select>
                    <span className="material-symbols-outlined pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                      precision_manufacturing
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-space-sm">
                  <div className="flex flex-col">
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold mb-1">Cupo Límite (Alumnos)</label>
                    <div className="relative">
                      <input className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md px-3 py-2 rounded focus:outline-none shadow-sm" max="45" min="20" type="number" value="40" />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-outline font-label-sm text-label-sm">MAX</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold mb-1">Estatus Inicial</label>
                    <select className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md px-3 py-2 rounded focus:outline-none shadow-sm cursor-pointer">
                      <option selected="" value="activo">
                        Abierto para Matrícula
                      </option>
                      <option value="bloqueado">
                        Pre-reservado (Bloqueado)
                      </option>
                    </select>
                  </div>
                </div>
                <div className="pt-space-sm flex flex-col gap-2">
                  <button className="w-full py-2.5 px-4 rounded bg-primary text-on-primary hover:bg-primary-container font-label-lg text-label-lg font-bold transition-all flex items-center justify-center gap-2 shadow-sm" type="submit">
                    <span className="material-symbols-outlined text-[20px]">save</span>
                    <span>Registrar y Dar de Alta Grupo</span>
                  </button>
                  <span className="text-center font-label-sm text-label-sm text-outline">
                    Se generará automáticamente la clave DGAIR de grupo.
                  </span>
                </div>
              </form>
              
              <div className="mt-space-lg rounded-lg overflow-hidden bg-surface-container relative h-36">
                <img className="w-full h-full object-cover" data-alt="Technical secondary school workshop classroom in Mexico with heavy machinery, technical drawing drafting tables, warm earthy brick walls, educational charts, and morning sunlight streaming through wide industrial windows in deep sepia and terracotta tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuATSVvBfbSOw3n0LqWAcgxnbh7M2iWflHFRerWFFGIq_WlwgRIe1x_mtymI0eIw4AdSUOaNvJNtT0D3kge4Yj0j4vz7D0zu27qoxyPGB6B4jH4Q9wlUPNXVWu9wcM4RHVEEe12zdTu6FpYiBX8t47Enai1BFI1gcvmjrQbsQAwW5hyqs_kl51uOSpoZwTq6ToXd6znGNKcZjR28IAfHp_uhciNJyPGJm1afgkmhNoioX5qoiWaKkVOExg" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-3">
                  <div className="text-on-primary">
                    <p className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed">
                      Taller de Maquinaria y Dibujo
                    </p>
                    <p className="font-body-sm text-body-sm font-semibold">
                      Instalaciones Edificio Central
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-8 flex flex-col gap-space-lg">
              
              <div className="flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-low p-2 rounded-xl">
                <div className="flex items-center gap-1">
                  <button className="px-4 py-2 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">looks_one</span>
                    <span>1er Grado (Generación 2024)</span>
                  </button>
                  <button className="px-4 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-lg text-label-lg font-medium transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">looks_two</span>
                    <span>2do Grado</span>
                  </button>
                  <button className="px-4 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-lg text-label-lg font-medium transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">looks_3</span>
                    <span>3er Grado</span>
                  </button>
                </div>
                <div className="flex items-center gap-2 px-2">
                  <button className="p-2 rounded bg-surface-container hover:bg-surface-container-high text-on-surface transition-all" title="Vista Cuadrícula">
                    <span className="material-symbols-outlined text-[20px]">grid_view</span>
                  </button>
                  <button className="p-2 rounded bg-surface-container hover:bg-surface-container-high text-on-surface transition-all" title="Vista Lista">
                    <span className="material-symbols-outlined text-[20px]">view_list</span>
                  </button>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center justify-between gap-space-md p-space-md rounded-xl bg-surface-container shadow-sm">
                <div className="flex items-center gap-space-md">
                  <div className="flex items-center gap-2 text-on-surface">
                    <span className="material-symbols-outlined text-secondary text-[22px]">groups</span>
                    <div className="flex flex-col">
                      <span className="font-title-sm text-title-sm font-bold">5 Grupos Activos en 1er Grado</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">192 alumnos inscritos de 200 cupos disponibles (96%
                        Ocupación)</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-space-xs">
                  <button className="px-3 py-1.5 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-bright font-label-md text-label-md font-semibold transition-all shadow-sm flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px]">badge</span>
                    <span>Credenciales en Lote</span>
                  </button>
                  <button className="px-3 py-1.5 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-bright font-label-md text-label-md font-semibold transition-all shadow-sm flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                    <span>Plan de Horarios</span>
                  </button>
                  <button className="px-3 py-1.5 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-bright font-label-md text-label-md font-semibold transition-all shadow-sm flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px]">print</span>
                    <span>Listas Asistencia</span>
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                
                <div className="flex flex-col rounded-xl bg-surface-container-low p-space-md shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-12 h-12 rounded-lg bg-primary text-on-primary flex items-center justify-center font-headline-md text-headline-md font-bold">
                        1°A
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-title-md text-title-md text-on-surface font-bold">Grupo 1° "A"</span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">
                            Matutino
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px] text-outline">location_on</span>
                          Aula 10 • Edificio A (Planta Alta)
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">
                      COMPLETO
                    </span>
                  </div>
                  
                  <div className="mt-space-md p-space-sm rounded-lg bg-surface-container">
                    <div className="flex items-center justify-between text-on-surface-variant mb-1">
                      <span className="font-label-sm text-label-sm uppercase font-semibold text-outline">Especialidad Técnica:</span>
                      <span className="font-label-md text-label-md font-bold text-on-surface">Electrotecnia Ind.</span>
                    </div>
                    <div className="flex items-center justify-between text-on-surface-variant">
                      <span className="font-label-sm text-label-sm uppercase font-semibold text-outline">Tutor Asignado:</span>
                      <span className="font-label-md text-label-md text-on-surface">Profr. Roberto Méndez S.</span>
                    </div>
                  </div>
                  
                  <div className="mt-space-md flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm font-semibold text-on-surface">Capacidad del Aula</span>
                      <span className="font-label-md text-label-md font-bold text-secondary">40 de 40 Alumnos (100%)</span>
                    </div>
                    <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden flex">
                      <div className="bg-secondary h-full rounded-full" style={{ width: "100%" }}></div>
                    </div>
                    <span className="font-body-sm text-body-sm text-outline">Sin plazas libres. Lista de espera cerrada.</span>
                  </div>
                  
                  <div className="mt-space-md pt-space-sm flex items-center justify-between gap-2">
                    <a className="flex-1 py-2 px-3 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold text-center transition-all flex items-center justify-center gap-1" href="#">
                      <span className="material-symbols-outlined text-[16px]">format_list_numbered</span>
                      Lista (40)
                    </a>
                    <a className="flex-1 py-2 px-3 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold text-center transition-all flex items-center justify-center gap-1" href="#">
                      <span className="material-symbols-outlined text-[16px]">schedule</span>
                      Horario
                    </a>
                    <button className="p-2 rounded bg-surface-container hover:bg-surface-container-high text-on-surface transition-all" title="Opciones Avanzadas">
                      <span className="material-symbols-outlined text-[18px]">more_vert</span>
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col rounded-xl bg-surface-container-low p-space-md shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-12 h-12 rounded-lg bg-primary-container text-surface-container-lowest flex items-center justify-center font-headline-md text-headline-md font-bold">
                        1°B
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-title-md text-title-md text-on-surface font-bold">Grupo 1° "B"</span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">
                            Matutino
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px] text-outline">location_on</span>
                          Aula 11 • Edificio A (Planta Alta)
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold">
                      3 DISPONIBLES
                    </span>
                  </div>
                  
                  <div className="mt-space-md p-space-sm rounded-lg bg-surface-container">
                    <div className="flex items-center justify-between text-on-surface-variant mb-1">
                      <span className="font-label-sm text-label-sm uppercase font-semibold text-outline">Especialidad Técnica:</span>
                      <span className="font-label-md text-label-md font-bold text-on-surface">Informática y Sistemas</span>
                    </div>
                    <div className="flex items-center justify-between text-on-surface-variant">
                      <span className="font-label-sm text-label-sm uppercase font-semibold text-outline">Tutor Asignado:</span>
                      <span className="font-label-md text-label-md text-on-surface">Mtra. Guadalupe Herrera R.</span>
                    </div>
                  </div>
                  
                  <div className="mt-space-md flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm font-semibold text-on-surface">Capacidad del Aula</span>
                      <span className="font-label-md text-label-md font-bold text-on-surface">37 de 40 Alumnos (92.5%)</span>
                    </div>
                    <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden flex">
                      <div className="bg-primary h-full rounded-full" style={{ width: "92.5%" }}></div>
                    </div>
                    <span className="font-body-sm text-body-sm text-outline">3 lugares disponibles para transferencias.</span>
                  </div>
                  
                  <div className="mt-space-md pt-space-sm flex items-center justify-between gap-2">
                    <a className="flex-1 py-2 px-3 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold text-center transition-all flex items-center justify-center gap-1" href="#">
                      <span className="material-symbols-outlined text-[16px]">format_list_numbered</span>
                      Lista (37)
                    </a>
                    <a className="flex-1 py-2 px-3 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold text-center transition-all flex items-center justify-center gap-1" href="#">
                      <span className="material-symbols-outlined text-[16px]">schedule</span>
                      Horario
                    </a>
                    <button className="p-2 rounded bg-surface-container hover:bg-surface-container-high text-on-surface transition-all" title="Opciones Avanzadas">
                      <span className="material-symbols-outlined text-[18px]">more_vert</span>
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col rounded-xl bg-surface-container-low p-space-md shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-12 h-12 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center font-headline-md text-headline-md font-bold">
                        1°C
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-title-md text-title-md text-on-surface font-bold">Grupo 1° "C"</span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">
                            Matutino
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px] text-outline">location_on</span>
                          Aula 12 • Edificio B (Nivel Superior)
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">
                      COMPLETO
                    </span>
                  </div>
                  
                  <div className="mt-space-md p-space-sm rounded-lg bg-surface-container">
                    <div className="flex items-center justify-between text-on-surface-variant mb-1">
                      <span className="font-label-sm text-label-sm uppercase font-semibold text-outline">Especialidad Técnica:</span>
                      <span className="font-label-md text-label-md font-bold text-on-surface">Diseño Técnico y Gráfico</span>
                    </div>
                    <div className="flex items-center justify-between text-on-surface-variant">
                      <span className="font-label-sm text-label-sm uppercase font-semibold text-outline">Tutor Asignado:</span>
                      <span className="font-label-md text-label-md text-on-surface">Ing. Carlos Navarrete R.</span>
                    </div>
                  </div>
                  
                  <div className="mt-space-md flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm font-semibold text-on-surface">Capacidad del Aula</span>
                      <span className="font-label-md text-label-md font-bold text-secondary">40 de 40 Alumnos (100%)</span>
                    </div>
                    <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden flex">
                      <div className="bg-secondary h-full rounded-full" style={{ width: "100%" }}></div>
                    </div>
                    <span className="font-body-sm text-body-sm text-outline">Sin plazas libres. Distribución balanceada.</span>
                  </div>
                  
                  <div className="mt-space-md pt-space-sm flex items-center justify-between gap-2">
                    <a className="flex-1 py-2 px-3 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold text-center transition-all flex items-center justify-center gap-1" href="#">
                      <span className="material-symbols-outlined text-[16px]">format_list_numbered</span>
                      Lista (40)
                    </a>
                    <a className="flex-1 py-2 px-3 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold text-center transition-all flex items-center justify-center gap-1" href="#">
                      <span className="material-symbols-outlined text-[16px]">schedule</span>
                      Horario
                    </a>
                    <button className="p-2 rounded bg-surface-container hover:bg-surface-container-high text-on-surface transition-all" title="Opciones Avanzadas">
                      <span className="material-symbols-outlined text-[18px]">more_vert</span>
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col rounded-xl bg-surface-container-low p-space-md shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-12 h-12 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center font-headline-md text-headline-md font-bold">
                        1°D
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-title-md text-title-md text-on-surface font-bold">Grupo 1° "D"</span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">
                            Vespertino
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px] text-outline">location_on</span>
                          Aula 10 • Edificio A (Planta Alta)
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold">
                      2 DISPONIBLES
                    </span>
                  </div>
                  
                  <div className="mt-space-md p-space-sm rounded-lg bg-surface-container">
                    <div className="flex items-center justify-between text-on-surface-variant mb-1">
                      <span className="font-label-sm text-label-sm uppercase font-semibold text-outline">Especialidad Técnica:</span>
                      <span className="font-label-md text-label-md font-bold text-on-surface">Máquinas y Herramientas</span>
                    </div>
                    <div className="flex items-center justify-between text-on-surface-variant">
                      <span className="font-label-sm text-label-sm uppercase font-semibold text-outline">Tutor Asignado:</span>
                      <span className="font-label-md text-label-md text-on-surface">Biol. Beatriz Corona V.</span>
                    </div>
                  </div>
                  
                  <div className="mt-space-md flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm font-semibold text-on-surface">Capacidad del Aula</span>
                      <span className="font-label-md text-label-md font-bold text-on-surface">38 de 40 Alumnos (95%)</span>
                    </div>
                    <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden flex">
                      <div className="bg-primary h-full rounded-full" style={{ width: "95%" }}></div>
                    </div>
                    <span className="font-body-sm text-body-sm text-outline">Turno vespertino en proceso de consolidación.</span>
                  </div>
                  
                  <div className="mt-space-md pt-space-sm flex items-center justify-between gap-2">
                    <a className="flex-1 py-2 px-3 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold text-center transition-all flex items-center justify-center gap-1" href="#">
                      <span className="material-symbols-outlined text-[16px]">format_list_numbered</span>
                      Lista (38)
                    </a>
                    <a className="flex-1 py-2 px-3 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold text-center transition-all flex items-center justify-center gap-1" href="#">
                      <span className="material-symbols-outlined text-[16px]">schedule</span>
                      Horario
                    </a>
                    <button className="p-2 rounded bg-surface-container hover:bg-surface-container-high text-on-surface transition-all" title="Opciones Avanzadas">
                      <span className="material-symbols-outlined text-[18px]">more_vert</span>
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col rounded-xl bg-surface-container-low p-space-md shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-12 h-12 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center font-headline-md text-headline-md font-bold">
                        1°E
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-title-md text-title-md text-on-surface font-bold">Grupo 1° "E"</span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">
                            Vespertino
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px] text-outline">location_on</span>
                          Aula 11 • Edificio A (Planta Alta)
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold">
                      3 DISPONIBLES
                    </span>
                  </div>
                  
                  <div className="mt-space-md p-space-sm rounded-lg bg-surface-container">
                    <div className="flex items-center justify-between text-on-surface-variant mb-1">
                      <span className="font-label-sm text-label-sm uppercase font-semibold text-outline">Especialidad Técnica:</span>
                      <span className="font-label-md text-label-md font-bold text-on-surface">Circuitos y Mecatrónica</span>
                    </div>
                    <div className="flex items-center justify-between text-on-surface-variant">
                      <span className="font-label-sm text-label-sm uppercase font-semibold text-outline">Tutor Asignado:</span>
                      <span className="font-label-md text-label-md text-on-surface">Lic. Fernando Ortega S.</span>
                    </div>
                  </div>
                  
                  <div className="mt-space-md flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm font-semibold text-on-surface">Capacidad del Aula</span>
                      <span className="font-label-md text-label-md font-bold text-on-surface">37 de 40 Alumnos (92.5%)</span>
                    </div>
                    <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden flex">
                      <div className="bg-primary h-full rounded-full" style={{ width: "92.5%" }}></div>
                    </div>
                    <span className="font-body-sm text-body-sm text-outline">3 plazas disponibles para registro extemporáneo.</span>
                  </div>
                  
                  <div className="mt-space-md pt-space-sm flex items-center justify-between gap-2">
                    <a className="flex-1 py-2 px-3 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold text-center transition-all flex items-center justify-center gap-1" href="#">
                      <span className="material-symbols-outlined text-[16px]">format_list_numbered</span>
                      Lista (37)
                    </a>
                    <a className="flex-1 py-2 px-3 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold text-center transition-all flex items-center justify-center gap-1" href="#">
                      <span className="material-symbols-outlined text-[16px]">schedule</span>
                      Horario
                    </a>
                    <button className="p-2 rounded bg-surface-container hover:bg-surface-container-high text-on-surface transition-all" title="Opciones Avanzadas">
                      <span className="material-symbols-outlined text-[18px]">more_vert</span>
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center items-center rounded-xl bg-surface-container p-space-lg text-center shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center text-outline mb-space-sm">
                    <span className="material-symbols-outlined text-[28px]">add_home_work</span>
                  </div>
                  <h3 className="font-title-md text-title-md text-on-surface font-bold">
                    Proyección Grupo 1° "F"
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs mt-1 mb-space-md">
                    El aula 14 del Edificio B cuenta con disponibilidad horaria
                    vespertina para absorber sobredemanda de nuevo ingreso.
                  </p>
                  <button className="py-2 px-4 rounded bg-surface-container-lowest hover:bg-surface-bright text-on-surface font-label-md text-label-md font-bold transition-all shadow-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    <span>Habilitar Grupo 1°F</span>
                  </button>
                </div>
              </div>
              
              <div className="mt-space-sm p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-md">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface">
                    <span className="material-symbols-outlined text-[22px]">swap_horiz</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-sm text-title-sm text-on-surface font-bold">Esquema Rotativo Tecnológico</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Los alumnos de 1er grado cambian de módulo práctico cada
                      10 semanas de acuerdo al plan DGETI.</span>
                  </div>
                </div>
                <button className="px-4 py-2 rounded bg-primary text-on-primary font-label-md text-label-md font-bold hover:bg-primary-container transition-all shrink-0">
                  Ver Matriz Curricular
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-space-xl pt-space-lg mb-space-md flex items-center justify-between">
            <div className="flex items-center gap-space-md">
              <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 shadow-sm">
                <img className="w-full h-full object-cover" data-alt="Mexican technical secondary school courtyard with students wearing cream and coffee-colored school uniforms, surrounded by terracotta brick walls, lush ficus trees, and warm late-afternoon academic atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBllOiyFprL_NOs6uW3g8elQxeV-S2nx01ZQ7-PTdRIuxuky3ru9QP0p2LRqNOs9CMEsHLMgPjJ0sRgwQ_8g7aduN3ltmdKIAxWFw9vICje_KeY2IbyWE3ngIMVHEhEOQcElE7l6FL0qUP8Yy0i8KVXqxIeUF3pJW-YcrjC0EOmFsRNKhC4vQTEwIJm3NEzFvBrpJUhF9FG-YE98qQNEhe3QLiVbtq4Al69tEsrtiPQw3q39lNRxKOL2Q" />
              </div>
              <div>
                <p className="font-label-lg text-label-lg text-on-surface font-bold">
                  Escuela Secundaria Técnica Industrial y de Servicios No. 70
                </p>
                <p className="font-body-sm text-body-sm text-outline">
                  Plataforma Administrativa Institucional JÚPITER • Ciclo
                  Escolar Activo
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span className="px-3 py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
                Normativa SEP Art. 38
              </span>
              <span className="px-3 py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
                Validación DGETI 2024
              </span>
            </div>
          </div>
        </div>
      </main>
  );
}
