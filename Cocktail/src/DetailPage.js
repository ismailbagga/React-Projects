import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Component/Loading";
const DetailPage = () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
  const { id } = useParams();
  const [drink, setDrink] = useState({});
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  const {
    strDrink,
    strCategory,
    strGlass,
    strDrinkThumb,
    strAlcoholic,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
  } = drink;
  const fetchDrinks = useCallback(async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (!data.drinks) setError(true);
      else {
        setDrink(data.drinks[0]);
      }
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  }, []);
  useEffect(() => {
    fetchDrinks(url + id);
  }, [id, url, fetchDrinks]);

  if (loading) return <Loading />;
  else if (Error) return <h1>Errorr</h1>;
  return (
    <section>
      <h1>{strDrink}</h1>
      <div className="Details">
        <img src={strDrinkThumb} alt="drink" />
        <div className="drink-info">
          <div className="detail-info">
            <h5>
              <span className="title">Name :</span>
              {strDrink}
            </h5>
          </div>
          <div className="detail-info">
            <h5>
              <span className="title">Category :</span>
              {strCategory}
            </h5>
          </div>
          <div className="detail-info">
            <h5>
              <span className="title">Info :</span>
              {strAlcoholic}
            </h5>
          </div>
          <div className="detail-info">
            <h5>
              <span className="title">Glass :</span>
              {strGlass}
            </h5>
          </div>
          <div className="detail-info">
            <h5>
              <span className="title">Instruction :</span>
              {strInstructions}
            </h5>
          </div>
          <div className="detail-info">
            <h5>
              <span className="title">Ingredients :</span>
              {strIngredient1}
              {strIngredient2}
              {strIngredient3}
              {strIngredient4}
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
