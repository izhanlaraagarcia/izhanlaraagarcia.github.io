import React, { useState } from "react";
import Menu from "./components/Menu";
import "./App.scss"; // Importa el archivo SCSS con las animaciones
import Inicio from "./components/Inicio";
import SobreMi from "./components/SobreMi";
import Contacto from "./components/Contacto";

function App() {
  const [activeSection, setActiveSection] = useState("inicio");

  const renderSection = () => {
    switch (activeSection) {
      case "inicio":
        return <Inicio />;
      case "sobre-mi":
        return <SobreMi />;
      case "contacto":
        return <Contacto />;
      default:
        return <Inicio />;
    }
  };

  return (
    <div className="app-container">
      <Menu setActiveSection={setActiveSection} />
      <div className={`content-section ${activeSection === "inicio" ? "active" : ""}`}>
        {renderSection()}
      </div>
    </div>
  );
}

export default App;
