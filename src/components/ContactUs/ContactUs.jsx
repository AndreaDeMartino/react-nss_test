import React, { useState } from "react";

// Components
import { Cta } from "./../UI/Cta/Cta";

// Utility and Retrive Context
import { getLocalPathImage } from "./../../utility";

const ContactUs = ({ contactUsData }) => {
  // State
  const [inputData, setInputData] = useState("");

  // Functions
  const inputDataHandler = (e) => {
    setInputData(e.target.value);
  };

  const sentEmailHandler = () => {
    setInputData(" ");
  };
  // Jsx
  return (
    <div
      className="contact-us"
      style={{
        backgroundImage: `url(${getLocalPathImage(
          "image",
          contactUsData.image
        )})`,
      }}
    >
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
            type="text"
            placeholder="Type your email"
            onChange={inputDataHandler}
            value={inputData}
          />
          <Cta
            textColor={contactUsData?.cta.textColor}
            borderColor={contactUsData?.cta.borderColor}
            bg={contactUsData?.cta.bg}
            isCta= {false}
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
