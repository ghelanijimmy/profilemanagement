import React from "react";
import Consumer from "../context/consumer";
import travelStyles from "./_myaccount.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Travelprefsections from "./travelprefsections";

const Travelpref = props => {
  return (
    <React.Fragment>
      {props.header}
      <div className={travelStyles.travelPref}>
        <div className={travelStyles.bottomBorder}>
          <p
            className={travelStyles.blue}
            onClick={() => props.data.handleTravelCollapse('all')}
          >
            Expand all
          </p>
        </div>
        <Travelprefsections section={"airports"} />
        <Travelprefsections section={"packages"} />
        <Travelprefsections section={"favourites"} />
        <Travelprefsections section={"hotels"} />
        <Travelprefsections section={"rooms"} />
        <Travelprefsections section={"facilities"} />
      </div>
    </React.Fragment>
  );
};

export default Consumer(Travelpref);
