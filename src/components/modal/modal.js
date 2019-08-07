import React from "react";
import styles from "../../css/_index.scss";
import modalStyles from "./_modal.scss";

const Modal = props => {
  if (props.appType === "login") {
    return (
      <div className={modalStyles.modalFooter}>
        <span className={`${styles.flexHalf} ${styles.inputFlex}`}>
          Don't have an account?
        </span>
        <span className={`${styles.flexHalf} ${styles.inputFlex}`}>
          <a>Create your profile</a>
        </span>
      </div>
    );
  } else {
    return (
      <div className={modalStyles.modalFooter}>
        <span className={`${styles.flexThreeFour}`}>
          Already have an account?
        </span>
        <span className={`${styles.flexOneFour}`}>
          <a>Sign In</a>
        </span>
      </div>
    );
  }
};

export default Modal;
