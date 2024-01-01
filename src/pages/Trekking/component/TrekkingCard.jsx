import { useState } from "react";
import annapurna from "../assets/annapurna/annapurna.jpg";

export default function TrekkingCard({ title, photo }) {
  const [showBookNow, setShowBookNow] = useState(true);
  return (
    <div
      onMouseEnter={() => setShowBookNow}
      className="bg-white w-[400px] cursor-pointer"
    >
      <div
        className="h-[250px] bg-center bg-cover"
        style={{ backgroundImage: `url(${photo})` }}
      >
        <div className="flex justify-between items-end h-full">
          <div className="bg-[#26ACE2] p-1 text-white inline">
            Trekking walking in Nepal
          </div>
          <div
            className={`bg-[#26ACE2] p-1 text-white  ${
              showBookNow ? "inline" : "hidden"
            } `}
          >
            Book Now{" "}
          </div>
        </div>
      </div>
      <div className="p-3 font-semibold">{title}</div>
    </div>
  );
}
