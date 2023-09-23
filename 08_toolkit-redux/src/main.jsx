import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import { PokemonApp } from './PokemonApp.jsx'
import { store } from './store'
import { TodoApp } from './TodoApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>{/* el store, es el store del archivo de store.js */}
    {/* <App /> */}
    {/* <PokemonApp/> */}
    <TodoApp/>
    </Provider>
  </React.StrictMode>,
)


//NOTA

/* 

//PROVIDER THE REDUX STORE TO REACT

Proveo lo que es el store a todos los componentes de React

*/