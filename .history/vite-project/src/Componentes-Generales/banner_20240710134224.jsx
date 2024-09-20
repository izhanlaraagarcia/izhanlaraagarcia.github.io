import React from "react";
import "./styles/banner.css";

class Banner extends React.Component {
  render() {
    return (
      <div>
        <section id="welcome">
          <h1>¡Hola, soy [Tu Nombre]!</h1>
          <p>
            Soy un desarrollador web junior apasionado por crear aplicaciones
            web modernas y eficientes.
          </p>
        </section>

        <section id="cta">
          <a href="#projects" className="btn">
            Ver Mis Proyectos
          </a>
          <a href="#contact" className="btn">
            Contáctame
          </a>
        </section>

        <section id="skills">
          <h2>Mis Habilidades</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </section>

        <section id="featured-projects">
          <h2>Proyectos Destacados</h2>
          <div className="project-gallery">
            <div className="project">
              <img src="ruta/al/proyecto1.jpg" alt="Proyecto 1" />
              <h3>Proyecto 1</h3>
            </div>
            <div className="project">
              <img src="ruta/al/proyecto2.jpg" alt="Proyecto 2" />
              <h3>Proyecto 2</h3>
            </div>
          </div>
        </section>

        <section id="testimonials">
          <h2>Testimonios</h2>
          <blockquote>
            <p>
              "[Tu Nombre] es un desarrollador talentoso y dedicado, siempre
              dispuesto a aprender y mejorar."
            </p>
            <cite>– Mentor/Profesor</cite>
          </blockquote>
        </section>

        <section id="social-media">
          <h2>Sígueme</h2>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/tuperfil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
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
