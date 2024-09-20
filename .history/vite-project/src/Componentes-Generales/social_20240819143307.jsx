const SocialMedia = ({ theme }) => {
  return (
    <div className={`social-media-container ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
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