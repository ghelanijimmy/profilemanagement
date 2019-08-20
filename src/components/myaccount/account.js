import React from "react";
import Consumer from "../context/consumer";

const Account = props => {
  return (
    <React.Fragment>
      {props.header}
      <div />
    </React.Fragment>
  );
};

export default Consumer(Account);
