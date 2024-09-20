// App.js
import React, { useState } from 'react';
import HeaderComponent from './components/HeaderComponent';
import SkillsComponent from './components/SkillsComponent';
// import ExperienceComponent from './components/ExperienceComponent';
import FooterComponent from './components/FooterComponent';
// import { Link } from 'react-scroll';


function App() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'es' : 'en'));
  };
  return (
    <div className="App">
      <HeaderComponent onLanguageToggle={toggleLanguage} />
      <SkillsComponent language={language} />
      {/* <ExperienceComponent /> */}
      <FooterComponent />
    </div>
  );
}

export default App;
