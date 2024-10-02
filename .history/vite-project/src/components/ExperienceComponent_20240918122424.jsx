import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa'; // Añadimos íconos
const experiences = [
  {
    company: 'W2M',
    role: 'Help Desk IT',
    duration: '03/2022 - 03/2023, Palma de Mallorca',
  },
  {
    company: 'W2M',
    role: 'Help Desk - Applications Support',
    duration: '03/2023 - Present, Palma de Mallorca',
  },
];

const ExperienceComponent = () => {
  return (
    <section id="experience" className="experience">
      <h3 className="experience-title">Experience</h3>
      <div className="experience-cards">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <FaBriefcase className="experience-icon" />
            <h4 className="company-name">{exp.company}</h4>
            <p className="role">{exp.role}</p>
            <p className="duration">{exp.duration}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceComponent;
