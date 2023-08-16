import { useState } from "react";
import { UserContext } from "./UserContext";


// const user = {
//     id: 123,
//     name: 'Fernando Herrera',
//     email: 'fernando@google.com'
// }



export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

    return (
        // <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}


/* Estos componentes especiales, aparte de recibir las props tambien reciben el children */

/* 
UserContext.Provider

Proveo toda la informacion que el userCont va a proveer al arbol de los componenetes
*/