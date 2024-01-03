import { useState } from "react";
import PackageCard from "./PackageCard";
import mountain from "./assets/mountain.png";
import { Icon } from "@iconify/react";
export default function Package() {
  const [season, setSeason] = useState("1");
  return (
    <>
      <div className="flex flex-col gap-16   pb-16">
        <div className="flex bg-[#f7f7f7] px-40 py-8">
          <div className="w-[50%] flex items-end justify-center   ">
            <img src={mountain} className="w-96" alt="muntaion" />
          </div>
          <div className="w-[50%] flex flex-col gap-8  px-8">
            <h3 className="text-6xl  font-semibold">
              Are you ready <br /> for the Trip?
            </h3>
            <p className="text-slate-500">
              If you have packed ypur bag and ready for the dream of submitting
              the Highest peak of the mountain.
            </p>
            <button className="text-white w-[200px]  rounded-3xl  px-8 py-3 bg-blue-800">
              Book Now{" "}
            </button>
          </div>
        </div>
        {/* explore */}

        <div className="flex flex-col gap-3 mt-32">
          <h3 className="text-center text-4xl mt-4 font-semibold">
            Explore <span className="text-[#26ACE2]">Package</span>{" "}
          </h3>
          <p className="text-slate-400 text-center">
            Our Seasonal Recommedations
          </p>
        </div>
        {/* season */}
        <div className="  gap-8 flex items-center justify-center  ">
          <div
            className={` ${
              season == "1" ? "bg-[#26ACE2]" : "bg-white"
            }  rounded-lg cursor-pointer p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]`}
            onClick={() => setSeason("1")}
          >
            <Icon
              className=""
              width={50}
              color={`${season == "1" ? "white" : "green"}`}
              icon="majesticons:flower-2-line"
            />
          </div>

          <div
            className={`${
              season == "2" ? "bg-[#26ACE2]" : "bg-white"
            } rounded-lg cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center p-2 `}
          >
            <Icon
              className=""
              width={50}
              color={season == 2 ? "white" : "F6C000"}
              icon="ph:sun"
              onClick={() => setSeason("2")}
            />
          </div>
          <div
            className={`${
              season == "3" ? "bg-[#26ACE2]" : "bg-white"
            }  rounded-lg cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center p-2`}
          >
            <Icon
              className="flex items-center justify-center"
              onClick={() => setSeason("3")}
              width={50}
              color={`${season == 3 ? "white" : "830000"}`}
              icon="mdi:leaf"
            />
          </div>
          <div
            className={`{ ${season=="4"?"bg-[#26ACE2]":"bg-white"}   rounded-lg cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center p-2`}
          >
            <Icon
              onClick={() => setSeason("4")}
              className="flex items-center justify-center"
              width={50}
              color={`${season=='4'?"white":"00C8E3" }  `}
              icon="ion:snow"
            />
          </div>
        </div>
      </div>
      {/* card */}
      <div>
        {season == "1" && (
          <div className=" grid grid-cols-3 gap-8 px-28">
            <PackageCard />
            <PackageCard />
            <PackageCard />
            {/* <PackageCard />
            <PackageCard />
            <PackageCard />
            <PackageCard />
            <PackageCard />
            <PackageCard /> */}
          </div>
        )}
        {season == "2" && (
          <div className=" grid grid-cols-3 gap-8 px-28">
            <PackageCard />
            {/* <PackageCard />
            <PackageCard /> */}
            {/* <PackageCard />
            <PackageCard />
            <PackageCard />
            <PackageCard />
            <PackageCard />
            <PackageCard /> */}
          </div>
        )}
        {season == "3" && (
          <div className=" grid grid-cols-3 gap-8 px-28">
            <PackageCard />
            <PackageCard />
            {/* <PackageCard /> */}
            {/* <PackageCard />
            <PackageCard />
            <PackageCard />
            <PackageCard />
            <PackageCard />
            <PackageCard /> */}
          </div>
        )}
        {season == "4" && (
          <div className=" grid grid-cols-3 gap-8 px-28">
            <PackageCard />
            <PackageCard />
            <PackageCard />
            <PackageCard />
            <PackageCard />
            {/* <PackageCard />
            <PackageCard />
            <PackageCard />
            <PackageCard />
            <PackageCard />
            <PackageCard /> */}
          </div>
        )}

        <div className="flex items-center gap-1 cursor-pointer text-sm justify-center mt-8 bg-white rounded-3xl shadow-2xl">
          <Icon width={16} icon="mdi:eye" />
          View All
        </div>
      </div>
    </>
  );
}
