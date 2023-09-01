import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';


/* Mock de la libreria del navigate */
const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

/* -------------------------------- */

describe('Pruebas en <SearchPage />', () => {


    beforeEach(() => jest.clearAllMocks() ); //liampiar cualquier mock

    
    test('debe de mostrarse correactamente con valores por defecto', () => {
        
        const { container } =render(
            <MemoryRouter> {/* uso esto porque ocupo el useNavigate y el useLocation, este este lo usos para identificar en que url estoy */}
                <SearchPage />
            </MemoryRouter>
        );

        expect( container ).toMatchSnapshot();

        // screen.debug(); 
        
    });

     test('debe de mostrar a Batman y el input con el valor del queryString', () => {
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>{/* ruta ver el query */}
                <SearchPage />
            </MemoryRouter>
        );
        
        const input = screen.getByRole('textbox');//agarro el input
        expect( input.value ).toBe('batman');
        
        const img = screen.getByRole('img');
        expect( img.src ).toContain('/heroes/dc-batman.jpg');

        const alert = screen.getByLabelText('alert-danger');//arial-label
        expect( alert.style.display ).toBe('none');//espero que el estilo del display sea none
        
    });

    test('debe de mostrar un error si no se encuentra el hero (batman123)', () => {
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        );

        const alert = screen.getByLabelText('alert-danger');
        expect( alert.style.display ).toBe('');//espera que no exista el display none, este vacio
        

    });

    test('debe de llamar el navigate a la pantalla nueva', () => {
        
        const inputValue = 'superman';

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');//tengo acceso al input
        fireEvent.change( input, { target: { name: 'searchText', value: inputValue }}) //lleno el valor, osea el input
        
        
        const form = screen.getByRole('form'); //tomo el form || no olvidar en el form poner el arial-label
        fireEvent.submit( form );
        
        expect( mockedUseNavigate ).toHaveBeenCalledWith(`?q=${ inputValue }`) //que haya sido llamado con ese argumento

    }); 


});