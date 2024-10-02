import React from 'react';
import "./styles/social.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
  return (
    <div className="social-media-container">
      <ul>
        <li>
          <a href="mailto:izhanlaragarcia@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={fab.faEnvelope} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/izhan-lara-garcia/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={fab.faLinkedinIn} />
          </a>
        </li>
        <li>
          <a href="https://github.com/izhanlg" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={fab.faGithub} />
          </a>
        </li>
        <li>
          <a href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={fab.faFilePdf} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/izhanlg/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={fab.faInstagram} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;