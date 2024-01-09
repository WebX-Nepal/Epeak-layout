import { Icon } from "@iconify/react";
const costIncludes = [
    {
      title: "ARRIVAL AND DEPARTURE",
      description:
        "Airport - Hotel transfers – Airport (Pick Up and Drop), by private vehicle.",
    },
    {
      title: "HOTEL ACCOMMODATION IN KATHMANDU",
      description:
        "4 nights hotel in Kathmandu (4-star category) - single room on bed and breakfast plan.",
    },
    {
      title: "WELCOME DINNER ",
      description:
        "One Welcome Dinner in a tourist standard restaurant in Kathmandu with Office’s Staff.",
    },
    {
      title: "CARGO CLEARANCE ",
      description:
        "Assistance for cargo clearance in Nepal’s Customs, clearance cost is subject to a charge.",
    },
    {
      title: "PERMITS ",
      description:
        " Expedition Royalty and a permit fee of Nepal Government to climb Mt. Everest, Sagarmatha National Park, and Pasang Lhamu Rural Municipality entry permit and fee.",
    },
    {
      title: "ICEFALL FEE",
      description:
        "Khumbu Icefall climbing charge to (SPCC) Sagarmatha Pollution Control Committee.",
    },
    {
      title: "LIAISON OFFICER",
      description:
        " 1 Government Liaison officer with full equipment, salary, and accommodation.",
    },
  ];
export default function CostIncluded() {
  return (
    <div className="mt-16 flex flex-col">
    <div className="flex items-center gap-2">
      <Icon color="#215D91" width={35} icon="lets-icons:check-fill" />
      <h4 className="uppercase whitespace-nowrap  font-semibold text-2xl">
        cost includes
      </h4>
      <div className="w-full ">
        <hr />
      </div>
    </div>

    <div className="mt-8 px-32">
      {costIncludes.map((cost) => {
        return (
          <div
            key={cost.title}
            className="flex  justify-start gap-4 border-b py-4"
          >
            <div>
              <Icon
                color="green"
                width={20}
                icon="lets-icons:check-round-fill"
              />
            </div>
            <p className="text-sm ">
              <span className="uppercase  text-base text-[#215D91] font-semibold ">
                {cost.title}
              </span>
              : {cost.description}
            </p>
          </div>
        );
      })}
    </div>
  </div>
    )
}
