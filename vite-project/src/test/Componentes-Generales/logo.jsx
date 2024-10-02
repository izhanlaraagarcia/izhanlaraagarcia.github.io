import React from "react";
import "./styles/logo.scss";
import SocialMedia from "./social";

const Logo = () => {
  return (
    <div className="inicio-container">
      <aside className="sidebar">
        <div className="logo-container">
          <div className="logo">
            <img src="../../public/avatar.jpg" alt="IL" />
          </div>
          <p id="name">Izhan Lara Garcia</p>
          <SocialMedia />
        </div>
      </aside>
    </div>
  );
};

export default Logo;
