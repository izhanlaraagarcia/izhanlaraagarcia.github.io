import React from "react";
import Menu from '../Componentes-Generales/Menu/menu.jsx'

class About extends React.Component{
    render(){
        return (
            <div>
              <Menu /> {/* Aquí es donde se renderiza tu menú */}
              <h1>Acerca de</h1>
              <p>Esta es la página de Acerca de.</p>
            </div>
        )
    }
}

export default About;