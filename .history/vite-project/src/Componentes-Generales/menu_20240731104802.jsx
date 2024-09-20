// src/Componentes-Generales/menu.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./styles/menu.scss";
import TemaComponent from "./thema";
import { useTheme } from "../Constants/themaContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Menu = () => {
  const { dark } = useTheme();
  return (
    <header>
      <nav className={`menu ${dark ? "dark-mode" : "light-mode"}`}>
        <ul className="left-menu">
          <li>
            <Link to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/sobre-mi">Sobre mi</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
        <ul className="right-menu">
          <li>
            <a href="https://github.com/izhanlaraagarcia" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> 
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/izhan-lara-garcia" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} /> 
            </a>
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
