import PropTypes from "prop-types";
import React from "react";
import { Input } from "../input/input";
// import { Oauth } from "../oauth/oauth";
import styles from "../../css/_index.scss";
import Modal from "../modal/modal";
import Consumer from "../context/consumer";

const Login = props => {
  const handleLogin = e => {
    e.preventDefault();
    props.data.setLocalStorageUser("Jimmy Ghelani");
    props.data.setModalState();
    props.data.setFirstTime(true);
  };
  return (
    <React.Fragment>
      <form onSubmit={handleLogin} className={styles.section}>
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
          showPasswordButton={true}
        />
        <Input
          type={"checkbox"}
          id={"rememberme"}
          placeholder={"Remember Me"}
          block={false}
          fullWidth={false}
          inline={true}
        />
        <a className={`${styles.flexHalf} ${styles.forgotPassword}`}>
          Forgot password?
        </a>
        <Input type={"submit"} id={"signin"} placeholder={"Sign In"} />
      </form>
      <Modal appType={props.data.appType} modal={props.data.currentModal} />
    </React.Fragment>
  );
};

export default Consumer(Login);

Login.propTypes = {
  data: PropTypes.object
};
