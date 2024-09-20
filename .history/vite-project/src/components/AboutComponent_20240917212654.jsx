// AboutComponent.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaLaptopCode } from 'react-icons/fa'; // Ejemplo de íconos de habilidades

const AboutComponent = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <motion.img 
          src="path/to/profile-image.jpg" 
          alt="Profile"
          className="profile-image"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring" }}
          whileHover={{ scale: 1.05, rotate: 2 }} // Efecto hover en la imagen
        />
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>About Me</h2>
          <p>I’m a passionate web developer with a love for creating beautiful, functional, and user-friendly websites...</p>
          
          {/* Sección de habilidades con íconos */}
          <div className="about-icons">
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <FaCode size={40} color="#f09" />
              <p>Web Development</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <FaPalette size={40} color="#f09" />
              <p>UI/UX Design</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <FaLaptopCode size={40} color="#f09" />
              <p>Responsive Design</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutComponent;
