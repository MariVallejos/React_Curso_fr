import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Navbar, CalendarEvent, CalendarModal, FabAddNew, FabDelete} from '../';

import { localizer, getMessagesES } from '../../helpers';
import { useUiStore, useCalendarStore } from '../../hooks';



export const CalendarPage = () => {

  const { openDateModal } = useUiStore();//uso aca la funcion q exporte del hooks
  const { events, setActiveEvent } = useCalendarStore();//luego del useCalendarStore tomo los events ....

  const [ lastView, setLastView ] = useState(localStorage.getItem('lastView') || 'week' ); //obtego ( si no tengo un valor mando el week)

  const eventStyleGetter = ( event, start, end, isSelected ) => {

    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
  }

  const onDoubleClick = ( event ) => {
    // console.log({ doubleClick: event });
    openDateModal();//este metodo lo llamo cuando cuando se hace doble click en ese evento
  }

  const onSelect = ( event ) => {
    // console.log({ click: event });
    setActiveEvent( event );//eso lo activa el cambio
  }

  const onViewChanged = ( event ) => {
    localStorage.setItem('lastView', event ); // el evento es mes, dia, semana
    setLastView( event )
  }



  return (
    <>
      <Navbar />

      <Calendar
        culture='es'
        localizer={ localizer }
        events={ events }//estos eventos vienen del store
        defaultView={ lastView }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px )' }}
        messages={ getMessagesES() }
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent//uso el calendarEvent dentro del caledario y dentro de los componentes tengo el event, que es el me interesa sobreescribir
        }}
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={ onViewChanged }
      />


      <CalendarModal />
      
      <FabAddNew />
      <FabDelete />


    </>
  )
}


//NOTA


/* En el código proporcionado, la propiedad `components` se utiliza para personalizar los componentes del calendario. En este caso, se está sobrescribiendo el componente `event` con `CalendarEvent`, lo que significa que se está utilizando un componente personalizado llamado `CalendarEvent` en lugar del componente predeterminado para representar los eventos en el calendario. */