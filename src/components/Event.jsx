import React from "react";
import { GoKebabVertical } from "react-icons/go";
import { IoIosTime } from "react-icons/io";
import "../styles/Event.scss";

const Event = ({ data }) => {
  return (
    <div className="event">
      <img className="event__image" src={data.contentImage} alt="content" />
      <p className="event__title">{data.title}</p>
      <h3 className="event__channel">{data.channelName}</h3>
      <div className="event__time-wrapper">
        <IoIosTime />
        <time className="time">{data.time}</time>
      </div>
      <img className="event__logo" src={data.logoImg} alt="logo" />
      <p className="event__viewers">{data.viewers} Viewers</p>
      <div className="event__live-badge">Live</div>
      <span className="event__option">
        <GoKebabVertical />
      </span>
    </div>
  );
};

export default Event;
