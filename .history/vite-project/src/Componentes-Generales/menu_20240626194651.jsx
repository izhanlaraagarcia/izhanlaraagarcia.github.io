import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';

// Vamos a crear el menu como un componente para poder usarlo en las diferentes paginas


// Inicio del menu 

class Menu extends React.Component{
    render(){
        return(
            <Router>
                <header>
                    <nav>
                        <ul>
                            <li><link to=""/>Inicio
                            </li>
                        </ul>
                    </nav>
                </header>
            </Router>
        )
    }
}

export default Menu;