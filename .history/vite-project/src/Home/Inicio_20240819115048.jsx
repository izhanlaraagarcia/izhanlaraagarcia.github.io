import React from "react";
import "./Styles/estilos.scss";
import Background from "../Componentes-Generales/background";

const Inicio = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>Izhan Lara Garcia</h1>
      </header>
      <div className="social-media-container">
        <Contacto /> // Renderiza el componente de contacto
      </div>
    </div>
  );
};

export default Inicio;
