import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,//para saber si estoy guardando la nota o no 
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 1234567,
        //     imageUrls: [], // https://foto1.jpg, https://foto2.jpg, https://foto3.jpg
        // }
    },
    reducers: {
        savingNewNote: ( state ) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action ) => {
            state.notes.push( action.payload );//en el payload tengo la nueva nota
            state.isSaving = false;
        },
        setActiveNote: (state, action ) => {
            state.active = action.payload; //el payload va ser la nota que quiero establecer en pantalla
            state.messageSaved = '';
        },
        setNotes: (state, action ) => {
            state.notes = action.payload;//al stado de las notas le mando el payload para que en ñps thunks se le mande las notas!!!!!
        },
        setSaving: (state ) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: (state, action ) => { // payload: note //actualizo la referencia local
            state.isSaving = false;
            state.notes = state.notes.map( note => {

                if ( note.id === action.payload.id ) {//actualizo la nota correpondiente , basado en el action.payload
                    return action.payload;
                }

                return note;
            });

            state.messageSaved = `${ action.payload.title }, actualizada correctamente`;
        },
        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ]; //preservo las anteriores y actualizo con las nuevas
            state.isSaving = false;//termino la carga
        },

        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;
        },

        deleteNoteById: (state, action ) => {
            state.active = null;
            state.notes = state.notes.filter( note => note.id !== action.payload );//quito(filtro) la nota cuyo id es igual a la nota que recibo en el action.payload
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    addNewEmptyNote,
    clearNotesLogout,
    deleteNoteById, 
    savingNewNote,
    setActiveNote,
    setNotes,
    setPhotosToActiveNote,
    setSaving,
    updateNote,
} = journalSlice.actions;

