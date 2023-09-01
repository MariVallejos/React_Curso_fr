import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

  const navigate = useNavigate(); //obtengo la navegacion
  const location = useLocation(); //obtengo info de la ubicacion a la localizacion donde nos encontramos 

  const { q = '' } = queryString.parse( location.search ); //de query tomo la q, y si no viene tengo el string vacio
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0); // si no se escrio nada, devuelve un valor booleano
  const showError  = (q.length > 0) && heroes.length === 0; // muestro el error segun esa validacion


  const { searchText, onInputChange } = useForm({//desestructuro val, para conectar con el form
    searchText: q //mismo q el name del form, ya q es el valor q uso para establecer el valor a ese campo
  });



  const onSearchSubmit = (event) =>{
    event.preventDefault();
    // if ( searchText.trim().length <= 1 ) return;

    navigate(`?q=${ searchText }`); //mando un queryparametro igual a lo q la persona escribio
  }


  return (
    <>
      <h1>Search</h1> 
      <hr />

      <div className="row">

          <div className="col-5">
            <h4>Searching</h4>
            <hr />
            <form onSubmit={ onSearchSubmit } arial-label="form">
              <input 
                type="text"
                placeholder="Search a hero"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ onInputChange }
              />

              <button className="btn btn-outline-primary mt-1">
                Search
              </button>
            </form>
          </div>

          <div className="col-7">
            <h4>Results</h4>
            <hr />

            {/* {
              ( q === '' )
                ? <div className="alert alert-primary">Search a hero</div>
                : ( heroes.length === 0 ) 
                  && <div className="alert alert-danger">No hero with <b>{ q }</b></div>
            } */}
            
            <div className="alert alert-primary animate__animated animate__fadeIn" 
                style={{ display: showSearch ? '' : 'none' }}>
              Search a hero
            </div>

            <div aria-label="alert-danger" className="alert alert-danger animate__animated animate__fadeIn" 
                style={{ display: showError ? '' : 'none' }}>
              No hero with <b>{ q }</b>
            </div>


            {
              heroes.map( hero => (
                <HeroCard key={ hero.id } {...hero } />
              ))
            }

          </div>
      </div>
      

    </>
  )
}


//NOTA

//npm install query-string


/* instala un paquete para estraer todo lo que se encuentre en el objeto del search */