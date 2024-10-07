// Timeline.js
import React from "react";
import { TimelineWrapper } from "./stylecomponent/StyledComponents";

const Timeline = ({ disasterEvents }) => {
  return (
    <TimelineWrapper>
      {disasterEvents.map((event, index) => (
        <div key={index} className="timeline-event">
          <h2>{event.title}</h2>
          <p>Location: {event.location}</p>
          <p>Severity: {event.severity}</p>
          <p>Impact: {event.impact}</p>
          <p>Date: {event.date ? new Date(event.date).toLocaleDateString() : 'Unknown'}</p>
        </div>
      ))}
    </TimelineWrapper>
  );
};

export default Timeline;