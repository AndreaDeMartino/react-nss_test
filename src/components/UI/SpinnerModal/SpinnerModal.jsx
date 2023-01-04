import React, { useContext, useState, useEffect, useRef } from "react";

// Components
import { Cta } from "./../Cta/Cta";
import { Spinner } from "./../Spinner/Spinner";

// Utility and Retrive Context
import { DeviceHelperContext } from "./../../../App";

const SpinnerModal = () => {
  const modalRef = useRef();
  const { counterLoader } = useContext(DeviceHelperContext);
  const [hideModal, setHideModal] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // Effect Handler
  useEffect(() => {
    if (counterLoader >= document.querySelectorAll(".lazy-image").length) {
      setShowButton(true);
    }
  }, [counterLoader]);

  // Functions
  const closeModalHandler = () => {
    document.body.classList.remove("stop-scroll");
    setTimeout(() => {
      setHideModal(true);
    }, 300);
  };

  // Jsx
  return (
    <div
      ref={modalRef}
      className={`spinner-modal ${hideModal ? "spinner-modal--hidden" : ""}`}
    >
      <h2
        className={`spinner-modal__title text__default text__default--social color--black`}
      >
        Welcome to NSS Test with React Js
      </h2>

      <div
        className={`spinner__wrapper ${
          showButton && "spinner__wrapper--hidden"
        }`}
      >
        <Spinner></Spinner>
      </div>

      <div className={`cta__wrapper ${showButton && "cta__wrapper--show"}`}>
        <Cta
          textColor={"black"}
          borderColor={"black"}
          isCta={false}
          onClickEvent={closeModalHandler}
        >
          ENTER
        </Cta>
      </div>
    </div>
  );
};

export default SpinnerModal;
