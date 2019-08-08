import React, { useState, useEffect } from "react";
import { SignUp } from "./components/signup/signup";
import styles from "./css/_index.scss";
import { Login } from "./components/login/login";
import Modal from "react-modal";
import modalStyle from "./components/modal/_modal.scss";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = React.forwardRef((props, ref) => {
  const [appType, setAppType] = useState("");
  const [modal, modalState] = useState(false);

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

  window.PMApp = setAppType;
  window.PMSignInModal = setModalState;

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
        <Login appType={appType} modal={currentModal} />
        <button onClick={setModalState} className={modalStyle.modalCloseIcon}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </Modal>
    );
  } else if (appType === "create") {
    window.dispatchEvent(new Event("resize"));
    return (
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
      //TODO Create "x" icon for close modal
    );
  } else {
    return null;
  }
});

export default Form;
