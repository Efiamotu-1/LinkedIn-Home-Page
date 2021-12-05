import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import SearchIcon from "@material-ui/icons/Search";
import link from "../images/1629754938156.png";
import HomeIcon from "@material-ui/icons/Home";
import ContactIcon from "@material-ui/icons/PeopleAltSharp";
import JobsIcon from "@material-ui/icons/BusinessCenter";
import MessageIcon from "@material-ui/icons/Message";
import { Notifications } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img src={link} alt="" />
        <div className="header-search">
          <SearchIcon className="search" />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header-right">
       <HeaderOption Icon={HomeIcon} title="Home"/>
       <HeaderOption Icon={ContactIcon} title="My Networks"/>
       <HeaderOption Icon={JobsIcon} title="Jobs"/>
       <HeaderOption Icon={MessageIcon} title="Messaging"/>
       <HeaderOption Icon={Notifications} title="Notifications"/>
       <HeaderOption Avatar={Avatar} title="Me"/>

      </div>
    </div>
  );
}
export default Header;
