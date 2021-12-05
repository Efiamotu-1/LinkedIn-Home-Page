// import logo from './logo.svg';

// import {useState} from 'react'
import "./App.css";
import Center from "./centerContent";
import Header from "./components/Header";
import Feeds from "./Feed";
import SideBar from "./sidebar";

function App() {


  // const addPost=(state)=>{
  //   console.log(state)
  // }
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        {/* Sidebar*/}
       <SideBar />
       <Center />
       <Feeds />
       <div></div>
      </div>
    </div>
  );
}

export default App;
