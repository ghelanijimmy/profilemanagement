import React from "react";
import { Input } from "../input/input";
import Modal from "../modal/modal";

export const SignUp = props => {
  return (
    <React.Fragment>
      <form>
        <h3>Create Sunwing Account</h3>
        <Input
          type={"email"}
          id={"email"}
          placeholder={"Email"}
          block={true}
          fullWidth={true}
        />
        <Input
          type={"password"}
          id={"password"}
          placeholder={"Password"}
          block={true}
          fullWidth={true}
        />
        <Input
          type={"text"}
          id={"fName"}
          placeholder={"First Name"}
          block={true}
          fullWidth={false}
        />
        <Input
          type={"text"}
          id={"lName"}
          placeholder={"Last Name"}
          block={true}
          fullWidth={false}
        />
        <Input type={"select"} id={"gateway"} block={true} fullWidth={true} placeholder={"Gateway"}/>
        <Input
          type={"tel"}
          id={"mobile"}
          placeholder={"Mobile#"}
          block={true}
          fullWidth={true}
        />
      </form>
      <Modal appType={props.appType} />
    </React.Fragment>
  );
};
