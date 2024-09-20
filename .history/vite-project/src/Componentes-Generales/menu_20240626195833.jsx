import React from "react";
import { BrowserRouter as Router, Link } from '../../node_modules/@types/react-router/index.d.ts'

// Vamos a crear el menu como un componente para poder usarlo en las diferentes paginas


// Inicio del menu 

class Menu extends React.Component{
    render(){
        return(
            <Router>
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/"/>Inicio
                            </li>
                            <li><Link to=""/>Sobre mi
                            </li>
                            <li><Link to=""/>Contacto
                            </li>
                        </ul>
                    </nav>
                </header>
            </Router>
        )
    }
}

export default Menu;