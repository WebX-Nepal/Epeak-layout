/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import annapurna from "./assets/ANNAPURNAI.jpg";
import choyou from "./assets/choyou.jpg";
import dhaulagiri from "./assets/DHAULAGIRI.jpg";

import everest from "./assets/everest.jpg";
import kanchenjunga from "./assets/KANCHENJUNGA.jpg";
import lhotse from "./assets/lhotse.jpg";
import makalu from "./assets/makalu.jpg";
import masaslu from "./assets/MANASLU.jpg";
import { useState } from "react";

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

const mountainOthers = [{}];
export default function Expeditions({ setShowExpeditions }) {
  const navigate = useNavigate();
  const [showMountain, setShowMountain] = useState("8000");
  return (
    <div
      onMouseEnter={() => setShowExpeditions(true)}
      onMouseLeave={() => setShowExpeditions(false)}
      className="absolute cursor-default left-0 z-30 w-full  backdrop-blur-lg bg-[#023047]  top-20  font-poppins text-white px-32 py-8 flex gap-16"
    >
      <div className="flex flex-col mt-4 gap-2 w-[15%] ">
        <ul className="text-slate-200 ">
          <li
            className={`border-b cursor-pointer px-5 py-1 mt-4  ${
              showMountain === "8000" ? "text-blue-400" : ""
            } `}
            onClick={() => setShowMountain("8000")}
          >
            8000 meters
          </li>
          <li
            className={`border-b cursor-pointer px-5 py-1 mt-4 ${
              showMountain === "7000" ? "text-blue-400" : ""
            }`}
            onClick={() => setShowMountain("7000")}
          >
            7000 meters
          </li>
          <li
            className={`border-b cursor-pointer px-5 py-1 mt-4 ${
              showMountain === "6000" ? "text-blue-400" : ""
            }`}
            onClick={() => setShowMountain("6000")}
          >
            6000 meters
          </li>
          <li
            className={`border-b cursor-pointer px-5 py-1 mt-4 ${
              showMountain === "other" ? "text-blue-400" : ""
            }`}
          >
            Other
          </li>
        </ul>
        {/* <span>7 Summits</span>
        <span>VIP & LUXURY SERVICE</span> */}
      </div>

      {showMountain === "8000" && (
        <div className="w-[80%] flex flex-wrap gap-8 uppercase text-xl  font-semibold mt-4 ">
          {/* <Link
          to="/everest"
          onClick={() => window.scrollTo(0, 0)}
          className="overflow-hidden  p-4 flex justify-center items-center rounded-md cursor-pointer w-[280px]  h-[200px] bg-cover bg-[url('https://www.sevensummittreks.com/uploads/original/1651467803_broad-peak-kGZ0BbXhROzifvzanFk2u9S8TQR4DLrcumBtDjn9.jpg')]"
        >
          <p className="uppercase  text-black hover:scale-125 transition-all duration-300 hover:text-[#f2ba37]">
            Everest
          </p>
        </Link>
        <div className="p-4 flex justify-center items-center rounded-md  cursor-pointer w-[280px]  h-[200px] bg-cover bg-[url('https://i0.wp.com/intrepidtreks.com/en/wp-content/uploads/2018/03/Tilicho-Lake-trek-Annapurna1.jpg?fit=1140%2C760')]">
          7000ers
        </div>
        <div className="p-4 flex l justify-center items-center rounded-md  cursor-pointer w-[280px]  h-[200px] bg-cover bg-[url('https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/1622203213079-WST8ZGC284MLBYMHHK0C/The%2BCommon%2BWanderer%2BAnnapurna%2Bcircuit%2Btrek%2BNepal-4_1.jpg')]">
          6000ers
        </div> */}

          <div className="grid grid-cols-3 gap-8">
            {mountainsEight.map((mountain, index) => {
              return (
                <div
                  // onClick={()=>console.log(index)}
                  onClick={() => {
                    setShowExpeditions(false)
                    index === 0 ? navigate("/everest") : "";
                  }}
                  key={mountain.name}
                  className="w-[325px]  flex gap-2 cursor-pointer hover:bg-white  rounded-[9px] bg-[#A8D3EC] text-black"
                >
                  <div className="w-[124px] h-[82px]   p-[5px]">
                    <img
                      src={mountain.photo}
                      alt="photo"
                      className="rounded-[9px] w-full h-full "
                    />
                  </div>
                  <div className="w-[65%] flex flex-col justify-center font-poppins">
                    <h3 className="capitalize font-Cormorant font-bold text-2xl">
                      {" "}
                      {mountain.name}{" "}
                    </h3>
                    <p className="text-xs text-slate-600 ">
                      {mountain.height}{" "}
                      <span className="lowercase">meters</span>{" "}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {showMountain === "7000" && (
        <div className="w-[80%] flex flex-wrap gap-8 uppercase text-xl  font-semibold mt-4 ">
          <div className="grid grid-cols-3 gap-8">
            {mountainSeven.map((mountain, index) => {
              return (
                <div
                  key={mountain.name}
                  className="w-[325px]  flex gap-2 cursor-pointer hover:bg-white  rounded-[9px] bg-[#A8D3EC] text-black"
                >
                  <div className="w-[124px] h-[82px]   p-[5px]">
                    <img
                      src={mountain.photo}
                      alt="photo"
                      className="rounded-[9px] w-full h-full "
                    />
                  </div>
                  <div className="w-[65%] flex flex-col justify-center font-poppins">
                    <h3 className="capitalize font-Cormorant font-bold text-2xl">
                      {" "}
                      {mountain.name}{" "}
                    </h3>
                    <p className="text-xs text-slate-600 ">
                      {mountain.height}{" "}
                      <span className="lowercase">meters</span>{" "}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {showMountain === "6000" && (
        <div className="w-[80%] flex flex-wrap gap-8 uppercase text-xl  font-semibold mt-4 ">
          {/* <Link
          to="/everest"
          onClick={() => window.scrollTo(0, 0)}
          className="overflow-hidden  p-4 flex justify-center items-center rounded-md cursor-pointer w-[280px]  h-[200px] bg-cover bg-[url('https://www.sevensummittreks.com/uploads/original/1651467803_broad-peak-kGZ0BbXhROzifvzanFk2u9S8TQR4DLrcumBtDjn9.jpg')]"
        >
          <p className="uppercase  text-black hover:scale-125 transition-all duration-300 hover:text-[#f2ba37]">
            Everest
          </p>
        </Link>
        <div className="p-4 flex justify-center items-center rounded-md  cursor-pointer w-[280px]  h-[200px] bg-cover bg-[url('https://i0.wp.com/intrepidtreks.com/en/wp-content/uploads/2018/03/Tilicho-Lake-trek-Annapurna1.jpg?fit=1140%2C760')]">
          7000ers
        </div>
        <div className="p-4 flex l justify-center items-center rounded-md  cursor-pointer w-[280px]  h-[200px] bg-cover bg-[url('https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/1622203213079-WST8ZGC284MLBYMHHK0C/The%2BCommon%2BWanderer%2BAnnapurna%2Bcircuit%2Btrek%2BNepal-4_1.jpg')]">
          6000ers
        </div> */}

          <div className="grid grid-cols-3 gap-8">
            {mountainSix.map((mountain) => {
              return (
                <div
                  key={mountain.name}
                  className="w-[325px]  flex gap-2 cursor-pointer hover:bg-white  rounded-[9px] bg-[#A8D3EC] text-black"
                >
                  <div className="w-[124px] h-[82px]   p-[5px]">
                    <img
                      src={mountain.photo}
                      alt="photo"
                      className="rounded-[9px] w-full h-full "
                    />
                  </div>
                  <div className="w-[65%] flex flex-col justify-center font-poppins">
                    <h3 className="capitalize font-Cormorant font-bold text-2xl">
                      {mountain.name}
                    </h3>
                    <p className="text-xs text-slate-600 ">
                      {mountain.height}{" "}
                      <span className="lowercase">meters</span>{" "}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
