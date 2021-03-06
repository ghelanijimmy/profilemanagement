import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import Context from "./context";
import AddAirport from "../myaccount/addAirport";
import airportsList from "../../model/airports";

const Provider = props => {
  const [appType, setAppType] = useState("");
  const [modal, modalState] = useState(false);
  const [isLoggedIn, setLoggedInState] = useState(false);
  const [user, setUser] = useState("");
  const [dbUsers, setDbUsers] = useState([]);
  const [searchOption, changeSearchOption] = useState("search");
  const [firstTime, setFirstTime] = useState(null);
  const [tabOption, setTabOption] = useState("account");
  const [expandDashTab, setExpandDashTabState] = useState(false);
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
  const [travelPrefOther, setTravelPrefOther] = useState(false);
  const [travelPrefExpanded, setTravelPrefExpanded] = useState(false);
  const [airports, addAirports] = useState([]);
  const [enabledAirports, setEnabledAirports] = useState({});
  const [selectedAirport, setSelectedAirport] = useState("");
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [selectedTravelPrefPackages, setSelectedTravelPrefPackages] = useState(
    []
  );
  const [
    selectedTravelPrefDestinations,
    setSelectedTravelPrefDestinations
  ] = useState([]);
  const [selectedTravelPrefHotels, setSelectedTravelPrefHotels] = useState([]);
  const [selectedTravelPrefRooms, setSelectedTravelPrefRooms] = useState([]);
  const [
    selectedTravelPrefFacilities,
    setSelectedTravelPrefFacilities
  ] = useState([]);
  const [selectedTravelPrefOthers, setSelectedTravelPrefOthers] = useState([]);

  //SET SELECTED TRAVEL PREF DESTINATIONS
  const handleTravePrefCheckbox = (e, update, state) => {
    if (e.checked) {
      if (state.indexOf(e.placeholder) < 0) {
        update(old => [...old, e.placeholder]);
      }
    } else {
      update(old => old.filter(a => a !== e.placeholder));
    }
  };

  //SET INITIAL AIRPORTS
  const initAirports = airportsList;
  let initAirportsObj = {};

  initAirports.forEach(airport => {
    initAirportsObj[airport] = false;
  });

  //ADD TO AIRPORTS ARRAY
  const addAirport = select => {
    select.persist();

    addAirports(oldArray => [
      ...oldArray,
      <AddAirport
        targetValue={select.target.value}
        key={select.target.value}
        select={select}
      />
    ]);

    //SET SELECTED AIRPORT STATE
    setSelectedAirport(select.target.value);
  };

  //SET SELECTED AIRPORT TO DISABLED FROM BEING SELECTED AGAIN
  useEffect(() => {
    if (selectedAirport !== "") {
      let selected = { [selectedAirport]: true };
      selected = Object.assign({}, initAirportsObj, enabledAirports, selected);
      setEnabledAirports(selected);
    }
  }, [selectedAirport]);

  //HANDLRES REMOVING OF AIRPORTS
  const handleRemoveAirport = (e, ref, select) => {
    const newAirportArr = airports.filter(
      airport => airport.key !== ref.current.textContent
    );
    addAirports(newAirportArr);
    enableOptions(select.target, ref.current.textContent);
  };

  //ENABLES AIRPORT FROM BEING SELECTED FROM DROP DOWN IF REMOVED FROM LIST
  const enableOptions = (select, option) => {
    const enabledKeys = Object.keys(enabledAirports);

    enabledKeys.map(item => {
      if (item === option) {
        setEnabledAirports(oldOptions =>
          Object.assign(oldOptions, { [item]: false })
        );
      }
    });
  };

  //HANDLE TRAVEL PREF COLLAPSED SECTIONS
  const handleTravelCollapse = (e, section, parentClass) => {
    e.persist();
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
        case "other":
          setTravelPrefExpanded(false);
          setTravelPrefOther(!travelPrefOther);
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
            setTravelPrefOther(false);
          } else {
            setTravelPrefExpanded(true);
            setTravelPrefAirports(true);
            setTravelPrefPackages(true);
            setTravelPrefFavourites(true);
            setTravelPrefHotels(true);
            setTravelPrefRooms(true);
            setTravelPrefFacilities(true);
            setTravelPrefOther(true);
          }
          break;
        default:
          setTravelPrefAirports(false);
          setTravelPrefPackages(false);
          setTravelPrefFavourites(false);
          setTravelPrefHotels(false);
          setTravelPrefRooms(false);
          setTravelPrefFacilities(false);
          setTravelPrefOther(false);
          break;
      }
  };

  //LOGOUT HANDLER
  const handleLogout = () => {
    setAppType("");
    setUser("");
    setWelcomeMessage("My Account");
  };

  //HANDLE HOME SEARCH TAB OPTIONS
  const handleSearchOptionChange = (e, ref) => {
    changeSearchOption(ref.current.dataset.searchoption);
  };

  //HANDLE DASHBOARD TAB OPTIONS
  //TODO Revisit button selection handling
  const handleTabOptionChange = (e, ref) => {
    setTabOption(ref.current.dataset.searchoption);

    if (tabOption === ref.current.dataset.searchoption)
      setExpandDashTabState(!expandDashTab);
    else setExpandDashTabState(true);
  };

  //QUERY DB TO GET LOGGED IN DATA
  const checkLogin = (email, password) => {
    return fetch("http://localhost:3005/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });
  };

  //SET LOCAL STORAGE FOR USER
  const setUserFromDB = data => {
    setUser(`${data.firstname} ${data.lastname}`);
    setModalState();
    setLoggedInState(data.isValid);
  };

  useEffect(() => {
    setWelcomeMessage(`Welcome ${user}`);
  }, [user]);

  //SET MODAL STATE
  const setModalState = () => {
    if (!modal) {
      modalState(true);
    } else modalState(false);
  };

  //SET CURRENT MODAL
  const currentModal = type => {
    setAppType(type);
  };

  return (
    <Context.Provider
      value={{
        isLoggedIn,
        setUserFromDB,
        user,
        dbUsers,
        setDbUsers,
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
        expandDashTab,
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
        travelPrefOther,
        travelPrefExpanded,
        airports,
        addAirport,
        handleRemoveAirport,
        enabledAirports,
        setEnabledAirports,
        initAirports,
        windowHeight,
        setWindowHeight,
        handleTravePrefCheckbox,
        setSelectedTravelPrefPackages,
        selectedTravelPrefPackages,
        selectedTravelPrefDestinations,
        setSelectedTravelPrefDestinations,
        selectedTravelPrefHotels,
        setSelectedTravelPrefHotels,
        selectedTravelPrefRooms,
        setSelectedTravelPrefRooms,
        selectedTravelPrefFacilities,
        setSelectedTravelPrefFacilities,
        selectedTravelPrefOthers,
        setSelectedTravelPrefOthers,
        checkLogin,
        setLoggedInState,
        setWelcomeMessage
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
