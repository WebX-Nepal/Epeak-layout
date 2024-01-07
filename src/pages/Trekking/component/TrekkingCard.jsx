import { useState } from "react";
import annapurna from "../assets/annapurna/annapurna.jpg";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addTitle } from "../../../store/requestBookingSlice";
export default function TrekkingCard({ title, photo }) {
  const [showBookNow, setShowBookNow] = useState(true);

  const dispatch = useDispatch();
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

          <Link
            to={"/itineary"}
            onClick={() => {
              scrollTo(0, 0);
              dispatch(addTitle(title));
            }}
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
      <div className="p-3 font-semibold  capitalize">{title}</div>
    </div>
  );
}
