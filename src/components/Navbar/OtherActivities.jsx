export default function OtherActivities({ setShowActivity }) {
  return (
    <div
      onMouseEnter={() => setShowActivity(true)}
      onMouseLeave={() => setShowActivity(false)}
      className="absolute bg-opacity-75 bg-[#023047] z-10 top-20  right-36
      font-poppins text-white px-16 py-8 flex"
    >
      <ul className="flex flex-col justify-center gap-4"> 
        <li className="cursor-pointer">Mountain Bike</li>
        <li className="cursor-pointer">Heli Tours</li>
        <li className="cursor-pointer">City Tour</li>
        <li className="cursor-pointer">Paragliding</li>
      </ul>
    </div>
  );
}
