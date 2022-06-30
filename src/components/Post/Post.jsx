import React from "react";
import "./post.css";

const Post = ({ data, deletePost, id }) => {
  return (
    <div className="post">
      <div className="post-items">
        <p>{data.text}</p>
        <img src={data.image} alt="gif" />
      </div>
      <button onClick={() => deletePost(id)} className="del">
        DELETE POST
      </button>
    </div>
  );
};

export default Post;
