import React, { useState } from "react";
import Context from "./context";

const Provider = props => {
  const [isLoggedIn, setLoggedInState] = useState(false);
  return (
    <Context.Provider
      value={{
        isLoggedIn: isLoggedIn
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
