import { loginWithEmailPassword, registerUserWithEmailPassword, singInWithGoogle, logoutFirebase } from '../../firebase/providers';
import { clearNotesLogout } from '../journal';
import { checkingCredentials, logout, login } from './';

export const checkingAuthentication = () => {
    return async (dispatch) => {

        dispatch(checkingCredentials()); // hago un dispatch de una accion que me permita a mi poner mi aplicacion en un estado de loading
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result = await singInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result))
    }
}


export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result = await registerUserWithEmailPassword({ email, password, displayName });
        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result))

    }

}


export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result = await loginWithEmailPassword({ email, password });
        console.log(result);

        if (!result.ok) return dispatch(logout(result));
        dispatch(login(result));

    }
}


export const startLogout = () => {
    return async (dispatch) => {

        await logoutFirebase();
        dispatch( clearNotesLogout() );
        dispatch(logout());

    }
}






//NOTA

//thunks
/* Los thunks son acciones que yo puedo despechar ( hacer dispatch) pero esas acciones internamente tienen una tarea asincrona
si son sincronas los haces directamente con los reducers!!!
*/


/* export const checkingAuthentication = (email,password) => {
    return async( dispatch ) => {

      dispatch( checkingCredentials() );
        
    }

    "dispatch dentro de otro jaja"
    Hago el dispatch de esta accion checkingAuthentication y
     esa accion tiene que hacer el llamado a la accion checkingCredentials del authSlice.js
} */