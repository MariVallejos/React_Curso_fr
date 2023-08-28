import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();


     const onclick = () => {
        inputRef.current.select();   // (**)
     }

    return (
        <>
            <h1>FocusScreen</h1>
            <hr />

            <input
            ref={inputRef} // (*)
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
            />

            <button onClick={onclick} className="btn btn-primary mt-2"> 
                Set focus
            </button>
        </>
    )
}


//NOTA 

/* Nos perm,ite mantener una referencia. 
Y cuando esdea referencia cambie no dispare una rerenderrizacion del componenete */

 // (*)

 /* el inputRef va a enviar el html element , hace referencia ese especifico element*/

  // (**)

 /* hace referencia  al valor actual*/
 
