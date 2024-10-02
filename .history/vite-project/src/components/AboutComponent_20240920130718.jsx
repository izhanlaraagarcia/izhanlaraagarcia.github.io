import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import FooterComponent from "./FooterComponent";

import logo from "../assets/Izhan_Happy.JPEG";

// Variantes de animación para un efecto impresionante
const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    backgroundColor: "#ff66b2",
    transition: { duration: 0.3, yoyo: Infinity },
  },
};

const AboutComponent = ({ language }) => {
  const translations = {
    en: {
      title: "About Me",
      description:
        "I am a passionate 21-year-old software developer with a solid programming foundation and a great desire to learn. I'm ready to start my career as a junior developer and eager to apply my skills in a team environment.",
      button: "Contact me",
    },
    es: {
      title: "Sobre Mí",
      description:
        "Soy un apasionado desarrollador de software de 21 años con una sólida base en programación y un gran deseo de aprender. Estoy listo para comenzar mi carrera como desarrollador junior y aplicar mis habilidades en un entorno de equipo.",
      button: "Contactame",
    },
  };

  const t = translations[language] || translations["en"];

  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="profile-image-wrapper"
          whileHover={{ scale: 1.05, rotate: 3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img src={logo} className="profile-image" />
        </motion.div>

        <motion.div className="about-text" variants={textVariants}>
          <h2 className="about-title">{t.title}</h2>
          <p className="about-description">{t.description}</p>

          {/* <motion.button
            as={FooterComponent}
            className="contact-btn"
            variants={buttonVariants}
            whileHover="hover"
          >
            {t.button}
          </motion.button> */}
          <ul className="nav-list">
            <li>
              <Link to="header" smooth={true}>
                {translations[language].menu.home}
              </Link>
            </li>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutComponent;
