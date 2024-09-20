import React from 'react';

// Componentes-Generales/social.js

const SocialMedia = () => {
  return (
    <div className="social-media">
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook-f" />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram" />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter" />
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin-in" />
      </a>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github" />
      </a>
    </div>
  );
};

export default SocialMedia;