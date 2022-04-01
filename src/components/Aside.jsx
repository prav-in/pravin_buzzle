import React, { useState } from "react";
import Navbar from "./Navbar";
import Recommended from "./Recommended";
import { AiOutlineRollback } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { rooms_data, creators_data } from "../data/Data";
import "../styles/Aside.scss";

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className={isOpen ? "aside-container aside-open" : "aside-container"}
    >
      <AiOutlineRollback
        onClick={() => setIsOpen(false)}
        className="aside-container__back"
      />
      <Navbar />
      <Recommended data={rooms_data} buttonName="Join" headingName="Rooms" />
      <Recommended
        data={creators_data}
        buttonName="Room"
        headingName="Creators"
      />
      <button
        onClick={() => setIsOpen(true)}
        className={
          isOpen ? "aside-container__slide expanded" : "aside-container__slide"
        }
      >
        <GiHamburgerMenu />
      </button>
    </aside>
  );
};

export default Aside;
