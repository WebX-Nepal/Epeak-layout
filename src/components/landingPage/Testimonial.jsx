import TestimonialCard from "./TestimonialCard";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Group from "./assets/Group.png";
export default function Testimonial() {
  const settings = {
    // dots: true,

    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // arrows: false,
    // autoplay: true,

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlaySpeed: 500,
    autoplay: true,
    arrows: false,
  };
  return (
    <>
      <div className="text-center h-[80vh]  flex flex-col justify-around ">
        <h3 className=" text-5xl font-semibold">
          What our customer <span className="text-[#26ACE2]">says?</span>
        </h3>

        <div
          className=" w-full mx-auto mt-16 bg-cover bg-center  h-[50vh] "
          style={{
            backgroundImage: `url(${Group})`,
          }}
        >
          <Slider {...settings}>
            <div>
              <TestimonialCard />
            </div>
            <div>
              <TestimonialCard />
            </div>
            <div>
              <TestimonialCard />
            </div>
            <div>
              <TestimonialCard />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
