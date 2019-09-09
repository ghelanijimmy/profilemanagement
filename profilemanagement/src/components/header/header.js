import PropTypes from "prop-types";
import React from "react";
import { createPortal } from "react-dom";
import Consumer from "../context/consumer";
import { Link } from "react-router-dom";
import styles from "../../css/_index.scss";

const Header = props => {
  return (
    <React.Fragment>
      <Link id="logo" to="/">
        <img
          src="https://www.sunwing.ca/Content/images/global/header/sunwing-experience-the-difference-white-logo.png"
          alt={""}
        />
      </Link>
      <ul>
        <li>
          <a>{props.data.welcomeMessage}</a>
          <ul>
            <li>
              <Link to="/favlist" className="pmappclick" id="favlist">
                My Favorite List
              </Link>
            </li>
            <li className={props.data.isLoggedIn ? styles.dNone : ""}>
              <Link
                to={""}
                onClick={() => {
                  props.data.setAppType("create");
                  props.data.setModalState();
                }}
                className="pmappclick"
              >
                Create Account
              </Link>
            </li>
            <li className={props.data.isLoggedIn ? styles.dNone : ""}>
              <Link
                to={""}
                onClick={() => {
                  props.data.setAppType("login");
                  props.data.setModalState();
                }}
                className="pmappclick"
                data-acctype="login"
              >
                Sign In
              </Link>
            </li>

            <li className={props.data.isLoggedIn ? "" : styles.dNone}>
              <Link
                className="pmappclick"
                id="logout"
                data-acctype="logout"
                to="/"
                onClick={props.data.handleLogout}
              >
                Logout
              </Link>
            </li>
            <li className={props.data.isLoggedIn ? "" : styles.dNone}>
              <Link
                className="pmappclick"
                id="account"
                data-acctype="account"
                to="/myaccount"
              >
                My Account
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </React.Fragment>
  );
};

const RenderHeader = props => {
  return createPortal(<Header {...props} />, document.getElementById("header"));
};

export default Consumer(RenderHeader);

Header.propTypes = {
  data: PropTypes.object
};
