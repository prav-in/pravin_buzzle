import React, { useState } from "react";
import "../styles/Channel.scss";

const Channel = ({ data, buttonName }) => {
  const [joined, setJoined] = useState(false);

  return (
    <div className="channel">
      <img className="channel__image" src={data.image} alt="content" />
      <div className="channel__active"></div>
      <h3 className="channel__name">{data.name}</h3>
      <button
        onClick={() => setJoined((prev) => !prev)}
        className={
          joined ? "channel__button channel__button-joined" : "channel__button"
        }
      >
        {joined ? "Leave" : buttonName}
      </button>
    </div>
  );
};

export default Channel;
