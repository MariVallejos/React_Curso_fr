import { configureStore } from '@reduxjs/toolkit';
import { uiSlice, calendarSlice } from './';


export const store = configureStore({
    reducer: {
        calendar: calendarSlice.reducer,//hago referencia al reducer 
        ui: uiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({//para el manejo de las fechas, del error de las fechas || esta es ta config de los middleware
        serializableCheck: false
    })
})

//configuracion del store

/* Luego ese STORE LO SITUO EN EL PUNTO MAS ALTO DE LA APP */