import React from 'react';
import { motion } from 'framer-motion';

// Variantes de animación para un efecto impresionante
const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.2, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.3 }
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    backgroundColor: "#ff66b2",
    transition: { duration: 0.3, yoyo: Infinity }
  }
};

const AboutComponent = ({ language }) => {
  const translations = {
    en: {
      title: "About Me",
      description: "I am a web developer focused on delivering immersive, interactive experiences. My passion lies in creating visually striking, meaningful websites that captivate users with smooth animations and cutting-edge design.",
      button: "Let's Connect",
    },
    es: {
      title: "Sobre Mí",
      description: "Soy un desarrollador web enfocado en crear experiencias inmersivas e interactivas. Mi pasión está en crear sitios web visualmente impactantes y significativos, que cautiven a los usuarios con animaciones fluidas y un diseño innovador.",
      button: "Conectemos",
    },
  };

  const t = translations[language] || translations['en'];

  return (
    <section id="about" className="about-section">
      <motion.div 
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Imagen de perfil con efecto zoom */}
        <motion.div 
          className="profile-image-wrapper"
          whileHover={{ scale: 1.05, rotate: 3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img 
            src="path/to/profile-image.jpg" 
            alt="Profile" 
            className="profile-image"
          />
        </motion.div>

        {/* Texto del "About Me" con animación fluida */}
        <motion.div className="about-text" variants={textVariants}>
          <h2 className="about-title">{t.title}</h2>
          <p className="about-description">{t.description}</p>

          {/* Botón de contacto con animación vibrante */}
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
