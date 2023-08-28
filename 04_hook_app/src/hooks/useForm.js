import { useState } from "react";


export const useForm = (initialForm= {}) => { //creo el custom hooks

    const [formState, setFormState] = useState(initialForm);
   
    const onInputChange = ({target}) =>{
        const { name, value } = target 
        setFormState({
            ...formState, 
            [name]:value 
        })
    };

    const onResetForm = () => {
        setFormState(initialForm)
    }

    return{
        ...formState, //me traigo todos los valores del formulario
        onInputChange, //funcion para cambiarlo
        onResetForm
       
    }
}



/* export const useForm = (*) => { // (*) aca va el valor inicial
  return (
   //retorono aquello que quiero devolver para usar 
  )
}
 */