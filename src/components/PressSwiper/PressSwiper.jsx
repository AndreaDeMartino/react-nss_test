import React, { useState } from "react";

// Utility and Retrive Context
import { getImagePath } from "./../../utility";
import LazyLoad from "react-lazy-load";

const PressSwiper = ({ pressSwiperData }) => {
  // Icons
  const arrowLeftIcon = getImagePath("/icon/arrow_left.svg");
  const arrowRightIcon = getImagePath("/icon/arrow_right.svg");

  // Retrive Image List
  const retriveImageList = pressSwiperData?.press.map((el) => {
    return getImagePath(el.image);
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
      <div
        className={`press-swiper__slider-wrapper bg--${pressSwiperData.textBlock.bgColorSlideBlock}`}
      >
        <LazyLoad offsetTop={200}>
          <img
            className="press-swiper__slider"
            src={retriveImageList[slideIndex]}
          ></img>
        </LazyLoad>
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
            <LazyLoad offsetTop={200}>
              <img
                className="slide-arrow slide-arrow--left"
                src={arrowLeftIcon}
                alt="arrow-left"
              />
            </LazyLoad>
            <LazyLoad offsetTop={200}>
              <img
                className="slide-arrow slide-arrow--right"
                src={arrowRightIcon}
                alt="arrow-right"
                onClick={getNextIndex}
              />
            </LazyLoad>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressSwiper;
