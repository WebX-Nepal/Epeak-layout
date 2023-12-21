/* eslint-disable react/prop-types */
export default function Usefulinfo({ setShowUseful }) {
  return (
    <div className="absolute right-28 p-8 text-white font-poppins flex  bg-opacity-75  z-10 top-12   ">
      {/* <div className="w-[65%] bg-transparent "></div> */}
      <div
        onMouseEnter={() => setShowUseful(true)}
        onMouseLeave={() => setShowUseful(false)}
        className="bg-[#023047] bg-opacity-75 w-[330px] flex flex-col p-8 gap-4"
      >
        <h4>Terms and Conditions</h4>
        <h4>Gear List</h4>
        <h4>Travel Advisory</h4>
        <h4>Fixed Departures</h4>
        <h4>Permit/Garbage Fees</h4>
        <h4>Visa Procedure/Fees</h4>
        <h4>Inquiry/Booking/Paymenet</h4>
        <h4>FAQ</h4>
      </div>
    </div>
  );
}
