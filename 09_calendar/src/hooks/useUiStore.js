import { useDispatch, useSelector } from 'react-redux';
import { onCloseDateModal, onOpenDateModal } from '../store';


export const useUiStore = () => {

    const dispatch = useDispatch();

    const { 
        isDateModalOpen
    } = useSelector( state => state.ui );//uso el useSlector para tomar el isDateModalOpen con este tengo acceso al state

    const openDateModal = () => {//abrir el modal
        dispatch( onOpenDateModal() )//hago el dispatch de la accion onOpenDateModal
    }

    const closeDateModal = () => {
        dispatch( onCloseDateModal() )
    }

    const toggleDateModal = () => {//si esta abierto se cierra y si estba cerrado se abra
        (isDateModalOpen)
            ? openDateModal()
            : closeDateModal();
    }



    return {
        //* Propiedades
        isDateModalOpen,

        //* Métodos
        closeDateModal,//exportarlo fuera del hooks, por eso se retorna la f.
        openDateModal, //exporto la funcion para usarla en CalendarPage
        toggleDateModal,//es una idea, no creo q se use
    }

}

//NOTA

/* Manera de trabajar con el STORE basada en HOOKS  */

/* Este custom hooks me va a servir para manejar y 
hacer dispatch de acciones y controllar propiamente todo lo que esta relacionado 
a mi uiStore o a mi  ui en el store  */