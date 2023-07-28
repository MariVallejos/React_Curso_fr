import { render, screen } from "@testing-library/react";
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs'); 

describe('Pruebas en <GifGrid />', () => { 

    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => {


        useFetchGifs.mockReturnValue({ //indica como funciona ese fetch
            images: [],
            isLoading: true // simulo lo que devuelve esa funcion
        });

        render(<GifGrid category={ category } />);
        expect(screen.getByText( 'Cargando...' ));
        expect(screen.getByText( category ));


     });


     test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => { 

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
        ]


        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        }); 

        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2);//busco todas las imagenes, y que el largo del su array sea de 2

      })
 });





//NOTAS

//mock

/* jest.mock('../../src/hooks/useFetchGifs')

 *LE INDICA QUE HAGA UN MOCK COMPLETO DE ESER PATH
 
*En el parentesis del mock va el path de la ruta del hooks


*Cuando se trasbaja con data ficticio, se construye en un directorio especial que se conoce como feature.


//ALL
uso el getAllByRole porque esta esperando mas de 1. 

*/

