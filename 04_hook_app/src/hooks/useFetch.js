import { useEffect, useState } from "react";

export const useFetch = (url) => {
    

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    const getFetch = async() => {

        setState({  //si vuelvo a llamar el getFetch, cambio el isLoading
            ...setState,
            isLoading: true
        });

        const resp = await fetch(url);
        const data = await resp.json();

        setState({                    //  (**) 
            data, //data:data
            isLoading:false,
            hasError:null
        });
    }
  
    useEffect(() => {
        getFetch()
    }, [url])


    return { //(*)
        data:       state.data,
        isLoading:  state.isLoading,
        hasError:   state.hasError
    }; 
    
}


//Los useEfect esperan funcionan puras no promesas!



//(*)  El return del hook es importante, se suele visualizarlo
//Normalmente podria solo retornar el state. Pero si mas adelante quiero espandir conviene mandarlo como se realiza: 
        /* data:       state.data,
        isLoading:  state.isLoading,
        hasError:   state.hasError
 */



//  (**) El estado se actualiza como tal, si es objeto como objeto 