import React from 'react';
import { motion } from 'framer-motion';

const AboutComponent = ({ language }) => {
  const translations = {
    en: {
      title: "About Me",
      description: "I'm a passionate web developer focused on delivering elegant and modern solutions for clients. With experience in both front-end and back-end, I create fully responsive and interactive web applications...",
      skills: "Skills",
      experience: "Experience",
      buttonText: "View More",
      contact: "Contact Me",
    },
    es: {
      title: "Sobre Mí",
      description: "Soy un apasionado desarrollador web centrado en ofrecer soluciones elegantes y modernas para los clientes. Con experiencia tanto en front-end como back-end, creo aplicaciones web completamente responsivas e interactivas...",
      skills: "Habilidades",
      experience: "Experiencia",
      buttonText: "Ver Más",
      contact: "Contáctame",
    },
  };

  return (
    <section id="about" className="about">
      <motion.div 
        className="about-background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="about-content">
        <motion.img
          src="path/to/profile-image.jpg"
          alt="Profile"
          className="profile-image"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          whileHover={{ scale: 1.05 }}
        />
        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <h2>{translations[language].title}</h2>
          <p>{translations[language].description}</p>

          <div className="about-buttons">
            <motion.a 
              href="#skills"
              className="about-btn"
              whileHover={{ scale: 1.1, backgroundColor: '#f09', color: '#fff' }}
            >
              {translations[language].skills}
            </motion.a>
            <motion.a 
              href="#experience"
              className="about-btn"
              whileHover={{ scale: 1.1, backgroundColor: '#f09', color: '#fff' }}
            >
              {translations[language].experience}
            </motion.a>
            <motion.a 
              href="#contact"
              className="about-btn"
              whileHover={{ scale: 1.1, backgroundColor: '#f09', color: '#fff' }}
            >
              {translations[language].contact}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutComponent;
