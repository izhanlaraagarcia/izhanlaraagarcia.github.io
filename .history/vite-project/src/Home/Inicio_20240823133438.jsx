import React from "react";
import Logo from "../Componentes-Generales/logo";
import Fondo from "../Componentes-Generales/fondo";

import './styles/iniciostyles.scss'
const Inicio = () => {
  return (
    <div>
          <Logo/>
          <div className="hello-container">
      <h1 className="hello-text">Hello, World!</h1>
    </div>          <Fondo/>
    </div>
  );
};

export default Inicio;
