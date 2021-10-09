import React from "react";
import { Link } from "react-router-dom";
const Errore = () => {
  return (
    <div className="container error">
      <Link className="btn" to="">
        Back Home
      </Link>
      <h1>404 Error page</h1>
    </div>
  );
};

export default Errore;
