import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function OtherActivities({ setShowActivity }) {
  return (
    <div
      onMouseEnter={() => setShowActivity(true)}
      onMouseLeave={() => setShowActivity(false)}
      className="absolute p-8  top-12  
      font-poppins text-white right-48   flex"
    >
      {/* <div className="w-[60%]"></div> */}
      <ul
        onMouseEnter={() => setShowActivity(true)}
        onMouseLeave={() => setShowActivity(false)}
        className="flex flex-col w-[330px] justify-center gap-4  p-8   bg-[#023047]"
      >

        <Link to="/mountain-bike">
        <li className="cursor-pointer">Mountain Bike</li>
        </Link>
        <Link to="/helitours">
        <li className="cursor-pointer">Heli Tours</li>
        </Link>
        <Link to="/citytour">
        <li className="cursor-pointer">City Tour</li>
        </Link>
        <Link to="/paragliding">
        <li className="cursor-pointer">Paragliding</li>
        </Link>
      </ul>
    </div>
  );
}
