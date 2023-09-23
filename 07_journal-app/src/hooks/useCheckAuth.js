import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';
import { startLoadingNotes } from '../store/journal';


export const useCheckAuth = () => {
  
    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    useEffect(() => {//revisa si la persona esta autenticada 
        
        onAuthStateChanged( FirebaseAuth, async( user ) => {//onAuthStateChanged permite saber cuando el estado de la autenticacion cambia
        if ( !user ) return dispatch( logout() );//si no hay usuario no haga nada, y mando a llamar el logout

        const { uid, email, displayName, photoURL } = user;
        dispatch( login({ uid, email, displayName, photoURL }) ); //y si tengo un usuario mando a llamar el dispatch login
        dispatch( startLoadingNotes() );
        })
    }, []);

    return status;
}