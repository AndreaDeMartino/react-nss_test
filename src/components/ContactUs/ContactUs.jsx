import React, { useState, useContext } from "react";

// Components
import { Cta } from "./../UI/Cta/Cta";

// Utility and Retrive Context
import { getImagePath } from "./../../utility";
import { DeviceHelperContext } from "./../../App";

const ContactUs = ({ contactUsData }) => {
  // State
  const [inputData, setInputData] = useState("");
  const { setCounterLoader } = useContext(DeviceHelperContext);

  // Functions
  const inputDataHandler = (e) => {
    setInputData(e.target.value);
  };

  const sentEmailHandler = () => {
    setInputData(" ");
  };
  // Jsx
  return (
    <div className="contact-us">
      <img
        className="contact-us__bg"
        src={getImagePath(contactUsData.image)}
        alt="contact-us-image"
        onLoad={() => setCounterLoader((prevEl) => prevEl + 1)}
      />

      <div className="contact-us__wrapper">
        <h3
          className={`contact-us__sub-title text__default text__default--title-lg  color--${contactUsData.title.color}`}
        >
          {contactUsData.title.label}
        </h3>
        <h4
          className={`contact-us__title text__default text__default--social color--${contactUsData.subTitle.color}`}
        >
          {contactUsData.subTitle.label}
        </h4>

        <div className="contact-us__form">
          <input
            className="contact-us__input text__deafault text__default--contact"
            type="email"
            name="email"
            placeholder="Type your email"
            onChange={inputDataHandler}
            value={inputData}
          />
          <Cta
            textColor={contactUsData?.cta.textColor}
            borderColor={contactUsData?.cta.borderColor}
            bg={contactUsData?.cta.bg}
            isCta={false}
            onClickEvent={sentEmailHandler}
          >
            {contactUsData?.cta.label}
          </Cta>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
