import React from "react";
import Post from "./Post";

const Home = () => {
  return (
    <div className="home page">
      <div className="page-container">
        <h1 className="page-heading page-title" lang="fi">
          Posts
        </h1>
        <div className="page-content">
          <Post />
        </div>
      </div>
    </div>
  );
};

export default Home;
