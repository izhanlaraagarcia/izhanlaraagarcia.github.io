import React from "react";
import { Link } from "react-router-dom";
import "./styles/menu.css";

var ctema = document.getElementById("tema");
ctema.style.cursor = "pointer";
var dark = false;

ctema.addEventListener("click", () => {
  if (dark) {
    document.body.style.backgroundColor = "white";
    ctema.textContent = "Cambiar al modo claro";
    dark = false;
  } else {
    document.body.style.backgroundColor = "darkgrey";
    ctema.textContent = "Cambiar al modo oscuro";
    ctema.style.color = "black";
    dark = true;
  }
});


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
              <button id="tema">Cambiar al modo Oscuro</button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Menu;
