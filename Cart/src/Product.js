import React from "react";
import { useGlobalContext } from "./Context";
const Product = ({ data }) => {
  const { id, amount, title, img, price } = data;
  const { changeAmount, deleteItem } = useGlobalContext();
  return (
    <div className="Single-Product">
      <img src={img} alt="phone" />
      <div className="info">
        <div className="flex-direct-column">
          <h5>{title}</h5>
          <h6>{price}$</h6>
          <button
            onClick={() => {
              deleteItem(id);
            }}
          >
            Remove
          </button>
        </div>

        <input
          type="number"
          min="0"
          value={amount}
          onChange={(e) => {
            const value = e.target.value;
            console.log(parseInt(value));
            if (!isNaN(parseInt(value))) changeAmount(id, e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Product;
