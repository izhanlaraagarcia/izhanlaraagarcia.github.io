import React from "react";
import { Link } from "react-router-dom";
import "./styles/menu.scss";

// import { LANGUAGES } from "../Constants/lenguaje";

import TemaComponent from "./thema";

class Menu extends React.Component {
  render() {
    return (
      <header>
        <nav className="menu">
          <ul>
            <li>
              <Link to="/">
                <span>Inicio</span>
                <span>
                  <i className="fas fa-address-card" aria-hidden="true"></i>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/sobre-mi">
              <span>Sobre mi </span>
              </Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
              <i class="fas fa-envelope-open-text" aria-hidden="true"></i>
            </li>
            {/* <li>
              <select defaultValue={'es'}>
                {
                  LANGUAGES.map(({code, label}) =>{
                    <option key={code} value={label}> {code} </option>
                  })
                }
              </select>
              </li> */}
            <li>
              <TemaComponent />
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Menu;
