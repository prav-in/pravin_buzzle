import React, { useState } from "react";
import Channel from "./Channel";
import "../styles/Recommended.scss";

const Recommended = ({ data, buttonName, headingName }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="recommended-container">
      <h2 className="recommended-container__heading">
        Recommended {headingName}
      </h2>
      <div
        className={
          isExpanded ? "channel-container--expanded" : "channel-container"
        }
      >
        {data.map((d) => (
          <Channel key={d.id} data={d} buttonName={buttonName} />
        ))}
      </div>
      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        className="recommended-container__expand"
      >
        {isExpanded ? "See Less" : "See More"}
      </button>
    </div>
  );
};

export default Recommended;
