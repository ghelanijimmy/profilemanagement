import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import Context from "./context";
import modalStyle from "../modal/_modal.scss";
import AddAirport from "../myaccount/addAirport";
import destinations from "../../model/destinations";
import travelStyles from "../myaccount/_myaccount.scss";
import { Input } from "../input/input";

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
  const [airports, addAirports] = useState([]);
  const [enabledAirports, setEnabledAirports] = useState({});
  const [selectedAirport, setSelectedAirport] = useState("");
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [selectedTravelPrefPackages, setSelectedTravelPrefPackages] = useState(
    []
  );
  const [travelPrefDestinations, setTravelPrefDestinations] = useState([]);
  const [
    selectedTravelPrefDestinations,
    setSelectedTravelPrefDestinations
  ] = useState([]);

  //SET SELECTED TRAVEL PREF DESTINATIONS
  const handleTravePrefCheckbox = (e, update, state) => {
    e.persist();
    if (e.target.checked) {
      if (state.indexOf(e.target.placeholder) < 0) {
        update(old => [...old, e.target.placeholder]);
      }
    } else {
      update(old => old.filter(a => a !== e.target.placeholder));
    }
  };

  //SET TRAVEL PRE DESTINATIONS
  // useEffect(() => {
  //   let destinationsArr = destinations.map((destination, i) => {
  //     if (!destination.hasCities)
  //       return (
  //         <p key={i} className={travelStyles.item}>
  //           {/*<b>{destination.destination}</b>*/}
  //           <b>
  //             <Input
  //               type={"checkbox"}
  //               id={`destination${destination.destination}`}
  //               placeholder={destination.destination}
  //               handleInput={e =>
  //                 handleTravePrefCheckbox(
  //                   e,
  //                   setSelectedTravelPrefDestinations,
  //                   selectedTravelPrefDestinations
  //                 )
  //               }
  //               options={selectedTravelPrefDestinations}
  //             />
  //           </b>
  //         </p>
  //       );
  //     else
  //       return (
  //         <div
  //           key={i}
  //           className={`${travelStyles.item} ${travelStyles.Wrapper}`}
  //         >
  //           <p className={travelStyles.item}>
  //             <b>
  //               <Input
  //                 type={"checkbox"}
  //                 id={`destination${destination.destination}`}
  //                 placeholder={destination.destination}
  //                 handleInput={e =>
  //                   handleTravePrefCheckbox(
  //                     e,
  //                     setSelectedTravelPrefDestinations,
  //                     selectedTravelPrefDestinations
  //                   )
  //                 }
  //                 options={selectedTravelPrefDestinations}
  //               />
  //             </b>
  //           </p>
  //           {destination.cities.map((city, i) => (
  //             <p className={travelStyles.item} key={i}>
  //               <Input
  //                 type={"checkbox"}
  //                 id={`destination${city}`}
  //                 placeholder={city}
  //                 handleInput={e =>
  //                   handleTravePrefCheckbox(
  //                     e,
  //                     setSelectedTravelPrefDestinations,
  //                     selectedTravelPrefDestinations
  //                   )
  //                 }
  //                 options={selectedTravelPrefDestinations}
  //               />
  //             </p>
  //           ))}
  //         </div>
  //       );
  //   });
  //
  //   setTravelPrefDestinations(destinationsArr);
  // }, []);

  //CHECK TRAVEL PREF PACKAGES ARRAY
  useEffect(() => {
    console.log(selectedTravelPrefPackages, selectedTravelPrefDestinations);
  }, [selectedTravelPrefPackages, selectedTravelPrefDestinations]);

  //SET INITIAL AIRPORTS
  const initAirports = ["Toronto", "Chicage", "Detroit", "Vancouver", "Quebec"];
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

  //SET FIRST TIME LOGIN OR CREATE TO COMPLETE PROFILE
  // localStorage.setItem("firstTime", true);
  //
  // useEffect(() => {
  //   if (localStorage.getItem("firstTime")) setFirstTime(true);
  // });

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
  const handleSearchOptionChange = (e, ref) => {
    changeSearchOption(ref.current.dataset.searchoption);
  };

  //HANDLE DASHBOARD TAB OPTIONS
  //TODO Revisit button selection handling
  const handleTabOptionChange = (e, ref) => {
    setTabOption(ref.current.dataset.searchoption);
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
        setSelectedTravelPrefDestinations
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
