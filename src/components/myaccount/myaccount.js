import React, { useState, useEffect } from "react";
import Consumer from "../context/consumer";
import dashboardStyles from "./_myaccount.scss";
import styles from "../../css/_index.scss";
import elementStyles from "../commonelements/_elements.scss";
import { Tabs } from "../commonelements/elements";
import {
  faChevronDown,
  faFileAlt,
  faGlobe,
  faGlobeAmericas,
  faPrint,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Myaccount = props => {
  const [tabOption, setTabOption] = useState("");
  const [dashboardRender, setDashboardRender] = useState("");

  useEffect(() => {
    switch (tabOption) {
      case "booking":
        setDashboardRender(<p className={styles.Title}>My booking</p>);
        break;
      case "account":
        setDashboardRender(
          <p className={styles.Title}>
            <FontAwesomeIcon icon={faUser} />
            My account info
          </p>
        );
        break;
      case "travelpref":
        setDashboardRender(
          <React.Fragment>
            <p className={styles.Title}>
              <FontAwesomeIcon icon={faGlobeAmericas} />
              Travel preferences
            </p>
            <p>
              Your travel preferences help you get exactly what you want for
              your next trip. We want you to get what you are looking for.
            </p>
          </React.Fragment>
        );
        break;
      case "bookingpref":
        setDashboardRender(
          <React.Fragment>
            <p className={styles.Title}>
              <FontAwesomeIcon icon={faFileAlt} />
              Booking preferences
            </p>
            <p>
              Make a choice in a way that helps us help you get the best you
              want, when you want.
            </p>
          </React.Fragment>
        );
        break;
      default:
        setDashboardRender("");
        break;
    }
  }, [tabOption]);

  const renderDashboardComponent = () => {};

  const bookingRef = React.createRef();
  const accountRef = React.createRef();
  const travelPrefRef = React.createRef();
  const bookingPrefRef = React.createRef();

  //Handle firstTime tab selection
  useEffect(() => {
    if (props.data.firstTime) {
      setTabOption("account");
    }
  }, [props.data.firstTime]);
  //Handle tab change
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
        <section>
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
          <div className={`${dashboardStyles.infoWrapper} ${styles.section}`}>
            {dashboardRender}
          </div>
        </section>
      </div>
    );
  else return null;
};

export default Consumer(Myaccount);
