import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";

import patner1 from "./patner1.jpg";
import patner2 from "./patner2.jpg";
import patner3 from "./patner3.jpg";
import patner4 from "./patner4.jpg";
import patner5 from "./patner5.jpg";

export default function Patners() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1,
    cssEase: "linear",
    arrows: false,
    // rtl:true,
  };
  return (
    <div className=" px-8 rounded-xl">
      {/* <h2 className="font-Cormorant font-semibold text-4xl "> Our Patners </h2> */}
      <Slider {...settings}>
        {/* <div className="h-[100px] bg-white w-36 p-4 flex justify-center items-center">
        <img src={patner1} alt="" className="object-center " />
      </div> */}
        <div className="h-[100px]   bg-white   p-4  flex justify-center items-center">
          <img
            src={patner2}
            alt=""
            className="  object-center h-full"
          />
        </div>
        <div className="h-[100px]     bg-white  p-4  flex justify-center items-center">
          <img
            src={patner3}
            alt=""
            className=" object-center h-full"
          />
        </div>
        <div className="h-[100px]      bg-white p-4  flex justify-center items-center">
          <img
            src={patner4}
            alt=""
            className=" object-center h-full"
          />
        </div>

        <div className="h-[100px]      bg-white p-4  flex justify-center items-center">
          <img
            src={patner5}
            alt=""
            className="   object-center h-full"
          />
        </div>
      </Slider>
    </div>
  );
}
