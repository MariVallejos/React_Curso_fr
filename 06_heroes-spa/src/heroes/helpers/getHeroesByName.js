import { heroes } from '../data/heroes';


export const getHeroesByName = ( name = '' ) => { //si no recibo el name , es un string vacio

    name = name.toLocaleLowerCase().trim();
    
    if ( name.length === 0 ) return [];

    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes( name ) //si eso incluye el name q la persona escribio .... entonces eso regresa el filter
    );

}


