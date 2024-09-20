import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../Constants/themaContext"; // Asegúrate de importar correctamente
import SocialMedia from "./social"; // Importa el componente SocialMedia

const TemaComponent = () => {
  const { dark, toggleTheme } = useTheme();

  useEffect(() => {
    if (dark) {
      document.body.style.backgroundColor = "black";
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [dark]); // Este efecto se ejecutará cada vez que cambie el estado `dark`

  const handleClick = () => {
    toggleTheme(); // Cambia el tema
  };

  return (
    <div>
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
          style={{ color: dark ? "white" : "inherit" }}
        />
      </button>
      <SocialMedia /> {/* Coloca SocialMedia dentro del mismo componente */}
    </div>
  );
};

export default TemaComponent;
