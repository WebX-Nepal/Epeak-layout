// imprt React from 'react'

import Navbar from "../../components/Navbar/Navbar";
import Usefulinfo from "../../components/Navbar/Usefulinfo";
import Footer from "../../components/footer/Footer";
import LastFooter from "../../components/landingPage/Last";
import UsefulFirst from "./UsefulFirst";
import UsefulSticky from "./UsefulSticky";

import "./fortable.css";
export default function Garbage() {
  const table1 = [
    { mountain: "Mt. Everest - Normal Route", spring: "11000", autumn: "5500" },
    { mountain: "Mt. Everest - Other Route", spring: "10000", autumn: "5000" },
    { mountain: "Other Mountains above 8000m", spring: "1800", autumn: "900" },
    { mountain: "7501m - 7999m", spring: "600", autumn: "300" },
    { mountain: "7000m - 7500m", spring: "500", autumn: "250" },
    { mountain: "6501m - 6999m", spring: "400", autumn: "200" },
    { mountain: "Mt. Amadablam (6812m)", spring: "400", autumn: "400" },
    { mountain: "Less than 6500m", spring: "250", autumn: "125" },
  ];

  const table2 = [
    {
      mountain: "Everest - Normal Route",
      spring: "75000",
      autumn: "37500",
      winterSummer: "18250",
    },
    {
      mountain: "Everest - Other Route",
      spring: "60000",
      autumn: "30000",
      winterSummer: "15000",
    },
    {
      mountain: "Other Mountains above 8000m",
      spring: "10000",
      autumn: "5000",
      winterSummer: "2500",
    },
    {
      mountain: "7501m - 7999m",
      spring: "8000",
      autumn: "4000",
      winterSummer: "2000",
    },
    {
      mountain: "7000m - 7500m",
      spring: "6000",
      autumn: "3000",
      winterSummer: "1500",
    },
    {
      mountain: "6501m - 6999m",
      spring: "5000",
      autumn: "2500",
      winterSummer: "1250",
    },
    {
      mountain: "Mt. Amadablam (6812m)",
      spring: "8000",
      autumn: "8000",
      winterSummer: "4000",
    },
    {
      mountain: "Less than 6500m",
      spring: "4000",
      autumn: "2000",
      winterSummer: "1000",
    },
  ];
  return (
    <section className="">
      <Navbar />

      <UsefulFirst title={"General FAQs"} />

      <div className="px-40 py-32 flex ">
        <div className="w-[75%] px-8">
          <h3 className="text-lg">
            The highlights of the latest changed climbing permits (royalty) fees
            are as :-
          </h3>

          <ul className="px-8">
            <li className="list-disc">
              Get a list of mountains in Nepal and the climbing cost is
              discounted to 50% for autumn expeditions than spring and to 25%
              for winter and summer expeditions.
            </li>
            <li className="list-disc">
              Most extreme number of undertaking individuals permitted per
              endeavor was expanded from 12 to 15.
            </li>
            <li className="list-disc">
              The individual or small size group is more beneficial with the
              changed structure
            </li>
            <li className="list-disc">
              Climbing royalty was waved for 5 years for peaks located in mid
              and far western regions.
            </li>
            <li className="list-disc">
              Incremental royalty system was implemented, whereby royalty fee is
              proportional to several expedition members replacing the previous
              flat fee per expedition.
            </li>
          </ul>

          <div className=" flex flex-col gap-4">
            <div className="mt-8">
              <div className="text-lg ">
                1.
                <span className="underline">
                  Royalty for Foreign Climber per Person in USD
                </span>
              </div>
            </div>

            <div className="tab">
              <table className=" table-fixed text-center">
                <tr className="">
                  <th className="p-2  ">S.N.</th>
                  <th className="p-2  ">MOUTNTAINS</th>
                  <th className="p-2  ">SPRING</th>
                  <th className="p-2  ">AUTUMN</th>
                </tr>

                {table1.map((tab, index) => (
                  <tr key={tab.mountain}>
                    <td> {index + 1}.</td>
                    <td className="px-2">{tab.mountain}</td>
                    <td>{tab.spring}</td>
                    <td>{tab.autumn}</td>
                  </tr>
                ))}
              </table>
            </div>

            <div>
              2.{" "}
              <span className="underline text-lg">
                Royalty for Nepalese Climber per Person in NPR
              </span>
            </div>
            <table className="tab table-fixed text-center ">
              <tr>
                <th className="p-2">S.N.</th>
                <th className="p-2">MOUTNTAINS</th>
                <th className="p-2">SPRING</th>
                <th className="p-2">AUTUMN</th>
                <th className="p-2">WINTER/SUMMER</th>
              </tr>

              {table2.map((tab, index) => (
                <tr key={tab.mountain}>
                  <td> {index + 1}.</td>
                  <td className="px-2">{tab.mountain}</td>
                  <td>{tab.spring}</td>
                  <td>{tab.autumn}</td>
                  <td>{tab.winterSummer}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
        <div className="w-[25%] ">
          <UsefulSticky />
        </div>
      </div>
      <LastFooter />
    </section>
  );
}
