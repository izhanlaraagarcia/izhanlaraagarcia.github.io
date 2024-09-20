import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

// Variantes de animación para efectos avanzados
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AboutComponent = ({ language }) => {
  const translations = {
    en: {
      title: "About Me",
      description: "I am a passionate web developer with a love for creating dynamic and interactive web experiences. With over 5 years of experience in web development, I specialize in React, JavaScript, and CSS animations. My goal is to craft meaningful and visually stunning websites.",
      skills: "Skills & Expertise",
      skillsList: ["Web Development", "UI/UX Design", "JavaScript", "React", "CSS Animations"],
      button: "Contact Me",
    },
    es: {
      title: "Sobre Mí",
      description: "Soy un desarrollador web apasionado con amor por crear experiencias web dinámicas e interactivas. Con más de 5 años de experiencia en desarrollo web, me especializo en React, JavaScript y animaciones CSS. Mi objetivo es crear sitios web significativos y visualmente impactantes.",
      skills: "Habilidades & Experiencia",
      skillsList: ["Desarrollo Web", "Diseño UI/UX", "JavaScript", "React", "Animaciones CSS"],
      button: "Contáctame",
    },
  };

  const t = translations[language] || translations['en'];

  return (
    <section id="about" className="about">
      <motion.div 
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}  // Efecto parallax visible al hacer scroll
      >
        {/* Imagen de perfil con efecto parallax */}
        <motion.div 
          className="about-image"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src="path/to/profile-image.jpg" 
            alt="Profile" 
          />
        </motion.div>

        {/* Texto del "About Me" */}
        <motion.div 
          className="about-text"
          variants={itemVariants}
        >
          <h2>{t.title}</h2>
          <p>{t.description}</p>

          {/* Lista de habilidades con animación de aparición secuencial */}
          <motion.div 
            className="about-skills"
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.5, staggerChildren: 0.3 }}
          >
            <h3>{t.skills}</h3>
            <ul>
              {t.skillsList.map((skill, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Botón de contacto con animación */}
          <motion.button 
            whileHover={{ scale: 1.2, backgroundColor: "#f09" }}
            className="contact-btn"
            transition={{ type: "spring", stiffness: 100 }}
          >
            {t.button}
          </motion.button>

          {/* Iconos sociales con tooltips */}
          <div className="social-icons">
            <motion.a 
              href="https://linkedin.com" 
              target="_blank" 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              title="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="https://github.com" 
              target="_blank" 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              title="GitHub"
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://twitter.com" 
              target="_blank" 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              title="Twitter"
            >
              <FaTwitter />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Curvas decorativas al final de la sección */}
      <div className="section-divider">
        <svg viewBox="0 0 1440 320">
          <path fill="#0099ff" fillOpacity="1" d="M0,256L120,240C240,224,480,192,720,165.3C960,139,1200,117,1320,106.7L1440,96V320H0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default AboutComponent;
