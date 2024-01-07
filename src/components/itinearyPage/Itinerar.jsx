import { Icon } from "@iconify/react";
const itinerars = [
    {
      day: "1",
      task: "Arrival in Kathmandu (1400m) & Transfer to Hotel",
      food: "self",
      night: "Hotel",
    },
    {
      day: "2",
      task: "Rest in Kathmandu, expedition briefing and Preparation",
      food: " B/D",
      night: "Hotel",
    },
    {
      day: "3",
      task: "Fly from Kathmandu to Lukla, and trek to Phakding (2,800m)",
      food: " B/L/D",
      night: " Lodge",
    },
    {
      day: "4",
      task: "Trek from Phakding to Namche Bazzar (3,440m)",
      food: " B/L/D",
      night: "Lodge",
    },
    {
      day: "5-10",
      task: "Acclimatization at Namche Bazaar",
      food: " B/L/D",
      night: "Lodge",
    },
  ];
export default function Itinerar() {
  return (
    <div className=" mt-16">
    <div className="flex items-center gap-2">
      <Icon width={35} color="#215D91" icon="uil:calender" />
      <h4 className="font-Cormorant font-semibold text-2xl">
        ITINERAR
      </h4>
      <div className="w-full">
        <hr />
      </div>
      <select className="border rounded-2xl p-1">
        <option value="">Spring 2024</option>
        <option value="">BaseCamp Service</option>
      </select>
    </div>
    {itinerars.map((itinerar) => {
      return (
        <div
          key={itinerar.day}
          className="border p-3 flex items-center gap-4"
        >
          <div className="bg-[#215D91] h-max px-5 py-2 rounded-lg text-white">
            Day {itinerar.day}
          </div>
          <div className="flex flex-col gap-2">
            <div> {itinerar.task}</div>
            <div className="flex gap-28">
              <div className="flex gap-2">
                {" "}
                <Icon
                  width={25}
                  color="#215D91"
                  icon="fluent:food-16-filled"
                />
                <span>{itinerar.food}</span>
              </div>
              <div className="flex gap-2">
                {" "}
                <Icon
                  width={25}
                  color="#215D91"
                  icon="icon-park-solid:sleep-two"
                />
                <span>{itinerar.night}</span>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>

  )
}
