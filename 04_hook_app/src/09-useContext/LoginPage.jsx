import { useContext } from "react";
import { UserContext } from "./context/UserContext";


export const LoginPage = () => {

  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre aria-label="pre">
        {JSON.stringify(user, null, 3)}
      </pre>


      <button
        className="btn btn-primary"
        onClick={() => setUser({ id: 123, name: 'Juan', email: 'juan@google.com' })}
      >
        Establecer usuario
      </button>

    </>
  )
}

/*  
  const { user, setUser } = useContext(UserContext);

  (UserContext) entre () le difo a react que busque algo de userContext
*/


/* 
//JSON.stringify ==> porque no puedo colocar un objeto  directamente 
*/

