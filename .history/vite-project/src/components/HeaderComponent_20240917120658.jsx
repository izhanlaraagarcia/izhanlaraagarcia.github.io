// HeaderComponent.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-scroll';

const HeaderComponent = () => {
  return (
    <header className="header" id="header">
      {/* Menú de navegación */}
      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="header" smooth={true}>Home</Link></li>
          <li><Link to="about" smooth={true}>About</Link></li>
          <li><Link to="skills" smooth={true}>Skills</Link></li>
          <li><Link to="experience" smooth={true}>Experience</Link></li>
          <li><Link to="footer" smooth={true}>Contact</Link></li>
        </ul>
      </nav>

      {/* Contenido principal del header */}
      <motion.div 
        className="header-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="header-title">Jason MARTIN</h1>
        <p className="header-subtitle">Creative Graphic Designer</p>

        {/* Botones de CTA */}
        <div className="header-buttons">
          <motion.button whileHover={{ scale: 1.1 }} className="btn">Resume</motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className="btn">Portfolio</motion.button>
        </div>

        {/* Redes sociales minimalistas */}
        <div className="social-icons">
          <motion.a href="https://linkedin.com" target="_blank" whileHover={{ scale: 1.1 }}><FaLinkedin /></motion.a>
          <motion.a href="https://github.com" target="_blank" whileHover={{ scale: 1.1 }}><FaGithub /></motion.a>
          <motion.a href="https://twitter.com" target="_blank" whileHover={{ scale: 1.1 }}><FaTwitter /></motion.a>
        </div>
      </motion.div>
    </header>
  );
};

export default HeaderComponent;
