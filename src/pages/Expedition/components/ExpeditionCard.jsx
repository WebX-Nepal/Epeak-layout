/* eslint-disable react/prop-types */
import { useState } from "react";
import expedition from "../assets/expedition.jpg";
import { Link } from "react-router-dom";
import RequestBooking from "../../RequestBooking";
import { useDispatch, useSelector } from "react-redux";
import { addTitle } from "../../../store/requestBookingSlice";
export default function ExpeditionCard({ title }) {
  const [showBookNow, setShowBookNow] = useState(true);
  const dispatch = useDispatch();
  // const reqTitle = useSelector((state)=>state.requestBooking)

  // const [selectedPackage, setSelectedPackage] = useState(null);
  return (
    <Link to={"/itineary"} onClick={()=>{scroll(0,0); dispatch(addTitle(title));}}>
      <div
        onMouseEnter={() => {
          setShowBookNow;
        }}
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
          </div>
        </div>
        <div className="p-3 font-semibold">{title}</div>
      </div>
    </Link>
  );
}
