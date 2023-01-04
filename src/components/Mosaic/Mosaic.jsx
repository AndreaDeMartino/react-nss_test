import React, { useState } from "react";

// Utility and Retrive Context
import { getImagePath } from "./../../utility";
import LazyLoad from "react-lazy-load";

const Mosaic = ({ mosaicData }) => {
  // Retrive Image List
  let initialLarge = "";
  let intialSmallBoxes = [];
  mosaicData?.map((el) => {
    el.sizeLarge ? (initialLarge = el) : intialSmallBoxes.push(el);
  });

  // State
  const [largeBox, setLargeBox] = useState(initialLarge);
  const [smallBoxex, setSmallBoxex] = useState(intialSmallBoxes);

  // Jsx
  return (
    <div className="mosaic">
      <div className="mosaic__large-block">
        <div className="mosaic__large">
          <LazyLoad offset={1000} width={"100%"} height={"100%"}>
            <img
              className="mosaic__large-image"
              src={getImagePath(largeBox.image)}
              alt="mosaic_large"
            />
          </LazyLoad>

          <div className="mosaic__large-text">
            <h4
              className={`mosaic__large-pre-title text__default text__default--social color--${largeBox.preTitle.color}`}
            >
              {largeBox.preTitle.label}
            </h4>
            <h3
              className={`mosaic__large-title text__default text__default--title-lg  color--${largeBox.title.color}`}
            >
              {largeBox.title.label}
            </h3>
          </div>
        </div>
      </div>
      <div className="mosaic__small-blocks">
        {smallBoxex.map((smallBox) => {
          return (
            <LazyLoad offset={1000} width={"100%"} key={smallBox.id}>
              <img
                className="mosaic__small"
                src={getImagePath(smallBox.image)}
                alt="large image"
              />
            </LazyLoad>
          );
        })}
      </div>
    </div>
  );
};

export default Mosaic;
