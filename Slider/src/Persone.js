import React from "react";
import defaultImage from "./asserts/defaultProfile.jpg";
const Persone = ({ people, position }) => {
  const { id, name, title, image, quote } = people;
  return (
    <div id={`${id}`} className={`Persone-container ${position}`}>
      <img src={image || defaultImage} alt="" />
      <h1>{title}</h1>
      <h2>{name}</h2>
      <p>{quote}</p>
    </div>
  );
};

export default Persone;
