// import React, { useState } from "react";
// import React, {Component} from 'react'
// import InputOption from "./InputOption";
// import { Image } from "@material-
// import CreateIcon from "@material-ui/icons/Create";
import Post from "./post";

import React, { Component } from "react";
import "./centerContent.css";
import InputOption from "./InputOption";

import {
  Image,
  Slideshow,
  Event,
  FormatAlignJustify,
  Create,
} from "@material-ui/icons";

class Center extends Component {
  constructor() {
    super();
    this.state = {
      // message: 'joy',
      posts: [
        {
          id: 1,
          avatar: 'https://aui.atlassian.com/aui/8.6/docs/images/avatar-person.svg',
          name:"Habeeb",
          date: new Date().toDateString(),
          message: ''
        }
      ]
    };
    
  }

  handleSubmit = (e) => {
      e.preventDefault()
      // if ({message : ''}) {
      //   return ('input a post'); 
      // }
      const newId = this.state.posts.length + 1
      const newData = {
        id: newId,
        avatar: 'https://aui.atlassian.com/aui/8.6/docs/images/avatar-person.svg',
        name: 'Habeeb',
        date: new Date().toDateString(),
        message: this.state.message,
      }
     
      this.setState({posts: [...this.state.posts, newData]})
      this.setState({message: ''})

  };

  render(){
    // let listOfNames = this.state.showAspost.map(names=>{
    //   return (
    //      <Post
    //       Avatar={Avatar}
    //       name="Habeeb"
    //       date= {new Date().getDate()+'-'+(new Date().getMonth()+1)+'-'+new Date().getFullYear()}
    //       time= {new Date().getHours() + ":" + new Date().getMinutes()}
    //       message={names}
    //     /> 
    //   )
    // })
    return (
      <div className="feeder">
        <div className="feed-inputContainer">
          <div className="feed-input">
            <Create />
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                id="post"
                name="post"
                value={this.state.message}
                placeholder="What's on your mind"
                onChange={(e) => {
                  this.setState({ message: e.target.value });
                }}
              />
              <button type="submit" id="" >
                Send
              </button>
            </form>
          </div>

          <div className="feed-inputOption">
            <InputOption
              Icon={Image}
              color="white"
              backgroundColor="blue"
              title="photo"
            />
            <InputOption
              Icon={Slideshow}
              color="white"
              backgroundColor="green"
              title="Video"
            />
            <InputOption
              Icon={Event}
              color="white"
              backgroundColor="orange"
              title="Event"
            />
            <InputOption
              Icon={FormatAlignJustify}
              color="white"
              backgroundColor="pink"
              title="Article"
            />
          </div>
        </div>

         <Post  posts={this.state.posts} /> 
    
          

        
      </div>
    );
  }
}
export default Center;

// CENTER AS A STATELESS COMPONENT
// const [post, setPost] = useState("");
//   // const handlesubmit = (e) => {
//   //   e.preventDefault();

//   // };
//   // render(){
//   // return (
//   //   <div className="feeder">
//   //     <div className="feed-inputContainer">
//   //       <div className="feed-input">
//   //         <CreateIcon />
//   //         <form onSubmit={handlesubmit}>
//   //           <input
//   //             type="text"
//   //             id="post"
//   //             name="post"
//   //             value={post}
//   //             onChange={(e) => {
//   //               setPost(e.target.value);
//   //             }}
//   //             placeholder="What's on your mind"
//   //           />
//   //           <button type="submit" id="">
//   //             Send
//   //           </button>
//   //         </form>
//   //       </div>

//   //       <div className="feed-inputOption">
//   //         <InputOption
//   //           Icon={Image}
//   //           color="white"
//   //           backgroundColor="blue"
//   //           title="photo"
//   //         />
//   //         <InputOption
//   //           Icon={Slideshow}
//   //           color="white"
//   //           backgroundColor="green"
//   //           title="Video"
//   //         />
//   //         <InputOption
//   //           Icon={Event}
//   //           color="white"
//   //           backgroundColor="orange"
//   //           title="Event"
//   //         />
//   //         <InputOption
//   //           Icon={FormatAlignJustify}
//   //           color="white"
//   //           backgroundColor="pink"
//   //           title="Article"
//   //         />
//   //       </div>
//   //     </div>
//   //     <div>
//   //       <Post Avatar={Avatar}  name= "Habeeb"
//   //   description= "just now"
//   //   message= "Hello, welcome to my linkeedIn page " />
//   //     </div>
//   //   </div>
//   // );
// }

// My Initial part
// import { Avatar } from "@material-ui/core";
// import { Image } from "@material-ui/icons";
// import { Slideshow } from "@material-ui/icons";
// import { Event } from "@material-ui/icons";
// import { Note } from "@material-ui/icons";

// <div className="center">
//   <div className="center-top">
//     <div className="post">
//       <Avatar className="image-circle"/>
//       <div className="post-border">
//         <p>start a post</p>
//       </div>
//     </div>
//     <div className="icons">
//       <div className="flex-image-text">
//         <Image className="photo"/> <p>Photo</p>
//       </div>
//       <div className="flex-image-text">
//         <Slideshow className="video"/> <p>Video</p>
//       </div>
//       <div className="flex-image-text">
//         <Event className="event"/> <p>Event</p>
//       </div>
//       <div className="flex-image-text">
//         <Note className="article"/> <p>Write Article</p>
//       </div>
//     </div>
//   </div>
// </div>
