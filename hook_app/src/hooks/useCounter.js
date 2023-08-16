import { useState } from "react";

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => {
        setCounter(counter + value);
    };

    const reset = () => {
        setCounter(initialValue);

    }
    const decrement = (value = 1) => {
        if (counter === 0) return; //no hagas nada
        setCounter(counter - value);
    };


    return{
        counter,
        increment,
        reset,
        decrement

    }
}

//HOOKs

//se usa el use previo al nombre del archivo porque es un hook