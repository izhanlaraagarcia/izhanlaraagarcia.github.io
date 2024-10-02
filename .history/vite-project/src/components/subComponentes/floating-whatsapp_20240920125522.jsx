import React, { useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

// Import avatar
import avatar from "../../assets/Izhan_Happy.JPEG";

export default function WhatsAppButton() {
  const [lang, setLang] = useState("en");

  const trasnlations = {
    en: {
      name: "Izhan Lara",
      chatMessage: "Hi there",
    },
    es: {
      name: "Izhan Lara",
      chatMessage: "Buenas! En que puedo ayudarte?",
    },
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "es" : "en"));
  };

  return (
    <div>
      <div className="wpp-btn" onClick={toggleLanguage}>
        {lang === "en" ? "Español" : "English"}
        <FloatingWhatsApp/>
      </div>
    </div>
  );
}
