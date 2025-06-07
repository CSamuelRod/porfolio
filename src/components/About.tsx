import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="section intro">
      <h1>👋 Hola, soy <span>Samuel Rodríguez</span></h1>
      <h3>Desarrollador junior apasionado por la tecnología y el aprendizaje continuo.</h3>
      <p>
        Graduado en Desarrollo de Aplicaciones Multiplataforma, listo para aportar valor real en tu equipo. 
        Me adapto rápido a nuevas tecnologías y disfruto creando soluciones eficientes que resuelven problemas reales.
        ¿Buscas a alguien con ganas de crecer y aportar desde el primer día? ¡Aquí estoy!
      </p>
      <a href="#contact-form" className="btn-contact">📩 ¡Hablemos! Contáctame</a>
    </section>
  );
};

export default About;
