import React, { useState } from "react";
import "./styles/timelineWork.scss";

const TimeLine = () => {
  const [selectedEvent, setSelectEvent] = useState(null);
  const eventos = [
    {
      id: 1,
      fecha: "2019 - Actualmente",
      titulo: "Desarrollo Web",
      descripcion:
        "Estoy estudiando Desarrollo Web y trabajando como Soporte de Aplicaciones.",
    },
  ];
  return (
    <div className="linea-del-tiempo">
      <div className="eventos">
        {eventos.map((evento) => (
          <div
            key={evento.id}
            className={`evento ${selectedEvent === evento.id ? "active" : ""}`}
            onClick={() => setSelectedEvent(evento.id)}
          >
            <div className="year">{evento.year}</div>
            <div className="title">{evento.title}</div>
          </div>
        ))}
      </div>
      {selectedEvent && (
        <div className="detalle">
          {eventos.map(
            (evento) =>
              selectedEvent === evento.id && (
                <div key={evento.id} className="descripcion">
                  <h2>{evento.title}</h2>
                  <p>{evento.description}</p>
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
};
