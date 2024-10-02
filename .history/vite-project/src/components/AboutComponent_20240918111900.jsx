import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

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

  // Validación para asegurarnos de que exista una traducción
  const t = translations[language] || translations['en'];

  return (
    <section id="about" className="about">
      <motion.div 
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="about-image"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img 
            src="../assets/IMG_0972.JPEG" 
            alt="Profile" 
          />
        </motion.div>

        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2>{t.title}</h2>
          <p>{t.description}</p>

          <motion.div 
            className="about-skills"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
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

          <motion.button 
            whileHover={{ scale: 1.1 }}
            className="contact-btn"
          >
            {t.button}
          </motion.button>

          <div className="social-icons">
            <motion.a 
              href="https://linkedin.com" 
              target="_blank" 
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="https://github.com" 
              target="_blank" 
              whileHover={{ scale: 1.2 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://twitter.com" 
              target="_blank" 
              whileHover={{ scale: 1.2 }}
            >
              <FaTwitter />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutComponent;
