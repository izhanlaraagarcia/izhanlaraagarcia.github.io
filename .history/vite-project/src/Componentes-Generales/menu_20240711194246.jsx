import React from "react";
import { Link } from "react-router-dom";
import "./styles/menu.css";
import testMenu from './testmenu'

import TemaComponent from "./thema";

class Menu extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/sobre-mi">Sobre mi</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li>
              <TemaComponent/>
            </li>
            <testMenu/>

          </ul>
        </nav>
      </header>
    );
  }
}

export default Menu;
