import { render, screen } from "@testing-library/react"
import { GitItem } from "../../src/components/GitItem"

describe('Pruebas en <GifItem />', () => { 
    
    const title = 'cat';
    const url = 'https://cat/michis.jpg'

    test('debe de hacer match en el snapshot', () => { 
        const {container} = render( <GitItem title={title} url={url}/> )
        expect(container).toMatchSnapshot();//pruebadel snapshop
     });


     test('debe de mostrar la imagen con el URL y el ALT indicado', () => { 

        render( <GitItem title={title} url={url}/> )
        //screen.debug(); 

        //expect(screen.getByRole('img').src).toBe(url);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
      });


      test('debe de mostrar el titulo en el componente', () => { 

        render( <GitItem title={title} url={url}/> ) //sujeto de prueba a renderizar
        expect(screen.getByText(title)).toBeTruthy()
        
       })

 });


 //NOTA

// Snapshot
/* La tecla U sctualiza el snapshop */

////screen.debug();
/* Simil a usar CONSOLE.LOG() */

//getByRole
/* buscar por rol de aria */

//toBeTruthy
/* Busca existencia */

//HOJA DE TRUCOS
/* https://testing-library.com/docs/react-testing-library/cheatsheet/ */