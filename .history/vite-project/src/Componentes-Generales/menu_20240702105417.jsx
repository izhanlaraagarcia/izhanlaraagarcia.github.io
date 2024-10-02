import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom'

// Vamos a crear el menu como un componente para poder usarlo en las diferentes paginas


// Inicio del menu 

class Menu extends React.Component{
    render(){
        return(
                <nav>
                    <ul><li><a href="">Home</a></li></ul>
                </nav>
        )
    }
}

export default Menu;