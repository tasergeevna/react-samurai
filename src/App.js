import React from "react";
import "./App.css";

import Header from  "./components/Header.jsx";
import Profile from "./components/Profile";
import Posts from "./components/Posts";
import Messages from "./components/Messages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <div className="account">
            <Profile />
          <div className="content-container">
          <Routes>
            <Route path="/posts" element={<Posts />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}


export default App; 


