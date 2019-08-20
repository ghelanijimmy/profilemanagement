import PropTypes from 'prop-types'
import React, { useState, useEffect } from "react";
import Context from "./context";
import modalStyle from "../modal/_modal.scss";

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

  //SET FIRST TIME LOGIN OR CREATE TO COMPLETE PROFILE
  // localStorage.setItem("firstTime", true);
  //
  // useEffect(() => {
  //   if (localStorage.getItem("firstTime")) setFirstTime(true);
  // });

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

    setWelcomeMessage(user || "My Account");
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
        welcomeMessage
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.any
}