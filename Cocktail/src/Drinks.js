import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "./Context";
import Drink from "./Component/SingleDrink";
import Loading from "./Component/Loading";
const Drinks = () => {
  const { drinksObj, getDrinks, isEmpty, searchValue, num, setNum } =
    useGlobalContext();
  const [value, setValue] = useState("");
  const refrence = useRef(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading === false && !isEmpty) refrence.current.focus();
  }, [loading, isEmpty]);
  useEffect(() => {
    if (drinksObj || isEmpty) {
      setLoading(false);
    }
  }, [drinksObj, isEmpty]);
  useEffect(() => {
    if (num !== 1) setNum(1);
  });
  return (
    <main className="container">
      <div className="inputs">
        <h1>Search for cocktails</h1>
        <input
          ref={refrence}
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <br />
        <button
          className="btn"
          onClick={() => {
            if (value === searchValue) return;
            setLoading(true);
            getDrinks(value);
          }}
        >
          {" "}
          Search{" "}
        </button>
      </div>
      {loading ? (
        <Loading />
      ) : isEmpty ? (
        <div className="Empty-Value">
          <h1>no value was found</h1>
        </div>
      ) : (
        <div className="drinks-preview">
          {drinksObj.map((item) => {
            return <Drink key={item.idDrink} data={item} />;
          })}
        </div>
      )}
    </main>
  );
};

export default Drinks;
