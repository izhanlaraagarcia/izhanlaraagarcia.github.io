import React from "react";
import { Link } from "react-router-dom";
import "./styles/menu.scss";
import TemaComponent from "./thema";
import { useTheme } from "../Constants/themaContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

// import { LANGUAGES } from "../Constants/lenguaje";

const Menu = () => {
  const { dark } = useTheme();
  return (
    <header>
      <nav className={`menu ${dark ? "dark-mode" : "light-mode"}`}>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
            <i className="fas fa-address-card" aria-hidden="true"></i>
          </li>
          <li>
            <Link to="/sobre-mi">Sobre mi</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <a href="https://github.com/izhanlaraagarcia" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/izhan-lara-garcia" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          <TemaComponent />
        </ul>
      </nav>
    </header>
  );
};

export default Menu;