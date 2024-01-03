import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component, useState } from "react";
import Slider from "react-slick";

import annapurna from "./assets/ANNAPURNAI.jpg";
import choyou from "./assets/choyou.jpg";
import dhaulagiri from "./assets/DHAULAGIRI.jpg";

import everest from "./assets/everest.jpg";
import kanchenjunga from "./assets/KANCHENJUNGA.jpg";
import lhotse from "./assets/lhotse.jpg";
import makalu from "./assets/makalu.jpg";
import masaslu from "./assets/MANASLU.jpg";
import "./cardE.css";
import video from "./assets/video.jpg";
import { Icon } from "@iconify/react";
import movie from "./assets/video/movie.mp4";
const mountainsEight = [
  {
    name: "Mount Everest",

    height: "8,848.86",

    photo: everest,
  },
  {
    name: "Kanchenjunga",
    height: "8,586",
    photo: kanchenjunga,
  },
  {
    name: "Lhotse",
    height: "8,516",
    photo: lhotse,
  },
  {
    name: "Makalu",
    height: "8,463",
    photo: makalu,
  },
  {
    name: "Cho Oyu",
    height: "8,201",
    photo: choyou,
  },
  {
    name: "Dhaulagiri",
    height: "8,167",
    photo: dhaulagiri,
  },
  {
    name: "Manaslu",
    height: "8,163",
    photo: masaslu,
  },
  {
    name: "Annapurna I",
    height: "8,091",
    photo: annapurna,
  },
];

const mountainSeven = [
  {
    name: "Himlung Himal",
    height: "7,126",
    photo: "",
  },
  {
    name: " Baruntse Peak",
    height: "7,129",
    photo: "",
  },
  {
    name: "Tilicho Peak",
    height: "7,134",
    photo: "",
  },
  {
    name: "Putha Hiunchuli",
    height: "7,246",
    photo: "",
  },

  {
    name: "Annapurna IV",
    height: "7,525",
    photo: "",
  },
];

const mountainSix = [
  {
    name: "Ama Dablam",
    height: "6,819",
    photo: "",
  },
  {
    name: "Singu Chuli Peak ",
    height: "6,501",
    photo: "",
  },
  {
    name: "Chulu East Peak ",
    height: "6,584 ",
    photo: "",
  },
  {
    name: "Kanjirowa ",
    height: "6,883",
    photo: "",
  },
];

function CardExpedition({ name, photo, height }) {
  return (
    <div
      style={{ backgroundImage: `url(${everest})` }}
      className="bg-center bg-cover w-full h-[312px]  border-red-600 rounded-xl"
      // className="bg-center  h-[312px] w-[650px] border-red-600"
    ></div>
  );
}
function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "block",
      }}
      onClick={onClick}
    />
  );
}
export default function OurExpedition() {
  const settings = {
    dots: true,
    // arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };

  const [activeExpedition, setActiveExpedtion] = useState(true);
  return (
    <div className=" py-16  ">
      <div className="  font-semibold text-4xl text-center bg-[#f7f7f7] pt-8 pb-8 ">
        <h2>
          Our
          <span className="text-[#26ACE2]"> Expeditions</span>
        </h2>
      </div>

      <div className="w-full flex gap-32 px-40 bg-[#f7f7f7] py-16">
        <div className="w-[40%] flex flex-col items-end  ">
          <div className="flex flex-col cursor-pointer ">
            <div>
              <span
                className={`${
                  activeExpedition
                    ? "bg-[#273B91] text-white"
                    : "text-slate-400"
                } px-5 py-2 rounded-md `}
                onClick={() => setActiveExpedtion(true)}
              >
                {" "}
                Expedition
              </span>
              <span
                className={`${
                  !activeExpedition
                    ? "bg-[#273B91] text-white"
                    : "text-slate-400"
                } px-5 py-2 rounded-md `}
                onClick={() => setActiveExpedtion(false)}
              >
                Trekking
              </span>
            </div>
            <div>
              {activeExpedition && (
                <ul className="mt-8  grid gap-3">
                  <li className="hover:text-[#26ACE2] cursor-pointer whitespace-nowrap ">
                    8000 meters
                  </li>
                  <li className="hover:text-[#26ACE2] cursor-pointer whitespace-nowrap ">
                    7000 meters
                  </li>
                  <li className="hover:text-[#26ACE2] cursor-pointer whitespace-nowrap ">
                    6000 meters
                  </li>
                  <li className="hover:text-[#26ACE2] cursor-pointer whitespace-nowrap ">
                    5000 meters
                  </li>
                </ul>
              )}
              {!activeExpedition && (
                <ul className="text-base  flex flex-col mt-8 cursor-pointer gap-3">
                  <li className="hover:text-[#26ACE2] whitespace-nowrap ">
                    Annapurna Region
                  </li>
                  <li className="hover:text-[#26ACE2] whitespace-nowrap">
                    Everest Region
                  </li>
                  <li className="hover:text-[#26ACE2] whitespace-nowrap">
                    Langtang Region
                  </li>
                  <li className="hover:text-[#26ACE2] whitespace-nowrap">
                    Manaslu Region
                  </li>
                  <li className="hover:text-[#26ACE2] whitespace-nowrap">
                    Mustang Region
                  </li>
                  <li className="hover:text-[#26ACE2] whitespace-nowrap">
                    Dhaulagiri Region
                  </li>

                  <li className="hover:text-[#26ACE2] whitespace-nowrap">
                    Kanchenjunga Region
                  </li>
                  <li className="hover:text-[#26ACE2] whitespace-nowrap">
                    Makalu Region
                  </li>
                  <li className="hover:text-[#26ACE2] whitespace-nowrap">
                    Rolwaling Region
                  </li>
                  <li className="hover:text-[#26ACE2] whitespace-nowrap">
                    Karakoram Region
                  </li>
                </ul>
              )}
            </div>{" "}
          </div>
        </div>
        <div className="w-[60%]  ">
          <div>
            <Slider {...settings} className="   ">
              <CardExpedition />
              <CardExpedition />
              <CardExpedition />
              <CardExpedition />
            </Slider>
          </div>
        </div>
      </div>

      <div className=" py-32 bg-white w-full flex items-center justify-center rounded-xl">
        <video className=" "  autoPlay loop muted >
          <source src={movie} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
