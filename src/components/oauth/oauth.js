import React from "react";
import SignInButton from "./signInButton";

const Oauth = () => {
  return (
    <React.Fragment>
      <SignInButton brand={"fb"} copyBrand={"Facebook"} />
      <SignInButton brand={"ga"} copyBrand={"Google"} />
    </React.Fragment>
  );
};

export default Oauth;
