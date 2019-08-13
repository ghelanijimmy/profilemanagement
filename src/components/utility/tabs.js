import React from "react";

const TabHandling = (state, ref) => {
  console.log(ref);
  if (ref.target.nodeName !== "button")
    state(ref.target.closest("button").dataset.searchoption);
  else state(ref.target.dataset.searchoption);
};

export default TabHandling;
