import React from "react";

import "../styles/posts.css";
import Post from "./Post";

function posts() {
  return (
    <div className="posts">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default posts;
