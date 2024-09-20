import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
// vincular con los estilos de css
import "./menu.css"
// Vamos a crear el menu como un componente para poder usarlo en las diferentes paginas


// Inicio del menu 

class Menu extends React.Component{
    render() {
        return (
            <Router>
            <header>
                <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/about">Acerca de</Link></li>
                    <li><Link to="/contact">Contacto</Link></li>
                </ul>
                </nav>
            </header>
            </Router>
        )
    }
        // return(
        //         <header>
        //             <nav className="menu">
        //                 <ul>
        //                     <li><a href="./Inicio.jsx">Inicio</a></li>
        //                     <li><a href='../About/about.jsx'>Sobre mi</a></li>
        //                     <li><a href="#">Contacto</a></li>
        //                 </ul>
        //             </nav>
        //         </header>
        // )
    }


export default Menu;