import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark rounded-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useContext</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink
                            className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`}
                            to="/">
                            Home
                        </NavLink>
                        <NavLink
                             className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`}
                            to="/about">
                            About
                        </NavLink>
                        <NavLink
                             className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`}
                            to="/login">
                            Login
                        </NavLink>

                    </ul>
                </div>
            </div>
        </nav>
    )
}


//NOTA

//NavLink
/* 
Esta encargado d ela navegacion, es un link q se usa en la navegacion,
le puedo especificar una clase en especial dependiendo donde se encuentre.

Te permite encontra la clase si se encuentra en ese path

isActive es el valor que devuelve el navBar. si esta estivio o no
*/

/* 
¡CUANDO SE USA NAVLINK?

Usado en la barra de navegacion 

O que el link reaaciones dependiendo en la ruta q se encuentre

*/