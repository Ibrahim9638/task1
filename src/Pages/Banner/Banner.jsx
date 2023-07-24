import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import banner1 from "../../assets/Banner/Banner1.jpg";
import banner2 from "../../assets/Banner/Banner2.jpg";
import banner3 from "../../assets/Banner/Banner3.jpg";
import banner4 from "../../assets/Banner/Banner4.jpg";

const Banner = () => {
  return (
    <div>
      <AwesomeSlider>
        <div className="w-full">
          <img src={banner1} alt=""  />
        </div>
        <div>
          <img src={banner2} alt="" />
        </div>
        <div>
          <img src={banner3} alt="" />
        </div>
        <div>
          <img src={banner4} alt="" />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
