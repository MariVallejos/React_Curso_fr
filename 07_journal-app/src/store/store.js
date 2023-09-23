import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { journalSlice } from './journal'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer, //*1
    journal: journalSlice.reducer
  },
})

//NOTA

/* El store es como quiero que luzca mi fuente de la informacion */

// *1
/* Voy a crear el ESPACIO EN EL STORE  llamado AUTH
    y pongo el authSlice
 */