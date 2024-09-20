import React, { useState } from 'react';

const TemaComponent = () => {
  const [dark, setDark] = useState(false);

  const handleClick = () => {
    if (dark) {
      document.body.style.backgroundColor = "white";
      setDark(false);
    } else {
      document.body.style.backgroundColor = "black";
      setDark(true);
    }
  };

  return (
    <button
      id="tema"
      style={{ cursor: 'pointer', color: dark ? 'black' : 'inherit' }}
      onClick={handleClick}
    >
      {dark ? 'Cambiar al modo claro' : 'Cambiar al modo oscuro'}
    </button>
  );
};

export default TemaComponent;
