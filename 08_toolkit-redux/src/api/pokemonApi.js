import axios from 'axios';


export const pokemonApi = axios.create({ //creo una instancia
    baseURL: 'https://pokeapi.co/api/v2'
});