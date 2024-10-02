import React, { useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

// Import avatar
import avatar from "../../assets/Izhan_Happy.JPEG";

export default function WhatsAppButton() {
  const [lang, setLang] = useState("en");

  const trasnlations = {
    en: {
      name: "Izhan Lara",
      chatMessage="Hi there"
    },
    es: {
      name: "Izhan Lara",
      chatMessage="Buenas! En que puedo ayudarte?"
    },
  };
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="+34650067014"
        accountName="Izhan Lara"
        avatar={avatar}
        chatMessage="Buenas! En que puedo ayudarte?"
      />
    </div>
  );
}
