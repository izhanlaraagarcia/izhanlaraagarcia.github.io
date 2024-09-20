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
    <section id="skills" className="skills">
      <h3>My Skills</h3>
      <div className="skill-bars">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill">
            <span>{skill.name}</span>
            <motion.div
              className="bar"
              initial={{ width: '0%' }}
              whileInView={{ width: skill.level }}
              transition={{ duration: 1.5 }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsComponent;
