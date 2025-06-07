import React from "react";


const Skills: React.FC = () => {
  return (
    <section id="skills" className="section">
      <h2>🛠️ Habilidades Técnicas</h2>

      <h3>Lenguajes de Programación</h3>
      <ul className="skills-list">
        <li><i className="fab fa-js"></i> JavaScript</li>
        <li><i className="fab fa-java"></i> Java</li>
        <li><i className="fab fa-kotlin"></i> Kotlin</li>
      </ul>

      <h3>Tecnologías de Base de Datos</h3>
      <ul className="skills-list">
        <li><i className="fas fa-database"></i> MySQL</li>
        <li><i className="fas fa-database"></i> PostgreSQL</li>
        <li><i className="fas fa-database"></i> Firebase</li>
        <li><i className="fas fa-database"></i> MongoDB</li>
      </ul>

      <h3>Control de Versiones</h3>
      <ul className="skills-list">
        <li><i className="fab fa-git"></i> Git</li>
        <li><i className="fab fa-github"></i> GitHub</li>
      </ul>
    </section>
  );
};

export default Skills;
