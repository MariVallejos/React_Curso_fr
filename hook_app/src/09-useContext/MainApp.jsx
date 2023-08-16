import { Navigate, Route, Routes } from "react-router-dom"
import { AboutPage } from "./AboutPage"
import { UserProvider } from "./context/UserProvider"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { Navbar } from "./Navbar"

export const MainApp = () => {
    return (
        <UserProvider>
            <h1>MainApp</h1>
            <Navbar/>
            <hr />

            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="about" element={<AboutPage/>} />
                <Route path="login" element={<LoginPage/>} />

                {/* <Route path="/*" element={ <LoginPage /> } /> */} 
                <Route path="/*" element={<Navigate to="/about" />} />

            </Routes>

        </UserProvider>
    )
}


//NOTA

//*  Si la ruta no existe te direcciona a la pagina indicada 

//UserProvider
/* Cualquier elemento dentro del userP va poder acceder a la informacion del value q es un objeto */