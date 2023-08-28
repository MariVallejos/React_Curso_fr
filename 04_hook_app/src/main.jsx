import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; //(*)
// import { TodoApp } from './08-useReducer/tODOaPP.JSX'
// import { Padre } from './07-tarea-memo/Padre'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { MemoHook } from './06-memos/MemoHook'
// import { Memorize } from './06-memos/Memorize'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks.jsx'
/* import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx' */
/* import { SimpleForm } from './02-useEffect/SimpleForm'; */
/* import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook' */
/* import { CounterApp } from './01-useState/CounterApp'
    import { HookApp } from './HookApp' */
/* import './08-useReducer/intro-reducer'; */
import { MainApp } from './09-useContext/MainApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    {/* <React.StrictMode> */}
      <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
)


//NOTA

////(*)

/* BrowserRouter 

-Es un componenete de nivel superior
-Recibe otros componentes dentro de el
-Permite que todos los hijos que se encutren dentro de el , tengan cierto acceso a 
la informacion que provee el padre


*/