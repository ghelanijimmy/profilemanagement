import PropTypes from "prop-types";
import React from "react";
import styles from "../../css/_index.scss";

export const Input = props => {
  const showPass = e => {
    e.preventDefault();
    const element = document.getElementById(props.id);
    if (element.type === "password") {
      element.type = "text";
      e.target.innerText = "Hide";
    } else {
      element.type = "password";
      e.target.innerText = "Show";
    }
  };

  if (props.type === "email" || props.type === "text" || props.type === "tel") {
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
          required={props.required ? props.required : false}
        />
      </span>
    );
  } else if (props.type === "password") {
    return (
      <div
        className={
          props.fullWidth
            ? `${styles.flexFull} ${styles.inputFlex} ${styles.passwordWrapper}`
            : `${styles.flexHalf} ${styles.inputFlex} ${styles.passwordWrapper}`
        }
      >
        <span className={styles.flexThreeFour}>
          <label
            className={props.block ? styles.dBlock : ""}
            htmlFor={props.id}
          >
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
            required={props.required ? props.required : false}
          />
        </span>
        {props.showPasswordButton ? (
          <span className={styles.flexOneFour}>
            <button
              id={props.showPasswordId}
              onClick={showPass}
              className={`${styles.btn} ${styles.primary} ${styles.dBlock}`}
              type={"button"}
            >
              {props.showPasswordPlaceholder}
            </button>
          </span>
        ) : null}
      </div>
    );
  } else if (props.type === "checkbox") {
    return (
      <span
        className={
          props.fullWidth && props.bg !== true
            ? styles.flexFull
            : props.bg && props.fullWidth
            ? `${styles.flexFull} ${styles.inputBG}`
            : styles.flexHalf
        }
      >
        <input
          className={props.block ? styles.dBlock : ""}
          type={props.type}
          placeholder={props.placeholder}
          id={props.id}
          autoComplete={"off"}
        />
        <label
          className={props.block ? styles.dBlock : styles.dInline}
          htmlFor={props.id}
        >
          {props.placeholder}
        </label>
      </span>
    );
  } else if (props.type === "select") {
    return (
      <span className={props.fullWidth ? styles.flexFull : styles.flexHalf}>
        <label className={props.block ? styles.dBlock : ""} htmlFor={props.id}>
          {props.placeholder}
        </label>
        <select
          className={props.block ? styles.dBlock : ""}
          id={props.id}
          autoComplete={"off"}
          required={props.required ? props.required : false}
        >
          <option value={"Toronto"} defaultChecked={true}>
            Toronto
          </option>
        </select>
      </span>
    );
  } else if (props.type === "submit") {
    return (
      <span className={styles.flexFull}>
        <input
          type={props.type}
          className={styles.dBlock}
          id={props.id}
          autoComplete={"off"}
          value={props.placeholder}
        />
      </span>
    );
  } else if (props.type === "hidden") {
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
          disabled={"disabled"}
          placeholder={props.placeholder}
          autoComplete={"off"}
          className={props.block ? styles.dBlock : ""}
          required={false}
        />
      </span>
    );
  } else if (props.type === "radio") {
    return (
      <React.Fragment>
        {props.options.map((option, i) => {
          return (
            <span
              key={i}
              className={
                props.fullWidth
                  ? `${styles.flexFull} ${styles.inputFlex} ${
                      styles.radioWrapper
                    }`
                  : `${styles.flexHalf} ${styles.inputFlex} ${
                      styles.radioWrapper
                    }`
              }
            >
              <input
                type={props.type}
                placeholder={props.placeholder}
                id={`${props.id}-${option}`}
                name={props.id}
                className={props.block ? styles.dBlock : ""}
                required={props.required ? props.required : false}
                value={option}
              />
              {option}
            </span>
          );
        })}
      </React.Fragment>
    );
  }
};

Input.propTypes = {
  autocomplete: PropTypes.bool,
  bg: PropTypes.bool,
  block: PropTypes.bool,
  fullWidth: PropTypes.bool,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  showPasswordId: PropTypes.string,
  showPasswordPlaceholder: PropTypes.string,
  type: PropTypes.string,
  showPasswordButton: PropTypes.bool,
  numOptions: PropTypes.number,
  options: PropTypes.array,
  inline: PropTypes.bool
};
