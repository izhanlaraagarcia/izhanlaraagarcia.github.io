import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import avatar from "../../assets/Izhan_Happy.JPEG";

export default function WhatsAppButton({ language }) {
  const translations = {
    en: {
      chatMessage: "Hi there! How can I help you?",
      statusMessage: "Online",
    },
    es: {
      chatMessage: "¡Buenas! ¿En qué puedo ayudarte?",
      statusMessage: "En línea",
    },
  };

  return (
    <div className="wpp-btn">
      <FloatingWhatsApp
        phoneNumber="+34650067014" // Tu número de WhatsApp
        accountName="Izhan Lara García"
        avatar={avatar}
        chatMessage={translations[language].chatMessage}
        statusMessage={translations[language].statusMessage}
      />
    </div>
  );
}
