import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../src/09-useContext/MainApp';


describe('Pruebas en <MainApp />', () => {
    
    test('debe de mostrar el HomePage', () => {
        
        render( 
            <MemoryRouter> {/* Como esta dentro del browserRouter, lo proveo con el MemoryRouter */}
                <MainApp /> 
            </MemoryRouter>
        );

        expect( screen.getByText('HomePage') ).toBeTruthy();//que exista
        // screen.debug()

    });

    test('debe de mostrar el LoginPage', () => {
        
        render( 
            <MemoryRouter initialEntries={['/login']}>{/* El initialE... espera un arreglo u objeto donde le paso el sgmento donde me encuentre */}
                <MainApp /> 
            </MemoryRouter>
        );

        expect( screen.getByText('LoginPage') ).toBeTruthy();
        // screen.debug()

    });

});