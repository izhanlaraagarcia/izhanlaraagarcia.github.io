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
              <Link to="/">Inicio</Link>
              <i className="fas fa-address-card" aria-hidden="true"></i>
            </li>
            <li>
              <Link to="/sobre-mi">Sobre mi</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
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
