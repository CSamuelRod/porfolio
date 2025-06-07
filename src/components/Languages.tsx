import React from "react";


const Languages: React.FC = () => {
  return (
    <section id="languages" className="section">
      <h2>🌍 Idiomas</h2>
      <ul className="languages-list">
        <li>
          <span role="img" aria-label="Español" className="flag-icon">🇪🇸</span> Español - <strong>Nativo</strong>
        </li>
        <li>
          <span role="img" aria-label="Inglés" className="flag-icon">🇬🇧</span> Inglés - <strong>Avanzado</strong>
        </li>
      </ul>
    </section>
  );
};

export default Languages;
