import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const FooterComponent = () => {
  return (
    <motion.footer
      id="footer"
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact Me</h3>
          <p>Izhan Lara García | Palma de Mallorca</p>
          <p><FaEnvelope /> Email: izhanlara@gmail.com</p>
          <p><FaPhone /> Phone: +34 672 486 479</p>
        </div>

        <div className="contact-form">
          <h3>Send a Message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="submit-btn"
            >
              Send
            </motion.button>
          </form>
        </div>

        <div className="social-links">
          <h3>Follow Me</h3>
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            href="https://www.linkedin.com/in/izhan-lara-garcia"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            href="https://github.com/izhanlaraagarcia"
            aria-label="GitHub"
          >
            <FaGithub />
          </motion.a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Izhan Lara García</p>
      </div>
    </motion.footer>
  );
};

export default FooterComponent;
