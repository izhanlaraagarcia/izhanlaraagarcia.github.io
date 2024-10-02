import React, { useState } from "react";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "es" : "en"));
  };
  return (
    <div className="App">
      <HeaderComponent onLanguageToggle={toggleLanguage} />
    </div>
  );
}

export default App;