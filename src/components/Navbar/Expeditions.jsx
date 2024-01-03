/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";


import { useState } from "react";
import { Icon } from "@iconify/react";



export default function Expeditions({ setShowExpeditions }) {



  function scrollUP(){
    scrollTo(0,0)
  }
  const [showMountain, setShowMountain] = useState("");
  return (
    <div
      onMouseEnter={() => setShowExpeditions(true)}
      onMouseLeave={() => setShowExpeditions(false)}
      className="absolute  w-[150px]  z-30 bg-white  rounded-b-md top-20 right-2.5/4  font-poppins text-black p-4 flex gap-16"
    >
      <div className=" ">
        <ul className="text-base pb-2  flex flex-col items-center gap-3  ">
          
          <Link to={"/expedition/8000ers"}>
          <li
            className={` hover:text-slate-400 border-b pb-2 relative w-full cursor-pointer whitespace-nowrap flex justify-between items-center gap-12   `}
            onClick={() =>{ setShowMountain("8000"); scrollUP()}}
            >
            8000 meters
           
          </li>
            </Link>
            <Link to={"/expedition/7000ers"}>
          <li
            className={` hover:text-slate-400 border-b pb-2 relative w-full cursor-pointer whitespace-nowrap flex justify-between items-center gap-12   `}
            onClick={() =>{ setShowMountain("7000"); scrollUP()}}
            >
            7000 meters
           
          </li>
            </Link>
            <Link to={"/expedition/6000ers"}>
          <li
            className={` hover:text-slate-400 border-b pb-2 relative w-full cursor-pointer whitespace-nowrap flex justify-between items-center gap-12   `}
            onClick={() =>{ setShowMountain("6000"); scrollUP() }}
            >
            6000 meters
           
             
            
          </li>
            </Link>

            <Link to={"/expedition/5000ers"}>
          <li
            className={` hover:text-slate-400 border-b pb-2 relative w-full cursor-pointer whitespace-nowrap flex justify-between items-center gap-12   `}
            onClick={() =>{ setShowMountain("5000"); scrollUP() }}
          >
            5000 meters
          
          </li>
            </Link>
        </ul>
        {/* <span>7 Summits</span>
        <span>VIP & LUXURY SERVICE</span> */}
      </div>
    </div>
  );
}
