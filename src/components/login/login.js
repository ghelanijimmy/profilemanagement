import React from "react";
import { Input } from "../input/input";
import { Oauth } from "../oauth/oauth";
import styles from "../../css/_index.scss";
import Modal from "../modal/modal";

export const Login = props => {
  const handleLogin = e => {
    e.preventDefault();
    props.setUser("Jimmy Ghelani");
    // props.setAppType("");
    props.closeModal();
  };
  return (
    <React.Fragment>
      <form onSubmit={handleLogin}>
        <p className={styles.Title}>Sign In</p>
        {/*<Oauth />*/}
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
          showPasswordId={"showLogin"}
          showPasswordPlaceholder={"Show"}
          required={true}
        />
        <Input
          type={"checkbox"}
          id={"rememberme"}
          placeholder={"Remember Me"}
          block={false}
          fullWidth={false}
        />
        <a className={`${styles.flexHalf} ${styles.forgotPassword}`}>
          Forgot password?
        </a>
        <Input type={"submit"} id={"signin"} placeholder={"Sign In"} />
      </form>
      <Modal appType={props.appType} modal={props.modal} />
    </React.Fragment>
  );
};
