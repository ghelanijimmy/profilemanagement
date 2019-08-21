import PropTypes from "prop-types";
import React from "react";
import Consumer from "../context/consumer";
import SearchboxCard from "../commonelements/searchboxCard";
import {
  faCircle,
  faHotel,
  faPlaneDeparture,
  faUmbrellaBeach
} from "@fortawesome/free-solid-svg-icons";
//TODO REFACTR STYLES TO BE HANDLED BY SEARCHBOX CARD COMP
const Booking = props => {
  const tripsObj = [
    {
      destination: "Punta Cana",
      type: "Vacation",
      icon: faUmbrellaBeach,
      date: "11 Nov, 2019",
      bookingNumber: 10938324
    },
    {
      destination: "Las Vegas",
      type: "Flight",
      icon: faPlaneDeparture,
      date: "04 Dec, 2019",
      bookingNumber: 10938324
    },
    {
      destination: "Memories Holguin Beach Resort",
      type: "Hotel",
      icon: faHotel,
      date: "10 Jan, 2020",
      bookingNumber: 10938324
    }
  ];

  return (
    <React.Fragment>
      {props.header}
      {tripsObj.map((trip, i) => (
        <SearchboxCard
          indexKey={i}
          key={i}
          headingText={trip.type !== "Hotel" ? trip.type : `${trip.type} stay`}
          titleText={trip.destination}
          headingIcon={trip.icon}
          booking={true}
          date={trip.date}
          bookingNumber={trip.bookingNumber}
        />
      ))}
    </React.Fragment>
  );
};

Booking.propTypes = {
  header: PropTypes.element
};

export default Consumer(Booking);
