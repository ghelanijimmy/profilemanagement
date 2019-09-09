import React from "react";
import oauthStyles from "./_oauth.scss";

const SignInButton = props => {
  return (
    <div className={oauthStyles.oauthWrapper}>
      <img />
      <span>Sign in with {props.copyBrand}</span>
    </div>
  );
};

export default SignInButton;
