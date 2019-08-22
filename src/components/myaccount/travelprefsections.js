import React from "react";
import PropTypes from "prop-types";
import travelStyles from "./_myaccount.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Consumer from "../context/consumer";

const TravelPrefBox = Consumer(props => {
  return (
    <div
      className={travelStyles.travelPref}
      onClick={e =>
        props.data.handleTravelCollapse(e, props.section, travelStyles.title)
      }
    >
      <div className={travelStyles.bottomBorder}>
        <p className={`${travelStyles.title}`}>
          <span>{props.title}</span>
          <span>
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </p>
        <div
          className={
            props.active
              ? `${travelStyles.collapsed} ${travelStyles.shown}`
              : travelStyles.collapsed
          }
        >
          {props.children}
        </div>
      </div>
    </div>
  );
});

const Travelprefsections = props => {
  return (
    <React.Fragment>
      {props.section === "airports" ? (
        <TravelPrefBox
          section={props.section}
          active={props.data.travelPrefAirports}
          title={"My airports"}
        >
          <div>
            <span>Toronto</span>
            <select>
              <option value="Select">Select</option>
            </select>
          </div>
        </TravelPrefBox>
      ) : props.section === "packages" ? (
        <TravelPrefBox
          section={props.section}
          active={props.data.travelPrefPackages}
          title={"Travel packages"}
        >
          SHOWN
        </TravelPrefBox>
      ) : props.section === "favourites" ? (
        <TravelPrefBox
          section={props.section}
          active={props.data.travelPrefFavourites}
          title={"Favourite destinations"}
        >
          SHOWN
        </TravelPrefBox>
      ) : props.section === "hotels" ? (
        <TravelPrefBox
          section={props.section}
          active={props.data.travelPrefHotels}
          title={"Top rated hotels for"}
        >
          SHOWN
        </TravelPrefBox>
      ) : props.section === "rooms" ? (
        <TravelPrefBox
          section={props.section}
          active={props.data.travelPrefRooms}
          title={"Room type & services"}
        >
          SHOWN
        </TravelPrefBox>
      ) : props.section === "facilities" ? (
        <TravelPrefBox
          section={props.section}
          active={props.data.travelPrefFacilities}
          title={"Facilities and services"}
        >
          SHOWN
        </TravelPrefBox>
      ) : null}
    </React.Fragment>
  );
};

Travelprefsections.propTypes = {
  section: PropTypes.string
};

export default Consumer(Travelprefsections);
