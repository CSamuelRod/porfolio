import React from "react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section">
      <h2>💼 Experiencia Laboral</h2>

      <ul>
        {/* DEISTER CONSULTING */}
        <li>
          <h3>Empleado en Prácticas - Deister Consulting</h3>
          <p><strong>Febrero 2025 - Junio 2025</strong></p>
          <p><strong>Modalidad:</strong> Presencial - Madrid, España</p>
          <p>
            Durante mi formación interna en la empresa, trabajé con la plataforma <strong>Axional</strong> sobre bases de datos <strong>Informix</strong>, adquiriendo experiencia práctica en el desarrollo y mantenimiento de sistemas empresariales. 
          </p>
          <p>Principales responsabilidades y habilidades desarrolladas:</p>
          <ul>
            <li>Gestión y mantenimiento de bases de datos relacionales con Axional e Informix.</li>
            <li>Programación en JavaScript para eventos, llamadas y acciones dinámicas.</li>
            <li>Creación de triggers y procedimientos para automatizar flujos en la base de datos.</li>
            <li>Procesamiento y tratamiento de datos bajo reglas de negocio.</li>
            <li>Manipulación de ficheros XML para intercambio estructurado de información.</li>
            <li>Mejora de la usabilidad (UX) en la interfaz de usuario.</li>
            <li>Participación en el diseño funcional de procesos, integrando front-end y back-end.</li>
          </ul>
          <h4>Tecnologías utilizadas:</h4>
          <ul>
            <li>Axional</li>
            <li>Informix</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>XML</li>
          </ul>
        </li>
        {/* SIMON DICE SK */}
        <li>
          <h3>Empleado en Prácticas - Simon Dice SK</h3>
          <p><strong>Abril 2023 - Marzo 2024</strong></p>
            <p><strong>Modalidad:</strong> Presencial - Madrid, España</p>

          <p>
            Desarrollé un portal de login con autenticación segura y creé formularios para el registro de datos, almacenando la información en una base de datos NoSQL.
          </p>
          <p>
            Además, implementé un CRUD para la gestión de registros y documenté el código para garantizar la mantenibilidad del proyecto.
          </p>
          <h4>Tecnologías utilizadas:</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Firebase</li>
          </ul>
          <h4>Metodología ágil utilizada:</h4>
          <p>Kanban</p>
        </li>

      </ul>
    </section>
  );
};

export default Experience;
