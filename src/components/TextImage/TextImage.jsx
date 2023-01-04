import React from "react";

// Components
import { TextImageBlock } from "./TextImageBlock/TextImageBlock";

const TextImage = ({ textImageData }) => {
  // Jsx
  return (
    <div className="text-image">
      <div
        className={`text-image__col text-image__left ${
          textImageData.left?.isImage ? "text-image__col-image" : ""
        }`}
      >
        <TextImageBlock blockData={textImageData.left}></TextImageBlock>
      </div>
      <div
        className={`text-image__col text-image__right ${
          textImageData.right?.isImage ? "text-image__col-image" : ""
        }`}
      >
        <TextImageBlock blockData={textImageData.right}></TextImageBlock>
      </div>
    </div>
  );
};

export default TextImage;
