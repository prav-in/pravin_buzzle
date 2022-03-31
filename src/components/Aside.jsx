import React from "react";
import Navbar from "./Navbar";
import Recommended from "./Recommended";
import { AiOutlineRollback } from "react-icons/ai";
import { rooms_data, creators_data } from "../data/Data";
import "../styles/Aside.scss";

const Aside = () => {
  return (
    <aside className="aside-container">
      <AiOutlineRollback className="aside-container__back" />
      <Navbar />
      <Recommended data={rooms_data} buttonName="Join" headingName="Rooms" />
      <Recommended
        data={creators_data}
        buttonName="Room"
        headingName="Creators"
      />
    </aside>
  );
};

export default Aside;
