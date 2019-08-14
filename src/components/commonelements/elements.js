import React from "react";
import styles from "../../css/_index.scss";
import elementStyles from "../commonelements/_elements.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export const Tabs = React.forwardRef((props, ref) => {
  return (
    <button
      onClick={props.handleTabClick(ref)}
      className={
        props.stateOption === props.searchOption
          ? `${styles.btn} ${styles.primary} ${elementStyles.activeOption}`
          : `${styles.btn} ${styles.primaryInverse}`
      }
      data-searchoption={props.searchOption}
      ref={ref}
    >
      {props.iconPosition !== "right" ? (
        <FontAwesomeIcon className={styles.left} icon={props.icon} />
      ) : null}
      {props.text}
      {props.iconPosition === "right" ? (
        <FontAwesomeIcon className={styles.right} icon={props.icon} />
      ) : null}
    </button>
  );
});

Tabs.propTypes = {
  searchOption: PropTypes.string,
  stateOption: PropTypes.string,
  icon: PropTypes.object,
  text: PropTypes.string,
  iconPosition: PropTypes.string,
  handleTabClick: PropTypes.func
};
