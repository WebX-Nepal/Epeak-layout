import { useState } from "react";
import annapurna from "../assets/annapurna/annapurna.jpg";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addTitle } from "../../../store/requestBookingSlice";
export default function TrekkingCard({ title, photo }) {
  const [showBookNow, setShowBookNow] = useState(true);

  const dispatch = useDispatch();
  return (
    <Link to={"/itineary"} onClick={()=>{
      dispatch(addTitle(title));
      scrollTo(0,0)
    }}>
      <div
        onMouseEnter={() => setShowBookNow}
        className="bg-white w-[400px]  p-4 rounded-xl flex flex-col gap-4 cursor-default"
      >
        <div
           className="h-[384px] bg-center bg-cover flex gap-8  items-end rounded-xl cursor-pointer"
          style={{ backgroundImage: `url(${photo})` }}
        >
       

       <div className="bg-white px-2 py-3 w-[75%] mx-auto mb-4 rounded-xl text-center opacity-90 leading-4">
            <div className="font-semibold  ">{title}</div>
          </div>
        </div>

        {/* <div className="p-3 font-semibold">{title} </div> */}
        <div className="flex justify-center items-center gap-8">
          <button className="px-5 py-2 border rounded-3xl border-[#26ACE2] text-[#26ACE2]">
            View Detail
          </button>
          <Link   to={"/request-booking"}
              onClick={() => {
                scrollTo(0, 0);
                dispatch(addTitle(title));
              }}>
          <button className="px-5 py-2 border rounded-3xl bg-[#26ACE2] text-white ">
            Book Now
          </button>
          </Link>
        </div>
        </div>
     
    </Link>
  );
}
