import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

// Import avatar
import avatar from "../../assets/Izhan_Happy.JPEG";

export default function WhatsAppButton() {
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
