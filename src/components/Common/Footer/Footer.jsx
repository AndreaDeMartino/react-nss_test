import React from "react";

// Utility and Retrive Context
import { getImagePath } from "./../../../utility";

const Footer = ({ footerData }) => {
  // Icons
  const logo = getImagePath(footerData.logoIcon);
  
  // Jsx
  return (
    <footer className={`footer bg--${footerData.bg}`}>
      <div className="footer__logo">
        <img className="footer__image-logo" src={logo} alt="logo" />
      </div>
      <div className="footer__cols">
        <div className="footer__col footer__company-data">
          {footerData?.companyData.map((data) => {
            return (
              <a
                className={`text__default text__default--footer footer__item color--${footerData.color}`}
                href={data.url}
                key={data.id}
              >
                {data.label}
              </a>
            );
          })}
        </div>
        <div className="footer__col footer__about">
          {footerData?.about.map((data) => {
            return (
              <a
                className={`text__default text__default--footer footer__item color--${footerData.color}`}
                href={data.url}
                key={data.id}
              >
                {data.label}
              </a>
            );
          })}
        </div>
        <div className="footer__col footer__sections">
          {footerData?.sections.map((data) => {
            return (
              <a
                className={`text__default text__default--footer footer__item color--${footerData.color}`}
                href={data.url}
                key={data.id}
              >
                {data.label}
              </a>
            );
          })}
        </div>
        <div className="footer__col footer__contacts">
          {footerData?.contacts.map((data) => {
            return (
              <a
                className={`text__default text__default--footer footer__item color--${footerData.color}`}
                href={data.url}
                key={data.id}
              >
                {data.label}
              </a>
            );
          })}
        </div>
      </div>
      <div className="footer__copyright">
        {footerData?.copyright.map((data) => {
          return (
            <a
              className={`text__default text__default--footer footer__item color--${footerData.color}`}
              href={data.url}
              key={data.id}
            >
              {data.label}
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
