import React from "react";
import PropTypes from "prop-types";
import styles from "../../css/_index.scss";
import bookingStyles from "./_myaccount.scss";
import Consumer from "../context/consumer";

const Booking = props => {
  return <React.Fragment>{props.header}</React.Fragment>;
};

Booking.propTypes = {};

export default Consumer(Booking);
