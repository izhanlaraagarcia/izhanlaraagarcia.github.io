// ExperienceComponent.js
import React from 'react';
import { motion } from 'framer-motion';

const ExperienceComponent = () => {
  return (
    <motion.section
      className="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h3>Experience</h3>
      <ul>
        <motion.li whileHover={{ scale: 1.05 }}>White Fish Advertising Co.</motion.li>
        <motion.li whileHover={{ scale: 1.05 }}>Pyramid Sun Advertising Co.</motion.li>
        <motion.li whileHover={{ scale: 1.05 }}>Planet Stationary & Printing Services Co.</motion.li>
        <motion.li whileHover={{ scale: 1.05 }}>Marco Florida Internet & Computer Services Co.</motion.li>
      </ul>
    </motion.section>
  );
};

export default ExperienceComponent;
