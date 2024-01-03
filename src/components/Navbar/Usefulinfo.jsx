import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Usefulinfo({ setShowUseful }) {
  function topScreen() {
    scrollTo(0, 0);
  }
  return (
    <div className="absolute  cursor-default right-28 p-8 text-white font-poppins flex  bg-opacity-75  z-10 top-12   ">
      {/* <div className="w-[65%] bg-transparent "></div> */}
      <div
        onMouseEnter={() => setShowUseful(true)}
        onMouseLeave={() => setShowUseful(false)}
        className="text-black bg-white text-base flex flex-col p-4 gap-2"
      >
        <Link to="/terms-and-conditon" onClick={topScreen}>
          <h4 className="cursor-pointer border-b hover:text-slate-400  pb-2">Terms and Conditions</h4>
        </Link>
        <Link to="/gearlist" onClick={topScreen}>
          <h4 className="border-b cursor-pointer hover:text-slate-400  pb-2 ">Gear List</h4>
        </Link>
        <Link to="/travel-advisory" onClick={topScreen}>
          <h4 className="border-b cursor-pointer hover:text-slate-400  pb-2">Travel Advisory</h4>
        </Link>
        <Link to="/fixed-departure" onClick={topScreen}>
          <h4 className="border-b cursor-pointer hover:text-slate-400  pb-2">Fixed Departures</h4>
        </Link>
        <Link to="/garbage" onClick={topScreen}>
          <h4 className="border-b cursor-pointer hover:text-slate-400  pb-2">Permit/Garbage Fees</h4>
        </Link>
        <Link to="/visa-procedure" onClick={topScreen}>
          <h4 className="border-b cursor-pointer hover:text-slate-400  pb-2">Visa Procedure/Fees</h4>
        </Link>
        <Link to="/inquiry-booking-payment" onClick={topScreen}>
          <h4 className="border-b cursor-pointer hover:text-slate-400  pb-2">Inquiry/Booking/Paymenet</h4>
        </Link>
        <Link to="/FAQ">
          <h4 className="border-b cursor-pointer hover:text-slate-400  pb-2">FAQ</h4>
        </Link>
      </div>
    </div>
  );
}
