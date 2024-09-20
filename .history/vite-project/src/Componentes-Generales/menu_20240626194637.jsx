import React from "react";

// Vamos a crear el menu como un componente para poder usarlo en las diferentes paginas


// Inicio del menu 

class Menu extends React.Component{
    render(){
        return(
            <Router>
                <header>
                    <nav>
                        <ul>
                            <li><link to=""/><Inicio></Inicio>
                            </li>
                        </ul>
                    </nav>
                </header>
            </Router>
        )
    }
}

export default Menu;