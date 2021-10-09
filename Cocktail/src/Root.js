import React from "react";
import Home from "./Home";
import About from "./About";
import Drinks from "./Drinks";
import Errore from "./Errore";
import NavBar from "./Component/NavBar";
import DetailPage from "./DetailPage";
import Footer from "./Component/Footer";
import AppProvider from "./Context";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Root = () => {
  return (
    <React.Fragment>
      <AppProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/drinks">
              <Drinks />
            </Route>
            <Route path="/drink/:id">
              <DetailPage />
            </Route>
            <Route path="*">
              <Errore />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AppProvider>
    </React.Fragment>
  );
};

export default Root;
