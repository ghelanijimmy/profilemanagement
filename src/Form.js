import React, { useEffect, useState } from "react";
import SignUp from "./components/signup/signup";
import Login from "./components/login/login";
import Modal from "react-modal";
import modalStyle from "./components/modal/_modal.scss";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route } from "react-router-dom";
import HomeSearch from "./components/recentsearch/homesearch";
import Consumer from "./components/context/consumer";
//TODO WINDOW MODAL RESIZE FIX
const Form = props => {
  const loginRef = React.createRef();
  const createRef = React.createRef();

  // useEffect(() => {
  //
  //   // fetch("http://localhost:3005/users/add", {
  //   //   method: "post",
  //   //   headers: {
  //   //     "Content-type": "application/json"
  //   //   },
  //   //   body: JSON.stringify({
  //   //     username: "ghelanijimmy",
  //   //     email: "ghelanijimmy@icloud.com"
  //   //   })
  //   // })
  //   //   .then(res => res.json())
  //   //   .then(data => console.log(data));
  // }, []);

  window.addEventListener("resize", () => {
    props.data.setWindowHeight(window.innerHeight);
  });

  useEffect(() => {
    let appType;

    switch (props.data.appType) {
      case "login":
        appType = loginRef;
        break;
      case "create":
        appType = createRef;
        break;
    }

    const handleResize = appType => {
      if (window.innerHeight < appType.current.parentElement.clientHeight) {
        appType.current.parentElement.style.height = `${window.innerHeight -
          40}px`;
      } else if (
        window.innerHeight >
        appType.current.parentElement.clientHeight + 40
      ) {
        appType.current.parentElement.removeAttribute("style");
      }
    };

    if (props.data.modal && appType !== undefined) {
      const appExists = async appType => {
        new Promise(resolve => {
          const isAppType = () => {
            if (appType.current !== null) {
              resolve(appType);
            } else {
              window.requestAnimationFrame(isAppType);
            }
          };
          isAppType();
        });
      };
      appExists(appType).then(() => handleResize(appType));
    }
  }, [props.data.windowHeight, props.data.modal, props.data.appType]);

  if (props.data.appType === "login") {
    return (
      <React.Fragment>
        <Modal
          ariaHideApp={false}
          isOpen={props.data.modal}
          onRequestClose={props.data.setModalState}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          shouldFocusAfterRender={true}
          className={{
            base: `${modalStyle.modal} ${modalStyle.Base}`,
            afterOpen: `${modalStyle.modal} ${modalStyle.Open}`,
            beforeClose: `${modalStyle.modal} ${modalStyle.Close}`
          }}
          overlayClassName={`${modalStyle.modal} ${modalStyle.Overlay}`}
          closeTimeoutMS={200}
        >
          <Login passedref={loginRef} />
          <button
            onClick={props.data.setModalState}
            className={`${modalStyle.modal} ${modalStyle.CloseIcon}`}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </Modal>
        <Route
          exact
          path={"/"}
          component={() => <HomeSearch user={props.data.user} {...props} />}
        />
      </React.Fragment>
    );
  } else if (props.data.appType === "create") {
    return (
      <React.Fragment>
        <Modal
          ariaHideApp={false}
          isOpen={props.data.modal}
          onRequestClose={props.data.setModalState}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          shouldFocusAfterRender={true}
          className={{
            base: `${modalStyle.modal} ${modalStyle.Base}`,
            afterOpen: `${modalStyle.modal} ${modalStyle.Open}`,
            beforeClose: `${modalStyle.modal} ${modalStyle.Close}`
          }}
          overlayClassName={`${modalStyle.modal} ${modalStyle.Overlay}`}
          closeTimeoutMS={200}
        >
          <SignUp passedref={createRef} />
          <button
            onClick={props.data.setModalState}
            className={`${modalStyle.modal} ${modalStyle.CloseIcon}`}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </Modal>
        <Route
          exact
          path={"/"}
          component={() => <HomeSearch user={props.data.user} {...props} />}
        />
      </React.Fragment>
    );
  } else {
    if (props.data.appType === "" && props.data.user !== "") {
      return (
        <Route
          exact
          path={"/"}
          component={() => <HomeSearch user={props.data.user} {...props} />}
        />
      );
    } else {
      return (
        <Route
          exact
          path={"/"}
          component={() => <HomeSearch user={props.data.user} {...props} />}
        />
      );
    }
  }
};

export default Consumer(Form);
