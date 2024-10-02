import React from "react";
import { Link } from "react-router-dom";
import "./styles/menu.css";

import { LANGUAGES } from "../Constants/lenguaje";

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
          </ul>
          <select defaultValue={'es'}>
                {
                  LANGUAGES.map(({code, label}) =>{
                    <option key={code} value={label}> {code} </option>
                  })
                }
              </select>
        </nav>
      </header>
    );
  }
}

export default Menu;
