import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';
import { store } from './store';


export const CalendarApp = () => {
  return (
    <Provider store={ store }> {/* SITUO EL STORE */}
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  )
}

//NOTA

//CalendarApp seria cmo mi App.jsx

//como el useRouetes necesita ser usado dentro del contexto de router, implemento BrowserRouter ( el Router)el la parte mas superior de la app