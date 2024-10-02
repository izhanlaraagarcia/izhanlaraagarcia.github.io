import React from "react";
import Logo from "../Componentes-Generales/logo";
import Fondo from "../Componentes-Generales/fondo";
import Type from "../Componentes-Generales/typefect";


import "./styles/iniciostyles.scss";
const Inicio = () => {
  return (
    <div>
      <Logo />
      <div className="hello-container">
        
      </div>{" "}
      <Type/>
      <Fondo />
    </div>
  );
};

export default Inicio;
