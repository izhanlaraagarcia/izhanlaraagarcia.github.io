import React from "react";
import "./styles/menu.scss";
import TemaComponent from "./thema";
import { useTheme } from "../Constants/themaContext";

const Menu = ({ setActiveSection }) => {
  const { dark } = useTheme();

  return (
    <header>
      <nav className={`menu ${dark ? 'dark-mode' : 'light-mode'}`}>
        <ul>
          <li onClick={() => setActiveSection("inicio")}>
            <span>Inicio</span>
            <i className="fas fa-address-card" aria-hidden="true"></i>
          </li>
          <li onClick={() => setActiveSection("sobre-mi")}>
            <span>Sobre mi</span>
          </li>
          <li onClick={() => setActiveSection("contacto")}>
            <span>Contacto</span>
          </li>
          <li>
            <TemaComponent />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
