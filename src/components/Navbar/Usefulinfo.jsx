
export default function Usefulinfo({setShowUseful}) {
  return (
    <div  onMouseEnter={() => setShowUseful(true)}
    onMouseLeave={() => setShowUseful(false)} 
    className="w-[380px] p-8 text-white font-poppins flex flex-col gap-4 absolute bg-opacity-75 bg-[#023047] z-10 top-20 right-36"
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
  )
}
