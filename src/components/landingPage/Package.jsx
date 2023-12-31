import PackageCard from "./PackageCard";
import mountain from "./assets/mountain.png";
import { Icon } from "@iconify/react";
export default function Package() {
  return (<>
    <div className="flex flex-col gap-16 px-40  py-32">
      <div className="flex">
        <div className="w-[50%] flex items-end justify-center   ">
          <img src={mountain} className="w-80" alt="muntaion" />
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

      <div className="flex flex-col gap-3">
        <h3 className="text-center text-5xl mt-4 font-semibold">
          Explore <span className="text-[#26ACE2]">Package</span>{" "}
        </h3>
        <p className="text-slate-400 text-center">
          Our Seasonal Recommedations
        </p>
      </div>
      {/* season */}
      <div className="  gap-8 flex items-center justify-center ">
        <div className="bg-[#26ACE2] rounded-lg cursor-pointer ">
          <Icon
            className=""
            width={50}
            color="white"
            icon="majesticons:flower-2-line"
            />
        </div>

        <div className="bg-white rounded-lg cursor-pointer shadow-2xl flex items-center justify-center ">
          <Icon className="" width={50} color="F6C000" icon="ph:sun" />
        </div>
        <div className="bg-white rounded-lg cursor-pointer shadow-2xl flex items-center justify-center ">
          <Icon
            className="flex items-center justify-center"
            width={50}
            color="830000"
            icon="mdi:leaf"
            />
        </div>
        <div className="bg-white rounded-lg cursor-pointer shadow-2xl flex items-center justify-center ">
          <Icon
            className="flex items-center justify-center"
            width={50}
            color="00C8E3"
            icon="ion:snow"
            />
        </div>
      </div>
      </div>
      {/* card */}
      <div>

      <div className=" grid grid-cols-3 gap-8 px-28">
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
    </div>
<div className="flex items-center gap-1 cursor-pointer text-sm justify-center mt-8 bg-white rounded-3xl shadow-2xl"> 
<Icon width={16} icon="mdi:eye" />
    View All</div>
      </div>

            </>
  );
}
