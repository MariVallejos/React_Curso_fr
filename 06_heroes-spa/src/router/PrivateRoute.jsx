import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../auth';


export const PrivateRoute = ({ children }) => {//recibo los componentes que van a estar dentro del route

    const { logged } = useContext( AuthContext ); 
    const { pathname, search } = useLocation();//desestructuro sus parametros
    
    const lastPath = pathname + search; // url + q=lola
    localStorage.setItem('lastPath', lastPath );
    

    return (logged)
        ? children //si esta auth, mando los hijos 
        : <Navigate to="/login" /> //sino saco al usuario
}