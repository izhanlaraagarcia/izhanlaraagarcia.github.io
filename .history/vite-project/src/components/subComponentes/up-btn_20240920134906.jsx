import React, { useState, useEffect } from "react";
import "./main.css";

export default function UpBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 100); // Mostrar si scrollea más de 100px
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility); // Limpia el listener
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button onClick={scrollToTop} className="scrollToTop">
        ↑ {/* Puedes usar este ícono simple para darle un toque minimalista */}
      </button>
    )
  );
}
