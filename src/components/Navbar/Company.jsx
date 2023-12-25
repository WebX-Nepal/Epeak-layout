/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
export default function Company({ setShow }) {

  function gotop(){
    scrollTo(0,0)
  }
  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className="bg-[#023047]  absolute w-[60%] left-96  flex justify-around items-start p-8  h-[30vh]  rounded-sm  z-10 top-20   text-white font-poppins"
    >
      {/* <div className="flex flex-col gap-4">
        <h3>Why with us?</h3>
        <h3>Who we are?</h3>
        <h3>Awards</h3>
        <h3>Our Patrons</h3>
      </div> */}

      <div className="flex flex-col gap-4">
        <Link to="/aboutus" onClick={gotop}>
        <h3>About Us</h3>
        </Link>
        <h3>Chairman's Message</h3>
        <h3>Our Team</h3>
        <h3>Certificates & Documents</h3>
      </div>
      <div className="flex flex-col gap-4">
        <h3>Our Blog</h3>
        <h3>Attorney</h3>
      </div>

      <div className="flex gap-4 flex-col items-center justify-center">
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
      </div>
    </div>
  );
}
