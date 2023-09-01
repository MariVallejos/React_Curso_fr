import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { AuthContext } from '../../src/auth';
import { PublicRoute } from '../../src/router/PublicRoute';


describe('Pruebas en <PublicRoute />', () => {

    test('debe de mostrar el children si no está autenticado', () => {

        const contextValue = {
            logged: false //el estado en el q estoy actualmente
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta pública')).toBeTruthy();//pregunto q exiasata esa ruta publica, haciendo referencia al H1

    });

    //Pruebas cuando se hace uso del NAVIGATE
    test('debe de navegar si está autenticado', () => {


        const contextValue = {
            logged: true,
            user: {
                name: 'Strider',
                id: 'ABC123'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}> {/* PARA HACER USO DEL NAVIGATE || RUTA EN LA Q ME ENCUENTO */}

                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta pública</h1>
                            </PublicRoute>
                        } />
                        <Route path='marvel' element={<h1>Página Marvel</h1>} />
                    </Routes>


                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Página Marvel')).toBeTruthy();//LA ACERCION.. estamos en una ruta y evaluo q algo de esa ruta aparezca 


    })

});