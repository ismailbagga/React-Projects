import React from "react";
import defaultImage from "./asserts/defaultRecipe.jpg";
const Recipe = ({ recipe }) => {
  const { title, price, img, desc } = recipe;
  return (
    <div className="recipe-container">
      <img src={img || defaultImage} alt="Recipe" />
      <div className="info">
        <div className="flex-direct-row">
          <h5>{title}</h5>
          <p>{price}</p>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Recipe;
