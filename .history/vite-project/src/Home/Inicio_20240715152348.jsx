import React from "react";
import "./Styles/estilos.css";

import Banner from "../Componentes-Generales/banner";
import Footer from "../Componentes-Generales/footer";


class Inicio extends React.Component {
  render() {
    return (
      // Pequeña presentacion para el inicio
      <>
              <h1>Izhan Lara Garcia</h1>

        <Banner />
      </>
    );
  }
}

export default Inicio;