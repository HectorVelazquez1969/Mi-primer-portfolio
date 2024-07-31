import React from "react";

function Contacto() {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="messaje">Mensaje:</label>
        <textarea id="messaje" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
export default Contacto;
