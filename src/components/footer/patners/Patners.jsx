import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import  { Component } from "react";

import patner1 from "./patner1.jpg"
import patner2 from "./patner2.jpg"
import patner3 from "./patner3.jpg"
import patner4 from "./patner4.jpg"
import patner5 from "./patner5.jpg"


export default function Patners() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        // rtl:true,
    }
  return (
    <div className="">
    {/* <h2 className="font-Cormorant font-semibold text-4xl "> Our Patners </h2> */}
    <Slider {...settings}>
      <div className="h-[100px] p-4">
        <img src={patner1} alt="" className="object-contain " />
      </div>
      <div className="h-[100px] p-4">
        <img src={patner2} alt="" className="object-contain h-full"  />
      </div>
      <div className="h-[100px] p-4">
        <img src={patner3} alt=""  className="object-contain h-full"/>
      </div>
      <div className="h-[100px] p-4">
        <img src={patner4} alt="" className="object-contain h-full"/>
      </div>
     
      <div className="h-[100px] p-4">
        <img src={patner5} alt="" className="object-contain h-full"/>
      </div>
     
      
      
    </Slider>
  </div>
  )
}
