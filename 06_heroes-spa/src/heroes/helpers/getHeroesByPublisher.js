import { heroes } from '../data/heroes';


export const getHeroesByPublisher = ( publisher ) =>{

    const validPublishers = ['DC Comics','Marvel Comics'];
    if ( !validPublishers.includes( publisher ) ) { //si no incluye el publisher que recibo como argumento, lanzar error
        throw new Error(`${ publisher } is not a valid publisher`);
    }

    return heroes.filter( heroe => heroe.publisher === publisher );//si existe, devuelvo el publis.. q recibo como argumento
}



//En este caso, disparo un error en caso de no ser asi