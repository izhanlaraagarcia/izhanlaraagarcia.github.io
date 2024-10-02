import React, { useState } from "react";
import HeaderComponent from "./components/HeaderComponent";
import WhatsAppButton from "./components/subComponentes/floating-whatsapp";
import { Router } from "react-router-dom";


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