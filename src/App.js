import React from "react";
import './App.css';


const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://www.buythelogo.com/wp-content/uploads/2019/03/Tree-geometric-abstract-forest-logo-vector.jpg"></img>
      </header>
      <nav className="nav">
        <a>Profile</a>
        <a>Messages</a>
        <a>News</a>
        <a>Music</a>
        <a>Settings</a>
      </nav>
      <div className="content">
        <img src="https://png.pngtree.com/background/20210712/original/pngtree-modern-double-color-futuristic-neon-background-picture-image_1181573.jpg"></img>
        <div>ava +desc</div>
        <div>my posts
          <div>new post</div>
          <div>
            <div>post1</div>
            <div>post2</div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App; 


