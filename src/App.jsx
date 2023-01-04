import React, { useState, useEffect } from "react";

// Components
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import DoubleText from "./components/DoubleText/DoubleText";
import TextImage from "./components/TextImage/TextImage";
import PressSwiper from "./components/PressSwiper/PressSwiper";
import Mosaic from "./components/Mosaic/Mosaic";
import ContactUs from "./components/ContactUs/ContactUs";
import SpinnerModal from "./components/UI/SpinnerModal/SpinnerModal";

// Style
import "./style/main.scss";

// Utility and Data Mock
import { detectMobile } from "./utility";
import { data } from "./data/data";

// Create Context to manage global state of device helper
export const DeviceHelperContext = React.createContext();

function App() {
  // Components State
  const [headerData, setHeaderData] = useState(data?.header);
  const [heroBannerData, setheroBannerData] = useState(data?.heroBanner);
  const [doubleTextData, setDoubleTextData] = useState(data?.doubleText);
  const [textImageData, setTextImageData] = useState(data?.textImage);
  const [pressSwiperData, setPressSwiperData] = useState(data?.pressSwiper);
  const [mosaicData, setMosaicData] = useState(data?.mosaic);
  const [contactUsData, setContactUsData] = useState(data?.contactUs);
  const [footerData, setFooterData] = useState(data?.footer);

  // Global State
  const [isMobile, setIsMobile] = useState(detectMobile());
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);
  const [counterLoader, setCounterLoader] = useState(0);
  // Callback for resize Handler
  const detectMobileHandler = () => {
    setIsMobile(detectMobile());
  };

  // Resize Handler
  useEffect(() => {
    document.body.classList.add("stop-scroll");
    window.addEventListener("resize", detectMobileHandler);
    return () => {
      window.removeEventListener("resize", detectMobileHandler);
    };
  }, []);

  // Jsx
  return (
    <div
      className={`App ${isMobile ? "App--mobile" : "App--Desktop"} u-container`}
    >
      <DeviceHelperContext.Provider
        value={{
          isMobile,
          isMenuMobileOpen,
          setIsMenuMobileOpen,
          counterLoader,
          setCounterLoader,
        }}
      >
        <Header headerData={headerData}></Header>
        <HeroBanner heroBannerData={heroBannerData.slideList}></HeroBanner>
        <DoubleText doubleTextData={doubleTextData}></DoubleText>
        {textImageData.map((textImage) => {
          return (
            <TextImage textImageData={textImage} key={textImage.id}></TextImage>
          );
        })}
        <PressSwiper pressSwiperData={pressSwiperData}></PressSwiper>
        <Mosaic mosaicData={mosaicData}></Mosaic>
        <ContactUs contactUsData={contactUsData}></ContactUs>
        <Footer footerData={footerData}></Footer>
        <SpinnerModal></SpinnerModal>
      </DeviceHelperContext.Provider>
    </div>
  );
}

export default App;
