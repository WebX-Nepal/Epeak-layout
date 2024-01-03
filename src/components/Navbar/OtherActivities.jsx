import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function OtherActivities({ setShowActivity }) {
  return (
    <div
      onMouseEnter={() => setShowActivity(true)}
      onMouseLeave={() => setShowActivity(false)}
      className="absolute   top-20  
      font-poppins bg-white text-black right-4/4 rounded-b-md  flex"
    >
      {/* <div className="w-[60%]"></div> */}
      <ul
        onMouseEnter={() => setShowActivity(true)}
        onMouseLeave={() => setShowActivity(false)}
        className="flex flex-col justify-center gap-2 text-base  pb-4 pt-3 px-6   "
      >
        <Link to="/mountain-bike">
          <li className="cursor-pointer border-b hover:text-slate-400 pb-2">Mountain Bike</li>
        </Link>
        <Link to="/helitours">
          <li className="cursor-pointer border-b hover:text-slate-400 pb-2">Heli Tours</li>
        </Link>
        <Link to="/citytour">
          <li className="cursor-pointer border-b hover:text-slate-400 pb-2">City Tour</li>
        </Link>
        <Link to="/paragliding">
          <li className="cursor-pointer border-b hover:text-slate-400 pb-2">Paragliding</li>
        </Link>
        <Link to="/rafting">
          <li className="cursor-pointer border-b hover:text-slate-400 pb-2">Rafting</li>
        </Link>
      </ul>
    </div>
  );
}
