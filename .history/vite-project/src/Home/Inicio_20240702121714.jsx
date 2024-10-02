import React from "react";
import "./Styles/estilos.css";

class Inicio extends React.Component {
  render() {
    return (
      <div>
        <Menu/>
        <h1>Bienvenido a la Página de Inicio</h1>
        <p>Esta es la página de inicio.</p>
      </div>
    );
  }
}

export default Inicio;
