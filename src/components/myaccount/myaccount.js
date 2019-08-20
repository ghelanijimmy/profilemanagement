import React, { useState, useEffect } from "react";
import Consumer from "../context/consumer";
import dashboardStyles from "./_myaccount.scss";
import styles from "../../css/_index.scss";
import elementStyles from "../commonelements/_elements.scss";
import { HeaderBar, Tabs } from "../commonelements/elements";
import {
  faChevronDown,
  faFileAlt,
  faGlobe,
  faGlobeAmericas,
  faPrint,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Booking from "./booking";
import searchStyles from "../recentsearch/_recentsearch.scss";

const Myaccount = props => {
  // const [tabOption, setTabOption] = useState("");
  const [dashboardRender, setDashboardRender] = useState("");

  useEffect(() => {
    switch (props.data.tabOption) {
      case "booking":
        setDashboardRender(null);
        break;
      case "account":
        setDashboardRender(
          <p className={`${dashboardStyles.Title} ${dashboardStyles.blue}`}>
            <FontAwesomeIcon icon={faUser} />
            My account info
          </p>
        );
        break;
      case "travelpref":
        setDashboardRender(
          <React.Fragment>
            <p className={`${dashboardStyles.Title} ${dashboardStyles.blue}`}>
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
            <p className={`${dashboardStyles.Title} ${dashboardStyles.blue}`}>
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
  }, [props.data.tabOption]);

  const bookingRef = React.createRef();
  const accountRef = React.createRef();
  const travelPrefRef = React.createRef();
  const bookingPrefRef = React.createRef();

  //Handle firstTime tab selection
  useEffect(() => {
    if (props.data.firstTime) {
      props.data.setTabOption("account");
    }
  }, [props.data.firstTime]);

  //REMOVE SEARCH/LIST TAB ACTIVE
  useEffect(() => {
    props.data.changeSearchOption("");
  }, []);

  if (props.data.isLoggedIn)
    return (
      <React.Fragment>
        <div
          className={`${dashboardStyles.dashboard} ${dashboardStyles.Wrapper}`}
        >
          <HeaderBar
            expand={false}
            search={"/recentsearches"}
            list={"/favlist"}
          />
          <section>
            {/*<p className={styles.Title}>Welcome, {props.data.user}</p>*/}
            <div className={elementStyles.searchOptions}>
              <Tabs
                searchOption={"booking"}
                text={"My booking"}
                iconPosition={"right"}
                icon={faChevronDown}
                ref={bookingRef}
                handleTabClick={() => props.data.handleTabOptionChange}
                stateOption={props.data.tabOption}
              />
              <Tabs
                searchOption={"account"}
                text={"My account info"}
                iconPosition={"right"}
                icon={faChevronDown}
                ref={accountRef}
                handleTabClick={() => props.data.handleTabOptionChange}
                stateOption={props.data.tabOption}
              />
              <Tabs
                searchOption={"travelpref"}
                text={"Travel preferences"}
                iconPosition={"right"}
                icon={faChevronDown}
                ref={travelPrefRef}
                handleTabClick={() => props.data.handleTabOptionChange}
                stateOption={props.data.tabOption}
              />
              <Tabs
                searchOption={"bookingpref"}
                text={"Booking preferences"}
                iconPosition={"right"}
                icon={faChevronDown}
                ref={bookingPrefRef}
                handleTabClick={() => props.data.handleTabOptionChange}
                stateOption={props.data.tabOption}
              />
            </div>
            {dashboardRender !== null ? (
              <div
                className={`${dashboardStyles.infoWrapper} ${styles.section}`}
              >
                {dashboardRender}
              </div>
            ) : null}
            {props.data.tabOption === "booking" ? (
              <Booking />
            ) : props.data.tabOption === "account" ? (
              ""
            ) : props.data.tabOption === "travelpref" ? (
              ""
            ) : props.data.tabOption === "bookingpref" ? (
              ""
            ) : null}
          </section>
        </div>
      </React.Fragment>
    );
  else return null;
};

export default Consumer(Myaccount);
