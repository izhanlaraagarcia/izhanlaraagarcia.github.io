import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./Componentes-Generales/menu.jsx";
import Inicio from "./Home/Inicio.jsx";
import About from "./pages/About/about.jsx";
import Contact from "./pages/Contact/contact.jsx";
import { ThemeProvider } from "./Constants/themaContext.jsx";
import Fondo from "./Componentes-Generales/fondo.jsx";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <Router>
          <Menu />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobre-mi" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </Router>
        <Fondo/>
      </ThemeProvider>
    );
  }
}

export default App;
