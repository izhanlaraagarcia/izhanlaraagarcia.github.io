import React from 'react';
import "./styles/social.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import { useTheme } from "../Constants/themaContext";


const SocialMedia = ({theme}) => {
  const { dark } = useTheme(); // Usamos el hook useTheme para obtener el estado actual
  return (
    <div className={`social-media-container ${dark ? "dark-theme" : "light-theme"}`}>
      <ul>
        <li>
          <a href="mailto:izhanlaragarcia@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/izhan-lara-garcia/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
        </li>
        <li>
          <a href="https://github.com/izhanlaraagarcia" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </li>
        <li>
          <a href="/IzhanLaraGarcia.pdf" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFilePdf} size="lg" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
