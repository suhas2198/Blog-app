import React from "react";

import "../styles/singlepost.css";

import sunrise2 from "../shared/images/sunrise2.jpg";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={sunrise2} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:<b>Safak</b>{" "}
          </span>
          <span className="singlePostDate">1 hour ago </span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ratione
          maxime illo animi aliquid assumenda. Saepe laboriosam at recusandae
          consequatur obcaecati sit. Vero molestiae sint magnam incidunt labore
          praesentium, voluptate reprehenderit sit aliquam in facilis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ratione
          maxime illo animi aliquid assumenda. Saepe laboriosam at recusandae
          consequatur obcaecati sit. Vero molestiae sint magnam incidunt labore
          praesentium, voluptate reprehenderit sit aliquam in facilis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ratione
          maxime illo animi aliquid assumenda. Saepe laboriosam at recusandae
          consequatur obcaecati sit. Vero molestiae sint magnam incidunt labore
          praesentium, voluptate reprehenderit sit aliquam in facilis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ratione
          maxime illo animi aliquid assumenda. Saepe laboriosam at recusandae
          consequatur obcaecati sit. Vero molestiae sint magnam incidunt labore
          praesentium, voluptate reprehenderit sit aliquam in facilis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ratione
          maxime illo animi aliquid assumenda. Saepe laboriosam at recusandae
          consequatur obcaecati sit. Vero molestiae sint magnam incidunt labore
          praesentium, voluptate reprehenderit sit aliquam in facilis!
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
