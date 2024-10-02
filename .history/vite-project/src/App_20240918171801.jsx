// App.js
import React, { useState } from "react";
import HeaderComponent from "./components/HeaderComponent";
import Portfolio from "./components/subComponentes/Portfolio";

function App() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "es" : "en"));
  };
  return (
    <div className="App">
      <HeaderComponent onLanguageToggle={toggleLanguage} />
      <Portfolio />
    </div>
  );
}

export default App;
