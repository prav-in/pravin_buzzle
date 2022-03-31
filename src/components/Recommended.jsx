import React from "react";
import "../styles/Recommended.scss";

const Recommended = ({ data, buttonName, headingName }) => {
  return (
    <div className="recommended-container">
      <h2 className="recommended-container__heading">
        Recommended {headingName}
      </h2>
      {data.map((d) => (
        <div className="channel">
          <img className="channel__image" src={d.image} alt="content" />
          <div className="channel__active"></div>
          <h3 className="channel__name">{d.name}</h3>
          <button className="channel__button">{buttonName}</button>
        </div>
      ))}
    </div>
  );
};

export default Recommended;
