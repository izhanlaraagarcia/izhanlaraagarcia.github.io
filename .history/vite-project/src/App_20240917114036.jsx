// App.js
import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import AboutComponent from './components/AboutComponent';
import SkillsComponent from './components/SkillsComponent';
import ExperienceComponent from './components/ExperienceComponent';
import FooterComponent from './components/FooterComponent';
import { Link } from 'react-scroll';

function App() {
  return (
    <div className="App">
      {/* Menú de navegación fijo */}
      <nav className="nav">
        <ul>
          <li><Link to="header" smooth={true}>Home</Link></li>
          <li><Link to="about" smooth={true}>About</Link></li>
          <li><Link to="skills" smooth={true}>Skills</Link></li>
          <li><Link to="experience" smooth={true}>Experience</Link></li>
          <li><Link to="footer" smooth={true}>Contact</Link></li>
        </ul>
      </nav>

      <HeaderComponent />
      <AboutComponent />
      <SkillsComponent />
      <ExperienceComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
