import React from "react";
import { BtnLink } from "./Btns";

const CategoryCard = ({ heading, image, btnTitle, multipleImage }) => {
  return (
    <div className="card category">
      <h3>{heading}</h3>
      <div className="card-image-container">
        {multipleImage ? (
          <div className="card-image-container-multiple">
            {image.map((img) => (
              <div>
                <img src={img} alt="" />
                <span></span>
              </div>
            ))}
          </div>
        ) : (
          <div style={{margin:'2rem 0'}}>
            <img src={image} alt="" />
          </div>
        )}
      </div>
      <BtnLink title={btnTitle} />
    </div>
  );
};

export default CategoryCard;
