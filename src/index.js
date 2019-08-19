import styles from "./css/_index.scss";

import React from "react";
import { render, createPortal } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Form from "./Form";
import Myaccount from "./components/myaccount/myaccount";
import Provider from "./components/context/provider";
import Favlist from "./components/recentsearch/favlist";
import RenderHeader from "./components/header/header";

const App = () => {
  return (
    <Provider>
      <Router>
        <RenderHeader />
        <Route exact path={"/"} component={Form} />
        <Route path={"/myaccount"} component={Myaccount} />
        <Route path={"/favlist"} component={Favlist} />
      </Router>
    </Provider>
  );
};

render(<App />, document.getElementById("PMApp"));
