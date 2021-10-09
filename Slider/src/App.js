import React, { useState, useEffect, useCallback } from "react";
import data from "./data";
import Persone from "./Persone";
const App = () => {
  const peoples = useState(data)[0];
  const [value, setValue] = useState(0);
  const len = useState(peoples.length)[0];
  const moveLeft = () => {
    if (value === 0) setValue(len - 1);
    else setValue(value - 1);
  };
  const moveRight = useCallback(() => {
    if (value === len - 1) setValue(0);
    else setValue(value + 1);
  }, [value, len]);
  useEffect(() => {
    const slider = setTimeout(() => moveRight(), 5000);
    return () => {
      clearTimeout(slider);
    };
  }, [moveRight]);

  return (
    <div className="container">
      <h1 className="text-header">reviews</h1>
      <div className="Arrows-container">
        <i className="fas fa-arrow-left" onClick={moveLeft}></i>
        <i className="fas fa-arrow-right" onClick={moveRight}></i>
      </div>
      <div className="peoples-container">
        {peoples.map((people, index) => {
          let position = "nextItem";
          if (index === value) {
            position = "currrentItem";
          } else if (
            index === value - 1 ||
            (value === 0 && index === len - 1)
          ) {
            position = "lastItem";
          }
          return (
            <Persone key={people.id} people={people} position={position} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
