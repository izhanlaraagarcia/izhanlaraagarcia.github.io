import React from "react";
import "./Styles/estilos.scss";
import Background from "../Componentes-Generales/background";
// import Footer from "../Componentes-Generales/footer";

const Inicio = () => {
    return (
      <>
        <h1>
          ¡Hola mundo,
          <br />
          Soy Izhan Lara Garcia¡
        </h1>

        <section id="redes_sociales">
          <div id="githubIcon">
            <a href="https://github.com/izhanlaraagarcia">
              <img src="../assets/github.png" alt="github" />
            </a>
          </div>
          <div id="linkedinIcon">
            <a href="#">
              <img src="" alt="linkedin" />
            </a>
          </div>
          <div id="mailIcon">
            <a href="#">
              <img src="../" alt="email" />
            </a>
          </div>
        </section>
        <Background />
      </>
    );
  }
export default Inicio;
