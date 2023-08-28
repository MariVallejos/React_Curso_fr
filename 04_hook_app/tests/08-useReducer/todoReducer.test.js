import { todoReducer } from '../../src/08-useReducer/todoReducer';



describe('Pruebas en todoReducer', () => {
    
    const initialState = [{//creo elinitial stade
        id: 1,
        description: 'Demo Todo',
        done: false,
    }];


    test('debe de regresar el estado inicial', () => {
        
        const newState = todoReducer( initialState, {});//sujeto de prueba
        expect( newState ).toBe( initialState );//evalua que sea el mismo objeto

    });

    test('debe de agregar un todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {//el new todo
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        };

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );//el arreglo tiene q contener el payload
        
    });

    test('debe de eliminar un TODO', () => {
        
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1//id del todo a borrar
        };

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 0 );

    });

    test('debe de realizar el Toggle del todo ', () => {
        
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action );
        expect( newState[0].done ).toBe( true );
        
        const newState2 = todoReducer( newState, action );
        expect( newState2[0].done ).toBe( false );//espero que el punto done de ese true sea false

    });


});