
import { useFetch, useCounter } from '../hooks/';
import { LoadingQuote, Quote } from '../03-examples/';


export const Layout = () => {

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


