import React from "react";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

export default function BasicTimeline(){
    return(
        <Timeline>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>test</TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}