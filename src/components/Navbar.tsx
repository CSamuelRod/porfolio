import React, { useState, useEffect } from "react";


const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(prev => !prev);

  return (
    <header>
      <nav className="navbar">
        <ul>
          <li><a href="#about">Inicio</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#education">Estudios</a></li>
          <li><a href="#skills">Habilidades Técnicas</a></li>
          <li><a href="#soft-skills">Habilidades Blandas</a></li>
          <li><a href="#contact-info">Contacto</a></li>
        </ul>

      </nav>
    </header>
  );
};

export default Navbar;
