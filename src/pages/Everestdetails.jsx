import { Icon } from "@iconify/react";
import everestlevel from "../assets/everest/everestlevel.svg";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import Snowfall from "react-snowfall";
export default function Everestdetails() {
 
  

  // section 4 overview data

  const overviews = [
    {
      icon: <Icon width={35} color="" icon="mdi:globe" />,
      title: "Country",
      subTitle: "Nepal",
    },
    {
      icon: <Icon width={35} icon="fa6-brands:think-peaks" />,
      title: "Peak Name",
      subTitle: "Mt. Everest",
    },
    {
      icon: <Icon width={35} color="" icon="game-icons:duration" />,
      title: " Duration",
      subTitle: "60 Days ",
    },
    {
      icon: <Icon width={35} color="" icon="mdi:globe" />,
      title: " Route",
      subTitle: "S-Col; SE- Ridge ",
    },
    {
      icon: <Icon width={35} color="" icon="mdi:globe" />,
      title: " Rank",
      subTitle: "1 ",
    },
    {
      icon: <Icon width={35} color="" icon="mdi:globe" />,
      title: " Co-ordinates",
      subTitle: `27°59'18"N 86°55'33"E `,
    },
    {
      icon: <Icon width={35} color="" icon="mdi:globe" />,
      title: " Weather Reports",
      subTitle: `Report `,
    },
    {
      icon: <Icon width={35} color="" icon="mdi:globe" />,
      title: " Range",
      subTitle: `Mahalangur Range `,
    },
  ];
  // ITINERARs
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
  //COST INCLUDES
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

  // COST EXCLUDES
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

  return (
    <>
      <div className="text-white font-poppins " >
      <Navbar />
        <div className=" h-[100vh] w-full bg-[url('https://images.unsplash.com/photo-1437382944886-45a9f73d4158?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg- ">
          <Snowfall snowflakeCount={250} wind={[-1,4]} radius={[0.7,1.5]}/>
          <div className="h-full w-full bg-black/30  flex flex-col justify-end px-40 py-28 gap-8 ">
            <h2 className="font-poppins font-semibold text-5xl text-slate-100">
              MT. EVEREST EXPEDITION (8848.86M) - SOUTH
            </h2>
            <p className="font-poppins text-2xl font-light lg:w-[50%]  text-slate-200">
              Mt. Everest Expedition is a lifetime mountaineering experience
              that allows you to stand on the highest point in the world.
            </p>
          </div>
        </div>
        {/* second section */}
        <div className="bg-[#444444]  h-[60vh] px-40 py-12  flex justify-center gap-20">
          {/* part 1 */}
          <div className="flex flex-col gap-2  items-center">
            <div className="w-[180px] object-contain">
              <img src={everestlevel} alt="level" />
            </div>
            <h4>Mt. Everest Expedition - South </h4>
            <Icon width={25} icon="ph:question" />
            <p className="text-xl">60 Days</p>
            <div className="flex items-center">
              <Icon color="#66a0d3" icon="material-symbols:star" />
              <Icon color="#66a0d3" icon="material-symbols:star" />
              <Icon color="#66a0d3" icon="material-symbols:star" />
              <Icon color="#66a0d3" icon="material-symbols:star" />
              <Icon color="#66a0d3" icon="material-symbols:star" />5 Excellent
            </div>
            <p className="text-sm">SHARE WITH FRIENDS</p>
            <div className="flex gap-1">
              <div className="leading-3 text-1">
                <p>304</p>
                <p className="text-[0.8rem]">shares</p>
              </div>
              <Icon color="#66a0d3" width={25} icon="ic:baseline-facebook" />
              <Icon color="#66a0d3" width={25} icon="pajamas:twitter" />
              <Icon color="#66a0d3" width={25} icon="mingcute:messenger-fill" />
              <Icon
                color="#66a0d3"
                width={25}
                icon="ant-design:whats-app-outlined"
              />
            </div>
          </div>
          {/* part 2 */}
          <div className="flex gap-8">
            <div className="flex flex-col gap-8">
              <Icon
                color="#66a0d3"
                width={25}
                icon="material-symbols-light:elevation-rounded"
              />
              <Icon color="#66a0d3" width={25} icon="tabler:walk" />
              <Icon
                color="#66a0d3"
                width={25}
                icon="icon-park-solid:sleep-two"
              />
              <Icon
                color="#66a0d3"
                width={25}
                icon="heroicons-solid:thumb-up"
              />
              <Icon color="#66a0d3" width={25} icon="fa:group" />
            </div>
            <div className="flex flex-col gap-8">
              <p>Max. Elevation:</p>
              <p>Walking Per Day:</p>
              <p>Accommodation:</p>
              <p>Best Season:</p>
              <p>Group Size:</p>
            </div>
            <div className="flex flex-col items-end gap-8">
              <p>8,848.86m / 29,032ft</p>
              <p>5 - 7 Hours</p>
              <p>Hotel + Lodge + Tent</p>
              <p>Spring</p>
              <p>2-15 PAX</p>
            </div>
          </div>
          {/* part 3 */}
          <div className="flex flex-col gap-8 ">
            <div className="flex items-center gap-4 border-b  pb-2">
              <Icon width={25} icon="ph:phone" />
              <span className="text-xl">+977 9812345678</span>
            </div>
            <div className="flex items-center gap-4 border-b pb-2">
              <Icon width={25} icon="wpf:message-outline" />
              <span className="text-xl">info@epeaksummittreks.com</span>
            </div>
            <div>
              <button className="flex justify-center items-center bg-white text-[#66a0d3] w-full px-5 py-2">
                <span>Inquiry</span>
                <Icon icon="ph:arrow-right-light" />
              </button>
            </div>
            <div>
              <button className="flex justify-center items-center bg-[#66a0d3] text-[] w-full px-5 py-2">
                <span>Book Now</span>
                <Icon icon="ph:arrow-right-light" />
              </button>
            </div>
          </div>
        </div>
        {/* third section */}
        <div className="h-[30px]   sticky top-20 bg-[#215D91]">
          <ul className="px-32   flex justify-center items-center gap-8">
            <li className="flex  items-center gap-2">
              <Icon icon="material-symbols:overview" />
              overview
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="lets-icons:date-today-light" />
              ITINERARY
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="bx:map" />
              Map
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="material-symbols:verified" />
              Cost Includes
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="mdi:dangerous" />
              Cost Excludes
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="simple-line-icons:calender" />
              Fixed Date
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="mdi:gear-outline" />
              Gear List
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="tabler:photo" />
              Photo/Videos
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="mynaui:message" />
              Reviews
            </li>
          </ul>
        </div>
        {/* fourth overview */}
        <div className="h-[40vh] py-16 bg-[#f7f7f7]  px-40 ">
          <div className="grid grid-cols-4 gap-8 ">
            {overviews.map((overview) => {
              return (
                <div key={overview.title} className="flex items-center gap-4">
                  <div className="border-2 bg-[#215D91] rounded-2xl h-16 w-16 flex justify-center items-center">
                    {overview.icon}
                  </div>
                  <div>
                    <div className="text-[#215D91] font-bold ">
                      {overview.title}{" "}
                    </div>
                    <div className="text-black"> {overview.subTitle}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/*  TMAIN  OVERVIEW */}
        <div className="w-full text-black flex ">
          <div className="w-[67%] pl-40 py-24">
            {/*trip overview */}

            <div className="flex flex-col">
              <div className="flex gap-1 items-center">
                <Icon width={35} color="#215D91" icon="bx:file" className="" />
                <h4 className="font-Cormorant font-semibold text-2xl whitespace-nowrap  ">
                  TRIP OVERVIEW
                </h4>
                <div className="w-full">
                  <hr className="" />
                </div>
              </div>
              <p className="pt-8 text-justify">
                Ask an adventurer about their dream, and they will answer you
                with a word; EVEREST. Who would not want to reach the top of the
                world? Who would not want to touch the sky? It’s the trip of a
                lifetime, the Everest Expedition. Mt. Everest is the highest
                mountain in the world and is located in the Himalayas, on the
                border between Nepal and China. Mt. Everest, also known as The
                Sagarmatha in Nepali is the tallest peak on earth with an
                altitude of 8848.86m. The southern face lies in Nepal whereas
                the northern face is in Tibet. In 1715, China surveyed the
                mountain for the first time while they were mapping Chinese
                territory and depicted it as Mount Qomolangma. British Indian
                government 1856 again measured Mount Everest during their Great
                Trigonometry Survey. Back then, it was named Peak XV and said to
                be 8840m tall. Peak XV was renamed after Sir George Everest as
                Mount Everest, the name given in his honor, who was a lead
                surveyor in 1856. Sir George was a Welsh Surveyor; he was the
                surveyor-general of India for thirteen years from 1830.
              </p>
            </div>
            {/*  ITINERAR */}
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

            {/* Route Map */}
            <div className="mt-16">
              <div className="flex items-center gap-2">
                <Icon width={35} icon="material-symbols:map-outline" />
                <h4 className="uppercase text-2xl font-Cormorant font-semibold whitespace-nowrap">
                  Route Map
                </h4>
                <div className="w-full">
                  <hr />
                </div>
              </div>

              <div>
                <img
                  src="https://www.sevensummittreks.com/uploads/original/1-JNng379TIsnlnAEOjpl5xzYMEiupIWBxDn8lzku0.jpg"
                  alt=""
                />
              </div>
            </div>

            {/* COst Included */}
            <div className="mt-16 flex flex-col">
              <div className="flex items-center gap-2">
                <Icon color="#215D91" width={35} icon="lets-icons:check-fill" />
                <h4 className="uppercase whitespace-nowrap font-Cormorant font-semibold text-2xl">
                  cost includes
                </h4>
                <div className="w-full ">
                  <hr />
                </div>
              </div>

              <div className="mt-8">
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
            {/* cost excluded */}
            <div className="mt-16 flex flex-col">
              <div className="flex items-center gap-2">
                <Icon color="#215D91" width={35} icon="lets-icons:check-fill" />
                <h4 className="uppercase whitespace-nowrap font-Cormorant font-semibold text-2xl">
                  cost EXCLUDES
                </h4>
                <div className="w-full ">
                  <hr />
                </div>
              </div>

              <div className="mt-8">
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

            {/* FIXED DATES */}

            <div className="mt-16">
              <div className="flex items-center gap-2">
                <Icon
                  width={25}
                  color="#215D91"
                  icon="simple-line-icons:calender"
                />
                <h4 className="text-[#215D91] text-2xl font-Cormorant font-semibold whitespace-nowrap ">
                  {" "}
                  FIXED DATES
                </h4>
                <div className="w-full">
                  <hr />
                </div>
              </div>

              <table className="w-full text-center mt-8  table-fixed">
                <thead className="border-b">
                  <th>Date</th>
                  <th>Status</th>
                  <th>Group Size</th>
                  <th>Action</th>
                </thead>
                <tbody className="">
                  <tr className=" border-b p-12 ">
                    <td>
                      <strong className="text-[#215D91]">
                        <br />
                        60 Days
                      </strong>
                      <br />
                      Start- 2024-04-12
                      <br />
                      End -2024-06-10
                    </td>
                    <td className="text-green-400">Booking Open </td>
                    <td>15 PAX</td>
                    <td className=" ">
                      <button className="border px-2 py-1 text-[#215D91]">
                        Inquiry
                      </button>
                      <button className="border py-1 px-2 bg-[#215D91] text-white ml-2">
                        Book Now
                      </button>
                    </td>
                  </tr>
                  <tr className=" border-b p-12 ">
                    <td>
                      <strong className="text-[#215D91]">
                        <br />
                        60 Days
                      </strong>
                      <br />
                      Start- 2024-04-12
                      <br />
                      End -2024-06-10
                    </td>
                    <td className="text-green-400">Booking Open </td>
                    <td>15 PAX</td>
                    <td className=" ">
                      <button className="border px-2 py-1 text-[#215D91]">
                        Inquiry
                      </button>
                      <button className="border py-1 px-2 bg-[#215D91] text-white ml-2">
                        Book Now
                      </button>
                    </td>
                  </tr>
                  <tr className=" border-b p-12 ">
                    <td>
                      <strong className="text-[#215D91]">
                        <br />
                        60 Days
                      </strong>
                      <br />
                      Start- 2024-04-12
                      <br />
                      End -2024-06-10
                    </td>
                    <td className="text-green-400">Booking Open </td>
                    <td>15 PAX</td>
                    <td className=" ">
                      <button className="border px-2 py-1 text-[#215D91]">
                        Inquiry
                      </button>
                      <button className="border py-1 px-2 bg-[#215D91] text-white ml-2">
                        Book Now
                      </button>
                    </td>
                  </tr>
                  <tr className=" border-b p-12 ">
                    <td>
                      <strong className="text-[#215D91]">
                        <br />
                        60 Days
                      </strong>
                      <br />
                      Start- 2024-04-12
                      <br />
                      End -2024-06-10
                    </td>
                    <td className="text-green-400">Booking Open </td>
                    <td>15 PAX</td>
                    <td className=" ">
                      <button className="border px-2 py-1 text-[#215D91]">
                        Inquiry
                      </button>
                      <button className="border py-1 px-2 bg-[#215D91] text-white ml-2">
                        Book Now
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* GEARs */}

            <div className="mt-16">
              <div className="flex items-center gap-2">
                <Icon color="#215D91" width={30} icon="fa:gears" />
                <h4 className="uppercase whitespace-nowrap text-2xl font-Cormorant font-semibold">
                  gears list
                </h4>
                <div className="w-full">
                  <hr />
                </div>
              </div>

              <div className="mt-8 h-[30vh] gap-5 grid grid-cols-2">
                <div className="flex justify-center items-center bg-[url('https://images.unsplash.com/photo-1514281427873-10a6c9733091?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
                  <p className="text-slate-100 text-xl font-poppins font-bold">
                    Gear Guide Book
                  </p>
                </div>
                <div className="flex justify-center items-center  bg-[url('https://images.unsplash.com/photo-1501535033-a594139be346?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
                  <p className="text-slate-100 text-xl font-poppins font-bold">
                    Printable Gear Checklist
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right sticky card */}
          <div className="w-[33%]">
            <div className=" sticky top-36  flex flex-col items-center">
              <button className="uppercase mt-16  pb-4  border-b-4 border-[#215D91] bg-[#f7f7f7] w-[50%]">
                highlight of trip
              </button>

              <div className="border bg-[#444] w-[60%] mt-4 mx-auto h-40 flex flex-col gap-4 justify-center items-center ">
                <div className=" ">
                  <button className=" flex justify-center items-center bg-white text-[#215D91]  px-5 py-2">
                    <span>Inquiry</span>
                    <Icon icon="ph:arrow-right-light" />
                  </button>
                </div>

                <div className="">
                  <button className="flex justify-center items-center bg-[#215D91]  text-white   px-5 py-2">
                    <span>Book Now</span>
                    <Icon icon="ph:arrow-right-light" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[100px]  w-full bg-red-500] "></div>
      </div>
      <Footer />
    </>
  );
}
