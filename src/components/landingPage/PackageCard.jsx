import { Icon } from "@iconify/react";

import everst from "./assets/everest.png";
export default function PackageCard() {
  return (
    <div className="w-[420px] h-[200px] bg-[#EEEEEE] flex gap-4 p-2 rounded-lg font-poppins">
      <div className="w-[40%] border">
        <img src={everst} alt="" className="h-full w-full" />
      </div>
      <div className=" w-[55%] flex flex-col gap-4"        >
        <h3 className="font-semibold">Mount Everest Expedition (8848.86 m) North</h3>
        <p className="text-xs text-slate-400"> The world's Highest Moutain</p>
        <div className="flex gap-6">
          <div className="flex text-xs items-center ">
            <Icon color="26ACE2" icon="gg:pin" />
            Nepal
          </div>
          <div className="flex text-xs items-center">
            <Icon color="26ACE2" icon="mdi:clock" />
            59 days
          </div>
        </div>

        <div className="flex gap-4">
            <button className="text-[#273B91] border border-[#273B91] rounded-3xl px-3 py-1 text-xs" >View Details</button>
            <button className="text-white bg-[#273B91] px-3 py-1 rounded-3xl   text-xs ">Book Now</button>
        </div>
      </div>
    </div>
  );
}
