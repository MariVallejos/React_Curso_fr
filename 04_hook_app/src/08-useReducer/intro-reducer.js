const initialState = [{
    id: 1,
    todo: 'recolectar la piedra del alma',
    done: false
}];


const todoReducer = ( state = initialState,  action = {} ) => { // action = {} al inicio lo mando como objeto vacio
    if ( action.type === '[TODO] add todo' ){
        return [ ...state, action.payload ];
    }
    return state;
};




let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'recolectar la piedra del poder',
    done: false
}

const addTodoAction = {
    type: '[TODO] add todo', //la accion es esta 
    payload: newTodo, //la carga que esta en la accion ( y esto lo que va dentro de la accion) 
}


todos = todoReducer( todos, addTodoAction );

console.log({state: todos})






//NOTA

/* 

const todoReducer = ( state , action) => {

}

action = la accion le va a decir al todoReducer, como quiero que cambie el estado

!!!! Si quiero hacer una modificacion al reducer , le tengo que mandar una action. 
Y esa accion le va a decir como modificar!!!


*/


//reducer

//1 tengo un estado inical
//2 ese eatado inicial se lo mando al reducer
//3 el reducer, en todo momento debe de saber cual es el estado anterior(estado inicial) y la accion
//4 Si de desea añador algo, se manda una accion al reducer. Esa accion se encarga de regresar un nuevo estado



//EL REDUCER LO QUE TIENE QUE HACER ES PRODUCIR UN NUEVO ESTADO, BASADO EN LA ACCION QUE RECIBIO!!!


