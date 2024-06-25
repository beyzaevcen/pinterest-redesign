import React, { useState, useRef } from "react";
import u from "../images/upload.jpg";

function CreatePost() {
  const input = useRef(null);
  const fileUploadHandler = () => {
    input.current.click();
  };

  return (
    <div onClick={fileUploadHandler}>
      <input type="file" ref={input} />
      <img src={u} alt="" />
      <button>Upload</button>
    </div>
  );
}

export default CreatePost;
