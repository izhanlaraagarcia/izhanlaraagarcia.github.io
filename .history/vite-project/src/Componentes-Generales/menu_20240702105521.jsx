import React from "react";

// Vamos a crear el menu como un componente para poder usarlo en las diferentes paginas


// Inicio del menu 

class Menu extends React.Component{
    render(){
        return(
                <header>
                    <nav>
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li>Productos</li>
                            <li>Contacto</li>
                        </ul>
                    </nav>
                </header>
        )
    }
}

export default Menu;