/* eslint-disable react/prop-types */
import { useState } from "react";
import expedition from "../assets/expedition.jpg";
import { Link } from "react-router-dom";
import RequestBooking from "../../RequestBooking";
export default function ExpeditionCard({ title }) {
  const [showBookNow, setShowBookNow] = useState(true);
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <div
      onMouseEnter={() => setShowBookNow}
      className="bg-white w-[400px] cursor-pointer"
    >
      <div
        className="h-[250px] bg-center bg-cover"
        style={{ backgroundImage: `url(${expedition})` }}
      >
        <div className="flex justify-between items-end h-full">
          <div className="bg-[#26ACE2] p-1 text-white inline">
            Expedition in Nepal
          </div>

          <Link
            to={"/request-booking"}
            onClick={() => {
              scrollTo(0, 0);
              setSelectedPackage({title});
              console.log(title);
              <RequestBooking selectedPackage={selectedPackage} />;
            }}
            className=""
          >
            <div
              className={`bg-[#26ACE2] p-1 text-white  ${
                showBookNow ? "inline" : "hidden"
              } `}
            >
              Book Now{" "}
            </div>
          </Link>
        </div>
      </div>
      <div className="p-3 font-semibold">{title}</div>
    </div>
  );
}
