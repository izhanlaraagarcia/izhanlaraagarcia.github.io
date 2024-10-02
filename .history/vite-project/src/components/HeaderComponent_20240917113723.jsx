// HeaderComponent.js
import React from 'react';
import { motion } from 'framer-motion';
import './styles/header.css'

const HeaderComponent = () => {
  return (
    <section id="header" className="header">
      <motion.div 
        className="header-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Jason MARTIN</h1>
        <p>Creative Graphic Designer</p>
        <div className="buttons">
          <motion.button whileHover={{ scale: 1.1 }} className="btn">Resume</motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className="btn">Portfolio</motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeaderComponent;
