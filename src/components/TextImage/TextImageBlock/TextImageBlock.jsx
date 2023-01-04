import React from "react";

// Utility
import { getLocalPathImage } from "./../../../utility";

// Components
import { Cta } from "./../../UI/Cta/Cta";

export const TextImageBlock = ({ blockData }) => {

  // Jsx
  return (
    <div className="text-image__block">
      {blockData?.isImage ? (
        <div className="block__image-wrapper">
          <img
            className="block__image"
            src={getLocalPathImage("image", blockData.image)}
            alt="block image"
          />
        </div>
      ) : (
        <div className="block__text">
          <h3
            className={`block__text--pre-title text__pretitle color--${blockData.preTitle.color}`}
          >
            {blockData.preTitle.label}
          </h3>
          <h2
            className={`block__text--title text__default text__default--title-md color--${blockData.title.color}`}
          >
            {blockData.title.label}
          </h2>
          <p
            className={`block__text--paragraph text__paragraph color--${blockData.paragraph.color}`}
          >
            {blockData.paragraph.label}
          </p>

          <Cta
            textColor={blockData?.cta.textColor}
            borderColor={blockData?.cta.borderColor}
            bg={blockData?.cta.bg}
            url={blockData?.cta.url}
            bgHoverEffect={true}
          >
            {blockData?.cta.label}
          </Cta>
        </div>
      )}
    </div>
  );
};
