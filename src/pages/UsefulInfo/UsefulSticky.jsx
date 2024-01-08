import { Link } from "react-router-dom";

export default function UsefulSticky() {
  function gooTop() {
    scrollTo(0, 0);
  }
  return (
    <div className=" sticky top-40 flex flex-col gap-4">
      <div className="text-xl border-l-4 border-[#29587E] pl-1">
        Related Links
      </div>
      <div className="pl-2 ">
        <ul className="flex flex-col gap-4">
          <Link to={"/terms-and-conditon"} onClick={() => scrollTo(0, 0)}>
            <li>Terms and Conditions</li>
          </Link>
          <Link to={"/gearlist"} onClick={() => scrollTo(0, 0)}>
            <li>Gear List</li>
          </Link>
          <Link to={"/travel-advisory"} onClick={() => scrollTo(0, 0)}>
            <li>Travel Advisory</li>
          </Link>
          <Link to={"/fixed-departure"} onClick={() => scrollTo(0, 0)}>
            <li>Fixed Departures</li>
          </Link>
          <Link to={"/garbage"} onClick={() => scrollTo(0, 0)}>
            <li>Permit / Garbage Fees</li>
          </Link>
          <Link to={"/visa-procedure"} onClick={() => scrollTo(0, 0)}>
            <li>Visa Procedure / Fees</li>
          </Link>
          <Link to={"/book-now"} onClick={() => scrollTo(0, 0)}>
            <li>Inquiry/Booking/Paymenet</li>
          </Link>
          <Link to={"/FAQ"} onClick={() => scrollTo(0, 0)}>
            <li>FAQ</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
