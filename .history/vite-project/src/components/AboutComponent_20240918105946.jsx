import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutComponent = ({ language, translations }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [hover, setHover] = useState(false);

  // Validación para asegurar que las traducciones existen
  const aboutTranslations = translations[language]?.about || {};

  return (
    <section id="about" className="about full-screen">
      <div className="about-content" ref={ref}>
        <motion.div
          className="about-profile"
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1.2 }}
        >
          <motion.img
            src="path/to/profile-image.jpg"
            alt="Profile"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="profile-img"
          />
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 1.2 }}
        >
          <h2>{aboutTranslations.title || 'About Me'}</h2>
          <p>{aboutTranslations.description || 'I’m a passionate web developer...'}</p>
          <motion.button
            className="more-info-btn"
            whileHover={{ scale: 1.1, backgroundColor: "#f09" }}
            transition={{ duration: 0.3 }}
          >
            {aboutTranslations.buttonMore || 'Learn More'}
          </motion.button>
          <motion.button
            className="download-cv-btn"
            whileHover={{ scale: 1.1, backgroundColor: "#34d399" }}
            transition={{ duration: 0.3 }}
          >
            {aboutTranslations.downloadCV || 'Download CV'}
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="about-extra"
        initial={{ scale: 0.9 }}
        animate={hover ? { scale: 1.05 } : { scale: 1 }}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        transition={{ duration: 0.8 }}
      >
        <h3>{aboutTranslations.funFactTitle || 'Fun Fact'}</h3>
        <p>{aboutTranslations.funFact || 'I can code for hours without noticing time passing by!'}</p>
      </motion.div>
    </section>
  );
};

export default AboutComponent;
