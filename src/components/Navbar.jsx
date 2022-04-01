import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { MdSpaceDashboard } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { MdLibraryAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";

const Navbar = () => {
  const [selected, setSelected] = useState([true, false, false, false]);

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list__item">
          <Link
            onClick={() => setSelected([true, false, false, false])}
            className={selected[0] ? "link selected" : "link"}
            to="/"
          >
            <AiFillHome /> <span className="link__name">Home</span>
          </Link>
        </li>
        <li className="navbar__list__item">
          <Link
            onClick={() => setSelected([false, true, false, false])}
            className={selected[1] ? "link selected" : "link"}
            to="/cultures"
          >
            <MdSpaceDashboard /> <span className="link__name">Cultures</span>
          </Link>
        </li>
        <li className="navbar__list__item">
          <Link
            onClick={() => setSelected([false, false, true, false])}
            className={selected[2] ? "link selected" : "link"}
            to="/rooms"
          >
            <HiUserGroup /> <span className="link__name">Rooms</span>
          </Link>
        </li>
        <li className="navbar__list__item">
          <Link
            onClick={() => setSelected([false, false, false, true])}
            className={selected[3] ? "link selected" : "link"}
            to="/playlist"
          >
            <MdLibraryAdd /> <span className="link__name">Playlist</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
