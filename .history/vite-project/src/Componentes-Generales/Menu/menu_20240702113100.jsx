import React from "react";

// vincular con los estilos de css
import "./menu.css"
// Vamos a crear el menu como un componente para poder usarlo en las diferentes paginas


// Inicio del menu 

class Menu extends React.Component{
    render(){
        return(
                <header>
                    <nav className="menu">
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href='vite-project\src\About\about.jsx'>Sobre mi</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </nav>
                </header>
        )
    }
}

export default Menu;