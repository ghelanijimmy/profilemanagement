import React from "react";
import styles from "../../css/_index.scss";

export const Input = props => {
  if (
    props.type === "email" ||
    props.type === "password" ||
    props.type === "text" ||
    props.type === "tel"
  ) {
    return (
      <span
        className={
          props.fullWidth
            ? `${styles.flexFull} ${styles.inputFlex}`
            : `${styles.flexHalf} ${styles.inputFlex}`
        }
      >
        <label className={props.block ? styles.dBlock : ""} htmlFor={props.id}>
          {props.placeholder}
        </label>
        <input
          type={props.type}
          placeholder={props.placeholder}
          id={props.id}
          autoComplete={
            props.autocomplete !== undefined ? props.autocomplete : "off"
          }
          className={props.block ? styles.dBlock : ""}
        />
      </span>
    );
  } else if (props.type === "checkbox") {
    return (
      <span className={props.fullWidth ? styles.flexFull : styles.flexHalf}>
        <input
          className={props.block ? styles.dBlock : ""}
          type={props.type}
          placeholder={props.placeholder}
          id={props.id}
          autoComplete={"off"}
        />
        <label className={props.block ? styles.dBlock : ""} htmlFor={props.id}>
          {props.placeholder}
        </label>
      </span>
    );
  }
};
