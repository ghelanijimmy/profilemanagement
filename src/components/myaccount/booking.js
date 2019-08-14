import React from "react";
import PropTypes from "prop-types";
import styles from "../../css/_index.scss";
import bookingStyles from "./_myaccount.scss";

const Booking = props => {
  return (
    <div className={`${bookingStyles.booking} ${bookingStyles.Wrapper}`}>
      <div className={styles.flexHalf}>
        <p className={bookingStyles.Title}>My booking</p>
      </div>
    </div>
  );
};

Booking.propTypes = {};

export default Booking;
