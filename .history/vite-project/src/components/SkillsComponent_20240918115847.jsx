// SkillsComponent.js
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Photoshop', level: '90%' },
  { name: 'Illustrator', level: '85%' },
  { name: 'Figma', level: '80%' },
];

const skillVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const SkillsComponent = () => {
  return (
    <section id="skills" className="skills">
      <motion.h3
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h3>

      <motion.div
        className="skill-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, idx) => (
          <motion.div key={idx} className="skill" variants={skillVariants}>
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}</span>
            </div>
            <motion.div
              className="bar-container"
              initial={{ width: '0%' }}
              whileInView={{ width: skill.level }}
              transition={{ duration: 1.5 }}
            >
              <motion.div
                className="bar"
                style={{ width: skill.level }}
                initial={{ backgroundColor: '#f09' }}
                animate={{ backgroundColor: ['#f09', '#4caf50'] }}
                transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsComponent;
