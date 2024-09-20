import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import Menu from "./menu";

const TemaComponent = () => {
  const [dark, setDark] = useState(false);

  const handleClick = () => {
    if (dark) {
      document.body.style.backgroundColor = "white";
      const menuElements = document.getElementsByClassName("menu");
      for (let i = 0; menuElements.length; i++){
        menuElements[i].style.color = "black";
      }
      setDark(false);
    } else {
      document.body.style.backgroundColor = "black";
      const menuElements = document.getElementsByClassName("menu");
      for (let i = 0; i < menuElements.length; i++) {
        menuElements[i].style.color = "white";
      }
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
