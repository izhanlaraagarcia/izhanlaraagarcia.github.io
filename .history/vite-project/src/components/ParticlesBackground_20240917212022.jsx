import React, { useEffect } from 'react';
import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const particlesContainer = document.getElementById('tsparticles');
      particlesContainer.style.transform = `translateY(${scrollPos * 0.5}px)`; // Ajuste del movimiento
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        // Configuración de partículas, como el ejemplo anterior
        background: {
          color: { value: "#000" },
        },
        particles: {
          number: {
            value: 80,
            density: { enable: true, value_area: 800 },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: { enable: true, speed: 6 },
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesBackground;
