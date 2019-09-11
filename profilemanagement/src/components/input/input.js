import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import styles from "../../css/_index.scss";

export const Input = props => {
  const [checked, setChecked] = useState(
    props.options !== undefined && props.options.indexOf(props.placeholder) >= 0
  );

  const [radioCheck, setRadioCheck] = useState(
    props.options !== undefined ? props.options.map((option, i) => false) : []
  );

  const inputRef = React.createRef();
  const radioRef = [];

  const selectOptionRef = React.createRef();

  useEffect(() => {
    if (selectOptionRef.current !== null) {
      selectOptionRef.current.selected = true;
    }
  }, []);

  const handleInputCheck = () => {
    setChecked(!checked);
  };

  const handleRadioCheck = (ref, i) => {
    let oldArr = [...radioCheck];
    const newArr = oldArr.map((radio, index) => {
      if (i === index) {
        oldArr[index] = !oldArr[index];
        return oldArr[i];
      } else {
        oldArr[index] = false;
        return oldArr[index];
      }
    });
    // console.log(newArr);
    setRadioCheck(newArr);
    // if (ref.current !== null) ref.current.checked = !ref.current.checked;
  };

  useEffect(() => {
    radioCheck.map((key, i) => {
      if (radioRef !== undefined && radioRef[i] !== undefined) {
        radioRef[i].current.checked = radioCheck[i];
      }
    });
  }, [radioCheck]);

  useEffect(() => {
    if (inputRef.current !== null) inputRef.current.checked = checked;

    if (props.handleInput) props.handleInput(inputRef.current);
  }, [checked]);

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
          onChange={
            props.handleInput ? e => props.handleInput(e.target.value) : null
          }
          value={"" || props.updatedValue}
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
            onChange={
              props.handleInput ? e => props.handleInput(e.target.value) : null
            }
            value={"" || props.updatedValue}
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
            : `${styles.flexHalf} ${styles.inputCheckboxWrapper}`
        }
      >
        <input
          className={props.block ? styles.dBlock : ""}
          type={props.type}
          placeholder={props.placeholder}
          id={props.id}
          autoComplete={"off"}
          onChange={
            props.handleInput ? () => props.handleInput(inputRef) : null
          }
          defaultChecked={checked}
          ref={inputRef}
        />
        <span className={styles.checkbox} onClick={handleInputCheck}>
          <span className={styles.activeCheckWrapper}>
            <span className={checked ? styles.activeCheck : ""} />
          </span>
        </span>
        <label
          className={props.block ? styles.dBlock : styles.dInline}
          htmlFor={props.id}
          onClick={handleInputCheck}
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
          onChange={
            props.handleInput ? e => props.handleInput(e.target.value) : null
          }
        >
          <option
            ref={selectOptionRef}
            value={"Select"}
            defaultChecked={true}
            disabled={"disabled"}
          >
            Select
          </option>
          <option value={"Toronto"} defaultChecked={false}>
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
          radioRef[i] = React.createRef();
          return (
            <span
              key={i}
              className={
                props.fullWidth
                  ? `${styles.flexFull} ${styles.inputFlex} ${styles.radioWrapper}`
                  : `${styles.flexHalf} ${styles.inputFlex} ${styles.radioWrapper}`
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
                ref={radioRef[i]}
                defaultChecked={radioCheck[i]}
              />
              <span
                className={styles.radio}
                onClick={() => handleRadioCheck(option, i)}
              >
                <span className={styles.activeRadioWrapper}>
                  <span className={radioCheck[i] ? styles.activeRadio : ""} />
                </span>
              </span>
              <label className={styles.dInline} htmlFor={props.id}>
                {option}
              </label>
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
  inline: PropTypes.bool,
  handleInput: PropTypes.func,
  updatedValue: PropTypes.string
};
