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
        <div
          className={`${travelStyles.bottomBorder} ${travelStyles.expandAll}`}
        >
          <p
            className={travelStyles.blue}
            onClick={e =>
              props.data.handleTravelCollapse(e, "all", travelStyles.blue)
            }
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
        <Travelprefsections section={"other"} />
      </div>
    </React.Fragment>
  );
};

export default Consumer(Travelpref);
