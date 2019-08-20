import React from "react";
import styles from "../../css/_index.scss";
import elementStyles from "../commonelements/_elements.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import searchStyles from "../recentsearch/_recentsearch.scss";
import { faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";
import Consumer from "../context/consumer";

export const Tabs = React.forwardRef((props, ref) => {
  return (
    <button
      onClick={props.handleTabClick(ref)}
      className={
        props.stateOption === props.searchOption
          ? `${styles.btn} ${styles.primary} ${elementStyles.activeOption}`
          : `${styles.btn} ${styles.primaryInverse}`
      }
      data-searchoption={props.searchOption}
      ref={ref}
    >
      {props.iconPosition !== "right" ? (
        <FontAwesomeIcon className={styles.left} icon={props.icon} />
      ) : null}
      {props.text}
      {props.iconPosition === "right" ? (
        <FontAwesomeIcon className={styles.right} icon={props.icon} />
      ) : null}
    </button>
  );
});

Tabs.propTypes = {
  searchOption: PropTypes.string,
  stateOption: PropTypes.string,
  icon: PropTypes.object,
  text: PropTypes.string,
  iconPosition: PropTypes.string,
  handleTabClick: PropTypes.func
};

export const HeaderBar = Consumer(props => {
  const searchRef = React.createRef();
  const listRef = React.createRef();
  return (
    <div className={`${elementStyles.headerBar} ${elementStyles.header}`}>
      <div className={`${elementStyles.headerBar} ${elementStyles.Title}`}>
        <p className={`${styles.Title}`}>
          Welcome Back{props.data.user === "" ? "" : `, ${props.data.user}`}
        </p>
        {/*{props.data.isLoggedIn ? (*/}
        {/*  <div*/}
        {/*    className={`${searchStyles.progressCircle} ${*/}
        {/*      searchStyles.Wrapper*/}
        {/*    }`}*/}
        {/*  >*/}
        {/*    <CircularProgressbar*/}
        {/*      className={searchStyles.test}*/}
        {/*      value={props.data.profileComplete}*/}
        {/*      styles={{*/}
        {/*        root: {*/}
        {/*          overflow: "visible"*/}
        {/*        },*/}
        {/*        path: {*/}
        {/*          stroke: "#F36F21",*/}
        {/*          strokeWidth: "15px"*/}
        {/*        },*/}
        {/*        trail: {*/}
        {/*          stroke: "#ffffff",*/}
        {/*          strokeWidth: "15px"*/}
        {/*        }*/}
        {/*      }}*/}
        {/*    />*/}
        {/*    <p>*/}
        {/*      Your profile is <span>{props.data.profileComplete}%</span>{" "}*/}
        {/*      complete*/}
        {/*      <a onClick={e => handleEditProfileClick(e)}>*/}
        {/*        Edit profile <FontAwesomeIcon icon={faChevronRight} />*/}
        {/*      </a>*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*) : null}*/}
      </div>
      <div className={elementStyles.searchOptions}>
        <Tabs
          searchOption={"search"}
          text={"Recent searches"}
          icon={faSearch}
          ref={searchRef}
          handleTabClick={() => props.data.handleSearchOptionChange}
          stateOption={props.data.searchOption}
        />
        <Tabs
          searchOption={"list"}
          text={"My favorite list"}
          icon={faHeart}
          ref={listRef}
          handleTabClick={() => props.data.handleSearchOptionChange}
          stateOption={props.data.searchOption}
        />
      </div>
    </div>
  );
});
