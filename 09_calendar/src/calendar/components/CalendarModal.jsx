import { useMemo, useState, useEffect } from 'react';
import { addHours, differenceInSeconds } from 'date-fns';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import Modal from 'react-modal';

import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import es from 'date-fns/locale/es';
import { useCalendarStore, useUiStore } from '../../hooks';


registerLocale( 'es', es );


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {

    const { isDateModalOpen, closeDateModal } = useUiStore();//hago uso del custom hooks
    const { activeEvent, startSavingEvent } = useCalendarStore();

    const [ formSubmitted, setFormSubmitted ] = useState(false);

    const [formValues, setFormValues] = useState({//manejo de formulario
        title: '',
        notes: '',
        start: new Date(),
        end: addHours( new Date(), 2),
    });

    const titleClass = useMemo(() => {
        if ( !formSubmitted ) return '';//si el form no se disparo regreso un string vacio

        return ( formValues.title.length > 0 )
            ? ''
            : 'is-invalid';

    }, [ formValues.title, formSubmitted ])//tengo 2 dependencia, tengo q volver a memorizar el valor si el titulo cambia o formSubmitted camb

    useEffect(() => {
      if ( activeEvent !== null ) { //si no es nulo solo asi ejecuto ese codigo
          setFormValues({ ...activeEvent });//& le esparzo tofdo el activeevent
      }    
      
    }, [ activeEvent ])//este efecto se va estar disparsndo, cada vez que la nota cambie
    


    const onInputChanged = ({ target }) => {//actualizo el valor que venga
        setFormValues({
            ...formValues,//esparso todos los valoress q tiene el formValue ( para no sobreescribir los val del form , solo el q tenga el valor del target)
            [target.name]: target.value //actualizo el valor q venga !! 
        })
    }

    const onDateChanged = ( event, changing ) => {
        setFormValues({
            ...formValues,
            [changing]: event
        })
    }

    const onCloseModal = () => {
        closeDateModal();//llamamos al closeDateModal
    }

    const onSubmit = async( event ) => {
        event.preventDefault();
        setFormSubmitted(true);

        const difference = differenceInSeconds( formValues.end, formValues.start );
        
        if ( isNaN( difference ) || difference <= 0 ) {//si no es un  num o la diferencia es menor a cero
            Swal.fire('Fechas incorrectas','Revisar las fechas ingresadas','error');//uso el swet alert
            return;
        }
        
        if ( formValues.title.length <= 0 ) return;//si el titulo es meno a cero no hago nada
        
        console.log(formValues);

        // TODO: 
        await startSavingEvent( formValues );
        closeDateModal();
        setFormSubmitted(false);//quita lo errores
    }



  return (
    <Modal
        isOpen={ isDateModalOpen }//determinado segun el store
        onRequestClose={ onCloseModal }
        style={ customStyles }
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={ 200 }
    >
        <h1> Nuevo evento </h1>
        <hr />
        <form className="container" onSubmit={ onSubmit }>

            <div className="form-group mb-2">
                <label>Fecha y hora inicio</label>
                <DatePicker 
                    selected={ formValues.start }
                    onChange={ (event) => onDateChanged(event, 'start') }
                    className="form-control"
                    dateFormat="Pp"
                    showTimeSelect
                    locale="es"
                    timeCaption="Hora"
                />
            </div>

            <div className="form-group mb-2">
                <label>Fecha y hora fin</label>
                <DatePicker 
                    minDate={ formValues.start }
                    selected={ formValues.end }//fecha seleccionada
                    onChange={ (event) => onDateChanged(event, 'end') }
                    className="form-control"
                    dateFormat="Pp"
                    showTimeSelect
                    locale="es"
                    timeCaption="Hora"
                />
            </div>

            <hr />
            <div className="form-group mb-2">
                <label>Titulo y notas</label>
                <input 
                    type="text" 
                    className={ `form-control ${ titleClass }`}
                    placeholder="Título del evento"
                    name="title" //lo q necesito para conectar con el form
                    autoComplete="off"
                    value={ formValues.title }//value
                    onChange={ onInputChanged }
                />
                <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
            </div>

            <div className="form-group mb-2">
                <textarea 
                    type="text" 
                    className="form-control"
                    placeholder="Notas"
                    rows="5"
                    name="notes"
                    value={ formValues.notes }
                    onChange={ onInputChanged }
                ></textarea>
                <small id="emailHelp" className="form-text text-muted">Información adicional</small>
            </div>

            <button
                type="submit"
                className="btn btn-outline-primary btn-block"
            >
                <i className="far fa-save"></i>
                <span> Guardar</span>
            </button>

        </form>
    </Modal>
  )
}
