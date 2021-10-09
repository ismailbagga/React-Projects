import React from "react";
import { useGlobalContext } from "../Context";
const Footer = () => {
  const { isEmpty } = useGlobalContext();

  return (
    <footer className={`page-footer  ${isEmpty ? "put-in-bottom" : null}`}>
      <p>
        {" "}
        <i className="far fa-copyright"></i> made by{" "}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ismail-bagga-a5b485205/"
          rel="noreferrer"
        >
          Ismail Bagga
        </a>{" "}
        contact here
      </p>
    </footer>
  );
};

export default Footer;
