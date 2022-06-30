import React from "react";
import Post from "../Post";

const PostList = ({ posts, deletePost }) => {
  return (
    <>
      {posts.length > 0 && (
        <div style={{ marginTop: 30, borderBottom: 1 }}>POSTS</div>
      )}
      <div>
        {posts.map((post, index) => (
          <Post data={post} deletePost={deletePost} id={index} />
        ))}
      </div>
    </>
  );
};

export default PostList;
