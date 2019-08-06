import React, { useState } from "react";
import { SignUp } from "./components/signup/signup";
import styles from "./css/_index.scss";
import { Login } from "./components/login/login";
import Modal from "react-modal";
import modalStyle from "./components/modal/_modal.scss";

const Form = React.forwardRef((props, ref) => {
  const [appType, setAppType] = useState("");
  const [modal, modalState] = useState(false);

  const setModalState = () => {
    if (!modal) modalState(true);
    else modalState(false);
  };

  window.PMApp = setAppType;
  window.PMSignInModal = setModalState;

  if (appType === "login") {
    return (
      <Modal
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
        <Login />
      </Modal>
    );
  } else if (appType === "create") {
    return (
      <Modal
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
        <SignUp />
      </Modal>
    );
  } else {
    return null;
  }
});

export default Form;
