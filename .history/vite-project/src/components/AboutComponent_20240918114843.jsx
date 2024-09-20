import React from 'react';
import { motion } from 'framer-motion';

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
      description: "I am a passionate web developer who loves creating dynamic and interactive web experiences. With over 5 years of experience in React, JavaScript, and CSS animations, my goal is to craft meaningful and visually stunning websites.",
      skills: "Skills & Expertise",
      skillsList: ["Web Development", "UI/UX Design", "JavaScript", "React", "CSS Animations"],
      button: "Get in Touch",
    },
    es: {
      title: "Sobre Mí",
      description: "Soy un desarrollador web apasionado por crear experiencias web dinámicas e interactivas. Con más de 5 años de experiencia en React, JavaScript y animaciones CSS, mi objetivo es crear sitios web significativos y visualmente impresionantes.",
      skills: "Habilidades & Experiencia",
      skillsList: ["Desarrollo Web", "Diseño UI/UX", "JavaScript", "React", "Animaciones CSS"],
      button: "Contáctame",
    },
  };

  const t = translations[language] || translations.en;

  return (
    <section id="about" className="about-section">
      <motion.div 
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div 
          className="about-image"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src="path/to/profile-image.jpg" alt="Profile" className="profile-image" />
        </motion.div>

        <motion.div className="about-text" variants={itemVariants}>
          <h2>{t.title}</h2>
          <p>{t.description}</p>

          <motion.div 
            className="about-skills-grid"
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.5, staggerChildren: 0.3 }}
          >
            <h3>{t.skills}</h3>
            <div className="skills-wrapper">
              {t.skillsList.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="skill-card"
                  whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.button 
            whileHover={{ scale: 1.2, backgroundColor: "#f09" }}
            className="contact-btn"
            transition={{ type: "spring", stiffness: 100 }}
          >
            {t.button}
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="section-divider">
        <svg viewBox="0 0 1440 320">
          <path fill="#0099ff" fillOpacity="1" d="M0,256L120,240C240,224,480,192,720,165.3C960,139,1200,117,1320,106.7L1440,96V320H0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default AboutComponent;
