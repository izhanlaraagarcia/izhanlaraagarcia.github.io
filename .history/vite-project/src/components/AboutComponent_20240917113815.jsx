// AboutComponent.js
import React from 'react';
import { motion } from 'framer-motion';

const AboutComponent = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <motion.img 
          src="path/to/profile-image.jpg" 
          alt="Profile"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>About Me</h2>
          <p>I’m a passionate graphic designer with over 10 years of experience...</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutComponent;
