import { configureStore } from '@reduxjs/toolkit'
import { todosApi } from './apis'
import {counterSlice} from './slices/counter'
import { pokemonSlice } from './slices/pokemon'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer, //aca apunto al reducer
    pokemons: pokemonSlice.reducer,  /* *1 */
    [todosApi.reducerPath]: todosApi.reducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
})

//NOTA

//ADD SLICE REDUCER TO THE STORE
/* 
Utilizo las acciones del counterSlice
*/


// (*1)

/* 
pokemons: pokemonSlice.reducer
Tengo ese espacio que se llama pokemons, y apunta al slice de pokemon que apunta al reducer
*/
