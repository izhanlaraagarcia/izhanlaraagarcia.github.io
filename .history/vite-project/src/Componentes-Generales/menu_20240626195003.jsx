import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

// Vamos a crear el menu como un componente para poder usarlo en las diferentes paginas


// Inicio del menu 

class Menu extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <header>
                    <nav>
                        <ul>
                            <li><link to=""/>Inicio
                            </li>
                            <li><link to=""/>Sobre mi
                            </li>
                            <li><link to=""/>Contacto
                            </li>
                        </ul>
                    </nav>
                </header>
            </BrowserRouter>
        )
    }
}

export default Menu;