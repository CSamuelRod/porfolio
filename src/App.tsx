// Estructura base del portfolio en React + TypeScript
// src/App.tsx
import React from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import SoftSkills from "./components/SoftSkills";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <About />
        <Experience />
        <Education />
        <Skills />
        <SoftSkills />
        <Projects />
        <Languages />
        <ContactInfo />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
