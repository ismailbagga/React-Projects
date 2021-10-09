import React from "react";
import logo from "../asserts/coding-logo.jpg";
const Loading = () => {
  return (
    <div className="loading">
      <img src={logo} alt="loading" />
      <h1>Loading ...</h1>
    </div>
  );
};

export default Loading;
