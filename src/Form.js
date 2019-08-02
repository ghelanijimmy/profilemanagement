import React, { Component, useState } from "react";
import { SignUp } from "./components/signup/signup";
import styles from "./css/_index.scss";
import Login from "./components/login/login";

const Form = React.forwardRef((props, ref) => {
  const [appType, setAppType] = useState("");

  window.PMApp = setAppType;

  if (appType === "login") {
    return <Login />;
  } else if (appType === "create") {
    return <SignUp />;
  } else {
    return null;
  }
});

export default Form;
