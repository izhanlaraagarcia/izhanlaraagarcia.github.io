import React from "react";
import "./styles/timelineWork.scss";

const TimeLine = () => {
  const aboutData = [
    {
      title: "2010",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "2012",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "2015",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "2018",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "2020",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <div className="timeline">
      {aboutData.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-date">{item.title}</div>
          <div className="timeline-content">{item.description}</div>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
