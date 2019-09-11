import React, { useState } from "react";
import { Input } from "../input/input";
import Modal from "../modal/modal";
import styles from "../../css/_index.scss";
import Consumer from "../context/consumer";

const SignUp = props => {
  // TODO Create password regex pattern for input
  // TODO Show "member" text next to sunwing logo after sign in

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [gateway, setGateway] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSignUp = e => {
    e.preventDefault();

    console.table([email, firstName, lastName, password, gateway, mobile]);

    fetch("http://localhost:3005/users/add", {
      method: "post",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        firstname: firstName,
        lastname: lastName,
        password: password,
        gateway: gateway,
        mobile: mobile
      })
    })
      .then(result => result.json())
      .then(data => {
        console.log(data);
        props.data.setModalState();
        props.data.setDbUsers(old => [...old, data]);
      });
  };

  return (
    <React.Fragment>
      <form
        ref={props.passedref}
        className={styles.section}
        onSubmit={handleSignUp}
      >
        <p className={styles.Title}>Create Sunwing Account</p>
        <Input
          type={"email"}
          id={"email"}
          placeholder={"Email"}
          block={true}
          fullWidth={true}
          required={true}
          handleInput={setEmail}
          updatedValue={email || ""}
        />
        <Input
          type={"password"}
          id={"password"}
          placeholder={"Password"}
          block={true}
          fullWidth={true}
          showPasswordId={"showCreate"}
          showPasswordPlaceholder={"Show"}
          showPasswordButton={true}
          handleInput={setPassword}
          updatedValue={password || ""}
        />
        <Input
          type={"text"}
          id={"fName"}
          placeholder={"First Name"}
          block={true}
          fullWidth={false}
          handleInput={setFirstName}
          updatedValue={firstName || ""}
        />
        <Input
          type={"text"}
          id={"lName"}
          placeholder={"Last Name"}
          block={true}
          fullWidth={false}
          handleInput={setLastName}
          updatedValue={lastName || ""}
        />
        <Input
          type={"select"}
          id={"gateway"}
          block={true}
          fullWidth={true}
          placeholder={"Gateway"}
          required={true}
          handleInput={setGateway}
          updatedValue={gateway || ""}
        />
        <Input
          type={"tel"}
          id={"mobile"}
          placeholder={"Mobile#"}
          block={true}
          fullWidth={true}
          handleInput={setMobile}
          updatedValue={mobile || ""}
        />
        <Input
          type={"checkbox"}
          id={"sendEmail"}
          placeholder={
            "Send me emails with travel deals, special offers, and other information."
          }
          block={false}
          fullWidth={true}
          bg={true}
        />
        <Input type={"submit"} id={"signup"} placeholder={"Create Account"} />
        <p className={styles.marginTopBottom0}>
          By creatig an account, I agree to the <a>Terms of Use</a> and the{" "}
          <a>Privacy Policy</a>
        </p>
      </form>
      <Modal appType={props.data.appType} modal={props.data.currentModal} />
    </React.Fragment>
  );
};

export default Consumer(SignUp);
