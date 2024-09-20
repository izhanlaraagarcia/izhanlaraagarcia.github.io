// App.js
import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import AboutComponent from './components/AboutComponent';
import SkillsComponent from './components/SkillsComponent';
import ExperienceComponent from './components/ExperienceComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <AboutComponent />
      <SkillsComponent />
      <ExperienceComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
