import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../src/auth/context/AuthContext';
import { Navbar } from '../../../src/ui/components/Navbar';

const mockedUseNavigate = jest.fn();//regresa la funcionalidad del navigate dl archivo NavBar.jsx

jest.mock('react-router-dom', () => ({//hago un mock de esa LIBRERIA
    ...jest.requireActual('react-router-dom'), //esparce todod lo q viene en la libreria y solo suscribe el useNavigate
    useNavigate: () => mockedUseNavigate,
}));


describe('Pruebas en <Navbar />', () => {

    const contextValue = { //contexto
        logged: true,
        user: {
            name: 'Juan Carlos'
        },
        logout: jest.fn() //es la funcion q debo evaluar q se llame || SI TENGO Q EVALUAR UNA FUNCION USO EL JEST.FN
    }

    beforeEach(() => jest.clearAllMocks() ); // lo limpia, LAS FUNCIONES DE JEST


    test('debe de mostrar el nombre del usuario', () => {
        
        render(
            <AuthContext.Provider value={ contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter> 
            </AuthContext.Provider>
        );
        
        expect( screen.getByText('Juan Carlos') ).toBeTruthy(); //ESO TIENE Q EXISTIR
        

    });

    test('debe de llamar el logout y navigate cuando se hace click en el botón', () => {

        render(
            <AuthContext.Provider value={ contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter> 
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button'); //tomo el boton
        fireEvent.click( logoutBtn );//disparo el boton

        expect( contextValue.logout ).toHaveBeenCalled(); //que haya sido llmado
        expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', {"replace": true})//que halla sigo llamado con esos argumentos


    });

    
});

