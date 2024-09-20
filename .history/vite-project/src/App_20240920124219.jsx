import React, { useState } from "react";
import HeaderComponent from "./components/HeaderComponent";
import WhatsAppButton from "./components/subComponentes/floating-whatsapp";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "es" : "en"));
  };
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HeaderComponent />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
    <WhatsAppButton />
  </Router>
  );
}

export default App;