/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
export default function Company({ setShow }) {
  function gotop() {
    scrollTo(0, 0);
  }
  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className="bg-white text-black  absolute  left-1.4/3  flex justify-around items-start p-4   rounded-sm  z-10 top-20    font-poppins"
    >
      {/* <div className="flex flex-col gap-4">
        <h3>Why with us?</h3>
        <h3>Who we are?</h3>
        <h3>Awards</h3>
        <h3>Our Patrons</h3>
      </div> */}

      <div className="flex flex-col gap-2  text-base">
        <Link to="/chairman-message" onClick={gotop}>
          <h3 className="border-b ">Chairman's Message</h3>
        </Link>
        <Link to="/aboutus" onClick={gotop}>
          <h3 className="border-b ">About Us</h3>
        </Link>
        <Link to={"/our-team"}>
          
        <h3 className="border-b ">Our Team</h3>
        </Link>
        <h3 className="border-b ">Certificates & Documents</h3>
        <h3 className="border-b ">Our Blog</h3>
        <h3 className="border-b ">Attorney</h3>
      </div>

      {/* <div className="flex gap-4 flex-col items-center justify-center">
        <button className="flex items-center justify-center border border-yellow-400 px-5 py-2 gap-2">
          Contact Us
          <Icon
            color="yellow"
            width={18}
            className="border border-yellow-300  rounded-full"
            icon="ph:arrow-right-thin"
          />{" "}
        </button>
        <button className="flex items-center justify-center border border-white px-5 py-2  gap-2">
          Book a Trip{" "}
          <Icon
            icon="ph:arrow-right-thin"
            width={18}
            className="border rounded-full"
          />
        </button>
      </div> */}
    </div>
  );
}
