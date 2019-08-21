import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Form from "./Form";
import Myaccount from "./components/myaccount/myaccount";
import Provider from "./components/context/provider";
import Favlist from "./components/recentsearch/favlist";
import RenderHeader from "./components/header/header";
import Recentsearch from "./components/recentsearch/recentsearch";
import "./css/_variables.scss";
import "./css/_index.scss";

//TODO JCF React Equivalent For Styled Form Elements
//TODO Recent Searches / List make expandable on non dashboard pages

const App = () => {
  return (
    <Provider>
      <Router>
        <RenderHeader />
        <Route exact path={"/"} component={Form} />
        <Route path={"/myaccount"} component={Myaccount} />
        <Route path={"/favlist"} component={Favlist} />
        <Route path={"/recentsearches"} component={Recentsearch} />
      </Router>
    </Provider>
  );
};

render(<App />, document.getElementById("PMApp"));
