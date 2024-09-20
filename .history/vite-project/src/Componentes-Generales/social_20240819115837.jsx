import React from 'react';

import "./styles/timelinecss.scss"

const SocialMedia = () => {
  return (
    <div className="social-media-container">
      <ul>
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