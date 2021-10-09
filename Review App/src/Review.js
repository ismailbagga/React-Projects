import React from "react";
import defaultImage from "./asserts/defaultProfile.jpg";
const Review = ({ review, moveRight, moveLeft, randomIndex }) => {
  const { name, job, image, text } = review;
  return (
    <div className="review-container">
      <div className="Image-container">
        <img src={image || defaultImage} alt={`${name} profile pic`} />
        <i className="fas fa-quote-left" style={{ colot: "red" }}></i>
      </div>
      <h1>{name}</h1>
      <h5>{job}</h5>
      <p>{text}</p>
      <div className="flex-direct-row">
        <i className="fas fa-arrow-left" onClick={moveLeft}></i>
        <i className="fas fa-arrow-right" onClick={moveRight}></i>
      </div>

      <button type="button" className="btn" onClick={randomIndex}>
        Suprise me
      </button>
    </div>
  );
};

export default Review;
