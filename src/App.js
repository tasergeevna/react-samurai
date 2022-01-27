import React, { useState } from "react";
import "./App.css";

import Header from  "./components/Header.jsx";
import Profile from "./components/Profile";
import Posts from "./components/posts/Posts";
import Messages from "./components/messages/Messages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {StateContext, state} from "./redux/state";



const App = () => {

  return (
    <Router>
      <StateContext.Provider value={state}>
      <div className="app-wrapper">
        <Header />
        <div className="content-wrapper">
          <div className="account">
            <Profile />
            <Routes>
              <Route path="/posts" element={<Posts />} />
              <Route exact path="/messages" element={<Messages />} />
            </Routes>
          </div>
        </div>
      </div>
      </StateContext.Provider>
    </Router>
  );
}


export default App; 


