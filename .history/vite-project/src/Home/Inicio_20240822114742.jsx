import React from "react";
import "./Styles/estilos.scss";
import SocialMedia from '../Componentes-Generales/social';

const Inicio = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>Izhan Lara Garcia</h1>
      </header>
      <div className="card">
        <h2>Welcome 👋</h2>
        <p>Whit me:</p>
        <p>
          Hi! This is my briefcase so you can know me a little more! Function of the page:
        </p>
        <ul>
          <li>I will use this website to share my work with the world.</li>
          <li>And above all to have a small project where to hang my things from the day to day.</li>
        </ul>
      </div>
      <div className="card">
        <h2>Education and Information</h2>
        <p><strong>Current level of Education</strong></p>
        <p>2021 | DAW graduate student, Center Integrat de Formació Professional Francesc de Borja Moll</p>
        <p>2020 | Graduated in microinformatic systems and networks, Santa Monica</p>
        <p><strong>Languages</strong></p>
        <p>Spanish: Native</p>
        <p>English: Intermediate B1, currently studying at EOI Palma de Mallorca</p>
        <p><strong>Programming Languages and Technologies</strong></p>
        <p>+1 Years of experience</p>
      </div>
      <div className="social-media-container">
        <SocialMedia/>
      </div>
    </div>
  );
};

export default Inicio;
