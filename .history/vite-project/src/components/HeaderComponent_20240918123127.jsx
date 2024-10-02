import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import USFlag from '../assets/us-flag.png';
import ESFlag from '../assets/es-flag.png';
import AboutComponent from './AboutComponent';

const HeaderComponent = () => {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      name: "Izhan Lara García",
      title: "Junior Web Developer",
      resume: "Resume",
      portfolio: "Portfolio",
      menu: {
        home: "Home",
        about: "About",
        skills: "Skills",
        experience: "Experience",
        contact: "Contact",
      },
    },
    es: {
      name: "Izhan Lara García",
      title: "Desarrollador Web Junior",
      resume: "Currículum",
      portfolio: "Portafolio",
      menu: {
        home: "Inicio",
        about: "Sobre mí",
        skills: "Habilidades",
        experience: "Experiencia",
        contact: "Contacto",
      },
    },
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
  };

  return (
    <>
      <header className="header" id="header">
        <motion.nav 
          className="nav"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <ul className="nav-list">
            <li><Link to="header" smooth={true} duration={500}>{translations[language].menu.home}</Link></li>
            <li><Link to="about" smooth={true} duration={500}>{translations[language].menu.about}</Link></li>
            <li><Link to="skills" smooth={true} duration={500}>{translations[language].menu.skills}</Link></li>
            <li><Link to="experience" smooth={true} duration={500}>{translations[language].menu.experience}</Link></li>
            <li><Link to="footer" smooth={true} duration={500} className="contact-btn">{translations[language].menu.contact}</Link></li>

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
        </motion.nav>

        <motion.div 
          className="header-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.h1 
            className="header-title"
            initial={{ scale: 0.8, y: -100 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05, color: "#f09" }}
          >
            {translations[language].name}
          </motion.h1>

          <p className="header-subtitle">
            {translations[language].title}
          </p>

          {/* Botones para ver el CV y el Portafolio */}
          <div className="header-buttons">
            <motion.a 
              href="path-to-resume.pdf"  // Enlace al archivo PDF del CV
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="btn"
            >
              {translations[language].resume}
            </motion.a>
            <motion.a 
              href="#portfolio-section"  // Enlace a la sección de portafolio
              whileHover={{ scale: 1.1 }}
              className="btn"
            >
              {translations[language].portfolio}
            </motion.a>
          </div>

          {/* Redes Sociales */}
          <motion.div 
            className="social-icons"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.a href="https://www.linkedin.com/in/izhan-lara-garcia" target="_blank" whileHover={{ scale: 1.2 }}>
              <FaLinkedin />
            </motion.a>
            <motion.a href="https://github.com/izhanlaraagarcia" target="_blank" whileHover={{ scale: 1.2 }}>
              <FaGithub />
            </motion.a>
            <motion.a href="https://twitter.com/your-profile" target="_blank" whileHover={{ scale: 1.2 }}>
              <FaTwitter />
            </motion.a>
          </motion.div>
        </motion.div>
      </header>

      {/* Sección About */}
      <AboutComponent language={language} />
    </>
  );
};

export default HeaderComponent;
