import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

import { types } from '../types/types';

// const initialState = {
//     logged: false,
// }

const init = () => {//initial se la utuliza para inicialoizar el estado
  const user = JSON.parse( localStorage.getItem('user') );//lectura del localStor

  return {
    logged: !!user, //user existe
    user: user,
  }
}


export const AuthProvider = ({ children }) => {
    
  const [ authState, dispatch ] = useReducer( authReducer, {}, init ); //hago uso del reducers |  {state, dispatch} desestructuro esos datos

  const login = ( name = '' ) => {//pongo '' solo para saber q es un strintg

    const user = { id: 'ABC', name }
    const action = { type: types.login, payload: user }

    localStorage.setItem('user', JSON.stringify( user ) ); //llamo el localS y como solo puedo llamar string lo stringify

    dispatch(action);//la accion la llamo en el dispatch
  }

  const logout = () => {
    localStorage.removeItem('user');//elimino el user
    const action = { type: types.logout };
    dispatch(action);
  }


  return (
    <AuthContext.Provider value={{
      ...authState, //todo el estado del mismo

      // Methods
      login,
      logout,
    }}>
        { children }
    </AuthContext.Provider>
  );
}