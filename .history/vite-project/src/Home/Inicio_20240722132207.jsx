import React from "react";
import "./Styles/estilos.css";

import Background from "../Componentes-Generales/background";
// import Footer from "../Componentes-Generales/footer";

class Inicio extends React.Component {
  render() {
    return (
      <>
        <h1>¡Hola mundo,</h1>
        <h1>Soy Izhan Lara Garcia¡</h1>

        <section id="redes_sociales">
          <div id="githubIcon"><a href="#"><img src='../' alt="github" /></a></div>
            
        </section>
        <Background />
      </>
    );
  }
}

export default Inicio;
