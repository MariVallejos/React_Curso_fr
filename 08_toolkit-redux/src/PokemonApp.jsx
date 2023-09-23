import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';


export const PokemonApp = () => {

  const dispatch = useDispatch(); //uso para disparar cualquier accion
  const { isLoading, pokemons = [], page } = useSelector( state => state.pokemons ); //me traigo el estado y del estado me interesa la parte d elos pokemons


  useEffect(() => { //cuando el componente es creado solo una vez, use este hooks
    dispatch( getPokemons() );//dispara el thunks
  }, [])
  

  return (
    <>
        <h1>PokemonApp</h1>
        <hr />
        <span>Loading: { isLoading ? 'True': 'False' }</span>

        <ul>
          {
            pokemons.map( ({ name }) => (
              <li key={ name }>{ name }</li> /* pokeon.name = es lo mimos que desestructurar {name} */
            ))
          }
        </ul>

        <button
          disabled={ isLoading } /* el boton esta desabilitado si esta cargando */
          onClick={ () => dispatch( getPokemons(page) ) } //llamo a la accion, con el page respectivo
        >
          Next
        </button>
    </>
  )
}