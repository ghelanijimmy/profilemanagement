import React, { useState, useEffect } from "react";
import Consumer from "../context/consumer";
import dashboardStyles from "./_myaccount.scss";
import styles from "../../css/_index.scss";
import elementStyles from "../commonelements/_elements.scss";
import { HeaderBar, Tabs } from "../commonelements/elements";
import {
  faChevronDown,
  faFileAlt,
  faGlobeAmericas,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Booking from "./booking";
import Account from "./account";
import Travelpref from "./travelpref";
import Bookingpref from "./bookingpref";
import Voucher from "../voucher/voucher";

const Myaccount = props => {
  // const [tabOption, setTabOption] = useState("");
  const [dashboardRender, setDashboardRender] = useState(null);

  useEffect(() => {
    switch (props.data.tabOption) {
      case "booking":
        setDashboardRender(
          <p className={`${dashboardStyles.Title} ${dashboardStyles.blue}`}>
            My booking
          </p>
        );
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
        setDashboardRender(null);
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
          <div
            className={`${elementStyles.background} ${elementStyles.searchOptions}`}
          >
            <Tabs
              searchOption={"booking"}
              text={"My booking"}
              iconPosition={"right"}
              icon={faChevronDown}
              ref={bookingRef}
              handleTabClick={e =>
                props.data.handleTabOptionChange(e, bookingRef)
              }
              stateOption={props.data.tabOption}
            />
            <Tabs
              searchOption={"account"}
              text={"My account info"}
              iconPosition={"right"}
              icon={faChevronDown}
              ref={accountRef}
              handleTabClick={e =>
                props.data.handleTabOptionChange(e, accountRef)
              }
              stateOption={props.data.tabOption}
            />
            <Tabs
              searchOption={"travelpref"}
              text={"Travel preferences"}
              iconPosition={"right"}
              icon={faChevronDown}
              ref={travelPrefRef}
              handleTabClick={e =>
                props.data.handleTabOptionChange(e, travelPrefRef)
              }
              stateOption={props.data.tabOption}
              notSetBox={props.data.travelPref}
            />
            <Tabs
              searchOption={"bookingpref"}
              text={"Booking preferences"}
              iconPosition={"right"}
              icon={faChevronDown}
              ref={bookingPrefRef}
              handleTabClick={e =>
                props.data.handleTabOptionChange(e, bookingPrefRef)
              }
              stateOption={props.data.tabOption}
              notSetBox={props.data.bookingPref}
            />
          </div>
          {dashboardRender !== null ? (
            <div
              className={
                props.data.expandDashTab
                  ? `${dashboardStyles.collapsible} ${dashboardStyles.expanded}`
                  : `${dashboardStyles.collapsible} ${dashboardStyles.collapsed}`
              }
            >
              <div
                className={
                  props.data.tabOption === "booking"
                    ? `${dashboardStyles.infoWrapper} ${styles.section} ${dashboardStyles.infoWrapperBG}`
                    : `${dashboardStyles.infoWrapper} ${styles.section}`
                }
              >
                {props.data.tabOption === "booking" ? (
                  <Booking header={dashboardRender} />
                ) : props.data.tabOption === "account" ? (
                  <Account header={dashboardRender} />
                ) : props.data.tabOption === "travelpref" ? (
                  <Travelpref header={dashboardRender} />
                ) : props.data.tabOption === "bookingpref" ? (
                  <Bookingpref header={dashboardRender} />
                ) : null}
              </div>
              {props.data.tabOption !== "booking" ? (
                <div className={dashboardStyles.footer}>
                  <button
                    className={`${styles.btn} ${styles.primary}`}
                    value={"Save"}
                  >
                    Save
                  </button>
                  <button
                    className={`${styles.btn} ${styles.secondary}`}
                    value={"Cancel"}
                  >
                    Cancel
                  </button>
                </div>
              ) : null}
            </div>
          ) : null}
        </section>
        <Voucher />
      </div>
    );
  else return null;
};

export default Consumer(Myaccount);
