import React from "react";
import { motion } from "framer-motion";

const SkillsComponent = ({ language }) => {
  // Traducciones para los títulos y habilidades
  const translations = {
    en: {
      title: "My Skills",
      skills: [
        { name: "Problem Solving", level: "90%" },
        { name: "Communication", level: "85%" },
        { name: "Work under Pressure", level: "80%" },
        { name: "Technical Knowledge", level: "75%" },
        { name: "Continuous Learning", level: "85%" },
        { name: "Teamwork", level: "80%" },
      ],
    },
    es: {
      title: "Mis Habilidades",
      skills: [
        { name: "Resolución de problemas", level: "90%" },
        { name: "Comunicación", level: "85%" },
        { name: "Trabajo bajo presión", level: "80%" },
        { name: "Conocimiento técnico", level: "75%" },
        { name: "Aprendizaje continuo", level: "85%" },
        { name: "Trabajo en equipo", level: "80%" },
      ],
    },
  };

  const t = translations[language] || translations.en; // Traducción en función del idioma

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
  };

  const barVariants = {
    hidden: { width: "0%" },
    visible: (level) => ({
      width: level,
      transition: { duration: 2, type: "spring", stiffness: 100 },
    }),
  };

  return (
    <motion.section
      id="skills"
      className="skills full-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h3
        className="skills-title"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, duration: 1.5 }}
      >
        {t.title} {/* Título en función del idioma */}
      </motion.h3>

      <div className="skill-bars">
        {t.skills.map((skill, idx) => (
          <div key={idx} className="skill">
            <motion.span
              className="skill-name"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {skill.name} {/* Nombre de la habilidad traducida */}
            </motion.span>
            <motion.div
              className="bar"
              custom={skill.level}
              variants={barVariants}
              initial="hidden"
              animate="visible"
            />
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsComponent;
