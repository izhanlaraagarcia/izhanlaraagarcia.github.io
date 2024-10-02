import React from "react";
import "./Styles/estilos.scss";
import Background from "../Componentes-Generales/background";
import {useTheme} from '../Constants/themaContext'


const Inicio = () => {
  const {dark} = useTheme()
    return (
      <>
        <h1>
          ¡Hola mundo,
          <br />
          Soy Izhan Lara Garcia¡
        </h1>

        <section className="containerRedesSociales">
          <div id="githubIcon">
            <a href="https://github.com/izhanlaraagarcia">
              <img src="../../public/github.png" alt="github" />
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
