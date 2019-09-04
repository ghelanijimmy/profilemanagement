import React, { useEffect } from "react";
import PropTypes from "prop-types";
import travelStyles from "./_myaccount.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import Consumer from "../context/consumer";
import { AirportOptions } from "./addAirport";
import { Input } from "../input/input";
import destinations from "../../model/destinations";
import hotels from "../../model/hotels";

//TODO handle state persistance for checked boxes by looping through state and see if array contains placeholder
// input text

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
              handleInput={e =>
                props.data.handleTravePrefCheckbox(
                  e,
                  props.data.setSelectedTravelPrefPackages,
                  props.data.selectedTravelPrefPackages
                )
              }
              options={props.data.selectedTravelPrefPackages}
            />
            <Input
              type={"checkbox"}
              id={"familySingles"}
              placeholder={"Singles"}
              handleInput={e =>
                props.data.handleTravePrefCheckbox(
                  e,
                  props.data.setSelectedTravelPrefPackages,
                  props.data.selectedTravelPrefPackages
                )
              }
              options={props.data.selectedTravelPrefPackages}
            />
            <Input
              type={"checkbox"}
              id={"familyLuxury"}
              placeholder={"Luxury"}
              handleInput={e =>
                props.data.handleTravePrefCheckbox(
                  e,
                  props.data.setSelectedTravelPrefPackages,
                  props.data.selectedTravelPrefPackages
                )
              }
              options={props.data.selectedTravelPrefPackages}
            />
            <Input
              type={"checkbox"}
              id={"familyAdult"}
              placeholder={"Adult"}
              handleInput={e =>
                props.data.handleTravePrefCheckbox(
                  e,
                  props.data.setSelectedTravelPrefPackages,
                  props.data.selectedTravelPrefPackages
                )
              }
              options={props.data.selectedTravelPrefPackages}
            />
            <Input
              type={"checkbox"}
              id={"familyStudents"}
              placeholder={"Students"}
              handleInput={e =>
                props.data.handleTravePrefCheckbox(
                  e,
                  props.data.setSelectedTravelPrefPackages,
                  props.data.selectedTravelPrefPackages
                )
              }
              options={props.data.selectedTravelPrefPackages}
            />
          </div>
        </TravelPrefBox>
      ) : props.section === "favourites" ? (
        <TravelPrefBox
          section={props.section}
          active={props.data.travelPrefFavourites}
          title={"Favourite destinations"}
        >
          <div className={travelStyles.options}>
            {destinations.map((destination, i) => {
              if (!destination.hasCities)
                return (
                  <p key={i} className={travelStyles.item}>
                    <b>
                      <Input
                        type={"checkbox"}
                        id={`destination${destination.destination}`}
                        placeholder={destination.destination}
                        handleInput={e =>
                          props.data.handleTravePrefCheckbox(
                            e,
                            props.data.setSelectedTravelPrefDestinations,
                            props.data.selectedTravelPrefDestinations
                          )
                        }
                        options={props.data.selectedTravelPrefDestinations}
                      />
                    </b>
                  </p>
                );
              else
                return (
                  <div
                    key={i}
                    className={`${travelStyles.item} ${travelStyles.Wrapper}`}
                  >
                    <p className={travelStyles.item}>
                      <b>
                        <Input
                          type={"checkbox"}
                          id={`destination${destination.destination}`}
                          placeholder={destination.destination}
                          handleInput={e =>
                            props.data.handleTravePrefCheckbox(
                              e,
                              props.data.setSelectedTravelPrefDestinations,
                              props.data.selectedTravelPrefDestinations
                            )
                          }
                          options={props.data.selectedTravelPrefDestinations}
                        />
                      </b>
                    </p>
                    {destination.cities.map((city, i) => (
                      <p className={travelStyles.item} key={i}>
                        <Input
                          type={"checkbox"}
                          id={`destination${city}`}
                          placeholder={city}
                          handleInput={e =>
                            props.data.handleTravePrefCheckbox(
                              e,
                              props.data.setSelectedTravelPrefDestinations,
                              props.data.selectedTravelPrefDestinations
                            )
                          }
                          options={props.data.selectedTravelPrefDestinations}
                        />
                      </p>
                    ))}
                  </div>
                );
            })}
          </div>
        </TravelPrefBox>
      ) : props.section === "hotels" ? (
        <TravelPrefBox
          section={props.section}
          active={props.data.travelPrefHotels}
          title={"Top rated hotels for"}
        >
          <div className={travelStyles.options}>
            {hotels.map((hotel, i) => {
              return (
                <p className={travelStyles.item} key={i}>
                  <Input
                    type={"checkbox"}
                    id={`destination${hotel}`}
                    placeholder={hotel}
                    handleInput={e =>
                      props.data.handleTravePrefCheckbox(
                        e,
                        props.data.setSelectedTravelPrefHotels,
                        props.data.selectedTravelPrefHotels
                      )
                    }
                    options={props.data.selectedTravelPrefHotels}
                  />
                </p>
              );
            })}
          </div>
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
