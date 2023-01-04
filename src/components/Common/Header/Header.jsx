import React, { useContext, useRef, useEffect } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

// Utility and Retrive Context
import { DeviceHelperContext } from "./../../../App";
import { getLocalPathImage } from "./../../../utility";

const Header = ({ headerData }) => {
  // Icons
  const logo = getLocalPathImage("icon", headerData.logoIcon);
  const searchIcon = getLocalPathImage("icon", headerData.searchIcon);
  const hamburgerIcon = getLocalPathImage("icon", headerData.hamburgerIcon);
  const closeIcon = getLocalPathImage("icon", headerData.closeIcon);

  // State
  const { isMobile } = useContext(DeviceHelperContext);
  const { isMenuMobileOpen, setIsMenuMobileOpen } = useContext(DeviceHelperContext);
  const modalRef = useRef();

  useEffect(() => {
    if (isMenuMobileOpen) {
      disableBodyScroll(modalRef.current);
    } else {
      enableBodyScroll(modalRef.current);
    }
  }, [isMenuMobileOpen]);

  // Jsx
  return (
    <>
      <header
        ref={modalRef}
        className={`header bg--${
          isMobile ? headerData.bgColorMobile : headerData.bgColorDesktop
        }`}
      >
        <div className="header__logo">
          <img className="header__image-logo" src={logo} alt="logo" />
        </div>
        {!isMobile && (
          <div className="header__items">
            <ul className="header__items-list u-container">
              {headerData.navItems.map((item) => {
                return (
                  <li className="header__item" key={item.id}>
                    <a
                      className={`text__paragraph text__paragraph--nav color--${headerData.navItemsColorDesktop}`}
                      href={item.url}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {!isMobile ? (
          <div className="header__search">
            <input type="text" className="header__search-input" />
            <div className="header__search-icon">
              <img src={searchIcon} alt="icon-search" />
            </div>
          </div>
        ) : (
          <div
            className="header__hamburger-icon"
            onClick={() => {
              setIsMenuMobileOpen((prevState) => !prevState);
            }}
          >
            {isMenuMobileOpen ? (
              <img src={closeIcon} alt="icon-close" />
            ) : (
              <img src={hamburgerIcon} alt="icon-hamburger" />
            )}
          </div>
        )}

        {isMenuMobileOpen && (
          <div
            className={`header__mobile-menu bg--${
              headerData.navItemsMobileBg
            } ${isMenuMobileOpen ? "header__mobile-menu--fade-in" : ""}`}
          >
            <ul className="header__mobile-menu-list">
              <li className="header__mobile-menu-item header__search">
                <input type="text" className="header__search-input" />
                <div className="header__search-icon">
                  <img src={searchIcon} alt="icon-search" />
                </div>
              </li>
              {headerData.navItems.map((item) => {
                return (
                  <li className="header__mobile-menu-item" key={item.id}>
                    <a
                      className={`text__paragraph text__paragraph--nav color--${headerData.navItemsColorMobile}`}
                      href={item.url}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </header>
      {isMenuMobileOpen && (
        <div
          className="header-mobile-open"
          onClick={() => {
            setIsMenuMobileOpen((prevState) => !prevState);
          }}
        ></div>
      )}
    </>
  );
};

export default Header;
