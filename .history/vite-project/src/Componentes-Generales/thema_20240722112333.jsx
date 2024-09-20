import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import './styles/thema.scss'; // Asegúrate de importar el archivo CSS

const TemaComponent = () => {
  const [dark, setDark] = useState(false);

  const handleClick = () => {
    if (dark) {
      document.body.style.backgroundColor = "white";
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      for (let i = 0; i < menuElements.length; i++) {
        menuElements[i].style.color = "black";
      setDark(false);
    } else {
      document.body.style.backgroundColor = "black";
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      setDark(true);
    }
  };

  return (
    <button
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
        style={{ color: dark ? "black" : "inherit" }}
      />
    </button>
  );
};

export default TemaComponent;
