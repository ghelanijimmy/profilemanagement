import styles from "./css/_index.scss";

import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Form from "./Form";
import Myaccount from "./components/myaccount/myaccount";
import Provider from "./components/context/provider";

const App = () => {
  return (
    <Provider>
      <Router>
        <Route exact path={"/"} component={Form} />
        <Route path={"/myaccount"} component={Myaccount} />
      </Router>
    </Provider>
  );
};

render(<App />, document.getElementById("PMApp"));
