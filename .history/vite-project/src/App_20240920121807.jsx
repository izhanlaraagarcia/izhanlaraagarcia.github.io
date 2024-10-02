import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import PortfolioComponent from "./components/subComponentes/Portfolio"; // Importa tu componente de portafolio
import WhatsAppButton from "./components/subComponentes/floating-whatsapp";

function App() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "es" : "en"));
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta principal que muestra el header */}
          <Route
            path="/"
            element={<HeaderComponent onLanguageToggle={toggleLanguage} />}
          />
          {/* Ruta para el componente de portafolio */}
          <Route path="/portfolio" element={<PortfolioComponent />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
