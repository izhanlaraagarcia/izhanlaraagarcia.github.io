import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const FooterComponent = ({ language }) => {
  // Traducciones para el footer
  const translations = {
    en: {
      contactTitle: "Contact Me",
      location: "Izhan Lara García | Palma de Mallorca",
      email: "Email: izhanlara@gmail.com",
      phone: "Phone: +34 672 486 479",
      messageTitle: "Send a Message",
      followTitle: "Follow Me",
    },
    es: {
      contactTitle: "Contáctame",
      location: "Izhan Lara García | Palma de Mallorca",
      email: "Correo Electrónico: izhanlara@gmail.com",
      phone: "Teléfono: +34 672 486 479",
      messageTitle: "Envíame un Mensaje",
      followTitle: "Sígueme",
    },
  };

  const t = translations[language] || translations.en; // Traducción en función del idioma

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
          <h3>{t.contactTitle}</h3>
          <p>{t.location}</p>
          <p>
            <FaEnvelope /> {t.email}
          </p>
          <p>
            <FaPhone /> {t.phone}
          </p>
        </div>

        <div className="contact-form">
          <h3>{t.messageTitle}</h3>
          <form>
            <input
              type="text"
              placeholder={language === "en" ? "Your Name" : "Tu Nombre"}
              required
            />
            <input
              type="email"
              placeholder={
                language === "en" ? "Your Email" : "Tu Correo Electrónico"
              }
              required
            />
            <textarea
              placeholder={language === "en" ? "Your Message" : "Tu Mensaje"}
              required
            ></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="submit-btn"
            >
              {language === "en" ? "Send" : "Enviar"}
            </motion.button>
          </form>
        </div>

        <div className="social-links">
          <h3>{t.followTitle}</h3>
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            href="https://linkedin.com/in/izhan-lara-garcía"
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
