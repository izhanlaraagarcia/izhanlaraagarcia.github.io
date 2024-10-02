// AboutComponent.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaLaptopCode } from 'react-icons/fa';
import Particles from "react-tsparticles"; // Efecto de partículas en el fondo
import { loadFull } from "tsparticles"; // Para cargar el preset de partículas

const AboutComponent = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section id="about" className="about">
      {/* Efecto de partículas en el fondo */}
      <Particles 
        id="tsparticles" 
        init={particlesInit}
        options={{
          background: {
            color: "#111",
          },
          fpsLimit: 60,
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      <div className="about-content">
        <motion.img 
          src="path/to/profile-image.jpg" 
          alt="Profile"
          className="profile-image"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring" }}
          whileHover={{ scale: 1.1, rotate: 5 }} // Mejor hover en imagen
        />
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="about-heading"
          >
            About Me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="about-description"
          >
            I’m a passionate web developer focused on creating immersive, user-friendly websites with beautiful, functional design...
          </motion.p>

          {/* Sección de habilidades con íconos */}
          <div className="about-icons">
            <motion.div
              whileHover={{ scale: 1.2, rotate: -5 }}
              transition={{ duration: 0.3 }}
            >
              <FaCode size={40} color="#f09" />
              <p>Web Development</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: -5 }}
              transition={{ duration: 0.3 }}
            >
              <FaPalette size={40} color="#f09" />
              <p>UI/UX Design</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: -5 }}
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
