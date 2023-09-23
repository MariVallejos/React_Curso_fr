import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar';


export const AppRouter = () => {

    const authStatus = 'authenticated'; // 'authenticated'; // 'not-authenticated'; 


    return (
        <Routes>
            {
                ( authStatus === 'not-authenticated')  
                    ? <Route path="/auth/*" element={ <LoginPage /> } />//cualquier ruta q entre al / va entrar al elemento de login
                    : <Route path="/*" element={ <CalendarPage /> } />
            }

            <Route path="/*" element={ <Navigate to="/auth/login" /> } />
        </Routes>
    )
}

//NOTA

// manejo de rutas principales y este appRouter lo renderizo en el calendarAPP

//rutas privadas y publicas se manejo en la anterior session de JournalApp