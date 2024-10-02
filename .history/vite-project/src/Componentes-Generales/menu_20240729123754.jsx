import React from "react";
import { Link } from "react-router-dom";
import "./styles/menu.scss";
import TemaComponent from "./thema";
import { useTheme } from "../Constants/themaContext";

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
          <section>
            <li id="githubIcon">
              <a href="https://github.com/izhanlaraagarcia">
                <img
                  src="https://cdn-icons-png.flaticon.com/256/25/25231.png"
                  alt="github"
                />
              </a>
            </li>
            <li id="linkedinIcon">
              <a href="#">
                <img
                  src="https://cdn.icon-icons.com/icons2/38/PNG/512/linkedin_social_5085.png"
                  alt="linkedin"
                />
              </a>
            </li>
            <li id="mailIcon">
              <a href="#">
                <img
                  src="https://www.svgrepo.com/show/370047/email-minimal.svg"
                  alt="email"
                />
              </a>
            </li>
          </section>
          <TemaComponent />
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
