import React from "react";

const HomeSearch = props => {
  if (props.user !== "") return <div>Recent Searches (Home)</div>;
  else {
    return null;
  }
};

export default HomeSearch;
