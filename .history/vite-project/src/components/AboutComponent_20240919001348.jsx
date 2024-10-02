import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
      button: "Let's Connect",
    },
    es: {
      title: "Sobre Mí",
      description:
        "Soy un apasionado desarrollador de software de 21 años con una sólida base en programación y un gran deseo de aprender. Estoy listo para comenzar mi carrera como desarrollador junior y aplicar mis habilidades en un entorno de equipo.",
      button: "Conectemos",
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
          <img src="https://files.oaiusercontent.com/file-3rz02Dzi5vbsYNxAwTuVwnYC?se=2024-09-18T22%3A18%3A28Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3DIMG_0435.JPEG&sig=xiz0k8LuFLA0/IJtDanbifoXqmrF9viqiOm3pzKBUxc%3D" className="profile-image" />
        </motion.div>

        <motion.div className="about-text" variants={textVariants}>
          <h2 className="about-title">{t.title}</h2>
          <p className="about-description">{t.description}</p>

          <motion.button
            className="contact-btn"
            variants={buttonVariants}
            whileHover="hover"
          >
            {t.button}
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutComponent;
