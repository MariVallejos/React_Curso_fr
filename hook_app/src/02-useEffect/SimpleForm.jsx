import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username:'strider',
        email:'fernando@google.com'

    });

    const {username, email} = formState;
   
    const onInputChange = ({target}) =>{//del evento desestructuro el target
        const { name, value } = target //y del target desestrucuturo name y email ||||  simil:  e.target.value
        setFormState({
            ...formState, //mantengo todos los valores del form
            [name]:value // * []
        })

    };


    useEffect(() => {
      console.log('useEffet called!!!');
    }, [] ); //quiero que solo se ejecute una vez

    useEffect(() => {
        //console.log('el formState change');
      }, [formState] );

      useEffect(() => {
       // console.log('el email change');
      }, [email] );


  return (
    <>
    <h1>Formulario Simple</h1>
    <hr />

    <input 
     type="text"
     className="form-control"
     placeholder="Username"
     name="username"
     value={ username }
     onChange={onInputChange}
      />

    <input 
     type="email"
     className="form-control mt-2"
     placeholder="fernando@google.com"
     name="email"
     value={ email }
     onChange={onInputChange}
      />

    {
        (username === 'strider2') && <Message/> //si se cumple la condicion mostrame el message
    }


      
    </>
  )
}


//NOTA

// * []
/* En js existen las propiedades computadas de los objetos.
Colocando entre llaves cuadras [],
 voy a decir que la propiedad name es la que voy a establecer en el objeto
y el valor va ser igual al nuevo value
*/

//useEffect 
/* dispara efectos segundarios
simple funcion que internamente tiene un callback 
Cada vez que el use effect se dispare se efectuta el log.


 Cada vez que el form es redibujado el useEffect es disparado!!! Para esto se usan las dependencia el segundo valor 

*/


//Dependencias del useEffect

// [] se renderiza cuando el componente es renderizado la primera vez, una unica vez.
// un arreglo vacio : quiero que solo se ejecute una vez


