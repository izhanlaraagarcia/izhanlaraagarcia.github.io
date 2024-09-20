import React, { useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

// Import avatar
import avatar from "../../assets/Izhan_Happy.JPEG";

export default function WhatsAppButton({language}) {
  const [lang, setLang] = useState("en");

  const trasnlations = {
    en: {
      name: "Izhan Lara",
      chatMessage: "Hi there",
      statusMessage: "Online",
    },
    es: {
      name: "Izhan Lara",
      chatMessage: "Buenas! En que puedo ayudarte?",
      statusMessage: "En línea",
    },
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "es" : "en"));
  };

  return (
    <div>
      <div className="wpp-btn" onClick={toggleLanguage}>
        {lang === "en" ? "Español" : "English"}
        <FloatingWhatsApp
          phoneNumber="+34650067014"
          accountName="Izhan Lara García"
          avatar={avatar}
          chatMessage={trasnlations[lang].chatMessage}
          statusMessage={trasnlations[lang].statusMessage}
        />
      </div>
    </div>
  );
}
