import React from 'react';
import { motion } from 'framer-motion';

const AboutComponent = () => {
  return (
    <section id="about" className="about">
      <motion.div 
        className="about-background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="about-content">
        <motion.img
          src="path/to/profile-image.jpg"
          alt="Profile"
          className="profile-image"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          whileHover={{ scale: 1.05 }}
        />
        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <h2>About Me</h2>
          <p>
            I'm a passionate web developer focused on delivering elegant and modern solutions for clients. 
            With experience in both front-end and back-end, I create fully responsive and interactive web applications...
          </p>
          <motion.a 
            href="#contact"
            className="contact-link"
            whileHover={{ scale: 1.1, backgroundColor: '#f09', color: '#fff' }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutComponent;
