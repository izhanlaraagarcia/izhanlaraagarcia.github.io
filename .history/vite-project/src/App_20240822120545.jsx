import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Menu from "./Componentes-Generales/menu.jsx";
import Inicio from "./Home/Inicio.jsx";
import About from "./pages/About/about.jsx";
import Contact from "./pages/Contact/contact.jsx";
import { ThemeProvider } from "./Constants/themaContext.jsx";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function AnimatedRoutes() {
  const location = useLocation();
  const [activeClass, setActiveClass] = useState("initial");

  useEffect(() => {
    // Trigger the animation when the location changes
    setActiveClass("active");
  }, [location]);

  return (
    <div className={`content-section ${activeClass}`}>
      <Routes location={location}>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre-mi" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <Router>
          <Menu />
          <AnimatedRoutes />
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
