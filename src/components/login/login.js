import React, { Component } from "react";
import { Input } from "../input/input";
import Oauth from "../oauth/oauth";

class Login extends Component {
  render() {
    return (
      <form>
        <Oauth />
        <Input type={"email"} id={"email"} placeholder={"Email"} />
        <Input type={"password"} id={"password"} placeholder={"Password"} />
      </form>
    );
  }
}

export default Login;
