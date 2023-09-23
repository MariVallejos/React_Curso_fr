import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, setActiveNote } from './';
import { deleteNoteById, savingNewNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from './journalSlice';
import { fileUpload, loadNotes } from '../../helpers';


export const startNewNote = () => {
    return async( dispatch, getState ) => {//*1

        dispatch( savingNewNote() );//disparo la accion

        const { uid } = getState().auth; //busca el uid dentro del nodo de autenticacion

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes`) );
        await setDoc( newDoc, newNote );

        newNote.id = newDoc.id;  //creo la propiedad id a la nota

        //! dispatch
        dispatch( addNewEmptyNote( newNote ) ); //el payload el es newNOte
        dispatch( setActiveNote( newNote ) );

    }
}


export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {
        
        const { uid } = getState().auth;
        if ( !uid ) throw new Error('El UID del usuario no existe');

        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ) );//llamo al setNote y le mando el payload que va ser "notes"
    }
}

export const startSaveNote = () => {
    return async( dispatch, getState ) => {

        dispatch( setSaving() );

        const { uid } = getState().auth;//ocupo el uid
        const { active:note } = getState().journal;

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;//elimino una propiedad de la desustructuracion
    
        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` );//referencia al documento
        await setDoc( docRef, noteToFireStore, { merge: true });//forma de impactar a la db

        dispatch( updateNote( note ) );

    }
}


export const startUploadingFiles = ( files = [] ) => {
    return async( dispatch ) => {
        dispatch( setSaving() );//bloquea boton y pone la app en estado de carga
            
        // await fileUpload( files[0] );
        const fileUploadPromises = [];
        for ( const file of files ) {
            fileUploadPromises.push( fileUpload( file ) )//creo el arreglo de promesas
        }

        const photosUrls = await Promise.all( fileUploadPromises ); //lo q mande a almacenar
        
        dispatch( setPhotosToActiveNote( photosUrls ));
        
    }
}


export const startDeletingNote = () => {
    return async( dispatch, getState) => {//geststate ya que ocupo la info de la nota activa y el usuario activo

        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
        await deleteDoc( docRef );

        dispatch( deleteNoteById(note.id) );

    }
}


//NOTA

//getState

/* `getState` es un método que permite acceder al estado actual almacenado en el store. 
En la mayoría de las librerías de gestión de estado, como Redux, el state es un objeto inmutable que contiene los datos de tu aplicación.
 Al llamar a `getState`, obtienes una copia del state actual, que puedes utilizar para realizar operaciones basadas en ese estado,
  como renderizar componentes o actualizar datos. En resumen, `getState` es una herramienta clave para interactuar con el store y trabajar con los datos de tu aplicación. */


  //*1

//   Para poder tomar el argumento del usuario en los thunk , uso el getStatte. De este me interesa el uid
//   Me trae todo el estado, el auth y el journal