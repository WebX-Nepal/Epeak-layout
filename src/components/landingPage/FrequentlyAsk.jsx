import what from "./assets/what.png";
import { useState } from "react";
export default function FrequentlyAsk() {
  const ques1 = [
    {
      id: 1,
      question: "How can I get the Visa to Nepal?",
      answer: `Nepal visa can be easily obtained from Tribhuvan International Airport, Kathmandu upon arrival. If you are planning to get the visa from your country simply visit Nepalese Embassy there. If you are travelling by land through India then the visa is provided from Immigration office at the border. You need to have a valid passport and passport size photographs to complete the visa acquisition process. The visa fee varies according to your stay in Nepal. For 15 days, $30   For 30 days $50  For 90 days, $125`,
    },
    {
      id: 2,
      question: "How can I book the trek?",
      answer:
        "You need to simply fill up the booking form. We will email the detail after we receive booking form. Minimum deposit amount i.e. 20% of the total amount must be paid in advance within 10 days of booking confirmation for reservation of your pace in the team. The remaining balance can be paid on arrival.",
    },
    {
      id: 3,
      question: "How do I get to hotel from the airport?",
      answer:
        "Our official member will be there with a placard to pick you from the airport.",
    },
    {
      id: 4,
      question: "How is the hotel facility in Kathmandu?",
      answer:
        "We will book tourist standard hotel in Kathmandu with the comfort and luxury room. There will be 24-hour hot water and wifi facilities. The hotel can also be managed as per your requirement.",
    },
    {
      id: 5,
      question: "How will the hotel stay be during the trek?",
      answer:
       "You will be staying at teahouses,homestays, hotels or lodges during the trek. The bedrooms will have basic amenities with small but clean beds. Most lodges will have shared bathroom.  There will be no heating facility in the bedroom but the dining hall will have chimney heater. We also provide sleeping bags but you can bring yours as well. "
    },
    {
      id: 6,
      question: "How often can I expect to get a shower during the trek?",
      answer:
       "You will have to manage with 3-4 showers during the trip. You can request for the hot water but only a few lodges would provide. Due to extreme cold and snowy weather, you might not require taking shower too often. Other instruction on maintaining personal hygiene will be provided by our guide.",
    },
    // {
    //   id: 7,
    //   question: "What kind of food do I get during the trek?",
    //   answer:
    //    "You can have Chinese, Local Tibetan food, Indian and Nepali food. Most tea houses they have a menu you can choose from the menu.They also provide typical Nepali dish. You can choose to have either vegetarian or non-vegetarian food.",
    // },
    // {
    //   id: 8,
    //   question: "How do I manage to carry my luggage?",
    //   answer:
    //    "We provide porters to carry your luggage, one porter for two persons. You will only be carrying your backpack with valuable things. We will also provide you luggage if you do not have one.",
    // },
    // {
    //   id: 9,
    //   question: "Will there be any communication facility during the trek?",
    //   answer:
    //    "Most of the areas will not have internet facility but will have telephone facility. Our guides will also be carrying cell phones in case you need to reach out to someone.",
    // },
    // {
    //   id: 10,
    //   question: "Will there be English speaking guides?",
    //   answer:
    //    "All our guides speak good English and certified by Nepal Government.",
    // },
    // {
    //   id: 11,
    //   question: "Do I need to pay the extra amount for guide and porter?",
    //   answer:
    //    "You will not have to pay the extra amount for guide and porter. Your trek amount will include the cost.",
    // },
    // {
    //   id: 12,
    //   question: "How many persons will there be in a group?",
    //   answer:
    //    "We take from 1-15 persons in a group. If there is a larger group from the same organization or a family we can also manage for that. We also arrange private trip according to the need.",
    // },
    // {
    //   id: 13,
    //   question: "What are the physical fitness requirements for the trek?",
    //   answer:
    //    "You will need to be moderately fit for most of our treks. But for the trips that take longer days and takes higher altitude like in Everest trek, you will need extra fitness. It all depends on the trip you choose."
    // },
    // {
    //   id: 14,
    //   question: "What are the insurance requirements?",
    //   answer:
    //    "You need to be insured so that it will cover any medical treatments, trip cancellation or helicopter evacuation in case of emergency. Our trained guides will handle any emergency situation that arises during the trek.",
    // },
    // {
    //   id: 15,
    //   question: "Will my money be refunded if I do not complete my trek and return in a midway?",
    //   answer:
    //    "The money will not be refunded even though the trip is not completed due to any reasons like weather condition or other personal reasons.",
    // },
    // {
    //   id: 16,
    //   question: "Is it safe for a woman to travel solely?",
    //   answer:
    //   "Yes, it is safe to travel as a single woman traveller with us. We assure safety and security for the women travelling on their own. We take full responsibility on this matter.",
    // },
    // {
    //   id: 17,
    //   question: "When is the best time to travel Nepal?",
    //   answer:
    //    "The best time is from march to may and  from October to December ",
    // },
    // {
    //   id: 18,
    //   question: "What equipments should be carried for the trek ?",
    //   answer:
    //    "We would like to enlist necessary equipment that is required during the trek in Nepal so that you can have comfortable trekking experience. You can buy this equipment as per your need. We will also share with you the specific equipment list as per the nature of the trek once you confirm your trekking package with us. SunglassesSunscreen and lip balm  Gloves  Sun Hat and woollen hat   Trekking pants and full-sleeved t-shirts Hiking  boots and hiking socks Sandals Climbing gears   Gaiters        Waterproof jacket        Down jacket        Sleeping bag (provided upon request)        Towels and undergarments Headlamp with spare batterie Water Bottle      Money belt",
    // },
    
  ];

  const [answer, setAnswer] = useState("1");

  console.log(answer);
  return (
    <div className="px-40 py-32">
      <h3 className="text-5xl  text-center font-semibold">
        Frequently Ask <span className="text-[#26ACE2]">Question</span>
      </h3>

      {/* new section */}
      <div className="flex mt-16  justify-center gap-8 ">
        <div className="flex flex-col  items-center ">
          <div>
            <img src={what} alt="" />
          </div>
          <div className="text-[#273B91] font-bold">
            Question about expeditions
          </div>
        </div>
        <div className=" w-[70%] mt-4">
          {ques1.map((ques, index) => (
            <div key={ques.question} className="font-semibold">
              <div
                onClick={() => setAnswer(index + 1)}
                className="cursor-pointer mt-6 text-lg"
              >
                {ques.question}
              </div>
              <p
                className={`text-slate-600 pb-4 pt-1 mt-4  ${
                  answer == ques.id ? "block" : "hidden"
                }`}
              >
                {ques.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
