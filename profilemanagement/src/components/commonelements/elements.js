import React from "react";
import { Link } from "react-router-dom";
import styles from "../../css/_index.scss";
import elementStyles from "../commonelements/_elements.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";
import Consumer from "../context/consumer";

export const Tabs = React.forwardRef((props, ref) => {
  if (props.expand || props.expand === undefined)
    return (
      <TabButtons
        handleTabClick={props.handleTabClick}
        stateOption={props.stateOption}
        searchOption={props.searchOption}
        iconPosition={props.iconPosition}
        icon={props.icon}
        text={props.text}
        ref={ref}
        notSetBox={props.notSetBox}
      />
    );
  else if (props.expand === false)
    return (
      <Link to={props.link}>
        <TabButtons
          handleTabClick={props.handleTabClick}
          stateOption={props.stateOption}
          searchOption={props.searchOption}
          iconPosition={props.iconPosition}
          icon={props.icon}
          text={props.text}
          ref={ref}
        />
      </Link>
    );
});

export const TabButtons = React.forwardRef((props, ref) => {
  return (
    <button
      onClick={props.handleTabClick}
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
      {props.notSetBox ? (
        <span className={`${elementStyles.notSet} ${elementStyles.Wrapper}`}>
          Not Set
        </span>
      ) : null}
    </button>
  );
});

Tabs.propTypes = {
  expand: PropTypes.bool,
  searchOption: PropTypes.string,
  stateOption: PropTypes.string,
  icon: PropTypes.object,
  text: PropTypes.string,
  iconPosition: PropTypes.string,
  handleTabClick: PropTypes.func,
  notSetBox: PropTypes.bool
};

TabButtons.propTypes = {
  searchOption: PropTypes.string,
  stateOption: PropTypes.string,
  icon: PropTypes.object,
  text: PropTypes.string,
  iconPosition: PropTypes.string,
  handleTabClick: PropTypes.func,
  notSetBox: PropTypes.bool
};

export const HeaderBar = Consumer(props => {
  const searchRef = React.createRef();
  const listRef = React.createRef();
  return (
    <section className={`${elementStyles.headerBar} ${elementStyles.header}`}>
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
          handleTabClick={e =>
            props.data.handleSearchOptionChange(e, searchRef)
          }
          stateOption={props.data.searchOption}
          expand={props.expand}
          link={props.search}
        />
        <Tabs
          searchOption={"list"}
          text={"My favorite list"}
          icon={faHeart}
          ref={listRef}
          handleTabClick={e =>
              props.data.handleSearchOptionChange(e, listRef)}
          stateOption={props.data.searchOption}
          expand={props.expand}
          link={props.list}
        />
      </div>
    </section>
  );
});
