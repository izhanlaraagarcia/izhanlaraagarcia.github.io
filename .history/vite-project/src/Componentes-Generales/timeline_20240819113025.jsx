import React from "react";
import {
  TimelineConnector,
  ,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";

const TimelineComponent = () => {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        9:00 AM
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot>
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
    </TimelineItem>
  );
};

export default TimelineComponent;