import React from "react";
import { useGlobalContext } from "./Context";
const NavBar = () => {
  const { itemsCount } = useGlobalContext();

  return (
    <nav>
      <h1 className="text-header">Home</h1>
      <i className="fas fa-cart-arrow-down">
        <span className="count">{itemsCount}</span>
      </i>
    </nav>
  );
};

export default NavBar;
