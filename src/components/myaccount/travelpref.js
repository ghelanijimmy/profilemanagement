import React    from "react";
import Consumer from "../context/consumer";

const Travelpref = props => {
  return <React.Fragment>{props.header}</React.Fragment>;
};

export default Consumer(Travelpref);
