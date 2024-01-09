import { Icon } from "@iconify/react";
import { useState } from "react";
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
export default function ItineraryDays() {
  const [showDetails, setShowDetails] = useState(null);
  return (
    <section className="mt-12">
      <div className="flex items-center gap-4">
        <div className="bg-[#f7f7f7] rounded-full p-2">
          <Icon color="26ACE2" icon="material-symbols:view-cozy" />
        </div>
        <p className="text-2xl font-semibold uppercase">Itinerary</p>
        <div className="border w-full ">
          <hr className="" />
        </div>
      </div>

      <div className="px-12 mt-8">
        {itinerars.map((day, index) => (
          <>
            <div
              key={day.index}
              className="bg-[#F9FAFB] lg:w-[80%] mx-auto rounded-t-xl border cursor-pointer"
            >
              <div
                className="flex items-center justify-between p-6 px-8 "
                onClick={() => {
                  showDetails !== index
                    ? setShowDetails(index)
                    : setShowDetails(-1);
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="text-white text-xl flex items-center justify-center text-center bg-[#26ACE2] w-10 h-10     rounded-full">
                    {index + 1}
                  </div>
                  <p>Day {day.day}</p>
                </div>
                <Icon icon="ep:arrow-down" width={22} />
              </div>

              {showDetails == index && (
                <div className="border-x  border-t bg-white py-4 px-12 flex flex-col gap-4">
                  <p className="font-bold">{day.task}</p>

                  <div className="flex  gap-32">
                    <div className="flex gap-4 items-center">
                      <Icon
                        color="#26ACE2"
                        width={25}
                        icon="fluent:food-16-filled"
                      />
                      {day.food}
                    </div>

                    <div className="flex gap-4 items-center">
                      <Icon color="#26ACE2" width={25} icon="mdi:bed" />
                      {day.night}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
