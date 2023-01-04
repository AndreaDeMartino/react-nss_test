import React, { useContext, useState, useRef, useEffect } from "react";
// import ImageFadeIn from "react-image-fade-in";

// Utility and Retrive Context
import { DeviceHelperContext } from "./../../App";
import { getImagePath } from "./../../utility";

// Components
import { Cta } from "./../UI/Cta/Cta";

const HeroBanner = ({ heroBannerData }) => {
  // Retrive Image List
  const retriveImageList = heroBannerData.map((el) => {
    return getImagePath(el.image);
  });

  // States
  const { isMobile } = useContext(DeviceHelperContext);
  const { setCounterLoader } = useContext(DeviceHelperContext);
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideNexIndex, setSlideNexIndex] = useState(slideIndex + 1);
  const [thumbButtonHover, setThumbButtonHover] = useState(false);
  const [imageChange, setImageChange] = useState(false);
  const imageRef = useRef();
  const thumbImageRef = useRef();

  // Change Slide Handler
  const activateNextSlide = () => {
    setImageChange(true);
    if (slideIndex + 1 >= retriveImageList.length) {
      setSlideIndex(0);
    } else {
      setSlideIndex((slideIndex) => slideIndex + 1);
    }
    imageRef.current.style.opacity = 0;
    !isMobile && (thumbImageRef.current.style.opacity = 0);
    setTimeout(() => {
      setImageChange(false);
    }, 0);
  };

  // Load Image Event Handler
  const handleLoad = () => {
    setCounterLoader((prevEl) => prevEl + 1);
    imageRef.current.style.opacity = 1;
    !isMobile && (thumbImageRef.current.style.opacity = 1);
  };

  // Handler when index change (doing loop)
  useEffect(() => {
    // Update Index for custom slider
    if (slideIndex + 1 >= retriveImageList.length) {
      setSlideNexIndex(0);
    } else {
      setSlideNexIndex(slideIndex + 1);
    }
  }, [slideIndex]);

  // Jsx
  return (
    <>
      <div className="hero-banner">
        <div
          className={`hero-banner__wrapper ${
            imageChange ? "hero-banner__wrapper--change" : ""
          }`}
          id="slide_container"
        >
          <div className="hero-banner__slide">
            {!imageChange && (
              <img
                ref={imageRef}
                className="hero-banner__slide-image slide-image lazy-image"
                src={retriveImageList[slideIndex]}
                alt="slide-image"
                onLoad={handleLoad}
              ></img>
            )}
            <div className="hero-banner__slide-text-wrapper">
              <h2
                className={`slide-pre-title text__pretitle color--${heroBannerData[slideIndex].preTitle.color}`}
              >
                {heroBannerData[slideIndex]?.preTitle.label}
              </h2>
              <h1
                className={`slide-title text__default text__default--title-lg color--${heroBannerData[slideIndex].title.color}`}
              >
                {heroBannerData[slideIndex]?.title.label}
              </h1>
              <h3
                className={`slide-sub-title text__paragraph text__paragraph--subtitle color--${heroBannerData[slideIndex].subTitle.color}`}
              >
                {heroBannerData[slideIndex]?.subTitle.label}
              </h3>
              <Cta
                textColor={heroBannerData[slideIndex]?.cta.textColor}
                borderColor={heroBannerData[slideIndex]?.cta.borderColor}
                bg={heroBannerData[slideIndex]?.cta.bg}
                url={heroBannerData[slideIndex]?.cta.url}
              >
                {heroBannerData[slideIndex]?.cta.label}
              </Cta>
            </div>
          </div>
          <div className="hero-banner__thumb" onClick={activateNextSlide}>
            <div
              className={`hero-banner__thumb-wrapper ${
                thumbButtonHover ? "hero-banner__thumb-wrapper--hover" : ""
              }`}
              onMouseEnter={() => {
                setThumbButtonHover(true);
              }}
              onMouseLeave={() => {
                setThumbButtonHover(false);
              }}
            >
              {!isMobile && (
                <img
                  ref={thumbImageRef}
                  className="hero-banner__thumb-image slide-image lazy-image"
                  src={retriveImageList[slideNexIndex]}
                  alt="slide-image"
                  onLoad={() => setCounterLoader((prevEl) => prevEl + 1)}
                />
              )}
              <div className="hero-banner__thumb-text">
                {!isMobile && (
                  <h2 className="thumb-title text__default text__default--title-sm color--white">
                    {heroBannerData[slideNexIndex]?.title.label}
                  </h2>
                )}
                <div className="thumb-button">
                  <p className="text__pretitle text__pretitle--spaced">NEXT</p>
                  <span className="text__pretitle text__pretitle--spaced thumb-button__arrow">{`>`}</span>
                  {!isMobile && (
                    <p className="text__pretitle text__pretitle--spaced hero-banner__thumb-next-arrows">
                      {`>>`}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
