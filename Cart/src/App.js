import React from "react";
import Product from "./Product";
// import data from "./data";
import { useGlobalContext } from "./Context";
const App = () => {
  const { loading, data, total, clearTheCart } = useGlobalContext();

  if (loading) return <div className="container">Loading</div>;
  return (
    <div className="container">
      <h1 className="text-header">Your Cart</h1>
      <div className="items">
        {data.map((item) => {
          return <Product key={item.id} data={item} />;
        })}
      </div>
      <div className="flex-direct-row">
        <h5>Total</h5>
        <h4>{total}$</h4>
      </div>
      <button className="btn" onClick={clearTheCart}>
        Clear Cart
      </button>
    </div>
  );
};

export default App;
