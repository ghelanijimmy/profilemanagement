import React from "react";
import { Input } from "../input/input";
import Modal from "../modal/modal";
import styles from "../../css/_index.scss";
import Consumer from "../context/consumer";

const SignUp = props => {
  // TODO Create password regex pattern for input
  // TODO Show "member" text next to sunwing logo after sign in

  return (
    <React.Fragment>
      <form className={styles.section}>
        <p className={styles.Title}>Create Sunwing Account</p>
        <Input
          type={"email"}
          id={"email"}
          placeholder={"Email"}
          block={true}
          fullWidth={true}
          required={true}
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
        <Input
          type={"select"}
          id={"gateway"}
          block={true}
          fullWidth={true}
          placeholder={"Gateway"}
          required={true}
        />
        <Input
          type={"tel"}
          id={"mobile"}
          placeholder={"Mobile#"}
          block={true}
          fullWidth={true}
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
