// // HeaderComponent.jsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-scroll';

// import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';


// const HeaderComponent = () => {
//   return (
//     <header className="header" id="header">
//       {/* Menú de navegación */}
//       <nav className="nav">
//         <ul className="nav-list">
//           <li><Link to="header" smooth={true}>Home</Link></li>
//           <li><Link to="about" smooth={true}>About</Link></li>
//           <li><Link to="skills" smooth={true}>Skills</Link></li>
//           <li><Link to="experience" smooth={true}>Experience</Link></li>
//           <li><Link to="footer" smooth={true}>Contact</Link></li>
//         </ul>
//       </nav>

//       {/* Contenido principal del header */}
//       <motion.div 
//         className="header-content"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5 }}
//       >
//         {/* Animación llamativa para el nombre */}
//         <motion.h1 
//           className="header-title"
//           initial={{ scale: 0, y: -100 }}
//           animate={{ scale: [1.2, 1], y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           whileHover={{ scale: 1.05, color: "#f09" }}  // Efecto hover
//         >
//           Izhan Lara Garcia
//         </motion.h1>

//         <p className="header-subtitle">Junior Web Developer</p>

//         {/* Botones de CTA */}
//         <div className="header-buttons">
//           <motion.button whileHover={{ scale: 1.1 }} className="btn">Resume</motion.button>
//           <motion.button whileHover={{ scale: 1.1 }} className="btn">Portfolio</motion.button>
//         </div>

//         {/* Redes sociales minimalistas */}
//         <div className="social-icons">
//           <motion.a href="https://linkedin.com" target="_blank" whileHover={{ scale: 1.1 }}><FaLinkedin /></motion.a>
//           <motion.a href="https://github.com" target="_blank" whileHover={{ scale: 1.1 }}><FaGithub /></motion.a>
//           <motion.a href="https://twitter.com" target="_blank" whileHover={{ scale: 1.1 }}><FaTwitter /></motion.a>
//         </div>
//       </motion.div>
//     </header>
//   );
// };

// export default HeaderComponent;
import React, { useState } from 'react';

const HeaderComponent = () => {
  // Estado para manejar el idioma (por defecto inglés)
  const [language, setLanguage] = useState('en');

  // Traducciones simples
  const translations = {
    en: {
      name: "Izhan Lara García",
      title: "Junior Web Developer",
      resume: "Resume",
      portfolio: "Portfolio",
    },
    es: {
      name: "Izhan Lara García",
      title: "Desarrollador Web Junior",
      resume: "Currículum",
      portfolio: "Portafolio",
    },
  };

  // Función para alternar idioma
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
  };

  return (
    <header className="header" id="header">
      {/* Botón para cambiar el idioma */}
      <button className="lang-btn" onClick={toggleLanguage}>
        {language === 'en' ? 'Español' : 'English'}
      </button>

      {/* Contenido principal del header */}
      <div className="header-content">
        <h1 className="header-title">
          {translations[language].name}
        </h1>
        <p className="header-subtitle">
          {translations[language].title}
        </p>

        {/* Botones del portafolio */}
        <div className="header-buttons">
          <button className="btn">
            {translations[language].resume}
          </button>
          <button className="btn">
            {translations[language].portfolio}
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
