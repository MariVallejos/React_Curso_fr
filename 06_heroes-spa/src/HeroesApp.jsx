import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"


export const HeroesApp = () => {
  return (
    <AuthProvider>
       <AppRouter/>
    </AuthProvider>
  )
}


//NOTA

/* AuthProvider Te permite compartir toda la informacion de mi propvider es toda la app */