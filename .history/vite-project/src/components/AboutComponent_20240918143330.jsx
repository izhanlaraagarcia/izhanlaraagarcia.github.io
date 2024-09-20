import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      description: "I am a passionate 21-year-old software developer with a solid programming foundation and a great desire to learn. I'm ready to start my career as a junior developer and eager to apply my skills in a team environment.",
      button: "Let's Connect",
    },
    es: {
      title: "Sobre Mí",
      description: "Soy un apasionado desarrollador de software de 21 años con una sólida base en programación y un gran deseo de aprender. Estoy listo para comenzar mi carrera como desarrollador junior y aplicar mis habilidades en un entorno de equipo.",
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
        <motion.div 
          className="profile-image-wrapper"
          whileHover={{ scale: 1.05, rotate: 3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img 
            src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/343888962/original/6390876df1dceff78be91e8b27e84e33a85e5248/design-animated-discord-pfp-banner-avatar-and-icon.jpg" 
            alt="Profile" 
            className="profile-image"
          />
        </motion.div>

        <motion.div className="about-text" variants={textVariants}>
          <h2 className="about-title">{t.title}</h2>
          <p className="about-description">{t.description}</p>

          <motion.button className="contact-btn" variants={buttonVariants}>
  <Link to="#footer">{t.button}</Link>
</motion.button>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutComponent;
