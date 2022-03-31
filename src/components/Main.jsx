import React from "react";
import Home from "./pages/Home";
import Cultures from "./pages/Cultures";
import Rooms from "./pages/Rooms";
import Playlist from "./pages/Playlist";
import { Routes, Route } from "react-router-dom";
import "../styles/Main.scss";

const Main = () => {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cultures" element={<Cultures />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/playlist" element={<Playlist />} />
      </Routes>
    </main>
  );
};

export default Main;
