export default function OtherActivities({ setShowActivity }) {
  return (
    <div
      onMouseEnter={() => setShowActivity(true)}
      onMouseLeave={() => setShowActivity(false)}
      className="sticky w-full  z-10 top-24  right-36
      font-poppins text-white   flex"
    >
      <div className="w-[75%]"></div>
      <ul
        onMouseEnter={() => setShowActivity(true)}
        onMouseLeave={() => setShowActivity(false)}
        className="flex flex-col w-[330px] justify-center gap-4  p-8  bg-opacity-75 bg-[#023047]"
      >
        <li className="cursor-pointer">Mountain Bike</li>
        <li className="cursor-pointer">Heli Tours</li>
        <li className="cursor-pointer">City Tour</li>
        <li className="cursor-pointer">Paragliding</li>
      </ul>
    </div>
  );
}
