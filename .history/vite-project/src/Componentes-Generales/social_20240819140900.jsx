import React from 'react';
import "./styles/social.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const SocialMedia = () => {
  return (
    <div className="social-media-container">
      <ul>
        <li>
          <a href="mailto:izhanlaragarcia@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={fab.faEnvelope} size="lg" onClick={() => console.log('Email clicked')} />
            Email
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/izhan-lara-garcia/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={fab.faLinkedinIn} size="lg" onClick={() => console.log('LinkedIn clicked')} />
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/izhanlg" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={fab.faGithub} size="lg" onClick={() => console.log('GitHub clicked')} />
            GitHub
          </a>
        </li>
        <li>
          <a href="/IzhanLaraGarcia.pdf" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFilePdf} size="lg" onClick={() => console.log('CV clicked')} />
            CV
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/izhanlg/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={fab.faInstagram} size="lg" onClick={() => console.log('Instagram clicked')} />
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;