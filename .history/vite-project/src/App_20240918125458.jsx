// App.js
import React, { useState } from 'react';
import HeaderComponent from './components/HeaderComponent';
// import { Link } from 'react-scroll';


function App() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'es' : 'en'));
  };
  return (
    <div className="App">
      <HeaderComponent onLanguageToggle={toggleLanguage} />
    </div>
  );
}

export default App;
