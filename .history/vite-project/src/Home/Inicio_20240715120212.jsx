import React from "react";
import "./Styles/estilos.css";

import Banner from "../Componentes-Generales/banner";
import Footer from "../Componentes-Generales/footer";


class Inicio extends React.Component {
  render() {
    return (
      // Pequeña presentacion para el inicio
      <>
        <Banner />
        <div class="hero"> 
  <div class="hero__title">Hello World</div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
      </>
    );
  }
}

export default Inicio;