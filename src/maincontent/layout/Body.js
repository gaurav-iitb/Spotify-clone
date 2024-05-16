import { Favorite, MoreHoriz, PlayCircleFilled } from "@mui/icons-material";
import React from "react";
import { useStateContextvalue } from "../../context/DataStore";
import "./Body.css";
import Header from "./Header";
import SongsRow from "./SongsRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useStateContextvalue();
  console.log("discovery is",discover_weekly)
  return (
    <div className="Body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img src={discover_weekly?.images?.length > 0 ? discover_weekly?.images[0].url : ""} alt="" />
        <div className="info_Text">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body-songs">
        <div className="body-icons">
          <PlayCircleFilled className="icon1" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>

        {discover_weekly?.tracks?.items?.map((item, id) => (
          <SongsRow key={id} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
