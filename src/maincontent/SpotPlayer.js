import React from "react";
import "./SpotPlayer.css";
import Sidebar from "./layout/Sidebar";
import Body from "./layout/Body";
import Footer from "./layout/Footer";

function SpotPlayer({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
}

export default SpotPlayer;
