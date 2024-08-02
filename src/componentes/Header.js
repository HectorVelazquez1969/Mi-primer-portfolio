import React from "react";
import '../Header.css';


export default function Header() {
  return (
    <header className="header">
      <div className="Hector">
        <img src="mifoto.jpg" alt="mifoto" className="header-logo"/>
      </div>
      <h1 className="titulo1">Mi Portfolio</h1>
    </header>
  );
}