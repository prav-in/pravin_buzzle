import React from "react";
import Event from "./Event";
import "../styles/Events.scss";

const Events = ({ heading, eventData }) => {
  return (
    <div className="events">
      <h2 className="events__heading">
        TOP <span className="highlight">LIVE EVENTS </span>FROM{" "}
        <span className="content-title">{heading}</span> WORLD
      </h2>
      <div className="events-container">
        {eventData.map((d) => (
          <Event data={d} />
        ))}
      </div>
      <span className="events__expand">SEE MORE</span>
    </div>
  );
};

export default Events;
