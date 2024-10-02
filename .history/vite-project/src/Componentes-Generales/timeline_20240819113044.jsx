import React from "react";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";

const TimelineCard = () => {
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
        <TimelineContent>
          <Typography>Eat Breakfast</Typography>
          <Typography color="text.secondary">Eggs and Bacon</Typography>
        </TimelineContent>
      </TimelineItem>
    );
  };  

export default TimelineComponent;