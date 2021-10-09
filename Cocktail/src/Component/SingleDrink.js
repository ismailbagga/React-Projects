import React from "react";
import { Link } from "react-router-dom";
const Drink = ({ data }) => {
  const { idDrink, strDrink, strCategory, strGlass, strDrinkThumb } = data;

  return (
    <div className="single-Drink">
      <img src={strDrinkThumb} alt="drink" />
      <div className="drink-info">
        <h1>{strDrink}</h1>
        <h5>{strGlass}</h5>
        <p>{strCategory}</p>
        <Link className="btn" to={`/drink/${idDrink}`}>
          Detail
        </Link>
      </div>
    </div>
  );
};

export default Drink;
