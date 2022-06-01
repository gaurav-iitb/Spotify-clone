import React from "react";
import "./SidebarOption.css";

function SidebarOption({ option, Icon }) {
  return (
    <div className="sidebar_option">
      {Icon && <Icon className="sidebaroption_icon" />}
      {Icon ? <h4 className="cont">{option}</h4> : <p>{option}</p>}
    </div>
  );
}

export default SidebarOption;
