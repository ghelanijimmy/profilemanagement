import React from "react";
import travelStyles from "./_myaccount.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Consumer from "../context/consumer";

const AddAirport = props => {
  const airportRef = React.createRef();
  return (
    <p
      className={`${travelStyles.airport} ${travelStyles.items}`}
      key={props.targetValue}
      ref={airportRef}
    >
      {props.targetValue}
      <span
        onClick={e =>
          props.data.handleRemoveAirport(e, airportRef, props.select)
        }
      >
        <FontAwesomeIcon icon={faTimes} />
      </span>
    </p>
  );
};

export const AirportOptions = Consumer(props => {
  return (
    <option
      value={props.optionValue}
      disabled={props.data.enabledAirports[props.optionValue]}
    >
      {props.children}
    </option>
  );
});

export default Consumer(AddAirport);
