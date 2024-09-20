import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import USFlag from "../assets/us-flag.png";
import ESFlag from "../assets/es-flag.png";
import AboutComponent from "./AboutComponent";
import SkillsComponent from "./SkillsComponent";
import FooterComponent from "./FooterComponent";

const HeaderComponent = () => {
  const [language, setLanguage] = useState("en");

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
    setMenuOpen (!menuOpen);
  }

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "es" : "en"));
  };

  return (
    <>
      <header className="header" id="header">
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
              href="./IzhanLaraGarcia.pdf" // Asegúrate de tener la ruta correcta a tu archivo CV
              download="IzhanLaraGarcia.pdf" // El nombre del archivo que se descargará
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
              href="#" // Cambia esto por el enlace correcto de tu portafolio
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
              rel="noopener noreferrer" // Asegura que los enlaces se abran de forma segura en una nueva pestaña
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
        </motion.div>

      </header>

      <AboutComponent language={language} />
      <SkillsComponent language={language} />
      <FooterComponent language={language} />
    </>
  );
};

export default HeaderComponent;
