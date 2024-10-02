import React from 'react';
import "./styles/social.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

import "./styles/social.scss"

const SocialMedia = () => {
  return (
    <div className="social-media-container">
      <ul>
        <li>
          <a href="mailto:izhanlaragarcia@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/izhan-lara-garcia/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a href="https://github.com/izhanlg" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="tel:+34650067014">650 06 70 14</a>
        </li>
        <li>
          <a href="https://www.instagram.com/izhanlg/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;