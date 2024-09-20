import React from "react";
import { motion } from "framer-motion";
import "./main.css";

const projects = [
  {
    title: "Proyecto 1",
    description: "Descripción del Proyecto 1.",
    image: "/ruta/a/la/imagen1.jpg",
    link: "#",
  },
  {
    title: "Proyecto 2",
    description: "Descripción del Proyecto 2.",
    image: "/ruta/a/la/imagen2.jpg",
    link: "#",
  },
  {
    title: "Proyecto 3",
    description: "Descripción del Proyecto 3.",
    image: "/ruta/a/la/imagen3.jpg",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <motion.h1
        className="portfolio-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Mis Proyectos
      </motion.h1>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <motion.div
            className="portfolio-item"
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="portfolio-image"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="portfolio-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="portfolio-link">
                Ver más
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
