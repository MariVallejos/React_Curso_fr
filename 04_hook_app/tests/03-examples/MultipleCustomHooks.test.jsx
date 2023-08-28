import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');//se hace un mock completo de ese hooks
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {//ante de cada prueba, limpia cada prueba
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({ //estado del hook cuando es componenete de defecto
            data: null,
            isLoading: true,
            hasError: null
        });

    
        render( <MultipleCustomHooks /> );

        expect( screen.getByText('Loading...') );
        expect( screen.getByText('BreakingBad Quotes') );

        const nextButton = screen.getByRole('button',{ name: 'Next quote' });//cuando quiero hacer refrencia a un boton
        expect(nextButton.disabled).toBeTruthy();//el boton este desabilitado
        // screen.debug();

    });

    test('debe de mostrar un Quote', () => {

        useFetch.mockReturnValue({//simula lo q regresa
            data: [{ author: 'Fernando', quote: 'Hola Mundo' }],//new data
            isLoading: false,
            hasError: null
        });
        
        render( <MultipleCustomHooks /> );
        expect( screen.getByText('Hola Mundo') ).toBeTruthy();//q exista
        expect( screen.getByText('Fernando') ).toBeTruthy();
        
        const nextButton = screen.getByRole('button',{ name: 'Next quote' });
        expect(nextButton.disabled).toBeFalsy();//espero q no existiera
    });


    test('debe de llamar la función de incrementar', () => {

    
        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });

        
        render( <MultipleCustomHooks /> );
        const nextButton = screen.getByRole('button',{ name: 'Next quote' });//tomo referencia al boton
        fireEvent.click( nextButton ); //disparo el boton

        expect( mockIncrement ).toHaveBeenCalled();

    });

    
});