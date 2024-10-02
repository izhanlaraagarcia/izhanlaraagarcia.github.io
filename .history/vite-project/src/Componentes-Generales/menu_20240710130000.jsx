import React from "react";
import { Link } from "react-router-dom";
import './styles/menu.css'
import './Scripts/blackbutton'

import Theme from './theme';

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
            <Theme/>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Menu;
