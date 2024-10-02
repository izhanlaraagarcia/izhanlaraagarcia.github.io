import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';

const FooterComponent = ({ language }) => {
  const [state, handleSubmit] = useForm("myzgqywo");
  // Traducciones para los mensajes de éxito y error
  const translations = {
    en: {
      contactTitle: "Contact Me",
      location: "Izhan Lara García | Palma de Mallorca",
      email: "Email: izhanlaragarcia@gmail.com",
      phone: "Phone: +34 650 067 014",
      messageTitle: "Send a Message",
      followTitle: "Follow Me",
      successMessage: "Thank you! Your message has been sent.",
      errorMessage: "Oops! Something went wrong. Please try again."
    },
    es: {
      contactTitle: "Contáctame",
      location: "Izhan Lara García | Palma de Mallorca",
      email: "Correo Electrónico: izhanlaragarcia@gmail.com",
      phone: "Teléfono: +34 650 067 014",
      messageTitle: "Envíame un Mensaje",
      followTitle: "Sígueme",
      successMessage: "¡Gracias! Tu mensaje ha sido enviado.",
      errorMessage: "¡Vaya! Algo salió mal. Inténtalo de nuevo."
    },
  };

  const t = translations[language] || translations.en; // Traducción en función del idioma

  // Mensaje flotante (centrado) después de enviar el formulario
  const renderMessage = () => {
    if (state.succeeded) {
      return (
        <motion.div 
          className="message-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="message-box">
            <p>{t.successMessage}</p>
          </div>
        </motion.div>
      );
    } else if (state.errors.length > 0) {
      return (
        <motion.div 
          className="message-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="message-box error">
            <p>{t.errorMessage}</p>
          </div>
        </motion.div>
      );
    }
    return null;
  };

  return (
    <>
      {renderMessage()} {/* Mostrar mensaje flotante si es necesario */}

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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder={language === "en" ? "Your Name" : "Tu Nombre"}
                required
              />
              <ValidationError 
                prefix="Name" 
                field="name" 
                errors={state.errors}
              />

              <input
                type="email"
                name="email"
                placeholder={language === "en" ? "Your Email" : "Tu Correo Electrónico"}
                required
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />

              <textarea
                name="message"
                placeholder={language === "en" ? "Your Message" : "Tu Mensaje"}
                required
              ></textarea>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="submit-btn"
                disabled={state.submitting} // Desactiva el botón mientras se envía el formulario
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
    </>
  );
};

export default FooterComponent;
