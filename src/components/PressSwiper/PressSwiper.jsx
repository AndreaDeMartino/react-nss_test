import React, { useState } from "react";

// Utility and Retrive Context
import { getLocalPathImage } from "./../../utility";

const PressSwiper = ({ pressSwiperData }) => {
  // Icons
  const arrowLeftIcon = getLocalPathImage("icon", "arrow_left.svg");
  const arrowRightIcon = getLocalPathImage("icon", "arrow_right.svg");

  // Retrive Image List
  const retriveImageList = pressSwiperData?.press.map((el) => {
    return getLocalPathImage("image", el.image);
  });

  // State
  const [slideIndex, setSlideIndex] = useState(0);

  // Functions
  const getNextIndex = () => {
    if (slideIndex + 1 >= retriveImageList.length) {
      setSlideIndex(0);
    } else {
      setSlideIndex((prevEl) => prevEl + 1);
    }
  };

  // Jsx
  return (
    <div className="press-swiper">
      <div className="press-swiper__block-text">
        <h2
          className={`block__text--title text__default text__default--title-lg color--${pressSwiperData.textBlock.title.color}`}
        >
          {pressSwiperData.textBlock.title.label}
        </h2>
        <h2
          className={`block__text--sub-title text__default text__default--title-lg color--${pressSwiperData.textBlock.subTitle.color}`}
        >
          {pressSwiperData.textBlock.subTitle.label}
        </h2>
        <p
          className={`block__text--paragraph text__paragraph color--${pressSwiperData.textBlock.paragraph.color}`}
        >
          {pressSwiperData.textBlock.paragraph.label}
        </p>
      </div>
      <div className={`press-swiper__slider-wrapper bg--${pressSwiperData.textBlock.bgColorSlideBlock}`}>
        <div
          className="press-swiper__slider"
          style={{ backgroundImage: `url(${retriveImageList[slideIndex]}` }}
        ></div>
      </div>
      <div
        className={`press-swiper__block-bg bg--${pressSwiperData.textBlock.bgColorSlideBlock}`}
      >
        <div className="slider-text">
          <h4
            className={`slide-pre-title text__pretitle text__pretitle--small color--${pressSwiperData.press[slideIndex].preTitle.color}`}
          >
            {pressSwiperData.press[slideIndex].preTitle.label}
          </h4>
          <h5
            className={`slide-date text__pretitle text__pretitle--spaced color--${pressSwiperData.press[slideIndex].date.color}`}
          >
            {pressSwiperData.press[slideIndex].date.label}
          </h5>
          <h3
            className={`slide-title text__default  color--${pressSwiperData.press[slideIndex].title.color}`}
          >
            {pressSwiperData.press[slideIndex].title.label}
          </h3>
          <div className="slide-arrows">
            <img
              className="slide-arrow slide-arrow--left"
              src={arrowLeftIcon}
              alt="arrow-left"
            />
            <img
              className="slide-arrow slide-arrow--right"
              src={arrowRightIcon}
              alt="arrow-right"
              onClick={getNextIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressSwiper;
