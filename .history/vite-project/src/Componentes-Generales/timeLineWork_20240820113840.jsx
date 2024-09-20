import React from "react";
import { Chrono } from "react-chrono";

const Timeline = () => {
  return (
    <Chrono
      items={[
        {
          title: "data test",
          cardTitle: "test",
          url: "http://google.com",
          cardSubtitle:
            "",
          cardDetailedText: ``,
        },
      ]}
      mode="HORIZONTAL"
    />
  );
};

export default Timeline;