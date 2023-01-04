import React from "react";

const DoubleText = ({ doubleTextData }) => {
  // Jsx
  return (
    <div className="double-text">
      <h2
        className={`double-text__title text__default text__default--title-lg color--${doubleTextData.left.title.color}`}
      >
        {doubleTextData.left.title.label}
      </h2>
      <div className="double-text__wrapper">
        <div className="double-text__left">
          <p
            className={`double-text__paragraph text__paragraph color--${doubleTextData.left.paragraph.color}`}
          >
            {doubleTextData.left.paragraph.label}
          </p>
        </div>
        <div className="double-text__right">
          <p
            className={`double-text__paragraph text__paragraph color--${doubleTextData.right.paragraph.color}`}
          >
            {doubleTextData.right.paragraph.label}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoubleText;
