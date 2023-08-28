import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/hooks/useTodos';


jest.mock('../../src/hooks/useTodos')//hago el mock completo del useTodos


describe('Pruebas en <TodoApp />', () => {

    useTodos.mockReturnValue({//es el resultado cuando se llamo el hook, con el resultado que yo quiero q tenga
        todos: [
            { id: 1, description: 'Todo #1', done: false },
            { id: 2, description: 'Todo #2', done: true },
        ], 
        todosCount: 2, 
        pendingTodosCount: 1, 
        handleDeleteTodo: jest.fn(), //va ser una funcion
        handleToggleTodo: jest.fn(), 
        handleNewTodo: jest.fn()
    });


    test('debe de mostrar el componente correctamente', () => {
        
        render( <TodoApp /> );
        // screen.debug();
        expect( screen.getByText('Todo #1') ).toBeTruthy();//que exiSTA
        expect( screen.getByText('Todo #2') ).toBeTruthy();
        expect( screen.getByRole('textbox') ).toBeTruthy();

    });

    
});