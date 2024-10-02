import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const TemaComponent = () => {
  const [dark, setDark] = useState(false);

  const handleClick = () => {
    if (dark) {
      document.body.style.backgroundColor = "white";
      setDark(false);
    } else {
      document.body.style.backgroundColor = "darkgrey";
      setDark(true);
    }
  };

  return (
    <button
      id="tema"
      style={{ cursor: 'pointer', background: 'none', border: 'none', outline: 'none' , marginLeft: '50px'}}
      onClick={handleClick}
      aria-label={dark ? 'Cambiar al modo claro' : 'Cambiar al modo oscuro'}
    >
      <FontAwesomeIcon icon={dark ? faSun : faMoon} style={{ color: dark ? 'black' : 'inherit' }} />
    </button>
  );
};

export default TemaComponent;
