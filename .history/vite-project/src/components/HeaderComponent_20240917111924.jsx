// HeaderComponent.js
import React from 'react';

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Izhan Lara Garcia</h1>
        <p>Junior Web Developer</p>
        <div className="buttons">
          <button className="btn">Resume</button>
          <button className="btn">Portfolio</button>
        </div>
        <div className="social-icons">
          <i className="fab fa-behance"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-dribbble"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
