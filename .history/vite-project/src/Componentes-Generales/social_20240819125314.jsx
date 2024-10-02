import React from 'react';

import "./styles/social.scss"

const SocialMedia = () => {
  return (
    <div className="social-media-container">
       {/* <section className="contact-info">
        <a href="mailto:izhanlaragarcia@gmail.com">izhanlaragarcia@gmail.com</a>
        <a href="tel:+34650067014">650 06 70 14</a>
        <p>Palma de Mallorca, España</p>
        <a href="https://izhanl8.glitch.me/">Portafolio</a>
        <a href="https://www.linkedin.com/in/izhan-lara-garcia">LinkedIn</a>
        <a href="https://github.com/izhanlaraagarcia">GitHub</a>
      </section> */}
      <ul>
        <li>
          <a href="mailto:izhanlaragarcia@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/izhan-lara-garcia/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in" />
          </a>
        </li>
        <li>
          <a href="https://github.com/izhanlg" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/izhanlg" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/izhanlg/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" />
          </a>
        </li>
        {/* Agrega más redes sociales aquí */}
      </ul>
    </div>
  );
};

export default SocialMedia;