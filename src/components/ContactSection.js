import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <form>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo" required />
        <textarea placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default ContactSection;
