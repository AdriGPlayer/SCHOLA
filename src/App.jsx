import { Routes, Route, Navigate } from "react-router-dom";

import Portal from "./pages/Portal.jsx";
import Placeholder from "./components/Placeholder.jsx";

import JanoLayout from "./layouts/JanoLayout.jsx";
import Monitor from "./pages/jano/Monitor.jsx";
import Bitacora from "./pages/jano/Bitacora.jsx";
import Puntaje from "./pages/jano/Puntaje.jsx";
import Reporte from "./pages/jano/Reporte.jsx";

import JupiterLayout from "./layouts/JupiterLayout.jsx";
import Alumnos from "./pages/jupiter/Alumnos.jsx";
import Docentes from "./pages/jupiter/Docentes.jsx";
import Estructura from "./pages/jupiter/Estructura.jsx";
import JupiterHorario from "./pages/jupiter/Horario.jsx";

import MercuriLayout from "./layouts/MercuriLayout.jsx";
import Social from "./pages/mercuri/Social.jsx";
import MercurioHorario from "./pages/mercuri/Horario.jsx";
import Tareas from "./pages/mercuri/Tareas.jsx";
import Citas from "./pages/mercuri/Citas.jsx";
import Clubes from "./pages/mercuri/Clubes.jsx";
import Perfil from "./pages/mercuri/Perfil.jsx";

import JunoLayout from "./layouts/JunoLayout.jsx";
import Avisos from "./pages/juno/Avisos.jsx";
import Asistencia from "./pages/juno/Asistencia.jsx";
import Kardex from "./pages/juno/Kardex.jsx";
import Finanza from "./pages/juno/Finanza.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portal />} />

      <Route path="/jano" element={<JanoLayout />}>
        <Route index element={<Navigate to="monitor" replace />} />
        <Route
          path="resumen"
          element={<Placeholder title="Resumen y Monitor en Vivo" />}
        />
        <Route path="monitor" element={<Monitor />} />
        <Route path="bitacora" element={<Bitacora />} />
        <Route path="puntaje" element={<Puntaje />} />
        <Route path="citatorios" element={<Reporte />} />
        <Route path="reporte" element={<Reporte />} />
        <Route
          path="torniquetes"
          element={<Placeholder title="Torniquetes y Retardos" />}
        />
      </Route>

      <Route path="/jupiter" element={<JupiterLayout />}>
        <Route index element={<Navigate to="alumnos" replace />} />
        <Route
          path="resumen"
          element={<Placeholder title="Resumen General · JÚPITER" />}
        />
        <Route path="alumnos" element={<Alumnos />} />
        <Route path="docentes" element={<Docentes />} />
        <Route path="estructura" element={<Estructura />} />
        <Route path="horario" element={<JupiterHorario />} />
        <Route path="horarios" element={<JupiterHorario />} />
        <Route
          path="parametros"
          element={<Placeholder title="Parámetros y Ciclo Escolar" />}
        />
      </Route>

      <Route path="/mercurio" element={<MercuriLayout />}>
        <Route index element={<Navigate to="social" replace />} />
        <Route path="social" element={<Social />} />
        <Route path="horario" element={<MercurioHorario />} />
        <Route path="tareas" element={<Tareas />} />
        <Route path="citas" element={<Citas />} />
        <Route path="clubes" element={<Clubes />} />
        <Route path="perfil" element={<Perfil />} />
      </Route>

      <Route path="/juno" element={<JunoLayout />}>
        <Route index element={<Navigate to="avisos" replace />} />
        <Route
          path="dashboard"
          element={<Placeholder title="Resumen General · JUNO" />}
        />
        <Route path="avisos" element={<Avisos />} />
        <Route path="asistencia" element={<Asistencia />} />
        <Route path="kardex" element={<Kardex />} />
        <Route
          path="citatorios"
          element={<Placeholder title="Citatorios y Firmas" />}
        />
        <Route path="finanza" element={<Finanza />} />
        <Route
          path="docentes"
          element={<Placeholder title="Docentes y Prefectura" />}
        />
        <Route
          path="perfil"
          element={<Placeholder title="Perfil y Credencial" />}
        />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
