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

const Form = props => {
  const loginRef = React.createRef();
  const createRef = React.createRef();

  if (props.data.appType === "login") {
    window.dispatchEvent(new Event("resize"));
    return (
      <React.Fragment>
        <Modal
          ref={loginRef}
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
          <Login />
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
    window.dispatchEvent(new Event("resize"));
    return (
      <React.Fragment>
        <Modal
          ref={createRef}
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
          <SignUp />
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
