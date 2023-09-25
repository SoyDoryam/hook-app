import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"

export const MainApp = () => {
  return (
    <>
        <h1>MainApp</h1>
        <hr />

        {/* Definición de las rutas */}
        <Routes>
          {/* Ruta para la página de inicio */}
          <Route path="/" element={<HomePage />} />
          
          {/* Ruta para la página "Acerca de" */}
          <Route path="about" element={<AboutPage />} />
          
          {/* Ruta para la página de inicio de sesión */}
          <Route path="login" element={<LoginPage />} />

          {/* Ruta comodín para manejar rutas no reconocidas */}
          {/* En este caso, redirige a la página "Acerca de" */}
          <Route path="/*" element={<Navigate to="/about" />} />
        </Routes>
    </>
  )
}
