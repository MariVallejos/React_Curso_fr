import { heroes } from '../data/heroes';


export const getHeroById = ( id ) => {

    return heroes.find( hero => hero.id === id );
}

//en caso de existir x cosa, direcciono/muestro/macheo