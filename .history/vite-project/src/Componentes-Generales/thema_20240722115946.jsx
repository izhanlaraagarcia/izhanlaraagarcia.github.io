// TemaComponent.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../Constants/themaContext' // Asegúrate de importar correctamente

const TemaComponent = () => {
  const { dark, toggleTheme } = useTheme();

  const handleClick = () => {
    toggleTheme();
    if (dark) {
      document.body.style.backgroundColor = 'white';
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    } else {
      document.body.style.backgroundColor = 'black';
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
    }
  };

  return (
    <button
      id="tema"
      style={{
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        outline: 'none',
        marginLeft: '80%',
      }}
      onClick={handleClick}
      aria-label={dark ? 'Cambiar al modo claro' : 'Cambiar al modo oscuro'}
    >
      <FontAwesomeIcon
        icon={dark ? faSun : faMoon}
        style={{ color: dark ? 'black' : 'inherit' }}
      />
    </button>
  );
};

export default TemaComponent;
