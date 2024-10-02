import React from "react";
import { Chrono } from "react-chrono";

const Timeline = () => {
  return (
    <Chrono
      items={[
        {
          title: "May 1940",
          cardTitle: "Dunkirk",
          url: "http://google.com",
          cardSubtitle:
            "",
          cardDetailedText: ``,
        },
      ]}
      mode="VERTICAL"
    />
  );
};

export default Timeline;