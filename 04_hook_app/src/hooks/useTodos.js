import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => { //carga lo todos //funcion de inicializacion
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))//establezco los 'elementos' y solo puedo grabar string


  }, [todos])


  const handleNewTodo = (todo) => {//este es el payload que quiero mandar al action
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }//esta la es la accion que quiero enviar y lo hago con el dispatch

    dispatch(action); //despacho la accion para q vaya al reducer
  };


  const handleDeleteTodo = (id) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id
    })

  };


  const handleToggleTodo = (id) => {
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id
    })

  }


  return {
    todos,

    todosCount: todos.length, //obtengo el valor actualizado de cuantos todos necesito
    pendingTodosCount: todos.filter(todo=> !todo.done).length, 

    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  }
   
  
}
