import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import USFlag from '../assets/us-flag.png';
import ESFlag from '../assets/es-flag.png';
import AboutComponent from './AboutComponent';  // Asegúrate de importar el componente About
<AboutComponent language={language} translations={translations} />


const HeaderComponent = () => {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      about: {
        title: "About Me",
        description: "I’m a passionate web developer...",
        buttonMore: "Learn More",
        downloadCV: "Download CV",
        funFactTitle: "Fun Fact",
        funFact: "I can code for hours without noticing time passing by!",
      },
      // otros campos...
    },
    es: {
      about: {
        title: "Sobre mí",
        description: "Soy un desarrollador web apasionado...",
        buttonMore: "Conoce más",
        downloadCV: "Descargar CV",
        funFactTitle: "Dato curioso",
        funFact: "¡Puedo programar durante horas sin darme cuenta del paso del tiempo!",
      },
      // otros campos...
    },
  };
  

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
  };

  return (
    <>
      <header className="header" id="header">
        <nav className="nav">
          <ul className="nav-list">
            <li><Link to="header" smooth={true}>{translations[language].menu.home}</Link></li>
            <li><Link to="about" smooth={true}>{translations[language].menu.about}</Link></li>
            <li><Link to="skills" smooth={true}>{translations[language].menu.skills}</Link></li>
            <li><Link to="experience" smooth={true}>{translations[language].menu.experience}</Link></li>
            <li><Link to="footer" smooth={true} className="contact-btn">{translations[language].menu.contact}</Link></li>

            <li className="lang-btn-wrapper">
              <button className="lang-btn" onClick={toggleLanguage}>
                {language === 'en' ? (
                  <img src={ESFlag} alt="Spanish Flag" className="flag-icon" />
                ) : (
                  <img src={USFlag} alt="US Flag" className="flag-icon" />
                )}
              </button>
            </li>
          </ul>
        </nav>

        <motion.div 
          className="header-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.h1 
            className="header-title"
            initial={{ scale: 0, y: -100 }}
            animate={{ scale: [1.2, 1], y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05, color: "#f09" }}
          >
            {translations[language].name}
          </motion.h1>

          <p className="header-subtitle">
            {translations[language].title}
          </p>

          <div className="header-buttons">
            <motion.button whileHover={{ scale: 1.1 }} className="btn">
              {translations[language].resume}
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} className="btn">
              {translations[language].portfolio}
            </motion.button>
          </div>

          <div className="social-icons">
            <motion.a href="https://linkedin.com" target="_blank" whileHover={{ scale: 1.1 }}><FaLinkedin /></motion.a>
            <motion.a href="https://github.com" target="_blank" whileHover={{ scale: 1.1 }}><FaGithub /></motion.a>
            <motion.a href="https://twitter.com" target="_blank" whileHover={{ scale: 1.1 }}><FaTwitter /></motion.a>
          </div>
        </motion.div>
      </header>

      {/* Pasa el estado de idioma y las traducciones al componente About */}
      <AboutComponent language={language} translations={translations} />
    </>
  );
};

export default HeaderComponent;
