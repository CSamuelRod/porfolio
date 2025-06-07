import React, { useState } from "react";
import emailjs from "@emailjs/browser";

emailjs.init("k7BHvG2Hq26c2ixz8");

const ContactForm: React.FC = () => {
  const [formStatus, setFormStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("Enviando mensaje...");

    const templateParams = {
      from_name: formData.name,
      email: formData.email,
      message: formData.message,
      to_name: "Samuel",
    };

    emailjs
      .send("service_ok6tkmm", "template_mevefb9", templateParams)
      .then(() => {
        setFormStatus("¡Mensaje enviado! 🎉 Me pondré en contacto contigo pronto.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setFormStatus("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.");
      });
  };

  return (
    <form
      id="contact-form" // 👈 IMPORTANTE para que el CSS funcione
      onSubmit={handleSubmit}
      aria-label="Formulario de contacto"
      noValidate
    >
      <label htmlFor="name">Nombre:</label>
      <input
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        required
        aria-required="true"
        aria-describedby="nameHelp"
      />

      <label htmlFor="email">Correo Electrónico:</label>
      <input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        aria-required="true"
        aria-describedby="emailHelp"
      />

      <label htmlFor="message">Mensaje:</label>
      <textarea
        id="message"
        name="message"
        rows={4}
        value={formData.message}
        onChange={handleChange}
        required
        aria-required="true"
        aria-describedby="messageHelp"
      />

      <button type="submit">Enviar</button>

      <p id="form-status" role="alert" aria-live="polite">
        {formStatus}
      </p>
    </form>
  );
};

export default ContactForm;
