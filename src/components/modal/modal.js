import React from "react";
import styles from "../../css/_index.scss";

const Modal = props => {
  if (props.appType === "login") {
    return (
      <div>
        <span className={`${styles.flexHalf} ${styles.inputFlex}`}>
          <span>Don't have an account?</span>
        </span>
        <span className={`${styles.flexHalf} ${styles.inputFlex}`}>
          <span>
            <a>Create your profile</a>
          </span>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className={`${styles.flexHalf}`}>
          <a>Already have an account?</a>
        </span>
        <span className={`${styles.flexHalf}`}>
          <a>Sign In</a>
        </span>
      </div>
    );
  }
};

export default Modal;
