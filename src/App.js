import React from "react";
import "./App.css";

import Header from  "./components/Header.jsx";
import Profile from "./components/Profile";
import Content from "./components/Content";


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="account">
        <Profile />
        <Content />
      </div>
    </div>
  );
}


export default App; 


