import { render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { HomePage } from '../../src/09-useContext/HomePage';


describe('Pruebas en <HomePage />', () => {

    const user = {//defino user
        id: 1,
        name: 'Fernando'
    }

    test('debe de mostrar el componente sin el usuario', () => {
        
        render( 
            <UserContext.Provider value={{ user: null }}>
                <HomePage /> 
            </UserContext.Provider> //usar el contexto que cree y el provider para proveer el value
        );

        const preTag = screen.getByLabelText('pre'); // aria-label
        expect( preTag.innerHTML ).toBe( 'null' );
        // screen.debug()
    });


    test('debe de mostrar el componente CON el usuario', () => {
        
        render( 
            <UserContext.Provider value={{ user }}>
                <HomePage /> 
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); // aria-label
        expect( preTag.innerHTML ).toContain( user.name );//lo que espero q sea el innerhtm
        expect( preTag.innerHTML ).toContain( `${user.id}` ); //user.id.toString() o usar las bastic porque en el preTag lo tengo coom string 
        // screen.debug()
    });
    
});



//NOTA

/* 
Un Mock en Jest es un objeto que imita la interfaz y propiedades de una función real, 
o una clase, o un módulo, o cualquier otro elemento de software, que puedes definir un comportamiento, 
almacena en memoria información sobre cómo ha sido utilizado y que sirve para propósitos de pruebas automatizadas.

Una manera de definir un mock en Jest es con jest.fn(), el cuál retorna un objeto de tipo "mock".

*/