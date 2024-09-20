import React from "react";
import Menu from "../../Componentes-Generales/menu";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <h1>Contacto</h1>

        <section className="contact-info">
        <a href="mailto:izhanlaragarcia@gmail.com">izhanlaragarcia@gmail.com</a>
        <a href="tel:+34650067014">650 06 70 14</a>
        <p>Palma de Mallorca, España</p>
        <a href="https://izhanl8.glitch.me/">Portafolio</a>
        <a href="https://www.linkedin.com/in/izhan-lara-garcia">LinkedIn</a>
        <a href="https://github.com/izhanlaraagarcia">GitHub</a>
      </section>
      </div>
    );
  }
}

export default Contact;
