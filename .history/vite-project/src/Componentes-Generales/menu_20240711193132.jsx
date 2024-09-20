import React from "react";
import { Link } from "react-router-dom";
import "./styles/menu.css";

import TemaComponent from "./thema";

class Menu extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <select>
          <Link to="/">Inicio</Link>

          <ul>
            <li>
            </li>
            <li>
              <Link to="/sobre-mi">Sobre mi</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li>
              <TemaComponent />
            </li>
          </ul>
          </select>
        </nav>
      </header>
    );
  }
}

export default Menu;
