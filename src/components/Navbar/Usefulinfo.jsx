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
        className="bg-[#023047]  w-[330px] flex flex-col p-8 gap-4"
      >
        <Link to="/terms-and-conditon" onClick={topScreen}>
          <h4 className="cursor-pointer">Terms and Conditions</h4>
        </Link>
        <Link to="/gearlist" onClick={topScreen}>
          <h4 className="cursor-pointer">Gear List</h4>
        </Link>
        <Link to="/travel-advisory" onClick={topScreen}>
          <h4 className="cursor-pointer">Travel Advisory</h4>
        </Link>
        <Link to="/fixed-departure" onClick={topScreen}>
          <h4 className="cursor-pointer">Fixed Departures</h4>
        </Link>
        <Link to="/garbage" onClick={topScreen}>
          <h4 className="cursor-pointer">Permit/Garbage Fees</h4>
        </Link>
        <Link to="/visa-procedure" onClick={topScreen}>
          <h4 className="cursor-pointer">Visa Procedure/Fees</h4>
        </Link>
        <Link to="/inquiry-booking-payment" onClick={topScreen}>
          <h4 className="cursor-pointer">Inquiry/Booking/Paymenet</h4>
        </Link>
        <Link to="/FAQ">
          <h4 className="cursor-pointer">FAQ</h4>
        </Link>
      </div>
    </div>
  );
}
