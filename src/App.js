import React from "react";
import "./App.css";

import Header from  "./components/Header.jsx";
import Profile from "./components/Profile";
import Posts from "./components/Posts";


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="account">
        <Profile />
        <Posts />
      </div>
    </div>
  );
}


export default App; 


