import React, { useState } from "react";
import Consumer from "../context/consumer";
import dashboardStyles from "./_myaccount.scss";
import styles from "../../css/_index.scss";
import elementStyles from "../commonelements/_elements.scss";
import { Tabs } from "../commonelements/elements";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Myaccount = props => {
  const [tabOption, setTabOption] = useState("");

  const bookingRef = React.createRef();
  const accountRef = React.createRef();
  const travelPrefRef = React.createRef();
  const bookingPrefRef = React.createRef();

  const handleTabOptionChange = e => {
    e.preventDefault();

    if (e.target.nodeName !== "button")
      setTabOption(e.target.closest("button").dataset.searchoption);
    else setTabOption(e.target.dataset.searchoption);
  };

  if (props.data.isLoggedIn)
    return (
      <div
        className={`${dashboardStyles.dashboard} ${dashboardStyles.Wrapper}`}
      >
        <p className={styles.Title}>Welcome, {props.data.user}</p>
        <div className={elementStyles.searchOptions}>
          <Tabs
            searchOption={"booking"}
            text={"My booking"}
            iconPosition={"right"}
            icon={faChevronDown}
            ref={bookingRef}
            handleTabClick={() => handleTabOptionChange}
            stateOption={tabOption}
          />
          <Tabs
            searchOption={"account"}
            text={"My account info"}
            iconPosition={"right"}
            icon={faChevronDown}
            ref={accountRef}
            handleTabClick={() => handleTabOptionChange}
            stateOption={tabOption}
          />
          <Tabs
            searchOption={"travelpref"}
            text={"Travel preferences"}
            iconPosition={"right"}
            icon={faChevronDown}
            ref={travelPrefRef}
            handleTabClick={() => handleTabOptionChange}
            stateOption={tabOption}
          />
          <Tabs
            searchOption={"bookingpref"}
            text={"Booking preferences"}
            iconPosition={"right"}
            icon={faChevronDown}
            ref={bookingPrefRef}
            handleTabClick={() => handleTabOptionChange}
            stateOption={tabOption}
          />
        </div>
      </div>
    );
  else return null;
};

export default Consumer(Myaccount);
