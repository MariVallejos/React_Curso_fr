import { useDispatch, useSelector } from 'react-redux';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {decremenet, increment, incrementBy} from './store/slices/counter'

function App() {
  //Leer o selecionar algo del store => useSelector
  const {counter} = useSelector(state => state.counter) // usa el hook `useSelector` para acceder al estado de la aplicación y mostrarlo en el componete

  //despachar la accion
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p> count is {counter}</p> {/* lo muestra */}
      <div className="card">
        <button onClick={() => dispatch(increment())}> {/* llamo al dispach y la accion q solicita */} {/*  usa el hook `useDispatch` para llamar a las acciones */}
         Increment
        </button>
        <button onClick={() => dispatch(decremenet())}> 
         Decrement
        </button>
        <button onClick={() => dispatch(incrementBy(2))}> 
         Increment by 2
        </button>
      </div>
      
    </>
  )
}

export default App
