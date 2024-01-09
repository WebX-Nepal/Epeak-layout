import { useState } from "react";
export default function ItineraryBar() {
  const barData = [
    "overview",
    "Itinerary",
    "Inclusions",
    "Reviews",
    "FAQ",
    "Essential Info",
  ];
  const [selected, setSelected] = useState("overview");
  return (
    <div className="border-b">
      <ul className="flex justify-between whitespace-nowrap py-8">
        {barData.map((data) => (
          <li
            key={data}
            onClick={() => setSelected(data)}
            className={` ${
              selected == data ? "bg-[#d7d7d7]" : "null"
            }  px-4  py-2 rounded-3xl cursor-pointer`}
          >
            {" "}
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
}
