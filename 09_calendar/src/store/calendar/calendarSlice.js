import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent =   {//se crea temporalmente , esto lo lee del back
    _id: new Date().getTime(),
    title: 'Cumpleaños del Jefe',
    notes: 'Hay que comprar el pastel',
    start: new Date(),
    end: addHours( new Date(), 2 ),
    bgColor: '#fafafa',
    user: {
      _id: '123',
      name: 'Fernando'
    }
};


export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            tempEvent
        ],
        activeEvent: null
    },
    reducers: {
        onSetActiveEvent: ( state, { payload }) => {
            state.activeEvent = payload;//lo que sea q le mande se va a activar
        },
        onAddNewEvent: ( state, { payload }) => {//el payload seria la nueva nota
            state.events.push( payload );//inserto nota
            state.activeEvent = null;//limpio la nota activa
        },
        onUpdateEvent: ( state, { payload } ) => {//luego usado en el useCalendarS...
            state.events = state.events.map( event => {
                if ( event._id === payload._id ) {//busco cual es el evento q quiere reeemplazar 
                    return payload;
                }

                return event;
            });
        },
        onDeleteEvent: ( state ) => {
            if ( state.activeEvent ) {//si hay una nota activa q lo elimine
                state.events = state.events.filter( event => event._id !== state.activeEvent._id );//regreso todos los eventos cuyo id sean diferente al de la nota activa
                state.activeEvent = null;//para ya no tener ni una nota activa
            }
        }
    }
});


// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } = calendarSlice.actions;