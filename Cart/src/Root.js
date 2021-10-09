import React from "react";
import App from "./App";
import NavBar from "./NavBar";
import "./index.css";
import AppProvider from "./Context";
const Root = () => {
  return (
    <React.Fragment>
      <AppProvider>
        <main>
          <NavBar />
          <App />
        </main>
      </AppProvider>
    </React.Fragment>
  );
};

export default Root;
