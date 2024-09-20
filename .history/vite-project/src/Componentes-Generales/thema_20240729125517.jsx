// TemaComponent.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../Constants/themaContext"; // Asegúrate de importar correctamente

const TemaComponent = () => {
  const { dark, toggleTheme } = useTheme();

  const handleClick = () => {
    toggleTheme();
    if (dark) {
      document.body.style.backgroundColor = "white";
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    } else {
      document.body.style.backgroundColor = "black";
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    }
  };

  return (
    <><button
      id="tema"
      style={{
        cursor: "pointer",
        background: "none",
        border: "none",
        outline: "none",
        marginLeft: "80%",
      }}
      onClick={handleClick}
      aria-label={dark ? "Cambiar al modo claro" : "Cambiar al modo oscuro"}
    >
      <FontAwesomeIcon
        icon={dark ? faSun : faMoon}
        style={{ color: dark ? "white" : "inherit" }} />
    </button><button>
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
      </button></>
  );
};

export default TemaComponent;
