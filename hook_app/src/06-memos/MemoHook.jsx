import { useMemo, useState } from "react";
import { useCounter } from "../hooks"; //traigo hook 


const heavyStuff = ( iterationNumber = 100 ) => {
  for( let i = 0; i < iterationNumber; i++ ) {
      console.log('Ahí vamos...');
  }

  return `${ iterationNumber } iteraciones realizadas`;
}



export const MemoHook = () => {

  const { counter, increment } = useCounter(4000);

  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() =>  heavyStuff(counter), [counter]);


  return (
    <>
      <h1>Counter: <small>{counter}</small></h1>
      <hr />

      <h4>{ memorizedValue }</h4>

      <button
        className="btn btn-primary"
        onClick={() => increment()}//(*)
      >
        +1
      </button>

      <button
      className="btn btn-outline-primary"
      onClick={ () => setShow( !show )  }
      >
        Show/Hide {JSON.stringify(show)} {/* (**) */}
      </button>
    </>
  )
}



//NOTA

///USEMEMO

/* El useMemo() memoriza un valor , y se ejecuta solo y solo si la dependencia cambia 


 useMemo(() => first, [dependecia]);

 Recomendable cuando son tareas pesadas y si se lo puedo memorizar despues d ela prima vez
 
*/
