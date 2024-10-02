import React from "react";
import { FloatingWhatsApp } from  "react-floating-whatsapp";

// Import avatar
import avatar from "../../assets/IMG_0435.JPEG";

export default function WhatsAppButton() {
  return (
    <div>
      <FloatingWhatsApp phoneNumber="+34650067014" accountName="Izhan Lara" avatar={avatar}/>
    </div>
  );
}