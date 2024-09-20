import React from "react";
import { Link } from "react-router-dom";
import './styles/menu.css'

class Menu extends React.Component {
  render() {
    return (
      <header>
        <div className="navbar">
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
          </ul>
        </nav>
        </div>
      </header>
    );
  }
}

export default Menu;
