import React from "react";
import "../styles/Searchbar.scss";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="searchbar">
      <form className="searchbar__search">
        <input className="searchbar__search__input" placeholder="Search" />
        <button className="searchbar__search__button">
          <FiSearch />
        </button>
      </form>

      <div className="button-wrapper">
        <button className="button-wrapper__button">LogIn</button>
        <button className="button-wrapper__button">SignUp</button>
      </div>
    </div>
  );
};

export default Navbar;
