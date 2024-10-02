// Portfolio.js
import React from 'react';
import './main.css';

const projects = [
  {
    title: 'Proyecto 1',
    description: 'Descripción del Proyecto 1.',
    image: '/ruta/a/la/imagen1.jpg',
    link: '#'
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción del Proyecto 2.',
    image: '/ruta/a/la/imagen2.jpg',
    link: '#'
  },
  {
    title: 'Proyecto 3',
    description: 'Descripción del Proyecto 3.',
    image: '/ruta/a/la/imagen3.jpg',
    link: '#'
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h1 className="portfolio-title">Mis Proyectos</h1>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-item" key={index}>
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <div className="portfolio-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="portfolio-link">Ver más</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
