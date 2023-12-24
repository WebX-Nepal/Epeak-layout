/* eslint-disable react/prop-types */
export default function Usefulinfo({ setShowUseful }) {
  return (
    <div className="absolute  cursor-default right-28 p-8 text-white font-poppins flex  bg-opacity-75  z-10 top-12   ">
      {/* <div className="w-[65%] bg-transparent "></div> */}
      <div
        onMouseEnter={() => setShowUseful(true)}
        onMouseLeave={() => setShowUseful(false)}
        className="bg-[#023047]  w-[330px] flex flex-col p-8 gap-4"
      >
        <h4 className="cursor-pointer">Terms and Conditions</h4>
        <h4 className="cursor-pointer">Gear List</h4>
        <h4 className="cursor-pointer">Travel Advisory</h4>
        <h4 className="cursor-pointer">Fixed Departures</h4>
        <h4 className="cursor-pointer">Permit/Garbage Fees</h4>
        <h4 className="cursor-pointer">Visa Procedure/Fees</h4>
        <h4 className="cursor-pointer">Inquiry/Booking/Paymenet</h4>
        <h4 className="cursor-pointer">FAQ</h4>
      </div>
    </div>
  );
}
