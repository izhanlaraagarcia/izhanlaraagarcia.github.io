import React, { useState } from "react";
import HeaderComponent from "./components/HeaderComponent";
import WhatsAppButton from "./components/subComponentes/floating-whatsapp";
import { BrowserRouter as Router } from "react-router-dom"; // Asegúrate de usar BrowserRouter


function App() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "es" : "en"));
  };
  return (
    <Router>
    <div className="App">
      <HeaderComponent onLanguageToggle={toggleLanguage} />
      <WhatsAppButton />
    </div>
    </Router>
  );
}

export default App;