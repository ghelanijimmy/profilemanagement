import React, { useState } from "react";
import searchStyles from "../recentsearch/_recentsearch.scss";
import styles from "../../css/_index.scss";
import elementStyles from "../commonelements/_elements.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tabs = React.forwardRef((props, ref) => {
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

export { Tabs };
