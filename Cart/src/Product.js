import React from "react";
import { useState, useEffect } from "react/cjs/react.development";
import { useGlobalContext } from "./Context";
const Product = ({ data }) => {
  const { id, amount, title, img, price } = data;
  const { changeAmount } = useGlobalContext();
  const [value, setValue] = useState(amount);
  useEffect(() => {
    changeAmount(id, value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
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
