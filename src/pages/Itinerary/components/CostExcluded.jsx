import { Icon } from "@iconify/react";
const costExcludes = [
    {
      title: "AIR FARE",
      description: "International flight airfare (from and to Kathmandu).",
    },
    {
      title: "NEPAL ENTRY VISA FEE",
      description: "Nepalese Visa fee is $125 USD for 90 Days.",
    },
    {
      title: "LUNCH & DINNER ",
      description:
        "Lunch & dinner during the stay in Kathmandu (also in case of early return from Trekking / Expedition than the scheduled itinerary).",
    },
    {
      title: "EXTRA NIGHTS IN KATHMANDU ",
      description:
        " Extra nights’ accommodation in Kathmandu. In case of early arrival or late departure, early return from Trekking / Expedition, domestic flight cancellation (due to any other reason) than the scheduled itinerary.",
    },
    {
      title: "INSURANCE POLICY",
      description:
        "Insurance covering both medical and high-altitude evacuation costs (for the trip cancellation, interruption, high altitude rescue & air evacuation, medical treatment, repatriation, etc.) *Mandatory",
    },
    {
      title: "PERSONAL EXPENSES",
      description:
        " Telephone Calls, Internet, Toiletries, battery recharge, hot shower, laundry, soft drinks, beers, and any Alcoholic beverages (during the trek and in Kathmandu but we will have soft drinks for members at base camp)",
    },
    {
      title: "PERSONAL CLIMBING EQUIPMENT",
      description:
        "Clothing, Packing Items, Bags, Personal Medical Kit, and all kinds of Personal Trekking / Climbing Gear.",
    },
  ];
export default function CostExcluded() {
  return (
    <div className="mt-16 flex flex-col">
    <div className="flex items-center gap-2">
      <Icon color="#215D91" width={35} icon="lets-icons:check-fill" />
      <h4 className="uppercase whitespace-nowrap  font-semibold text-2xl">
        cost EXCLUDES
      </h4>
      <div className="w-full ">
        <hr />
      </div>
    </div>

    <div className="mt-8 px-32">
      {costExcludes.map((cost) => {
        return (
          <div
            key={cost.title}
            className="flex  justify-start gap-4 border-b py-4"
          >
            <div>
              <Icon
                color="red"
                width={18}
                icon="gridicons:cross-circle"
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
