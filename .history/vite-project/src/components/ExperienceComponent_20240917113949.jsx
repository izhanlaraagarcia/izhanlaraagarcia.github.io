// ExperienceComponent.js
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  'White Fish Advertising Co.',
  'Pyramid Sun Advertising Co.',
  'Planet Stationary & Printing Services Co.',
  'Marco Florida Internet & Computer Services Co.',
];

const ExperienceComponent = () => {
  return (
    <section id="experience" className="experience">
      <h3>Experience</h3>
      <div className="experience-cards">
        {experiences.map((experience, idx) => (
          <motion.div
            key={idx}
            className="card"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {experience}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceComponent;
