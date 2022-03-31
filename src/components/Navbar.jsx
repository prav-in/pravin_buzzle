import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdSpaceDashboard } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { MdLibraryAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list__item">
          <Link className="link" to="/">
            <AiFillHome /> <span className="link__name">Home</span>
          </Link>
        </li>
        <li className="navbar__list__item">
          <Link className="link" to="/cultures">
            <MdSpaceDashboard /> <span className="link__name">Cultures</span>
          </Link>
        </li>
        <li className="navbar__list__item">
          <Link className="link" to="/rooms">
            <HiUserGroup /> <span className="link__name">Rooms</span>
          </Link>
        </li>
        <li className="navbar__list__item">
          <Link className="link" to="/playlist">
            <MdLibraryAdd /> <span className="link__name">Playlist</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
