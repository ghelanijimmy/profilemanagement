import React from "react";
import Consumer from "../context/consumer";
import dashboardStyles from "./_myaccount.scss";
import styles from "../../css/_index.scss";

const Myaccount = props => {
  if (props.data.isLoggedIn)
    return (
      <div
        className={`${dashboardStyles.dashboard} ${dashboardStyles.Wrapper}`}
      >
        <p className={styles.Title}>Welcome, {props.data.user}</p>
      </div>
    );
  else return null;
};

export default Consumer(Myaccount);
