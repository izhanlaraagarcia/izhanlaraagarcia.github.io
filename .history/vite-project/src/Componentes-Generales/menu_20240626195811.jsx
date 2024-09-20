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
                            <li><link to="/"/>Inicio
                            </li>
                            <li><link to=""/>Sobre mi
                            </li>
                            <li><link to=""/>Contacto
                            </li>
                        </ul>
                    </nav>
                </header>
            </Router>
        )
    }
}

export default Menu;