import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./Context";
const Product = ({ data }) => {
  const { id, amount, title, img, price } = data;
  const { changeAmount } = useGlobalContext();
  console.log(amount);
  const [value, setValue] = useState(amount);
  useEffect(() => {
    changeAmount(id, value);
  }, [value, id]);
  return (
    <div className="Single-Product">
      <img src={img} alt="phone" />
      <div className="info">
        <div className="flex-direct-column">
          <h5>{title}</h5>
          <h6>{price}$</h6>
          <button onClick={() => {}}>Remove</button>
        </div>

        <input
          type="number"
          min="0"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Product;
