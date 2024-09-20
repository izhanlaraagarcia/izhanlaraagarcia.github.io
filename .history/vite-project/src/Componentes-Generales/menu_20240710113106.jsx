import React from "react";
import { Link } from "react-router-dom";
import './styles/menu.css'
import './Scripts/blackbutton'

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
            <button 
              class="blackbutton"
              aria-label="toggle color mode"
              title="toggle color mode"
              data-theme-toggle
              >
                <div id="toggler-icon"></div>
              </button>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Menu;
