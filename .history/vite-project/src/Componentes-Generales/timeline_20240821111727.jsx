import React, { useState } from "react";
import "./styles/timelineWork.scss";

const TimeLine = () => {
    const [selectedEvent, setSelectEvent] = useState(null);
    const eventos = [
        {
            id: 1,
            fecha: "2019 - Actualmente",
            titulo: "Desarrollo Web",
            descripcion: "Estoy estudiando Desarrollo Web y trabajando como Soporte de Aplicaciones."
        }
    ]
}