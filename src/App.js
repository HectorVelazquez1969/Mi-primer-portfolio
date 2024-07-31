import React from "react";
import "./App.css";
import Header from "./componentes/Header";
import Navbar from "./componentes/Navbar";
import About from "./componentes/About";
import Proyectos from "./componentes/Proyectos";
import Contactos from "./componentes/Contacto";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Proyectos />
      <Contactos />
    </div>
  );
}

export default App;
