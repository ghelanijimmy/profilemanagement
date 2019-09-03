import React, { useEffect } from "react";
import PropTypes from "prop-types";
import travelStyles from "./_myaccount.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import Consumer from "../context/consumer";
import { AirportOptions } from "./addAirport";
import { Input } from "../input/input";

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
  const optionRef = React.createRef();

  useEffect(() => {
    if (optionRef.current !== null) optionRef.current.selected = true;
  }, [props.data.airports]);

  const addTravelPrefPackages = e => {
    e.persist();
    if (e.target.checked) {
      if (
        props.data.selectedTravelPrefPackages.indexOf(e.target.placeholder) < 0
      ) {
        props.data.setSelectedTravelPrefPackages(old => [
          ...old,
          e.target.placeholder
        ]);
      }
    } else {
      props.data.setSelectedTravelPrefPackages(old =>
        old.filter(a => a !== e.target.placeholder)
      );
    }
  };

  return (
    <React.Fragment>
      {props.section === "airports" ? (
        <TravelPrefBox
          section={props.section}
          active={props.data.travelPrefAirports}
          title={"My airports"}
        >
          <div className={`${travelStyles.airports} ${travelStyles.Wrapper}`}>
            {props.data.airports}
            <select
              defaultValue={"Select"}
              onChange={e => props.data.addAirport(e)}
              className={travelStyles.items}
            >
              <option ref={optionRef} value="Select" disabled={"disabled"}>
                Select
              </option>
              {props.data.initAirports.map((airport, i) => {
                return (
                  <AirportOptions
                    optionValue={airport}
                    key={i}
                    enabled={props.data.enabledAirports}
                  >
                    {airport}
                  </AirportOptions>
                );
              })}
            </select>
          </div>
        </TravelPrefBox>
      ) : props.section === "packages" ? (
        <TravelPrefBox
          section={props.section}
          active={props.data.travelPrefPackages}
          title={"Travel packages"}
        >
          <div className={`${travelStyles.packages} ${travelStyles.Wrapper}`}>
            <Input
              type={"checkbox"}
              id={"familyPackages"}
              placeholder={"Family"}
              handleInput={addTravelPrefPackages}
            />
            <Input
              type={"checkbox"}
              id={"familySingles"}
              placeholder={"Singles"}
              handleInput={addTravelPrefPackages}
            />
            <Input
              type={"checkbox"}
              id={"familyLuxury"}
              placeholder={"Luxury"}
              handleInput={addTravelPrefPackages}
            />
            <Input
              type={"checkbox"}
              id={"familyAdult"}
              placeholder={"Adult"}
              handleInput={addTravelPrefPackages}
            />
            <Input
              type={"checkbox"}
              id={"familyStudents"}
              placeholder={"Students"}
              handleInput={addTravelPrefPackages}
            />
          </div>
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
