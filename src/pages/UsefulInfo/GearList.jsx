import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import gearlist2 from "./gearlist2.jpg";
import gearbg from "./assets/gearbg.jpg";
import gearLis from "./gearlist.png";
import LastFooter from "../../components/landingPage/Last";
import { list } from "postcss";
export default function GearList() {
  const gearListAre = [
    {
      title: "Equipment",
      listHaru: [
        "Climbing pack",
        "Rope(s) (dry preferred)",
        "Helmet",
        "Harness (with adjustable leg loops)",
        "Crampons",
        "Ice axe (with leash)",
        "Belay/rappel device",
        "Pulley",
        "Locking carabiners",
        "Nonlocking carabiners",
        "Runners–singles and doubles",
        "Prusik cords",
        "Hand protection (athletic tape, gloves)",
        "Snow protection gear",
        "Shovel",
        "Probe",
        "Avalanche transceiver",
        "Headlamp * (plus a spare)",
        "Extra batteries * (kept near your body)",
        "Nuts",
        "Nut extraction tool",
        "Hexes",
        "Ice tools (with leashes)",
        "Ice screws",
        "Camming devices",
        "Snow picket",
        "Slings (single- and double-length)",
        "(2) Lightweight pulleys",
        "20 ft. of 5-7mm accessory cords (to make prusik slings)",
      ],
    },
    {
      title: "Navigation",
      listHaru: [
        "Map * (inside a waterproof sleeve)",
        "Compass *",
        "Route description or guidebook *",
        "Wands",
        "Altimeter watch *",
        "GPS *",
        "Satellite messenger and/or personal locator beacon",
        "Cellphone",
        "Battery pack or a solar panel for charging phone and/or GPS",
      ],
    },

    {
      title: "Overnight Gear",
      listHaru: [
        "Mountaineering tent",
        "Sleeping bag (rated appropriately)",
        "Sleeping pads (1 foam + 1 inflatable to deal with severe cold)",
      ],
    },
    {
      title: "Mountain Kitchen",
      listHaru: [
        "Backpacking stove",
        "Fuel",
        "Cookset",
        "Dishes/bowls",
        "Eating utensils",
        "Insulated mug/cup",
        "Biodegradable soap",
        "Small quick-dry towel",
        "Collapsible water container",
      ],
    },
    {
      title: "Food & Water",
      listHaru: [
        "Water bottles and/or reservoir *",
        "Water filter/purifier or chemical treatment *",
        "Meals",
        "Energy food and drinks (bars, gels, chews, trail mix, drink mix)",
        "Hot drink mix",
        "Extra day’s supply of food *",
      ],
    },
    {
      title: "Food & Water",
      listHaru: [
        "Water bottles and/or reservoir *",
        "Water filter/purifier or chemical treatment *",
        "Meals",
        "Energy food and drinks (bars, gels, chews, trail mix, drink mix)",
        "Hot drink mix",
        "Extra day’s supply of food *",
      ],
    },
    {
      title: "Clothing & Footwear  ",
      listHaru: [
        "Long underwear",
        "Underwear; sports bra (if needed)",
        "Moisture-wicking T-shirt",
        "Mountaineering pants",
        "Long-sleeve shirt (for sun, bugs)",
        "Lightweight fleece or jacket",
        "Boots (crampon-compatible)",
        "Socks (synthetic or wool) plus spares",
        "Insulated/down or synthetic booties for camp wear",
        "Rainwear (jacket and pants)",
        "Warm insulated jacket or vest",
        "Fleece pants",
        "Gloves or mittens",
        "Warm hat",
        "Bandana or Buff",
        "Neck gaiter or balaclava",
        "Gaiters (for rainy, snowy or muddy conditions)",
      ],
    },
    {
      title: "Emergency & First Aid",
      listHaru: [
        "First-aid kit or first-aid supplies * (see first-aid checklist)",
        "Whistle",
        "Signaling mirror",
        "Lighter/matches (in waterproof container) *",
        "Fire starter (for emergency survival fire) *",
        "Emergency shelter *",
        "Two itineraries: 1 left with friend + 1 under car seat",
      ],
    },
    {
      title: "Health & Hygiene",
      listHaru: [
        "Hand sanitizer/wipes",
        "Toothbrush and toothpaste",
        "Sanitation trowel",
        "Toilet paper and sealable bag (to pack it out)",
        "Menstrual products",
        "Prescription medications",
        "Prescription glasses",
        "Sunglasses + sunglasses straps and/or goggles (better for high winds) *",
        "Sunscreen * (apply liberally)",
        "SPF-rated lip balm *",
        "Sun hat *",
        "Nose guard (strip of fabric that covers the top of the nose)",
        "Insect repellent",
        "  Urinary products",
        "Additional blister treatment supplies",
      ],
    },
    {
      title:"Tools & Repair Items",
      listHaru:[
        "Knife * or multi-tool *",
        "Repair kit for mattress, stove *",
        "Duct tape strips"
      ]
    },
    {
      title:"Personal Extras",
      listHaru:[
        "Outdoor journal with pen/pencil",
        "Book/reading material",
        "Cards or games",
        "Compact binoculars",
        "Two-way radios",
        "Insulated sit pad",
        "Handwarmer packets",
        "Permits",
        "Credit card and/or cash",
        "ID",
        "Car keys"
      ]
    }
  ];
  return (
    <section>
      <Navbar />
      {/* <div
        style={{ backgroundImage: `url(${gearlist})` }}
        className="h-[65vh]  bg-center bg-cover bg-no-repeat"
      >
        <div className="text-5xl w-[40%] h-full flex justify-center items-center">
          <h4 className="text-white mt-16">GearList</h4>
        </div>
      </div> */}

      <div className="relative py-32 px-16 ">
        <h3 className="text-4xl text-center ">
          Gear <span className="text-[#26ACE2] font-semibold">List</span>{" "}
        </h3>
        <div className="flex mt-16 gap-8 ">
          <div
            className="h-[20rem] w-[40rem] bg-center bg-cover sticky top-60 rounded-xl"
            style={{ backgroundImage: `url(${gearlist2})` }}
          ></div>
          <div className="flex flex-col">
            <div>
              {gearListAre.map((gears) => (
                <div key={gears.title} className="mb-12">
                  <h5 className="text-3xl py-4 ">{gears.title}</h5>
                  <ul>
                    {gears.listHaru.map((gear, index) => (
                      <div key={gear[index]} className="text-lg px-8 ">
                        <li className="list-disc">{gear}</li>
                      </div>
                    ))}
                  </ul>
                </div>
              ))}
        <button className="bg-[#273B91] px-5 py-2 text-white  rounded-lg">Download PDF</button>
            </div>
          </div>{" "}
        </div>

      </div>
      <LastFooter />
    </section>
  );
}
