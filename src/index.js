import styles from "./css/_index.scss";

import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Form from "./Form";

const App = () => {
  return (
    <Router>
      <Route exact path={"/"} component={Form} />
    </Router>
  );
};

render(<App />, document.getElementById("PMApp"));
