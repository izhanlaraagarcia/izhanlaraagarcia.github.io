// FooterComponent.js
import React from 'react';
import { motion } from 'framer-motion';

const FooterComponent = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <p>Florida, Orlando</p>
      <p>Tel: 123-456-7890</p>
    </motion.footer>
  );
};

export default FooterComponent;
