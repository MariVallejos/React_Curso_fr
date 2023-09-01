import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { JournalApp } from './JournalApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     {/* Sistema de rutas principal de la app */}
    <BrowserRouter>
      <JournalApp />
    </BrowserRouter>
  </React.StrictMode>,
)


//NOTA

/* El BROWSERROUTER VA EN EL PUNTO MAS ALTO DE LA APP */