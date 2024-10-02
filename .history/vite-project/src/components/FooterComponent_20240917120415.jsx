// FooterComponent.js
import React from 'react';
import { motion } from 'framer-motion';

const FooterComponent = () => {
  return (
    <motion.footer
      id="footer"
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p>Jason Martin | Florida, Orlando</p>
      <p>Email: jmartin@upwork.com</p>
    </motion.footer>
  );
};

export default FooterComponent;
