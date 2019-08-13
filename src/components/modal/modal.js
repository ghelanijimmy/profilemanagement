import React from "react";
import styles from "../../css/_index.scss";
import modalStyles from "./_modal.scss";

const Modal = props => {
  if (props.appType === "login") {
    return (
      <div className={`${modalStyles.modal} ${modalStyles.Footer}`}>
        <span className={`${styles.flexHalf} ${styles.inputFlex}`}>
          Don't have an account?
        </span>
        <span className={`${styles.flexHalf} ${styles.inputFlex}`}>
          <a onClick={() => props.modal("create")}>Create your profile</a>
        </span>
      </div>
    );
  } else {
    return (
      <div className={`${modalStyles.modal} ${modalStyles.Footer}`}>
        <span className={`${styles.flexThreeFour}`}>
          Already have an account?
        </span>
        <span className={`${styles.flexOneFour}`}>
          <a onClick={() => props.modal("login")}>Sign In</a>
        </span>
      </div>
    );
  }
};

export default Modal;
