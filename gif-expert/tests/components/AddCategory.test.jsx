import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory/>', () => { 

    const inputValue = 'Saitama';

    test('debe de cambiar el valor de la caja de texto', () => { 

     render(<AddCategory onNewCategory={()=>{}}/>)//crea sujeto de prueba
     
     const input = screen.getByRole('textbox');//extraigo o tomo el input

     fireEvent.input(input, { target: { value : inputValue} });

     expect(input.value).toBe(inputValue);//acercion de lo que espero que suceda

     //screen.debug();
     });


     test('debe de llamar onNewCategory si el input tiene un valor', () => { 

      //CREO FUNCION ESPECIAL
      const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);//levando sujeto de pruebas

        const input = screen.getByRole('textbox'); //agarro referencias al inpit y al form
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value : inputValue} }); //disparo el primer evento del formulario, que es para establecer el valor
        fireEvent.submit( form ); //disparo el submit del form    
        //screen.debug();  
        expect(input.value).toBe('');  //espero que el input.value sea igual a in string vacio   
        
        //EVALUO LA FUNCION DE MANERA INDEPENDIENTE - CASOS
        expect(onNewCategory).toHaveBeenCalled(); //espero que la funcion haya sido llamada
        expect(onNewCategory).toHaveBeenCalledTimes(1); //que haya sido llamada solo una vez
        expect(onNewCategory).toHaveBeenLastCalledWith(inputValue);//que haya sido llamado con el valor del input
      });


      test('no debe de llamar el onNewCategory si el input esta vacio', () => { 

        //PREPARO EL SUJETO DE PRUEBAS
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory } />);


        //DISPARO EL SUBMIT
        const form = screen.getByRole('form');
        fireEvent.submit( form );

        //ASERCION
        expect(onNewCategory).toHaveBeenCalledTimes(0); //haya sido llamado con 0 veces
        expect(onNewCategory).not.toHaveBeenCalled();//"mesmo" , no fue llamado ✔

       })


 })












 //NOTA

 /* Al input lo busco como textbox */

 //fireEvent
 /* Dispara un evento, que esta recibiendo la funcion o componente. En este caso el target */





 /* ------------------------------------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------------------------------------------- */

 //JEST FUNCTION || MOCK FUNCTIONS (funciones similadas) 🔎

 /* Un mock es la similacion, es decir no es la implementacion real  */