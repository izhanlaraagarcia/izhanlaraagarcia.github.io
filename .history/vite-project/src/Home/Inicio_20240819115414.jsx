import React from "react";
import "./Styles/estilos.scss";
// import Background from "../Componentes-Generales/background";

import SocialMedia from "../Componentes-Generales/redessociales"

const Inicio = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>Izhan Lara Garcia</h1>
      </header>
      <div className="social-media-container">
        <SocialMedia/>
      </div>
    </div>
  );
};

export default Inicio;
