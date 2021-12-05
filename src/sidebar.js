import React from "react";
import { Avatar } from "@material-ui/core";
import Bg from "./images/bg.jpg";
import { Bookmark } from "@material-ui/icons";
import { CheckBox } from "@material-ui/icons";
import { Group } from "@material-ui/icons";
// import Triangle from "./images/trianglee.png";
import { Add } from "@material-ui/icons";
import "./sidebar.css";

function SideBar() {
  return (
    <div className="side-bar">
      <div className="sidebar-top">
        <img src={Bg} alt="" />
        <div className="sidebar-top-align-center">
        <Avatar />
        <div className="border-bottom center-h2-p">
          <h2>Musa Habeeb</h2>
          <p>Student at University of Lagos</p>
        </div>
        </div>
        <div className="border-bottom">
          <div className="flex-connection">
            <div className="connection">
              <h4>Connections</h4>
              <p>16</p>
            </div>
            <h2>Grow your network</h2>
          </div>
        </div>
        <div className="access">
          <p>Access available tools and insights</p>
        </div>
        <div className="check border-bottom">
          <CheckBox className="checkbox" />
          <p>Try premium for free</p>
        </div>
        <div className="bookmark">
          <Bookmark className="book" />
          <h2>My items</h2>
        </div>
      </div>

      <div className="sidebar-bottom">
        <div className="sidebar-bottom-input">
          <p>Recent</p>
          <div className="nnpc">
            <Group />
            <p>NNPC</p>
          </div>
          <p className="groups">Groups</p>
          <div  className="nnpc">
            <Group />
            <p>NNPC</p>
          </div>
          <div className="see-all">
          <p className="see">see all</p>
          <div className="events-style">
          <p>Events</p>
          <Add />
          </div>
          <p className="groups">Followed hastags</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default SideBar;
