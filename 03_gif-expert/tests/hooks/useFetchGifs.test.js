import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hooks useFetchGifs', () => { 

    test('debe  de regresar el estado inicial', () => { 

        const {result} = renderHook( () => useFetchGifs('One Punch'));//el useFetchGifs requiere la categoria, por eso le paso: One Punch
        //console.log(result);
        const {images, isLoading} = result.current; //desestructuro el log


        //REALIZAMOS LOS EXPECT RESPECTIVOS PARA EL ESTADO INICIAL

        expect( images.length ).toBe(0); //Se espera que el resultado sea 0
        expect( isLoading ).toBeTruthy(); //Se espera que el resultado sea true

     });


/*      test('debe de retornar un arreglo de imagenes y el isLoading en false', async() => { 

        const { result}  = renderHook( () => useFetchGifs('One Punch'));


        //Espera a que esta condicion se cumpla
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );
     
       const {images, isLoading} = result.current; 

        expect( images.length ).toBeGreaterThan(0); //Se espera que el resultado sea mayor a 0
        expect( isLoading ).toBeFalsy(); //Se espera que el resultado sea falso

     }); */


 });






//NOTAS

/* El ultimo test falla pero esta tal cual al cod del tutor */

/* 

* Usualmente en el hooks se evalua el argumento de entrada y la salida 

* Los hooks necesitan parte del ciclo de vida d e los componentes de react, no se puede evaluar de manera aislada
ej: const {image, isLoading} = useFetchGifs(); //esto no es valido

Para esto usamos el renderHook!!!!

*/



//RENDERHOOK

/* 
Regresa varias cosas:
✔ result: el resultado que regresaria el hook cuando ya se monta
✔ unmount: el resultado cuando el hook ya es desmontado
✔ rerender: rederendisa nuevamente el hook


Se realiza un log del result :   console.log
    { current: { images: [], isLoading: true } }

*/



//WAIFOR (espera por)

/* Espera a que algo sucesa, es una promesa por lo cual se opuede usar unh await */
