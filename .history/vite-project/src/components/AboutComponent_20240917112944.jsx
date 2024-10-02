// AboutComponent.js
import React from 'react';
import { motion } from 'framer-motion';

const AboutComponent = () => {
  return (
    <section className="about">
      <motion.div 
        className="about-text"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>About</h2>
        <p>Graphic Designer with over 10 years of experience...</p>
        <p>Email: jmartin@upwork.com</p>
      </motion.div>
      <motion.div 
        className="about-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <img src="your-image-url" alt="Jason Martin" />
      </motion.div>
    </section>
  );
};

export default AboutComponent;
