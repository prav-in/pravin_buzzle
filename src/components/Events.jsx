import React, { useState } from "react";
import Event from "./Event";
import "../styles/Events.scss";

const Events = ({ heading, eventData }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="events">
      <h2 className="events__heading">
        TOP <span className="highlight">LIVE EVENTS </span>FROM{" "}
        <span className="content-title">{heading}</span> WORLD
      </h2>
      <div
        className={
          isExpanded ? "events-container expanded" : "events-container"
        }
      >
        {eventData.map((d) => (
          <Event key={d.id} data={d} />
        ))}
      </div>
      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        className="events__expand"
      >
        {isExpanded ? "SEE LESS" : "SEE MORE"}
      </button>
    </div>
  );
};

export default Events;
