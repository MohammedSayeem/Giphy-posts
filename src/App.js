import React, { useState } from "react";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import "./App.css";
function App() {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  return (
    <div className="App-container">
      <div className="App">
        <CreatePost
          addPost={(post) => {
            console.log(post);
            debugger;
            setPosts([...posts, post]);
          }}
        />
        <PostList
          posts={posts}
          deletePost={(id) =>
            setPosts([...posts.filter((post, index) => index !== id)])
          }
        />
      </div>
    </div>
  );
}

export default App;
