import { pokemonApi } from '../../../api/pokemonApi';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';



export const getPokemons = ( page = 0 ) => { //trae los pokemons
    return async( dispatch, getState ) => {// (*1)
        dispatch( startLoadingPokemons() );//ejecuto el reducer startLoad... ( mando a llamar esa accion)

        // TODO: realizar petición http
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);
        // const data = await resp.json();
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`); //solo pongp el segmento q me fslta

        dispatch( setPokemons({ pokemons: data.results, page: page + 1 }) ); //llamo la accion y creo un objeto para llamar a los pokemons de la api
    }                                                                           //los datos los trae como results results.name o results.url
}


//NOTA

//thunks (funcion asincrona que dispara otra accion)
/* Es una accion que tiene cod. asincrono y dependiendo de ese cod. asincrono va a disparar otra accion  */

//(1*)

/* Esta funcion se manda va a mandar a llamar con el argumento dispatch, que
es para hacer el dispatch de otra accion.

Y el segundo argumento es  otra funcion que se llama getState.
El getState, lo podemos usar para obtener todo el roots state (ej. si el usuario esta autentocado, 
    el nombre del usuario o alguna pieza de informacion del estate lo tenemos ahi)
*/