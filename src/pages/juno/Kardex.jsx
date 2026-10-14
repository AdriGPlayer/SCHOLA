import { useState } from "react";

export default function Kardex() {
  const [filter, setFilter] = useState("todas");
  const [modalBoleta, setModalBoleta] = useState(false);
  const [modalCita, setModalCita] = useState(false);
  const [citaMateria, setCitaMateria] = useState("");
  const [citaDocente, setCitaDocente] = useState("");
  const [citaSent, setCitaSent] = useState(false);

  const openCita = (materia, docente) => {
    setCitaMateria(materia);
    setCitaDocente(docente);
    setCitaSent(false);
    setModalCita(true);
  };
  const submitCita = (e) => {
    e.preventDefault();
    setCitaSent(true);
    window.setTimeout(() => {
      setModalCita(false);
      setCitaSent(false);
    }, 1800);
  };

  return (
    <main className="relative pt-20 bg-background min-h-screen px-space-lg py-space-lg">
        <div className="flex flex-col w-full gap-y-space-xl">
          
          <div className="relative bg-surface-container-low rounded-xl p-space-lg shadow-sm overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-secondary-container/10 pointer-events-none blur-2xl"></div>
            <div className="flex items-center gap-space-md relative z-10">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-md flex-shrink-0">
                <span className="material-symbols-outlined text-[32px]">history_edu</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Dirección Escolar · DGEST</span>
                  <span className="inline-block w-1 h-1 rounded-full bg-outline"></span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Ciclo 2024–2025</span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                  Kárdex y Acreditación Oficial
                </h1>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Expediente formal de Daniela Álvarez Ramírez · Matrícula
                  ESTIS-2023-B249 · 2° Grado Grupo B
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 relative z-10 self-stretch md:self-auto justify-end">
              <button className="px-space-md py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg flex items-center gap-2 shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer" type="button">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>Validación Digital SEP</span>
              </button>
              <button className="p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors cursor-pointer" title="Imprimir extracto" type="button">
                <span className="material-symbols-outlined text-[20px]">print</span>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg">
            
            <div className="md:col-span-4 bg-primary text-on-primary rounded-xl p-space-lg shadow-md relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
                <span className="material-symbols-outlined text-[190px]">workspace_premium</span>
              </div>
              <div>
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container font-semibold">Promedio Ponderado General</span>
                  <span className="px-2 py-0.5 rounded bg-secondary text-on-secondary font-label-sm text-label-sm font-bold">Top 5% Matutino</span>
                </div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="font-headline-xl text-headline-xl font-bold tracking-tight text-surface-bright">9.6</span>
                  <span className="font-title-md text-title-md text-on-primary-container">/ 10.0</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-primary-container mt-1">
                  Segundo Grado · Turno Matutino · Padrón de Excelencia ESTIS 70
                </p>
              </div>
              <div className="mt-space-lg pt-space-md border-t-0 bg-primary-container/60 -mx-space-lg -mb-space-lg p-space-md rounded-b-xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">military_tech</span>
                  <span className="font-body-sm text-body-sm text-on-primary font-medium">Lugar 3 de 42 alumnos en grupo 2°B</span>
                </div>
                <span className="material-symbols-outlined text-on-primary-container text-[18px]">arrow_forward</span>
              </div>
            </div>
            
            <div className="md:col-span-5 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Evaluación Periódica SEP</span>
                  <h2 className="font-title-md text-title-md text-on-surface font-bold">
                    Trayectoria Trimestral Oficial
                  </h2>
                </div>
                <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-semibold">3 Periodos</span>
              </div>
              
              <div className="my-space-md bg-surface-container-low rounded-lg p-space-md">
                <div className="grid grid-cols-3 gap-space-md text-center items-end h-32 pt-2">
                  <div className="flex flex-col items-center justify-end h-full">
                    <span className="font-label-md text-label-md font-bold text-primary mb-1">9.8</span>
                    <div className="w-full bg-primary-container rounded-t-lg transition-all duration-300" style={{ height: "98%" }}></div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-bold mt-2">1er Trim</span>
                    <span className="font-body-sm text-body-sm text-secondary font-semibold">Validado</span>
                  </div>
                  <div className="flex flex-col items-center justify-end h-full">
                    <span className="font-label-md text-label-md font-bold text-primary mb-1">9.5</span>
                    <div className="w-full bg-primary-container rounded-t-lg transition-all duration-300" style={{ height: "95%" }}></div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-bold mt-2">2do Trim</span>
                    <span className="font-body-sm text-body-sm text-secondary font-semibold">Validado</span>
                  </div>
                  <div className="flex flex-col items-center justify-end h-full">
                    <span className="font-label-md text-label-md font-bold text-tertiary mb-1">9.6*</span>
                    <div className="w-full bg-secondary-container/80 rounded-t-lg transition-all duration-300 relative overflow-hidden" style={{ height: "96%" }}>
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent"></div>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-bold mt-2">3er Trim</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant font-semibold">En curso</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-primary-container"></span>Sello digital DGEST</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-secondary-container"></span>Cierre ordinario: 04 Julio</span>
              </div>
            </div>
            
            <div className="md:col-span-3 flex flex-col gap-space-md">
              
              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Índice Aprobación</span>
                  <span className="font-headline-md text-headline-md font-bold text-primary">100%</span>
                  <span className="font-body-sm text-body-sm text-secondary font-medium">9 / 9 Materias sin adeudo</span>
                </div>
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[26px]">task_alt</span>
                </div>
              </div>
              
              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Taller Tecnológico</span>
                  <span className="font-label-sm text-label-sm font-bold text-secondary">75% Req.</span>
                </div>
                <div className="my-2">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-title-md text-title-md font-bold text-on-surface">120 hrs</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">de 160 hrs</span>
                  </div>
                  <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Especialidad: Informática y Redes</span>
              </div>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
            
            <div className="p-space-lg bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-space-md">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]">table_chart</span>
                  <h2 className="font-title-md text-title-md text-on-surface font-bold">
                    Desglose Curricular por Asignatura
                  </h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Acuerdo Secretarial 11/03/19 · Criterios de Evaluación y
                  Acreditación de Secundaria Técnica
                </p>
              </div>
              
              <div className="flex items-center gap-1.5 flex-wrap">
                <button onClick={() => setFilter("todas")} className={`filter-btn px-3 py-1 rounded font-label-md text-label-md cursor-pointer transition-colors ${filter === "todas" ? "bg-primary text-on-primary" : "bg-surface-container text-on-surface hover:bg-surface-container-high"}`} type="button">
                  Todas (9)
                </button>
                <button onClick={() => setFilter("sobresaliente")} className={`filter-btn px-3 py-1 rounded font-label-md text-label-md cursor-pointer transition-colors ${filter === "sobresaliente" ? "bg-primary text-on-primary" : "bg-surface-container text-on-surface hover:bg-surface-container-high"}`} type="button">
                  Sobresalientes (6)
                </button>
                <button onClick={() => setFilter("riesgo")} className={`filter-btn px-3 py-1 rounded font-label-md text-label-md cursor-pointer transition-colors ${filter === "riesgo" ? "bg-primary text-on-primary" : "bg-surface-container text-on-surface hover:bg-surface-container-high"}`} type="button">
                  Requieren Atención (1)
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left" id="grades-table" data-filter={filter}>
                <thead>
                  <tr className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                    <th className="py-3 px-space-md">
                      Asignatura / Campo Formativo
                    </th>
                    <th className="py-3 px-space-md">Docente Titular</th>
                    <th className="py-3 px-space-sm text-center">Trim 1</th>
                    <th className="py-3 px-space-sm text-center">Trim 2</th>
                    <th className="py-3 px-space-sm text-center">Trim 3*</th>
                    <th className="py-3 px-space-sm text-center">Final</th>
                    <th className="py-3 px-space-md">Estatus</th>
                    <th className="py-3 px-space-lg">
                      Observaciones Pedagógicas y Seguimiento
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-none font-body-sm text-body-sm text-on-surface">
                  
                  <tr className="subject-row hover:bg-surface-container-low/60 transition-colors" data-status="sobresaliente">
                    <td className="py-space-md px-space-md">
                      <div className="flex flex-col">
                        <span className="font-title-sm text-title-sm text-on-surface font-semibold">Matemáticas II</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Pensamiento Matemático</span>
                      </div>
                    </td>
                    <td className="py-space-md px-space-md">
                      <span className="font-label-md text-label-md text-on-surface">Prof. Carlos Mendoza H.</span>
                      <span className="block font-body-sm text-body-sm text-on-surface-variant">cubículo D-4</span>
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-primary">
                      9.5
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-primary">
                      9.2
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-on-surface-variant">
                      9.4
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-primary bg-surface-container/30">
                      9.4
                    </td>
                    <td className="py-space-md px-space-md">
                      <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-label-sm text-label-sm font-bold">Sobresaliente</span>
                    </td>
                    <td className="py-space-md px-space-lg">
                      <p className="font-body-sm text-body-sm text-on-surface leading-snug">
                        Excelente resolución de sistemas de ecuaciones lineales.
                        Requiere consolidar el despeje de incógnitas con
                        exponentes fraccionarios.
                      </p>
                    </td>
                  </tr>
                  
                  <tr className="subject-row hover:bg-surface-container-low/60 transition-colors bg-surface-container-low/20" data-status="sobresaliente">
                    <td className="py-space-md px-space-md">
                      <div className="flex flex-col">
                        <span className="font-title-sm text-title-sm text-on-surface font-semibold">Lengua Materna Español II</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Lenguajes y Comunicación</span>
                      </div>
                    </td>
                    <td className="py-space-md px-space-md">
                      <span className="font-label-md text-label-md text-on-surface">Mtra. Elena Saldaña V.</span>
                      <span className="block font-body-sm text-body-sm text-on-surface-variant">Tutoría de Grupo</span>
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-primary">
                      10.0
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-primary">
                      9.8
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-on-surface-variant">
                      9.7
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-primary bg-surface-container/30">
                      9.8
                    </td>
                    <td className="py-space-md px-space-md">
                      <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-label-sm text-label-sm font-bold">Sobresaliente</span>
                    </td>
                    <td className="py-space-md px-space-lg">
                      <p className="font-body-sm text-body-sm text-on-surface leading-snug">
                        Dominio notable en redacción de ensayos argumentativos y
                        análisis de crónica literaria contemporánea.
                      </p>
                    </td>
                  </tr>
                  
                  <tr className="subject-row hover:bg-surface-container-low/60 transition-colors" data-status="riesgo">
                    <td className="py-space-md px-space-md">
                      <div className="flex flex-col">
                        <span className="font-title-sm text-title-sm text-on-surface font-semibold">Ciencias II (Física)</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Saberes y Pensamiento Científico</span>
                      </div>
                    </td>
                    <td className="py-space-md px-space-md">
                      <span className="font-label-md text-label-md text-on-surface">Ing. Roberto Bañuelos</span>
                      <span className="block font-body-sm text-body-sm text-on-surface-variant">Lab. Central</span>
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-primary">
                      9.0
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-secondary">
                      8.2
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-on-surface-variant">
                      8.5
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-primary bg-surface-container/30">
                      8.6
                    </td>
                    <td className="py-space-md px-space-md">
                      <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">Atención</span>
                    </td>
                    <td className="py-space-md px-space-lg">
                      <p className="font-body-sm text-body-sm text-secondary font-medium leading-snug">
                        Presenta dudas recurrentes en vectores de fuerza y leyes
                        de termodinámica. Se sugiere acudir a la asesoría de
                        contraturno de los martes.
                      </p>
                    </td>
                  </tr>
                  
                  <tr className="subject-row hover:bg-surface-container-low/60 transition-colors bg-surface-container-low/20" data-status="sobresaliente">
                    <td className="py-space-md px-space-md">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-secondary text-[16px]">terminal</span>
                          <span className="font-title-sm text-title-sm text-on-surface font-semibold">Taller de Informática y Redes</span>
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Tecnología Especializada · 8 hrs/sem</span>
                      </div>
                    </td>
                    <td className="py-space-md px-space-md">
                      <span className="font-label-md text-label-md text-on-surface">L.I. Gerardo Ponce T.</span>
                      <span className="block font-body-sm text-body-sm text-on-surface-variant">Taller Cómputo 2</span>
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-primary">
                      10.0
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-primary">
                      10.0
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-on-surface-variant">
                      9.8
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-primary bg-surface-container/30">
                      9.9
                    </td>
                    <td className="py-space-md px-space-md">
                      <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-label-sm text-label-sm font-bold">Sobresaliente</span>
                    </td>
                    <td className="py-space-md px-space-lg">
                      <p className="font-body-sm text-body-sm text-on-surface leading-snug">
                        Excelente destreza en diagramas de flujo, ensamble de
                        cableado estructurado UTP e implementación de subredes
                        IP.
                      </p>
                    </td>
                  </tr>
                  
                  <tr className="subject-row hover:bg-surface-container-low/60 transition-colors" data-status="sobresaliente">
                    <td className="py-space-md px-space-md">
                      <div className="flex flex-col">
                        <span className="font-title-sm text-title-sm text-on-surface font-semibold">Historia de México II</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Ética, Naturaleza y Sociedades</span>
                      </div>
                    </td>
                    <td className="py-space-md px-space-md">
                      <span className="font-label-md text-label-md text-on-surface">Mtra. Patricia Lozano</span>
                      <span className="block font-body-sm text-body-sm text-on-surface-variant">Academia Social</span>
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-primary">
                      9.8
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-primary">
                      9.6
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-on-surface-variant">
                      9.5
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-primary bg-surface-container/30">
                      9.6
                    </td>
                    <td className="py-space-md px-space-md">
                      <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-label-sm text-label-sm font-bold">Sobresaliente</span>
                    </td>
                    <td className="py-space-md px-space-lg">
                      <p className="font-body-sm text-body-sm text-on-surface leading-snug">
                        Participación constructiva durante los debates del
                        periodo revolucionario y proyectos de investigación de
                        campo.
                      </p>
                    </td>
                  </tr>
                  
                  <tr className="subject-row hover:bg-surface-container-low/60 transition-colors bg-surface-container-low/20" data-status="sobresaliente">
                    <td className="py-space-md px-space-md">
                      <div className="flex flex-col">
                        <span className="font-title-sm text-title-sm text-on-surface font-semibold">Formación Cívica y Ética</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">De lo Humano y lo Comunitario</span>
                      </div>
                    </td>
                    <td className="py-space-md px-space-md">
                      <span className="font-label-md text-label-md text-on-surface">Lic. Adriana Ruiz Ortiz</span>
                      <span className="block font-body-sm text-body-sm text-on-surface-variant">Orientación</span>
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-primary">
                      10.0
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-primary">
                      9.7
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-on-surface-variant">
                      9.8
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-primary bg-surface-container/30">
                      9.8
                    </td>
                    <td className="py-space-md px-space-md">
                      <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-label-sm text-label-sm font-bold">Sobresaliente</span>
                    </td>
                    <td className="py-space-md px-space-lg">
                      <p className="font-body-sm text-body-sm text-on-surface leading-snug">
                        Actitud colaborativa ejemplar en actividades de
                        mediación escolar y derechos humanos.
                      </p>
                    </td>
                  </tr>
                  
                  <tr className="subject-row hover:bg-surface-container-low/60 transition-colors" data-status="sobresaliente">
                    <td className="py-space-md px-space-md">
                      <div className="flex flex-col">
                        <span className="font-title-sm text-title-sm text-on-surface font-semibold">Lengua Extranjera (Inglés II)</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Lenguajes</span>
                      </div>
                    </td>
                    <td className="py-space-md px-space-md">
                      <span className="font-label-md text-label-md text-on-surface">Lic. Mark Gallagher</span>
                      <span className="block font-body-sm text-body-sm text-on-surface-variant">Centro Idiomas</span>
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-primary">
                      9.4
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-primary">
                      9.4
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-on-surface-variant">
                      9.5
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-primary bg-surface-container/30">
                      9.4
                    </td>
                    <td className="py-space-md px-space-md">
                      <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-label-sm text-label-sm font-bold">Sobresaliente</span>
                    </td>
                    <td className="py-space-md px-space-lg">
                      <p className="font-body-sm text-body-sm text-on-surface leading-snug">
                        Buena comprensión lectora y soltura en diálogos
                        situacionales básicos.
                      </p>
                    </td>
                  </tr>
                  
                  <tr className="subject-row hover:bg-surface-container-low/60 transition-colors bg-surface-container-low/20" data-status="sobresaliente">
                    <td className="py-space-md px-space-md">
                      <div className="flex flex-col">
                        <span className="font-title-sm text-title-sm text-on-surface font-semibold">Artes Visuales II</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Expresión Artística</span>
                      </div>
                    </td>
                    <td className="py-space-md px-space-md">
                      <span className="font-label-md text-label-md text-on-surface">Mtro. Diego Rincón</span>
                      <span className="block font-body-sm text-body-sm text-on-surface-variant">Taller Artes</span>
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-primary">
                      10.0
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-primary">
                      9.9
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-on-surface-variant">
                      10.0
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-primary bg-surface-container/30">
                      10.0
                    </td>
                    <td className="py-space-md px-space-md">
                      <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-label-sm text-label-sm font-bold">Sobresaliente</span>
                    </td>
                    <td className="py-space-md px-space-lg">
                      <p className="font-body-sm text-body-sm text-on-surface leading-snug">
                        Entrega puntual de la carpeta de bocetos técnicos y
                        técnica mixta al óleo.
                      </p>
                    </td>
                  </tr>
                  
                  <tr className="subject-row hover:bg-surface-container-low/60 transition-colors" data-status="sobresaliente">
                    <td className="py-space-md px-space-md">
                      <div className="flex flex-col">
                        <span className="font-title-sm text-title-sm text-on-surface font-semibold">Educación Física II</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Desarrollo Corporal y Salud</span>
                      </div>
                    </td>
                    <td className="py-space-md px-space-md">
                      <span className="font-label-md text-label-md text-on-surface">Prof. Samuel Arcos</span>
                      <span className="block font-body-sm text-body-sm text-on-surface-variant">Canchas Centrales</span>
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-primary">
                      9.8
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-primary">
                      9.5
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-on-surface-variant">
                      9.6
                    </td>
                    <td className="py-space-md px-space-sm text-center font-bold text-primary bg-surface-container/30">
                      9.6
                    </td>
                    <td className="py-space-md px-space-md">
                      <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-label-sm text-label-sm font-bold">Sobresaliente</span>
                    </td>
                    <td className="py-space-md px-space-lg">
                      <p className="font-body-sm text-body-sm text-on-surface leading-snug">
                        Excelente resistencia aeróbica y apego al reglamento
                        deportivo institucional.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="px-space-lg py-3 bg-surface-container-low flex flex-col sm:flex-row items-center justify-between text-on-surface-variant font-label-sm text-label-sm gap-2">
              <div className="flex items-center gap-4">
                <span>* Calificaciones del 3er Trimestre corresponden a evaluación
                  parcial preliminar sujeta a cierre administrativo.</span>
              </div>
              <span className="font-mono text-primary font-semibold">FOLIO-SEP: VZ-70-2024-T2-9842</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
            
            <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-space-md">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Validez y Firma Digital</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Boleta de Evaluación SEP (Oficial)
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    Vigente 2024-2025
                  </span>
                </div>
              </div>
              
              <div className="bg-surface-container-low/70 rounded-xl p-space-md relative overflow-hidden my-space-sm shadow-inner">
                
                <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                  <span className="material-symbols-outlined text-[240px]">shield</span>
                </div>
                <div className="relative z-10 flex flex-col gap-space-md">
                  
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-primary text-on-primary flex items-center justify-center font-bold">
                        <span className="material-symbols-outlined text-[20px]">school</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm font-bold uppercase text-primary">Secretaría de Educación Pública · Veracruz</span>
                        <span className="font-title-sm text-title-sm font-bold text-on-surface">Escuela Secundaria Técnica Industrial No. 70</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant font-mono">CCT: 30DST0070Z · Turno Matutino</span>
                      </div>
                    </div>
                    
                    <div className="bg-surface-container-lowest p-1.5 rounded shadow-sm flex flex-col items-center">
                      <svg className="w-16 h-16 text-primary" fill="currentColor" viewbox="0 0 100 100">
                        <rect height="26" rx="2" width="26" x="5" y="5"></rect>
                        <rect fill="#fff" height="16" width="16" x="10" y="10"></rect>
                        <rect height="8" width="8" x="14" y="14"></rect>
                        <rect height="26" rx="2" width="26" x="69" y="5"></rect>
                        <rect fill="#fff" height="16" width="16" x="74" y="10"></rect>
                        <rect height="8" width="8" x="78" y="14"></rect>
                        <rect height="26" rx="2" width="26" x="5" y="69"></rect>
                        <rect fill="#fff" height="16" width="16" x="10" y="74"></rect>
                        <rect height="8" width="8" x="14" y="78"></rect>
                        <rect height="20" width="6" x="38" y="10"></rect>
                        <rect height="6" width="12" x="48" y="5"></rect>
                        <rect height="18" width="8" x="48" y="18"></rect>
                        <rect height="8" width="18" x="10" y="38"></rect>
                        <rect height="24" width="24" x="38" y="42"></rect>
                        <rect height="6" width="14" x="68" y="40"></rect>
                        <rect height="6" width="26" x="68" y="54"></rect>
                        <rect height="22" width="8" x="70" y="70"></rect>
                        <rect height="16" width="10" x="85" y="75"></rect>
                        <rect height="8" width="18" x="40" y="74"></rect>
                      </svg>
                      <span className="font-label-sm text-[8px] text-on-surface-variant font-mono uppercase mt-0.5">SAT/SEP V70</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-2 bg-surface-container-lowest/80 rounded-lg p-space-sm">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Sello Digital de Autenticación DGEST</span>
                      <span className="font-mono text-label-sm text-primary truncate">SHA256: 48f9e120bc71a82e90c5fa41893de37</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Firmado por: Mtra. Rosalía Carvajal P.
                        (Directora)</span>
                    </div>
                    <div className="flex flex-col sm:text-right">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Cadena Original de Certificación</span>
                      <span className="font-mono text-label-sm text-primary">||30DST0070Z|2024|2B|DANIELA_ALVAREZ||</span>
                      <span className="font-body-sm text-body-sm text-secondary font-semibold mt-0.5">Cotejo válido ante el portal mi.sev.gob.mx</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md mt-space-md pt-space-sm">
                <div className="flex items-center gap-2">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Ciclos Anteriores:</span>
                  <button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors cursor-pointer" type="button">
                    1° Grado (2023-2024) · Prom: 9.7
                  </button>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a onClick={(e) => { e.preventDefault(); setModalBoleta(true); }} className="flex-1 sm:flex-initial px-space-md py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-sm transition-all duration-150 cursor-pointer" href="#">
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    <span>Descargar Boleta Oficial SEP (PDF)</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-space-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[22px]">contact_support</span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Asesorías y Acompañamiento
                    </h3>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold uppercase">Soporte Escolar</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                  El plantel ofrece espacios de reforzamiento académico sin
                  costo para alumnos de segundo grado.
                </p>
                
                <div className="flex flex-col gap-space-sm">
                  
                  <div className="p-space-sm rounded-lg bg-surface-container-low flex items-start justify-between gap-space-sm">
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded bg-secondary-container/20 text-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[18px]">science</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-title-sm text-title-sm font-semibold text-on-surface">Asesoría de Física (Vectores y Leyes de Newton)</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Martes y Jueves · 13:40 a 14:30 hrs · Aula 12</span>
                        <span className="font-label-sm text-label-sm text-secondary font-bold mt-0.5">Sugerido por Ing. Roberto Bañuelos</span>
                      </div>
                    </div>
                    <button onClick={() => openCita("Asesoría de Física (Vectores y Leyes de Newton)", "Ing. Roberto Bañuelos")} className="px-2.5 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary-container transition-colors cursor-pointer flex-shrink-0" type="button">
                      Registrar
                    </button>
                  </div>
                  
                  <div className="p-space-sm rounded-lg bg-surface-container-low flex items-start justify-between gap-space-sm">
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded bg-surface-container text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[18px]">functions</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-title-sm text-title-sm font-semibold text-on-surface">Club Sabatino de Matemáticas y Álgebra</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Sábados · 08:30 a 10:30 hrs · Biblioteca
                          General</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Opcional para concurso estatal</span>
                      </div>
                    </div>
                    <button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors cursor-pointer flex-shrink-0" type="button">
                      Informes
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-space-md p-space-md rounded-lg bg-primary-container text-on-primary flex flex-col sm:flex-row items-center justify-between gap-space-sm shadow-sm">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-[20px]">handshake</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-sm text-title-sm font-bold text-on-primary">Entrevista con Tutora de Grupo</span>
                    <span className="font-body-sm text-body-sm text-on-primary-container">Mtra. Elena Saldaña · Citas presenciales o remotas</span>
                  </div>
                </div>
                <button onClick={() => openCita("Entrevista con Tutora de Grupo", "Mtra. Elena Saldaña")} className="w-full sm:w-auto px-space-md py-2 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md font-bold transition-all cursor-pointer" type="button">
                  Solicitar Cita
                </button>
              </div>
            </div>
          </div>
          
          {modalBoleta && (
          <div className="fixed inset-0 z-50 bg-primary/60 backdrop-blur-sm flex items-center justify-center p-4" id="modal-boleta">
            <div className="bg-surface-container-lowest rounded-xl max-w-lg w-full p-space-lg shadow-xl relative animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-space-sm mb-space-md">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[24px]">verified</span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Certificado Digital de Validez SEP
                  </h4>
                </div>
                <button onClick={() => setModalBoleta(false)} className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container cursor-pointer" type="button">
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
              <div className="flex flex-col gap-space-md text-body-sm text-on-surface">
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Este documento cuenta con cadena digital criptográfica emitida
                  por la Dirección General de Educación Secundaria Técnica de la
                  Secretaría de Educación de Veracruz.
                </p>
                <div className="p-space-md rounded-lg bg-surface-container-low font-mono text-label-sm text-on-surface flex flex-col gap-2">
                  <div>
                    <span className="text-on-surface-variant">ALUMNO:</span> ÁLVAREZ
                    RAMÍREZ DANIELA
                  </div>
                  <div>
                    <span className="text-on-surface-variant">CURP:</span>
                    AARD090518HVZRL08
                  </div>
                  <div>
                    <span className="text-on-surface-variant">CCT:</span> 30DST0070Z
                    (ESTIS 70)
                  </div>
                  <div>
                    <span className="text-on-surface-variant">ESTATUS DGEST:</span>
                    <span className="font-bold text-secondary">CICLO ACTIVO REGULAR - PROMEDIO 9.6</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant">ESTAMPA DE TIEMPO:</span>
                    2025-05-18T11:24:02.190 CST
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-surface-container rounded-lg">
                  <span className="material-symbols-outlined text-primary text-[24px]">lock</span>
                  <span className="font-body-sm text-body-sm text-on-surface font-medium">Validado mediante infraestructura de llave pública (PKI)
                    del Gobierno del Estado de Veracruz.</span>
                </div>
              </div>
              <div className="mt-space-lg pt-space-md flex items-center justify-end gap-space-sm">
                <button onClick={() => setModalBoleta(false)} className="px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg cursor-pointer hover:bg-primary-container" type="button">
                  Entendido
                </button>
              </div>
            </div>
          </div>
          )}
          
          {modalCita && (
          <div className="fixed inset-0 z-50 bg-primary/60 backdrop-blur-sm flex items-center justify-center p-4" id="modal-cita">
            <div className="bg-surface-container-lowest rounded-xl max-w-lg w-full p-space-lg shadow-xl relative animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-space-sm mb-space-md">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[24px]">calendar_month</span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Agendar Sesión de Seguimiento
                  </h4>
                </div>
                <button onClick={() => setModalCita(false)} className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container cursor-pointer" type="button">
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
              <form className="flex flex-col gap-space-md" id="form-cita" onSubmit={submitCita}>
                <div>
                  <label className="block font-label-sm text-label-sm uppercase font-bold text-on-surface-variant mb-1">Materia o Área</label>
                  <input className="w-full p-2.5 rounded bg-surface-container-low text-on-surface font-label-md text-label-md" id="cita-materia" value={citaMateria} readOnly="" type="text" />
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm uppercase font-bold text-on-surface-variant mb-1">Docente o Tutor Solicitado</label>
                  <input className="w-full p-2.5 rounded bg-surface-container-low text-on-surface font-label-md text-label-md" id="cita-docente" value={citaDocente} readOnly="" type="text" />
                </div>
                <div className="grid grid-cols-2 gap-space-sm">
                  <div>
                    <label className="block font-label-sm text-label-sm uppercase font-bold text-on-surface-variant mb-1">Modalidad</label>
                    <select className="w-full p-2.5 rounded bg-surface-container text-on-surface font-label-md text-label-md">
                      <option value="presencial">Presencial en Plantel</option>
                      <option value="virtual">Videollamada Google Meet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm uppercase font-bold text-on-surface-variant mb-1">Horario Preferente</label>
                    <select className="w-full p-2.5 rounded bg-surface-container text-on-surface font-label-md text-label-md">
                      <option value="salida">
                        Al salir de turno (13:40 hrs)
                      </option>
                      <option value="receso">Durante receso (10:10 hrs)</option>
                      <option value="sabado">Sábado en Asesoría</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm uppercase font-bold text-on-surface-variant mb-1">Nota o Motivo del Tutor Legal</label>
                  <textarea className="w-full p-2.5 rounded bg-surface-container text-on-surface font-body-sm text-body-sm placeholder:text-on-surface-variant/60" placeholder="Describa brevemente la duda académica o solicitud del tutor..." rows="2"></textarea>
                </div>
                <div className={`p-2.5 rounded bg-surface-container text-primary font-label-sm text-label-sm font-semibold flex items-center gap-2 ${citaSent ? "" : "hidden"}`} id="cita-alert">
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  <span>Solicitud transmitida a Prefectura y Dirección. Se
                    notificará la confirmación al correo institucional del
                    tutor.</span>
                </div>
                <div className="pt-space-sm flex items-center justify-end gap-space-sm">
                  <button onClick={() => setModalCita(false)} className="px-space-md py-2 rounded-lg bg-surface-container text-on-surface font-label-lg text-label-lg hover:bg-surface-container-high transition-colors cursor-pointer" type="button">
                    Cancelar
                  </button>
                  <button className="px-space-md py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-colors cursor-pointer" type="submit">
                    Confirmar Solicitud
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
