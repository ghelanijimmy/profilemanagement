import React, { useState, useEffect } from "react";
import Context from "./context";
import styles from "../../css/_index.scss";
import modalStyle from "../modal/_modal.scss";

const Provider = props => {
  const [appType, setAppType] = useState("");
  const [modal, modalState] = useState(false);
  const [isLoggedIn, setLoggedInState] = useState(false);
  const [user, setUser] = useState("");
  const [firstTime, setFirstTime] = useState(null);

  //SET FIRST TIME LOGIN OR CREATE TO COMPLETE PROFILE
  localStorage.setItem("firstTime", true);

  useEffect(()=>{
    if(localStorage.getItem("firstTime"))
      setFirstTime(true);
  })

  //SET USER AND LOGGED IN STATE
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

    document.querySelectorAll("a[data-username]")[0].innerText =
      user === "" ? "My Account" : `Welcome ${user}`;

    let isLoggedIn;

    isLoggedIn = user !== "";

    setLoggedInState(isLoggedIn);

    document.querySelectorAll(".pmappclick").forEach(el => {
      if (el.id !== "logout" && el.id !== "account") {
        if (isLoggedIn) {
          el.classList.add(styles.dNone);
        } else {
          el.classList.remove(styles.dNone);
        }
      } else if (el.id === "logout" || el.id === "account") {
        if (isLoggedIn) {
          el.classList.remove(styles.dNone);
        } else {
          el.classList.add(styles.dNone);
        }
      }
    });
  }, [user]);

  window.PMSetUser = setUser;

  //SET APP TYPE

  window.PMApp = setAppType;

  const setLocalStorageUser = data => {
    localStorage.setItem("user", data);
    setUser(data);
  };

  //SET MODAL STATE
  const setModalState = () => {
    if (!modal) modalState(true);
    else modalState(false);
  };
  window.PMSignInModal = setModalState;

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
        firstTime
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
