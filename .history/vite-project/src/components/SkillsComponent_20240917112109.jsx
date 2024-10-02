// SkillsComponent.js
import React from 'react';

const SkillsComponent = () => {
  return (
    <section className="skills">
      <div className="software-skills">
        <h3>Software Skills</h3>
        <ul>
          <li>Photoshop <span className="bar"><span className="progress" style={{ width: '90%' }}></span></span></li>
          <li>Illustrator <span className="bar"><span className="progress" style={{ width: '85%' }}></span></span></li>
          <li>Figma <span className="bar"><span className="progress" style={{ width: '80%' }}></span></span></li>
        </ul>
      </div>
      <div className="languages">
        <h3>Languages</h3>
        <p>English, Spanish</p>
      </div>
      <div className="personal-skills">
        <h3>Personal Skills</h3>
        <p>Creativity, Team Work, Organization</p>
      </div>
    </section>
  );
};

export default SkillsComponent;
