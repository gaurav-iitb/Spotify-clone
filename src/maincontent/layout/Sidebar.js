import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useStateContextvalue } from "../../context/DataStore";

function Sidebar({spotify}) {
  const [{ playlists }, dispatch] = useStateContextvalue();

  console.log("playlists are", playlists)
  return (
    <div className="sidebar">
      <img
        className="logo1"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="spotify-logo"
      />
      <SidebarOption Icon={HomeIcon} option="Home" />
      {/* <SidebarOption Icon={SearchIcon} option="Search" />
      <SidebarOption Icon={LibraryMusicIcon} option="Your Library" /> */}
      <br />
      <strong className="sidetitle">Playlist</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption spotify={spotify} option={playlist.name} ID = {playlist.id} />
      ))}
    </div>
  );
}

export default Sidebar;
