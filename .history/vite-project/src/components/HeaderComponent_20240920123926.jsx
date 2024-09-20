import { forwardRef } from 'react';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom"; // Para navegar entre páginas
import { Link } from "react-scroll"; // Para hacer scroll dentro de la misma página
import { FaLinkedin, FaGithub } from "react-icons/fa";
import USFlag from "../assets/us-flag.png";
import ESFlag from "../assets/es-flag.png";
import AboutComponent from "./AboutComponent";
import SkillsComponent from "./SkillsComponent";
import FooterComponent from "./FooterComponent";
import Portfolio from "./subComponentes/Portfolio";

const HeaderComponent = () => {
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false); // Agregamos un estado para el menú

  const MotionRouterLink = motion(
    forwardRef((props, ref) => <RouterLink {...props} innerRef={ref} />)
  );

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
  const handleMenuToggle = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "es" : "en"));
  };

  return (
    <>
      <header className="header" id="header">
        {/* Círculos animados en el fondo */}
        <motion.div
          className="background-circles"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <motion.div
            className="circle"
            animate={{
              x: [0, 200, 0],
              y: [0, -100, 100, -50, 0],
              scale: [1, 1.5, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
          <motion.div
            className="circle"
            animate={{
              x: [0, -250, 150],
              y: [0, 150, -80, 100, 0],
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 12,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
          <motion.div
            className="circle"
            animate={{
              x: [0, -150, 100],
              y: [0, 100, -150, 50, 0],
              scale: [1, 1.3, 1],
              opacity: [1, 0.4, 1],
            }}
            transition={{
              duration: 8,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </motion.div>
        {/* Nav menu */}
        <motion.nav
          className="nav"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ul className="nav-list">
            <li>
              <Link to="header" smooth={true}>
                {translations[language].menu.home}
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true}>
                {translations[language].menu.about}
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true}>
                {translations[language].menu.skills}
              </Link>
            </li>
            <li>
              <Link to="experience" smooth={true}>
                {translations[language].menu.experience}
              </Link>
            </li>
            <li>
              <Link to="footer" smooth={true}>
                {translations[language].menu.contact}
              </Link>
            </li>
            <li className="lang-btn-wrapper">
              <button className="lang-btn" onClick={toggleLanguage}>
                {language === "en" ? (
                  <img src={ESFlag} alt="Spanish Flag" className="flag-icon" />
                ) : (
                  <img src={USFlag} alt="US Flag" className="flag-icon" />
                )}
              </button>
            </li>
          </ul>
        </motion.nav>
        {/* Contenido del encabezado */}
        <motion.div
          className="header-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h1
            className="header-title"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {translations[language].name}
          </motion.h1>

          <motion.p
            className="header-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {translations[language].title}
          </motion.p>

          {/* Sección de botones */}
          <motion.div
            className="header-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            {/* Botón de descarga del CV */}
            <motion.a
              href="./IzhanLaraGarcia.pdf"
              download="IzhanLaraGarcia.pdf" 
              className="btn btn-glow"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#fff",
                color: "#ff6bcb",
              }}
            >
              {translations[language].resume}
            </motion.a>

            {/* Botón que lleva al portafolio */}

            <motion.a
              as={RouterLink}
              to="./subComponentes/Portfolio"
              className="btn btn-glow"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#fff",
                color: "#ff6bcb",
              }}
            >
              {translations[language].portfolio}
            </motion.a>
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            className="social-icons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/izhan-lara-garcía"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3 }}
            >
              <FaLinkedin />
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/izhanlaraagarcia"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3 }}
            >
              <FaGithub />
            </motion.a>
          </motion.div>
        </motion.div>
        {/* Menú desplegable */}
        <motion.nav
          className={`nav ${menuOpen ? "nav-open" : ""}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <button
            className="menu-toggle"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-5h18V8H3v2z" />
              </svg>
            )}
          </button>
          <ul className="nav-list">
            <li>
              <Link to="header" smooth={true}>
                {translations[language].menu.home}
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true}>
                {translations[language].menu.about}
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true}>
                {translations[language].menu.skills}
              </Link>
            </li>
            <li>
              <Link to="experience" smooth={true}>
                {translations[language].menu.experience}
              </Link>
            </li>
            <li>
              <Link to="footer" smooth={true}>
                {translations[language].menu.contact}
              </Link>
            </li>
            <li className="lang-btn-wrapper">
              <button className="lang-btn" onClick={toggleLanguage}>
                {language === "en" ? (
                  <img src={ESFlag} alt="Spanish Flag" className="flag-icon" />
                ) : (
                  <img src={USFlag} alt="US Flag" className="flag-icon" />
                )}
              </button>
            </li>
          </ul>
        </motion.nav>
      </header>

      <AboutComponent language={language} />
      <SkillsComponent language={language} />
      <FooterComponent language={language} />
    </>
  );
};

export default HeaderComponent;
