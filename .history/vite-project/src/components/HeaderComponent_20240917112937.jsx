// HeaderComponent.js
import React from 'react';
import { motion } from 'framer-motion';

const HeaderComponent = () => {
  return (
    <motion.header 
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="header-content">
        <motion.h1 
          initial={{ scale: 0.9 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.5 }}>
          Jason MARTIN
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Graphic Designer
        </motion.p>
        <div className="buttons">
          <motion.button 
            whileHover={{ scale: 1.1, backgroundColor: '#f09' }} 
            className="btn">
            Resume
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1, backgroundColor: '#f09' }} 
            className="btn">
            Portfolio
          </motion.button>
        </div>
        <div className="social-icons">
          {['behance', 'linkedin', 'dribbble', 'twitter'].map((icon, idx) => (
            <motion.i
              key={idx}
              className={`fab fa-${icon}`}
              whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </div>
    </motion.header>
  );
};

export default HeaderComponent;
