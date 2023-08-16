import { useState } from "react";
import { useCounter } from "../hooks"; //traigo hook 
import { Small } from "./Small";


export const Memorize = () => {

  const { counter, increment } = useCounter(10);//de ese hook me interesa counter e increment y de valor inicial 10

  const [show, setShow] = useState(true);

  

  return (
    <>
      <h1>Counter: <Small value={counter} /> </h1>
      <hr />

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

//(*)

/*
 onClick={ increment} asi no

  onClick={() => increment()}  lo mando a llmar de esa forma a la funcion porque se le esta mandando un argumento


*/


//(**) 

/* 
{JSON.stringify(show)} uso el JSON.stringify, porque es un valor booleano y no lo puedo visualizar en js
*/


//MEMO 

/*
memoriza tal componenete, solo cuando laas prop cambien
Solo se usa cuando es necesario, cuando los componentes son muy grandes o hay procedimiento pesado */