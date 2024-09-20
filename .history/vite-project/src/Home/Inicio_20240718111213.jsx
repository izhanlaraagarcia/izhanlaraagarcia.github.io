import React from "react";
import "./Styles/estilos.css";

import Banner from "../Componentes-Generales/background";
import Footer from "../Componentes-Generales/footer";

class Inicio extends React.Component {
  render() {
    return (
      // Pequeña presentacion para el inicio
      <>
        <h1>¡Hola mundo,</h1>
        <h1>Soy Izhan Lara Garcia¡</h1>

        <Banner />
      </>
    );
  }
}

export default Inicio;
