// App.js
import React, { useState } from 'react';

import HeaderComponent from './components/HeaderComponent';
import AboutComponent from './components/AboutComponent';
import SkillsComponent from './components/SkillsComponent';
import ExperienceComponent from './components/ExperienceComponent';
import FooterComponent from './components/FooterComponent';
import { Link } from 'react-scroll';


function App() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'es' : 'en'));
  };
  return (
    <div className="App">
      <HeaderComponent onLanguageToggle={toggleLanguage} />
      <SkillsComponent />
      <ExperienceComponent />
      <FooterComponent />
    </div>
  );
}

export default App;

import HeaderComponent from './components/HeaderComponent';
import AboutComponent from './components/AboutComponent';
import SkillsComponent from './components/SkillsComponent';
import ExperienceComponent from './components/ExperienceComponent';
import FooterComponent from './components/FooterComponent';
import { Link } from 'react-scroll';


function App() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'es' : 'en'));
  };
  return (
    <div className="App">
      {/* Menú de navegación fijo */}
      <HeaderComponent onLanguageToggle={toggleLanguage} />
      <AboutComponent language={language} /> 
      <SkillsComponent />
      <ExperienceComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
