/* eslint-disable react/prop-types */
export default function OtherActivities({ setShowActivity }) {
  return (
    <div
      onMouseEnter={() => setShowActivity(true)}
      onMouseLeave={() => setShowActivity(false)}
      className="absolute p-8  top-12  
      font-poppins text-white   flex"
    >
      {/* <div className="w-[60%]"></div> */}
      <ul
        onMouseEnter={() => setShowActivity(true)}
        onMouseLeave={() => setShowActivity(false)}
        className="flex flex-col w-[330px] justify-center gap-4  p-8   bg-opacity-75 bg-[#023047]"
      >
        <li className="cursor-pointer">Mountain Bike</li>
        <li className="cursor-pointer">Heli Tours</li>
        <li className="cursor-pointer">City Tour</li>
        <li className="cursor-pointer">Paragliding</li>
      </ul>
    </div>
  );
}
