import React from "react";
import "./Header.css";
import Search from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { useStateContextvalue } from "../../context/DataStore";

function Header({ spotify }) {
  const [{ user }, dispatch] = useStateContextvalue();

  return (
    <div className="header">
      <div className="header__left">
        <Search />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
