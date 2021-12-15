import React from "react";
import "./App.css";

import Header from  "./components/Header.jsx";
import Profile from "./components/Profile";
//mport Posts from "./components/Posts";
import Messages from "./components/Messagess";


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="account">
          <Profile />
        <div className="content-container">
          {/*<Posts />*/}
          <Messages />
        </div>
      </div>
    </div>
  );
}


export default App; 


