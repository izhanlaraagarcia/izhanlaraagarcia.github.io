// SkillsComponent.js
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Photoshop', level: '90%' },
  { name: 'Illustrator', level: '85%' },
  { name: 'Figma', level: '80%' },
];

const SkillsComponent = () => {
  return (
    <section className="skills">
      <motion.div
        className="software-skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3>Software Skills</h3>
        <ul>
          {skills.map((skill, idx) => (
            <li key={idx}>
              {skill.name}
              <motion.span className="bar">
                <motion.span
                  className="progress"
                  initial={{ width: '0%' }}
                  animate={{ width: skill.level }}
                  transition={{ duration: 1 }}
                />
              </motion.span>
            </li>
          ))}
        </ul>
      </motion.div>
      {/* Secciones adicionales */}
    </section>
  );
};

export default SkillsComponent;
