import React from "react";
import PropTypes from "prop-types";
import travelStyles from "./_myaccount.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Consumer from "../context/consumer";

const Travelprefsections = props => {
  return (
    <React.Fragment>
      {props.section === "airports" ? (
        <div
          className={travelStyles.travelPref}
          onClick={e => props.data.handleTravelCollapse(props.section)}
        >
          <div className={travelStyles.bottomBorder}>
            <p className={`${travelStyles.title}`}>
              <span>My airports</span>
              <span>
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </p>
            <p
              className={
                props.data.travelPrefAirports
                  ? `${travelStyles.collapsed} ${travelStyles.shown}`
                  : travelStyles.collapsed
              }
            >
              SHOWN
            </p>
          </div>
        </div>
      ) : props.section === "packages" ? (
        <div
          className={travelStyles.travelPref}
          onClick={e => props.data.handleTravelCollapse(props.section)}
        >
          <div className={travelStyles.bottomBorder}>
            <p className={`${travelStyles.title}`}>
              <span>Travel packages</span>
              <span>
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </p>
            <p
              className={
                props.data.travelPrefPackages
                  ? `${travelStyles.collapsed} ${travelStyles.shown}`
                  : travelStyles.collapsed
              }
            >
              SHOWN
            </p>
          </div>
        </div>
      ) : props.section === "favourites" ? (
        <div
          className={travelStyles.travelPref}
          onClick={e => props.data.handleTravelCollapse(props.section)}
        >
          <div className={travelStyles.bottomBorder}>
            <p className={`${travelStyles.title}`}>
              <span>Favourite destinations</span>
              <span>
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </p>
            <p
              className={
                props.data.travelPrefFavourites
                  ? `${travelStyles.collapsed} ${travelStyles.shown}`
                  : travelStyles.collapsed
              }
            >
              SHOWN
            </p>
          </div>
        </div>
      ) : props.section === "hotels" ? (
        <div
          className={travelStyles.travelPref}
          onClick={e => props.data.handleTravelCollapse(props.section)}
        >
          <div className={travelStyles.bottomBorder}>
            <p className={`${travelStyles.title}`}>
              <span>Top rated hotels for</span>
              <span>
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </p>
            <p
              className={
                props.data.travelPrefHotels
                  ? `${travelStyles.collapsed} ${travelStyles.shown}`
                  : travelStyles.collapsed
              }
            >
              SHOWN
            </p>
          </div>
        </div>
      ) : props.section === "rooms" ? (
        <div
          className={travelStyles.travelPref}
          onClick={e => props.data.handleTravelCollapse(props.section)}
        >
          <div className={travelStyles.bottomBorder}>
            <p className={`${travelStyles.title}`}>
              <span>Room type & services</span>
              <span>
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </p>
            <p
              className={
                props.data.travelPrefRooms
                  ? `${travelStyles.collapsed} ${travelStyles.shown}`
                  : travelStyles.collapsed
              }
            >
              SHOWN
            </p>
          </div>
        </div>
      ) : props.section === "facilities" ? (
        <div
          className={travelStyles.travelPref}
          onClick={e => props.data.handleTravelCollapse(props.section)}
        >
          <div className={travelStyles.bottomBorder}>
            <p className={`${travelStyles.title}`}>
              <span>Facilities and services</span>
              <span>
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </p>
            <p
              className={
                props.data.travelPrefFacilities
                  ? `${travelStyles.collapsed} ${travelStyles.shown}`
                  : travelStyles.collapsed
              }
            >
              SHOWN
            </p>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

Travelprefsections.propTypes = {
  section: PropTypes.string
};

export default Consumer(Travelprefsections);
