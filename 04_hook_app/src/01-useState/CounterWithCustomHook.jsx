import { useCounter } from '../hooks/useCounter';


export const CounterWithCustomHook = () => {

//Creo mi propio custom hooks para manejar los counters useCounter

const {counter, increment,reset, decrement} = useCounter();//desestructuro la funciones de x

  return (
    <>
    <h2>Counter With CustomHook: {counter}</h2>
    <hr />

    <button onClick={() => increment(2)}  className="btn btn-outline-success">+1</button>
    <button onClick={reset} className="btn btn-outline-primary">reset</button>
    <button onClick={() => decrement(2)} className="btn btn-outline-danger">-1</button>
    
    </>
  )
}
