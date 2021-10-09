import React from "react";
import logo from "./asserts/coding-logo.jpg";
import { useGlobalContext } from "./Context";
const About = () => {
  const { num, setNum } = useGlobalContext();
  React.useEffect(() => {
    if (num !== 2) setNum(2);
  });
  return (
    <div className="container about-page">
      <h1>About Page</h1>
      <img src={logo} alt="loading" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
        accusantium aut adipisci, dignissimos atque vel minus commodi dolor
        blanditiis magni maiores quos possimus beatae. Natus qui, excepturi,
        corporis quia odit voluptate a sunt voluptatibus possimus esse accusamus
        repudiandae quis, reiciendis incidunt enim est sint doloribus magni
        inventore iste impedit doloremques
      </p>
    </div>
  );
};

export default About;
