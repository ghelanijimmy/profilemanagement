import PropTypes from "prop-types";
import React from "react";
import Consumer from "../context/consumer";

const Booking = props => {
  return <React.Fragment>{props.header}</React.Fragment>;
};

Booking.propTypes = {
  header: PropTypes.element
};

export default Consumer(Booking);
