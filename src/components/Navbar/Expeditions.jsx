/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import annapurna from "./assets/ANNAPURNAI.jpg";
import choyou from "./assets/choyou.jpg";
import dhaulagiri from "./assets/DHAULAGIRI.jpg";

import everest from "./assets/everest.jpg";
import kanchenjunga from "./assets/KANCHENJUNGA.jpg";
import lhotse from "./assets/lhotse.jpg";
import makalu from "./assets/makalu.jpg";
import masaslu from "./assets/MANASLU.jpg";
import { useState } from "react";
import { Icon } from "@iconify/react";

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

export default function Expeditions({ setShowExpeditions }) {
  const navigate = useNavigate();
  const [showMountain, setShowMountain] = useState("");
  return (
    <div
      onMouseEnter={() => setShowExpeditions(true)}
      onMouseLeave={() => setShowExpeditions(false)}
      className="absolute   z-30 bg-white  rounded-b-md top-20 right-2.5/4  font-poppins text-black p-4 flex gap-16"
    >
      <div className=" ">
        <ul className="text-base  flex flex-col  gap-3  ">
          <li
            className={`border-b relative w-full cursor-pointer whitespace-nowrap flex justify-between items-center gap-12   `}
            onClick={() => setShowMountain("8000")}
          >
            8000 meters
            <Icon color="#26ACE2" icon="bxs:right-arrow" />
            {showMountain === "8000" && (
              <div className="absolute bg-white -right-40   rounded-md -top-4 p-4 flex  flex-col gap-2">
                {mountainsEight.map((mountain) => (
                  <li className="border-b" key={mountain.name}>
                    {mountain.name}
                  </li>
                ))}
              </div>
            )}
          </li>
          <li
            className={`border-b relative w-full cursor-pointer whitespace-nowrap flex justify-between items-center gap-12   `}
            onClick={() => setShowMountain("7000")}
          >
            7000 meters
            <Icon color="#26ACE2" icon="bxs:right-arrow" />
            {showMountain === "7000" && (
              <div className="absolute bg-white -right-[10.5rem]    rounded-md -top-4 p-4 flex  flex-col gap-2">
                {mountainSeven.map((mountain) => (
                  <li className="border-b" key={mountain.name}>
                    {mountain.name}
                  </li>
                ))}
              </div>
            )}
          </li>
          <li
            className={`border-b relative w-full cursor-pointer whitespace-nowrap flex justify-between items-center gap-12   `}
            onClick={() => setShowMountain("6000")}
          >
            6000 meters
            <Icon color="#26ACE2" icon="bxs:right-arrow" />
            {showMountain === "6000" && (
              <div className="absolute bg-white -right-44    rounded-md -top-4 p-4 flex  flex-col gap-2">
                {mountainSix.map((mountain) => (
                  <li className="border-b" key={mountain.name}>
                    {mountain.name}
                  </li>
                ))}
              </div>
            )}
          </li>
          <li
            className={`border-b relative w-full cursor-pointer whitespace-nowrap flex justify-between items-center gap-12   `}
            onClick={() => setShowMountain("5000")}
          >
            5000 meters
            <Icon color="#26ACE2" icon="bxs:right-arrow" />
            {showMountain === "5000" && (
              <div className="absolute bg-white -right-40    rounded-md top-0 p-4 flex  flex-col gap-2">
                {mountainsEight.map((mountain) => (
                  <li className="border-b" key={mountain.name}>
                    {mountain.name}
                  </li>
                ))}
              </div>
            )}
          </li>
        </ul>
        {/* <span>7 Summits</span>
        <span>VIP & LUXURY SERVICE</span> */}
      </div>
    </div>
  );
}
