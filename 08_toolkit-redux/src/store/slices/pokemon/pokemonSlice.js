import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
   initialState: {
    page: 0,
    pokemons: [],
    isLoading: false,
   },
    reducers: {
        startLoadingPokemons: (state, /* action */ ) => {  //si yo mando una accion startLoadingPokemons, cambio el isLoading
            state.isLoading = true;
        },
        setPokemons: ( state, action ) => { //action, la info q espero del pokemon
            state.isLoading = false;//"ya tengo el pokemon dejo de cargar"
            state.page = action.payload.page;//manejar las paginas
            state.pokemons = action.payload.pokemons; /* **2 */
        }
    }
});
// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;


//NOTA

/* /* **2 */ 

//en el reducer setPokemons lo que hago es pedir la pagina y el pokemon 

/* {
    page: 1,
    pokemons: []
} */



