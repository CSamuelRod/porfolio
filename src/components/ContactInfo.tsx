// src/components/ContactInfo.tsx
import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <section id="contact-info" className="section contact-info">
      <h2>📌 Información de Contacto</h2>
      <ul className="info-list">
        <li>📞 Teléfono: +34 640 084 196</li>
        <li>
          📩 Email:{" "}
          <a href="mailto:samuel@gmail.com">samuel.rodpal@gmail.com</a>
        </li>
          <li>🕒 Disponibilidad: Empleado actualmente, abierto a nuevas oportunidades con preaviso</li>
      </ul>

      <h3>🌐 Enlaces</h3>
      <ul className="link-list">
        <li>
          <a
            href="https://github.com/CSamuelRod"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" style={{ marginRight: "0.5rem" }}></i>
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/carlos-samuel-rodriguez-palomino/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" style={{ marginRight: "0.5rem" }}></i>
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="/CarlosSamuelRodriguezCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-file-download" style={{ marginRight: "0.5rem" }}></i>
            Descargar CV
          </a>
        </li>
      </ul>
    </section>
  );
};

export default ContactInfo;
