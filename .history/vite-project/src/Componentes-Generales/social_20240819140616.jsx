import React from 'react';
import "./styles/social.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'

const SocialMedia = () => {
  return (
    <div className="social-media-container">
      <ul>
        <li>
          <a href="mailto:izhanlaragarcia@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={fab.faEnvelope} size="lg" pointerEvents="auto" />
            Email
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/izhan-lara-garcia/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={fab.faLinkedinIn} size="lg" pointerEvents="auto" />
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/izhanlg" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={fab.faGithub} size="lg" pointerEvents="auto" />
            GitHub
          </a>
        </li>
        <li>
          <a href="/IzhanLaraGarcia.pdf" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={fab.faFilePdf} size="lg" pointerEvents="auto" />
            CV
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/izhanlg/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={fab.faInstagram} size="lg" pointerEvents="auto" />
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;