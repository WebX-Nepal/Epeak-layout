/* eslint-disable react/prop-types */
import { useState } from "react";
import expedition from "../assets/expedition.jpg";
import { Link } from "react-router-dom";
import RequestBooking from "../../RequestBooking";
import { useDispatch, useSelector } from "react-redux";
import { addTitle } from "../../../store/requestBookingSlice";
export default function ExpeditionCard({ title, height }) {
  const [showBookNow, setShowBookNow] = useState(true);
  const dispatch = useDispatch();
  // const reqTitle = useSelector((state)=>state.requestBooking)

  // const [selectedPackage, setSelectedPackage] = useState(null);
  return (
    <Link
      to={"/itineary"}
      onClick={() => {
        scroll(0, 0);
        dispatch(addTitle(title));
      }}
    >
      <div
        onMouseEnter={() => {
          setShowBookNow;
        }}
        className="bg-white w-[400px]  cursor-default  p-4 border flex flex-col gap-4 rounded-xl"
      >
        <div
          className="h-[384px] bg-center bg-cover flex items-end rounded-xl cursor-pointer"
          style={{ backgroundImage: `url(${expedition})` }}
        >
          {/* <div className="flex justify-between items-end h-full">
            <div className="bg-[#b2bbbf] p-1 text-white inline">
              Expedition in Nepal
            </div>

            <Link
              to={"/request-booking"}
              onClick={() => {
                scrollTo(0, 0);
                dispatch(addTitle(title));

                // setSelectedPackage({title});

                // console.log(title);
                // <ExpeditionCard selectedPackag={selectedPackage}/>
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
          </div> */}

          <div className="bg-white px-2 py-3 w-[75%] mx-auto mb-4 rounded-xl text-center opacity-90 leading-4">
            <div className="font-semibold ">{title}</div>
            <div className="text-sm text-[#26ACE2]">({height}m)</div>
          </div>
        </div>

        {/* <div className="p-3 font-semibold">{title} </div> */}
        <div className="flex justify-center items-center gap-8">
          <button className="px-5 py-2 border rounded-3xl border-[#26ACE2] text-[#26ACE2] cursor-pointer">
            View Detail
          </button>
          <Link   to={"/request-booking"}
              onClick={() => {
                scrollTo(0, 0);
                dispatch(addTitle(title));
              }}>
          <button className="px-5 py-2 border rounded-3xl bg-[#26ACE2] text-white cursor-pointer">
            Book Now
          </button>
          </Link>
        </div>
      </div>
    </Link>
  );
}
