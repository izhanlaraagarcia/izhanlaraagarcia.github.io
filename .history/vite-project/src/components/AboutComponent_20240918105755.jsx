import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutComponent = ({ language, translations }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [hover, setHover] = useState(false);

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
          <h2>{translations[language].about.title}</h2>
          <p>{translations[language].about.description}</p>
          <motion.button
            className="more-info-btn"
            whileHover={{ scale: 1.1, backgroundColor: "#f09" }}
            transition={{ duration: 0.3 }}
          >
            {translations[language].about.buttonMore}
          </motion.button>
          <motion.button
            className="download-cv-btn"
            whileHover={{ scale: 1.1, backgroundColor: "#34d399" }}
            transition={{ duration: 0.3 }}
          >
            {translations[language].about.downloadCV}
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
        <h3>{translations[language].about.funFactTitle}</h3>
        <p>{translations[language].about.funFact}</p>
      </motion.div>
    </section>
  );
};

export default AboutComponent;
