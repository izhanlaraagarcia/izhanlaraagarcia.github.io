import React from "react";
import { Chrono } from "react-chrono";

const Timeline = () => {
  return (
    <Chrono
      items={[
        {
          title: "data TEST",
          cardTitle: "test",
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