import React from "react";
import "./Styles/estilos.scss";
// import Background from "../Componentes-Generales/background";

import redesSociales from "../Componentes-Generales/redesSociales"

const Inicio = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>Izhan Lara Garcia</h1>
      </header>
      <div className="social-media-container">
        <redesSociales/>
      </div>
    </div>
  );
};

export default Inicio;
