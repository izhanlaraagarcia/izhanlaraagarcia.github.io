import React from 'react';

const Timeline = () => {
  const events = [
    {
      date: '2017',
      title: 'Sistemas Microinformáticos y Redes',
      description: 'Estudié Sistemas Microinformáticos y Redes en Santa Monica, Palma de Mallorca, España',
    },
    {
      date: '2019',
      title: 'Desarrollo de Aplicaciones Web',
      description: 'Comencé a estudiar Desarrollo de Aplicaciones Web en iFP: Centro de Formación Profesional, Barcelona, España',
    },
    {
      date: '2022',
      title: 'Help Desk IT',
      description: 'Trabajé como Help Desk IT en W2M, Palma de Mallorca',
    },
    {
      date: '2023',
      title: 'Help Desk - Applications Support',
      description: 'Me convertí en Help Desk - Applications Support en W2M, Palma de Mallorca',
    },
  ];

  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className="timeline-event">
          <div className="timeline-date">{event.date}</div>
          <div className="timeline-title">{event.title}</div>
          <div className="timeline-description">{event.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;