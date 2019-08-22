import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import Context from "./context";
import modalStyle from "../modal/_modal.scss";
import travelStyles from "../myaccount/_myaccount.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Provider = props => {
  const [appType, setAppType] = useState("");
  const [modal, modalState] = useState(false);
  const [isLoggedIn, setLoggedInState] = useState(false);
  const [user, setUser] = useState("");
  const [searchOption, changeSearchOption] = useState("search");
  const [firstTime, setFirstTime] = useState(null);
  const [tabOption, setTabOption] = useState("account");
  const [hasBooking, setBooking] = useState(false);
  const [profileComplete, setProfileComplete] = useState(25);
  const [welcomeMessage, setWelcomeMessage] = useState("My Account");
  const [travelPref, setTravelPref] = useState(true);
  const [bookingPref, setBookingPref] = useState(true);
  const [travelPrefAirports, setTravelPrefAirports] = useState(false);
  const [travelPrefPackages, setTravelPrefPackages] = useState(false);
  const [travelPrefFavourites, setTravelPrefFavourites] = useState(false);
  const [travelPrefHotels, setTravelPrefHotels] = useState(false);
  const [travelPrefRooms, setTravelPrefRooms] = useState(false);
  const [travelPrefFacilities, setTravelPrefFacilities] = useState(false);
  const [travelPrefExpanded, setTravelPrefExpanded] = useState(false);
  const [airports, addAirports] = useState([
    <p className={travelStyles.airport} key={0}>
      Toronto{" "}
      <span>
        <FontAwesomeIcon icon={faTimes} />
      </span>
    </p>
  ]);

  //ADD TO AIRPORTS ARRAY
  const addAirport = select => {
    console.log(select.target);
    addAirports([
      ...airports,
      <p className={travelStyles.airport} key={select.target.value}>
        {select.target.value}
        <span>
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </p>
    ]);
    disableOptions(select.target);
  };

  const disableOptions = select => {
    for (let x = 0; x < select.options.length; x++) {
      if (select.options[x].value === select.value) {
        select.options[x].remove();
      }
    }
  };

  //SET FIRST TIME LOGIN OR CREATE TO COMPLETE PROFILE
  // localStorage.setItem("firstTime", true);
  //
  // useEffect(() => {
  //   if (localStorage.getItem("firstTime")) setFirstTime(true);
  // });

  //HANDLE TRAVEL PREF COLLAPSED SECTIONS
  const handleTravelCollapse = (e, section, parentClass) => {
    if (
      e.target.classList.contains(parentClass) ||
      e.target.parentElement.classList.contains(parentClass)
    )
      switch (section) {
        case "airports":
          setTravelPrefExpanded(false);
          setTravelPrefAirports(!travelPrefAirports);
          break;
        case "packages":
          setTravelPrefExpanded(false);
          setTravelPrefPackages(!travelPrefPackages);
          break;
        case "favourites":
          setTravelPrefExpanded(false);
          setTravelPrefFavourites(!travelPrefFavourites);
          break;
        case "hotels":
          setTravelPrefExpanded(false);
          setTravelPrefHotels(!travelPrefHotels);
          break;
        case "rooms":
          setTravelPrefExpanded(false);
          setTravelPrefRooms(!travelPrefRooms);
          break;
        case "facilities":
          setTravelPrefExpanded(false);
          setTravelPrefFacilities(!travelPrefFacilities);
          break;
        case "all":
          if (travelPrefExpanded) {
            setTravelPrefExpanded(false);
            setTravelPrefAirports(false);
            setTravelPrefPackages(false);
            setTravelPrefFavourites(false);
            setTravelPrefHotels(false);
            setTravelPrefRooms(false);
            setTravelPrefFacilities(false);
          } else {
            setTravelPrefExpanded(true);
            setTravelPrefAirports(true);
            setTravelPrefPackages(true);
            setTravelPrefFavourites(true);
            setTravelPrefHotels(true);
            setTravelPrefRooms(true);
            setTravelPrefFacilities(true);
          }
          break;
        default:
          setTravelPrefAirports(false);
          setTravelPrefPackages(false);
          setTravelPrefFavourites(false);
          setTravelPrefHotels(false);
          setTravelPrefRooms(false);
          setTravelPrefFacilities(false);
          break;
      }
  };

  //LOGOUT HANDLER
  const handleLogout = e => {
    setAppType("");
    localStorage.setItem("user", "");
    setUser("");
    setWelcomeMessage("My Account");
  };

  //HANDLE HOME SEARCH TAB OPTIONS
  const handleSearchOptionChange = e => {
    if (e.target.nodeName !== "button")
      changeSearchOption(e.target.closest("button").dataset.searchoption);
    else changeSearchOption(e.target.dataset.searchoption);
  };

  //HANDLE DASHBOARD TAB OPTIONS
  //TODO Revisit button selection handling
  const handleTabOptionChange = e => {
    e.preventDefault();

    if (e.target.nodeName !== "button")
      setTabOption(e.target.closest("button").dataset.searchoption);
    else setTabOption(e.target.dataset.searchoption);
  };

  // SET USER AND LOGGED IN STATE
  useEffect(() => {
    if (
      localStorage.getItem("user") === null ||
      localStorage.getItem("user") === ""
    ) {
      if (user === "") {
        localStorage.setItem("user", "");
      }
    } else {
      setUser(localStorage.getItem("user"));
    }

    let isLoggedIn;

    isLoggedIn = user !== "";

    setLoggedInState(isLoggedIn);

    setWelcomeMessage(`Welcome ${user}` || "My Account");
  }, [user]);

  //SET LOCAL STORAGE FOR USER
  const setLocalStorageUser = data => {
    localStorage.setItem("user", data);
    setUser(data);
  };

  //SET MODAL STATE
  const setModalState = () => {
    if (!modal) {
      modalState(true);
    } else modalState(false);
  };

  //HANDLE RESIZE MODAL
  useEffect(() => {
    handleResizeModal();
  }, [appType]);

  const handleResizeModal = () => {
    setTimeout(() => {
      document.querySelectorAll(`.${modalStyle.Open}`).forEach(modal => {
        modal.removeAttribute("style");
        if (window.innerHeight < modal.clientHeight) {
          modal.style.height = `${window.innerHeight - 40}px`;
        } else if (window.innerHeight > modal.clientHeight + 40) {
          modal.removeAttribute("style");
        }
      });
    }, 20);
  };

  window.addEventListener("resize", handleResizeModal);

  //SET CURRENT MODAL
  const currentModal = type => {
    setAppType(type);
  };

  return (
    <Context.Provider
      value={{
        isLoggedIn,
        setLocalStorageUser,
        user,
        appType,
        setAppType,
        modal,
        setModalState,
        currentModal,
        setFirstTime,
        searchOption,
        changeSearchOption,
        handleSearchOptionChange,
        firstTime,
        hasBooking,
        tabOption,
        setTabOption,
        handleTabOptionChange,
        profileComplete,
        setProfileComplete,
        handleLogout,
        welcomeMessage,
        travelPref,
        bookingPref,
        handleTravelCollapse,
        travelPrefAirports,
        travelPrefPackages,
        travelPrefFavourites,
        travelPrefHotels,
        travelPrefRooms,
        travelPrefFacilities,
        travelPrefExpanded,
        airports,
        addAirport
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.any
};
