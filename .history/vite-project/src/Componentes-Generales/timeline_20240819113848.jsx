import React from 'react';

const TimelineComponent = () => {
  return (
    <div id="timeline">
      <ul>
        <li>
          <div className="timeline-date">2017-2019</div>
          <div className="timeline-content">
            <h3>Sistemas Microinformáticos y Redes</h3>
            <p>Santa Monica, Palma de Mallorca, España</p>
          </div>
        </li>
        <li>
          <div className="timeline-date">2022-2023</div>
          <div className="timeline-content">
            <h3>Desarrollo de Aplicaciones Web</h3>
            <p>iFP: Centro de Formación Profesional, Barcelona, España</p>
          </div>
        </li>
        <li>
          <div className="timeline-date">2022-2023</div>
          <div className="timeline-content">
            <h3>Help Desk IT</h3>
            <p>W2M, Palma de Mallorca</p>
          </div>
        </li>
        <li>
          <div className="timeline-date">2023-Presente</div>
          <div className="timeline-content">
            <h3>Help Desk - Applications Support</h3>
            <p>W2M, Palma de Mallorca</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TimelineComponent;