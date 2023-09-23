
import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen: false //LUEGO BASADO EN ESE STORE, LO USARE PARA ABRIR EL CERRAR EL MODAL
    },
    reducers: {
        onOpenDateModal: ( state ) => {
            state.isDateModalOpen = true;
        },
        onCloseDateModal: ( state ) => {
            state.isDateModalOpen = false;
        },
    }
});


// Action creators are generated for each case reducer function
export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;


//NOTAS

/* Este slice ayuda a mantener la nformacion del ui, si el modal esta abierto o cerrado */

/* Tesgo un snippet redux-slice y tab */