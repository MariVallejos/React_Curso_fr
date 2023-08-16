import { useState } from "react"

export const CounterApp = () => {

  const [state, setCounter] = useState({
    counter1: 10,
    counter2:20,
    counter3:30
  });

const {counter1, counter2, counter3} = state; //desestructuro

  return (
    <>
        <h1>Counter: {counter1}</h1>
        <h2>Counter: {counter2}</h2>
        <h2>Counter: {counter3}</h2>

        <hr/>

        <button
        
         className="btn btn-dark"
        onClick={
          () => setCounter({
            ...state,
            counter1: counter1 + 1
          })
            }>+1</button>
      
    
    </>
  )
}

//Tarea
//Incremento de counter 1 y no de los otros counter

//NOTA
/* 
En el useState, no solo maneja val primitivos, 
puede manejar instancias de clases, objetos, lo que se necesite manejar en el estado */

