import React from "react";
import "../styles/post.css";
import dew2 from "../shared/images/dew2.jpg";

function Post() {
  return (
    <div className="post">
      <img className="postImg" src={dew2} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Life</span>
          <span className="postCat"> Music</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
<hr/>
        <span className="postDate">1hour ago</span>
      </div> 
      <p className="postDesc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi sunt
        modi sequi illo eum ipsum harum esse temporibus perspiciatis repellat
        ipsam dolore sit suscipit, natus asperiores quasi sed. Saepe, cum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi sunt
        modi sequi illo eum ipsum harum esse temporibus perspiciatis repellat
        ipsam dolore sit suscipit, natus asperiores quasi sed. Saepe, cum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi sunt
        modi sequi illo eum ipsum harum esse temporibus perspiciatis repellat
        ipsam dolore sit suscipit, natus asperiores quasi sed. Saepe, cum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi sunt
        modi sequi illo eum ipsum harum esse temporibus perspiciatis repellat
        ipsam dolore sit suscipit, natus asperiores quasi sed. Saepe, cum.
      </p>
    </div>
  );
}

export default Post;
