import React, { useState, useEffect } from "react";
import { SignUp } from "./components/signup/signup";
import styles from "./css/_index.scss";
import { Login } from "./components/login/login";
import Modal from "react-modal";
import modalStyle from "./components/modal/_modal.scss";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route } from "react-router-dom";
import HomeSearch from "./components/recentsearch/homesearch";

const Form = React.forwardRef((props, ref) => {
  const [appType, setAppType] = useState("");
  const [modal, modalState] = useState(false);
  const [user, setUser] = useState("");

  const loginRef = React.createRef();
  const createRef = React.createRef();

  const setModalState = () => {
    if (!modal) modalState(true);
    else modalState(false);
  };

  const currentModal = type => {
    setAppType(type);
  };

  useEffect(() => {
    handleResizeModal();
  }, [appType]);

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

    document.querySelectorAll(".pmappclick").forEach(el => {
      if (el.id !== "logout") {
        if (isLoggedIn) {
          el.classList.add(styles.dNone);
        } else {
          el.classList.remove(styles.dNone);
        }
      } else {
        if (isLoggedIn) {
          el.classList.remove(styles.dNone);
        } else {
          el.classList.add(styles.dNone);
        }
      }
    });
  }, [user]);

  window.PMApp = setAppType;
  window.PMSignInModal = setModalState;
  window.PMSetUser = setUser;

  const setLocalStorageUser = data => {
    localStorage.setItem("user", data);
    setUser(data);
  };

  const handleResizeModal = () => {
    setTimeout(() => {
      document.querySelectorAll(`.${modalStyle.modalOpen}`).forEach(modal => {
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
  if (appType === "login") {
    window.dispatchEvent(new Event("resize"));
    return (
      <React.Fragment>
        <Modal
          ref={loginRef}
          ariaHideApp={false}
          isOpen={modal}
          onRequestClose={setModalState}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          shouldFocusAfterRender={true}
          className={{
            base: modalStyle.modalBase,
            afterOpen: modalStyle.modalOpen,
            beforeClose: modalStyle.modalClose
          }}
          overlayClassName={modalStyle.modalOverlay}
          closeTimeoutMS={200}
        >
          <Login
            appType={appType}
            modal={currentModal}
            setUser={setLocalStorageUser}
            setAppType={setAppType}
            closeModal={setModalState}
          />
          <button onClick={setModalState} className={modalStyle.modalCloseIcon}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </Modal>
        <Route exact path={"/"} component={() => <HomeSearch user={user} />} />
      </React.Fragment>
    );
  } else if (appType === "create") {
    window.dispatchEvent(new Event("resize"));
    return (
      <React.Fragment>
        <Modal
          ref={createRef}
          ariaHideApp={false}
          isOpen={modal}
          onRequestClose={setModalState}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          shouldFocusAfterRender={true}
          className={{
            base: modalStyle.modalBase,
            afterOpen: modalStyle.modalOpen,
            beforeClose: modalStyle.modalClose
          }}
          overlayClassName={modalStyle.modalOverlay}
          closeTimeoutMS={200}
        >
          <SignUp appType={appType} modal={currentModal} />
          <button onClick={setModalState} className={modalStyle.modalCloseIcon}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </Modal>
        {/*<Route exact path={"/"} component={() => <div>TEST2</div>} />*/}
      </React.Fragment>
      //TODO Submit to local storage to run separate app
    );
  } else {
    if (appType === "" && user !== "") {
      return (
        <Route exact path={"/"} component={() => <HomeSearch user={user} />} />
      );
    } else {
      return (
        <Route exact path={"/"} component={() => <HomeSearch user={user} />} />
      );
    }
  }
});

export default Form;
