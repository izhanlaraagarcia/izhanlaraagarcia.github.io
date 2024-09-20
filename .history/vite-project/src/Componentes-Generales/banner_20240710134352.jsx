import React from "react";
import "./styles/banner.css";

class Banner extends React.Component {
  render() {
    return (
      <div>
        <section id="welcome">
          <h1>¡Hola, soy Izhan Lara Garcia</h1>
          <p>
            Soy un desarrollador web junior apasionado por crear aplicaciones
            web modernas y eficientes.
          </p>
        </section>
        
        <footer id="footer">
          <p>© 2024 [Tu Nombre]. Todos los derechos reservados.</p>
          <a href="mailto:tuemail@example.com">tuemail@example.com</a>
        </footer>
      </div>
    );
  }
}

export default Banner;
