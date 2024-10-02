// src/Componentes-Generales/menu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Button, Switch, Spacer, Text } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../Constants/themaContext';
import './styles/menu.scss';

const Menu = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <Navbar isBordered variant="floating">
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          Izhan
        </Text>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
        <Navbar.Link href="/">Inicio</Navbar.Link>
        <Navbar.Link href="/sobre-mi">Sobre mi</Navbar.Link>
        <Navbar.Link href="/contacto">Contacto</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <a href="https://github.com/izhanlaraagarcia" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Navbar.Item>
        <Navbar.Item>
          <a href="https://www.linkedin.com/in/izhan-lara-garcia" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Navbar.Item>
        <Navbar.Item>
          <Button auto flat onClick={toggleTheme}>
            {dark ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default Menu;
