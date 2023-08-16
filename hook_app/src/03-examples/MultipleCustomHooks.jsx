
import { useFetch, useCounter } from '../hooks/index';
import { LoadingQuote, Quote } from './index';


export const MultipleCustomHooks = () => {

    const { counter, increment, decrement } = useCounter(1); //(****)

    const { data, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);//hooks useData

    const { author, quote } = !!data && data[0]; // (***)


    return (
        <>
            <h2>BreakingBad Quotes</h2>
            <hr />

            {
                isLoading
                    ? <LoadingQuote />
                    : <Quote author={author} quote={quote} />
            }

            <button
                className="btn btn-danger"
                disabled={isLoading}
                onClick={() => decrement()} >
                Previous quote
            </button>

            <button
                className="btn btn-primary"
                disabled={isLoading}
                onClick={() => increment()} > {/* (*5) */}
                Next quote
            </button>
        </>
    )
}


//NOTA


// (***)

/* Como la data devuelve un ARRAY y no un OBJETO debo DESESTRUCTURAR de tal manera:

const {author, quote}= !!data && data[0]       ====> Si la data (TRUE) tiene un valor entonces toma la data en la posicion 0

*/


//(****)

// pongo como valor 1 porque inicialmente tengo el 1 en la url

// (*5)

/* llamo a la funcio asi () => increment() y
no asi increment porque la funcione recibe un argumento en este vaso value= 1 */


//Tarea opcional: realizar buscador busca por id
//boton de previo