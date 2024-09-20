import React from "react";
import "./Styles/estilos.scss";
import Background from "../Componentes-Generales/background";


const Inicio = () => {
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
              <img src="https://cdn-icons-png.flaticon.com/256/25/25231.png" alt="github" />
            </a>
          </div>
          <div id="linkedinIcon">
            <a href="#">
              <img src="https://cdn.icon-icons.com/icons2/38/PNG/512/linkedin_social_5085.png" alt="linkedin" />
            </a>
          </div>
          <div id="mailIcon">
            <a href="#">
              <img src="https://w7.pngwing.com/pngs/130/378/png-transparent-email-mail-message-letter-envelope-chat-communication-minimalist-ui-icon.png" alt="email" />
            </a>
          </div>
        </section>
        <Background />
      </>
    );
  }
export default Inicio;
