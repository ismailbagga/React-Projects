import React, { useEffect } from "react";
import Drink from "./Component/SingleDrink";

import { useGlobalContext } from "./Context";
import { Link } from "react-router-dom";
import Loading from "./Component/Loading";
const Home = () => {
  let { previewDrinks, num, setNum } = useGlobalContext();
  const [loading, setLoading] = React.useState(true);
  let drinks = [];
  useEffect(() => {
    if (previewDrinks) {
      setLoading(false);
    }
  }, [previewDrinks]);
  useEffect(() => {
    if (num !== 0) setNum(0);
  });
  if (loading) {
    return <Loading />;
  }
  for (let i = 0; i < 6; i++) {
    drinks.push(previewDrinks[i]);
  }

  return (
    <main className="container">
      <div className="hero">
        {/* <h1>
          best <br /> Cocktails
        </h1> */}
      </div>

      <h1>Cocktails</h1>
      <div className="drinks-preview">
        {drinks.map((item) => {
          return <Drink key={item.idDrink} data={item} />;
        })}
      </div>
      <Link className="btn bounce-btn" to="/drinks">
        See More
      </Link>
    </main>
  );
};

export default Home;
