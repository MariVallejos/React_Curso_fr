import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en getGifs()', () => { 

    test('debe de retornar un arreglo de gifs', async() => { 

        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),//espera cualquier string
            title: expect.any(String),//evaluo object
            url: expect.any(String),
        });

     });
 });

 //NOTA 

 //docs/expect
 /* https://jestjs.io/docs/expect */

 //toBeGreaterThan
 /* Úselo toBeGreaterThanOrEqualpara comparar números
  o valores enteros grandes.  */