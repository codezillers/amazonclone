import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Categories from "./Categories";
const landing1 = require("../../assets/landing1.jpg");
const landing2 = require("../../assets/landing2.jpg");
const landing3 = require("../../assets/landing3.jpg");
const landing4 = require("../../assets/landing4.jpg");

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="container">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          interval={5000}
        >
          <div>
            <img loading="lazy" src={landing1} alt="" />
          </div>
          <div>
            <img loading="lazy" src={landing2} alt="" />
          </div>
          <div>
            <img loading="lazy" src={landing3} alt="" />
          </div>
          <div>
            <img loading="lazy" src={landing4} alt="" />
          </div>
        </Carousel>
        <div>
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
