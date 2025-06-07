import React from "react";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <h2>🚀 Proyectos Destacados</h2>
      <div className="projects-container">
        <article className="project-card">
          <h3>Healthy.bot - App de Hábitos Saludables</h3>
          <p>
            Desarrollo de una aplicación multiplataforma para gestionar hábitos diarios saludables, utilizando Java con Spring Boot, MySQL y Hibernate.
          </p>
          <a
            href="https://github.com/CSamuelRod/healthy.bot"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link"
            aria-label="Ver proyecto Healthy.bot en GitHub"
          >
            <i className="fab fa-github"></i> Ver en GitHub
          </a>
        </article>

        <article className="project-card">
          <h3>CRUD con Thymeleaf</h3>
          <p>
            Aplicación para gestión básica de usuarios con interfaz gráfica basada en HTML templates y base de datos. Java con Spring Boot y Thymeleaf.
          </p>
          <a
            href="https://github.com/CSamuelRod/CRUD_Thymeleaf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link"
            aria-label="Ver proyecto CRUD con Thymeleaf en GitHub"
          >
            <i className="fab fa-github"></i> Ver en GitHub
          </a>
        </article>

        <article className="project-card">
          <h3>Portfolio Personal</h3>
          <p>
            Portfolio personal responsivo, con sección de contacto, animaciones y optimización SEO.
          </p>
          <a
            href="https://csamuelrod.github.io/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link"
            aria-label="Ver demo del Portfolio Personal"
          >
            <i className="fas fa-external-link-alt"></i> Ver demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Projects;
