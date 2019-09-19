import React from "react";
import Context from "./context";

const Consumer = Component => {
  return props => {
    return (
      <Context.Consumer>
        {value => {
          window.PMData = value;
          return <Component {...props} data={value} />;
        }}
      </Context.Consumer>
    );
  };
};

export default Consumer;
