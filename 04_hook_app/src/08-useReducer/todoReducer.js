// { type: [todo remove], payload: id }

export const todoReducer = ( initialState = [], action ) => {


    switch ( action.type ) {
        case '[TODO] Add Todo'://caso de eso
            return [ ...initialState, action.payload ];//esto regresa como new state

        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload );//regresa un nuevo arreglo . No muta (*)

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {

                if ( todo.id === action.payload ) {// id
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } 

                return todo;
            });
    
        default:
            return initialState;
    }


}

//NOTSA

//(*)

/* Regresa todos los todos, siempre y cuando el todo.id sea diferente del todo id que reciba */