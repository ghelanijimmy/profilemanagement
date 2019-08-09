import React from "react";
import { Input } from "../input/input";
import { Oauth } from "../oauth/oauth";
import styles from "../../css/_index.scss";
import Modal from "../modal/modal";

export const Login = props => {
  return (
    <React.Fragment>
      <form>
        <p className={styles.Title}>Sign In</p>
        {/*<Oauth />*/}
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
          showPasswordId={"showLogin"}
          showPasswordPlaceholder={"Show"}
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
        <Input type={"submit"} id={"signup"} placeholder={"Sign In"} />
      </form>
      <Modal appType={props.appType} modal={props.modal} />
    </React.Fragment>
  );
};
