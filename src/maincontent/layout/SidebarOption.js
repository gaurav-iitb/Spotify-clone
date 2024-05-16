import React from "react";
import "./SidebarOption.css";
// import SpotifyWebApi from "spotify-web-api-js";
import { useStateContextvalue } from "../../context/DataStore";

// const spotify = new SpotifyWebApi();

function SidebarOption({ option, Icon, ID, spotify }) {
  const [{ user, token }, dispatch] = useStateContextvalue();

  function HandlePlaylistClick(ID) {
    spotify.getPlaylist(`${ID}`).then((response) => {
      console.log("reponse is", response);

      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      });
    }); // the id in actual spotify webpage after playlist/ in url.
  }
  return (
    <div
      onClick={() => {
        !Icon && HandlePlaylistClick(ID);
      }}
      className="sidebar_option"
    >
      {Icon && <Icon className="sidebaroption_icon" />}
      {Icon ? (
        <a
          style={{ textDecoration: "none", color: "white" }}
          href="/"
          className="cont"
        >
          {option}
        </a>
      ) : (
        <p>{option}</p>
      )}
    </div>
  );
}

export default SidebarOption;
