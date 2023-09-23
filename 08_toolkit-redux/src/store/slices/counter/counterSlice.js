import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'counter', //nombre con el cual las acciones salen disparadas
  initialState: { //state inicial
    counter: 10
  },
  reducers: { //REDUCERS
    increment: (state) => { //el state lo recibo como argumento
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1;
    },
    incrementBy: (state,action) => {
      state.counter += action.payload; /* El payload puede tomar  */
    },
    decremenet: (state) => { // DEFINICION del REDUCER
      if (state.counter > 0) {
        state.counter -= 1;
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decremenet,incrementBy } = counterSlice.actions   // GENERADOR DE ACCIONES (exporto las acciones)



//NOTA

/* 
Redux Toolkit también proporciona 
un método para definir reducers llamado createSlice.
*/

/* 
Un "slice" en Redux Toolkit es una forma conveniente 
de definir un conjunto de acciones y
 un reducer asociado a un pedazo específico del estado de tu aplicación. 
*/


//Snippet creado 

/* redux-slice */