import React, { useState } from "react";
import GifSearch from "../GifSearch";

import "./CreatePost.css";

const CreatePost = ({ addPost }) => {
  const [selectedGif, setSelectedGif] = useState(null);
  const [postText, setPostText] = useState("");
  return (
    <>
      <div className="post-container">
        <input
          className="post-text"
          placeholder="Pass your posts with giphy's..."
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
        {selectedGif && (
          <div className="post-gif-container">
            <div className="close-btn" onClick={() => setSelectedGif(null)}>
              X
            </div>
            <img src={selectedGif} alt="gif" />
          </div>
        )}
      </div>
      <div className="btn-container">
        <GifSearch setSelectedGif={setSelectedGif} />
        <button
          id="post-btn"
          onClick={() => {
            addPost?.({
              text: postText,
              image: selectedGif,
            });
            setPostText("");
            setSelectedGif(null);
          }}
        >
          POST
        </button>
      </div>
    </>
  );
};

export default CreatePost;
