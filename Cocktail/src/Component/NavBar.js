import React from "react";
import logo from "../asserts/coding-logo.jpg";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";
const NavBar = () => {
  const { num } = useGlobalContext();
  const navButtom = [
    { name: "Home", path: "" },
    { name: "Drinks", path: "/drinks" },
    { name: "About", path: "/about" },
  ];
  return (
    <nav>
      <img src={logo} alt="logo" />
      <div className="Links">
        {navButtom.map((btn, i) => {
          return (
            <Link
              className={`link ${num === i ? "current-btn" : null}`}
              to={btn.path}
            >
              {btn.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
