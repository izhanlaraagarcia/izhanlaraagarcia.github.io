import React from "react";
import "./Styles/estilos.scss";
import SocialMedia from '../Componentes-Generales/social';

const Inicio = () => {
  return (
    <div className="inicio-container">
      <aside className="sidebar">
        <div className="logo-container">
          <div className="logo">IL</div>
          <SocialMedia />
        </div>
      </aside>
    </div>
  );
};

export default Inicio;
