import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const { login } = useContext( AuthContext );
  const navigate = useNavigate();

  const onLogin = () => {
    
    const lastPath = localStorage.getItem('lastPath') || '/'; // si hubo un lastPath direcciono a la pagina q quiero

    login( 'Pritty Vallejos' );
    
    navigate( lastPath, {
      replace: true //reempla el historial(q no regrese a login si ya lo paso)
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button 
        className="btn btn-primary"
        onClick={ onLogin }
      >
        Login
      </button>

    </div>
  )
}


