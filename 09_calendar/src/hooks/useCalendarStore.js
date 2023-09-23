import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store';


export const useCalendarStore = () => {
  
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar );//del calendar me interesa el events y activeEvent

    const setActiveEvent = ( calendarEvent ) => {//creo una funcionalidad que me permita hacer el dipatch facilmente de la accion
        dispatch( onSetActiveEvent( calendarEvent ) )// EN FabAddNew LE PASO EL LOS DATOS DEL PARAMETRO DEL calendarEvent
    }

    const startSavingEvent = async( calendarEvent ) => {
        // TODO: llegar al backend

        // Todo bien
        if( calendarEvent._id ) {
            // Actualizando
            dispatch( onUpdateEvent({ ...calendarEvent }) );//mando el payload q seria el calendarEvent
        } else {
            // Creando
            dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }) );
        }
    }

    const startDeletingEvent = () => {
        // Todo: Llegar al backend//aca ocupa una funcion para hacer el dispatch de esa accion


        dispatch( onDeleteEvent() );//luego lo uso en el componente FabDelete
    }


    return {
        //* Propiedades (props)
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,// regreso una nueva propreti para el uso del objeto activeEvent y la dovble negacion lo combienerte en truedel true

        //* Métodos
        startDeletingEvent,
        setActiveEvent,
        startSavingEvent,
    }
}



//NOTA

/* ESte custon hooks , cualquier interaccion con el store 
lo hago atraves del custom kook y asi tengo centralizado toda la logica*/

/* 

custom hook

export const useCalendarStore = () => {
  
    return {
       
    }
}

*/