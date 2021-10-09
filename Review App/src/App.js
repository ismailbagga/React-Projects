import React, { useState } from "react";
import data from "./data.js";
import Review from "./Review.js";
const App = () => {
  const len = data.length - 1;
  const [index, setIndex] = useState(0);
  const review = data[index];

  const moveLeft = () => {
    if (index === 0) setIndex(len);
    else {
      setIndex(index - 1);
    }
  };
  const moveRight = () => {
    if (index === len) setIndex(0);
    else {
      setIndex(index + 1);
    }
  };
  const randomIndex = () => {
    setIndex(parseInt(Math.random() * len + 1));
  };
  return (
    <main>
      <div className="container">
        <h1 className="header">Our Reviews</h1>
        <Review
          key={review.id}
          review={review}
          moveRight={moveRight}
          moveLeft={moveLeft}
          randomIndex={randomIndex}
        />
      </div>
    </main>
  );
};

export default App;
