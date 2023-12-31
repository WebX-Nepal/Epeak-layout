import { useState } from "react";
import Mt from "./Mt.png";
import { Icon } from "@iconify/react";
export default function LandFirst() {
  const [selectPlan, setSelectPlan] = useState("Expedition");
  const [showSelectPlan, setShowSelectPlan] = useState(false);
  return (
    <div
      className="w-full h-[100vh] relative bg-center bg-cover "
      style={{ backgroundImage: `url(${Mt})` }}
    >
      <div className=" border flex justify-center font-poppins ">
        <div className=" w-[60.75rem] bg-white absolute bottom-28  rounded-full p-8  flex gap-24 items-center justify-center">
          <div className="flex flex-col gap-2">
            <div
              className="flex items-center gap-2 relative hover:cursor-pointer"
              onClick={() => setShowSelectPlan(!showSelectPlan)}
            >
              <span className="font-medium text-xl ">{selectPlan}</span>
              <Icon className="" color="#26ACE2" icon="teenyicons:up-solid" />
              {showSelectPlan && (
                <ul className="rounded-sm p-4 absolute bottom-[100%] text-white bg-[#26ACE2]">
                  <li className="border-b cursor-pointer" onClick={()=>setSelectPlan("Trekking")}>Trekking</li>
                  <li className="border-b cursor-pointer" onClick={()=>setSelectPlan("Expedition")}>Expedition</li>
                </ul>
              )}
            </div>
            <span className="text-slate-400">select any expedtion</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-medium text-xl">Date</span>
            <span className="text-slate-400">When will you start?</span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-medium text-xl">People</span>
            <span className=" text-slate-400">How many people?</span>
          </div>
          <button className="bg-[#273B91] text-white px-5 py-2 rounded-3xl">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
