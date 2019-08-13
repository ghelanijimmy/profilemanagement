import React, { useState } from "react";
import searchStyles from "../recentsearch/_recentsearch.scss";
import styles from "../../css/_index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tabs = React.forwardRef((props, ref) => {
  return (
    <button
      onClick={props.handleTabClick(ref)}
      className={
        props.stateOption === props.searchOption
          ? `${styles.btn} ${styles.primary} ${searchStyles.activeOption}`
          : `${styles.btn} ${styles.primaryInverse}`
      }
      data-searchoption={props.searchOption}
      ref={ref}
    >
      <FontAwesomeIcon icon={props.icon} />
      {props.text}
    </button>
  );
});

export { Tabs };
