import React, { useState } from "react";

export const Cta = ({ url="#", bg, borderColor, textColor, bgHoverEffect, children, isCta=true, onClickEvent }) => {
  // Variables
  const Tag = isCta ? 'a' : 'button';
  // State
  const [isHover, setIsHover] = useState(false);

  // Function
  const hoverHandler = () => {
    if (bgHoverEffect) {
      setIsHover(true);
      setTimeout(() => {
        setIsHover(false);
      }, 200);
    }
  };

  // Jsx
  return (
    <Tag
      className={`cta--button text__default text__default--button ${
        isHover ? "cta--bg-hover" : ""
      }`}
      href={url}
      style={{
        color: textColor,
        borderColor: borderColor,
        backgroundColor: bg,
      }}
      onMouseEnter={() => {
        hoverHandler();
      }}
      onMouseLeave={() => {
        hoverHandler();
      }}
      onClick={onClickEvent}
    >
      {children}
    </Tag>
  );
};
