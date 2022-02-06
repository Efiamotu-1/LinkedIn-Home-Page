// import { Avatar } from "@material-ui/core";
import React from "react";
import InputOption from "./InputOption";
import "./post.css";
import { Share } from "@material-ui/icons";
import { ThumbUp } from "@material-ui/icons";
import { ArrowDownward } from "@material-ui/icons";
import { ChatBubbleRounded } from "@material-ui/icons";

function Post({ posts }) {
  return (
    <div className="post">
      {posts.map((post) => {
        return (
          <div className="post-setup" key={post.id}>
            <div className="post-top">
              <img src={post.avatar} alt="...avatar" width="40px" className="post-avatar" />
              <div>
                <h4>{post.name}</h4>
                <div className="date-time">
                  {/* <p>{post.time}</p> */}
                  <p>{post.date}</p>
                </div>
                <p>{post.message}</p>
              </div>
            </div>

            <div className="post-feed">
              <InputOption Icon={ThumbUp} title="Like" color="#0a66c2" />
              <InputOption
                Icon={ChatBubbleRounded}
                title="Comment"
                color="#0a66c2"
              />
              <InputOption Icon={Share} title="Share" color="#0a66c2" />
              <InputOption
                Icon={ArrowDownward}
                title="Download"
                color="#0a66c2"
              />
            </div>
          </div>
        );
      })}
      {/* <div className="post-setup">
        <div className="post-top">
          <Avatar className="post-avatar" />
          <div>
            <h4>{name}</h4>
            <div className="date-time">
              <p>{time}</p>
              <p>{date}</p>
            </div>
            <p>{message}</p>
          </div>
        </div>
        <div className="post-feed">
          <InputOption Icon={ThumbUp} title="Like" color="#0a66c2" />
          <InputOption
            Icon={ChatBubbleRounded}
            title="Comment"
            color="#0a66c2"
          />
          <InputOption Icon={Share} title="Share" color="#0a66c2" />
          <InputOption Icon={ArrowDownward} title="Download" color="#0a66c2" />
        </div>
      </div> */}
    </div>
    // <div className="post">
    //     <div className="post-setup">
    //     <div className="post-top">
    //     <Avatar className="post-avatar"/>
    //     <div><h4>{name}</h4>
    //     <div className="date-time">
    //     <p>{time}</p>
    //     <p>{date}</p>
    //     </div>
    //     <p>{message}</p>
    //     </div>
    //     </div>
    //    <div className="post-feed">
    //    <InputOption Icon={ThumbUp} title="Like" color="#0a66c2"/>
    //    <InputOption Icon={ChatBubbleRounded} title="Comment" color="#0a66c2"/>
    //    <InputOption Icon={Share} title="Share" color="#0a66c2"/>
    //    <InputOption Icon={ArrowDownward} title="Download" color="#0a66c2"/>
    //    </div>
    //     </div>
    // </div>
  );
}
export default Post;
