import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import LastFooter from "../../components/landingPage/Last";
import UsefulFirst from "./UsefulFirst";
import UsefulSticky from "./UsefulSticky";
export default function FixedDeparture() {
  return (
    <section>
      <Navbar />
      <UsefulFirst title={"Visa Procedure"} />

      <div className="px-40 py-32 flex ">
        <div className="w-[75%] h-[200vh]">
          <div className="flex flex-col gap-8">
            <div>UPCOMING EXPEDITIONS AND TREKS IN SPRING 2024..</div>
            <div>
              <h3 className="text-2xl font-semibold">TREKS</h3>
              <ul className="px-5">
                <li className="list-disc">Everest Base Camp Trek - March/April/May 2024</li>
                <li className="list-disc">Everest 3 Pass Trek - April/May 2024</li>
                <li className="list-disc">
                  Everest Base Camp Trek via Gokyo Ri - Chola Pass -
                  March/April/May 2024
                </li>
                <li className="list-disc">Annapurna Base Camp Trek - April/March/May 2024</li>
                <li className="list-disc">Annapurna Circuit via Thorong La Pass - April/May 2024</li>
                <li className="list-disc">Manaslu Larke La Pass Trek - April/May 2024</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">EXPEDITIONS</h3>
              <ul className="px-5">
                <li className="list-disc">AMADABLAM Expedition - 24th March 2024</li>
                <li className="list-disc">Mt. EVEREST South Expedition - 5th April 2024</li>
                <li className="list-disc">Mt. EVEREST Joined LHOTSE Expedition - 2nd April 2024</li>
                <li className="list-disc">KANCHENJUNGA Expedition - 8th April 2024</li>
                <li className="list-disc">MAKALU Expedition - 13th April 2024</li>
                <li className="list-disc">BARUNTSE Expedition - 8th April 2024</li>
                <li className="list-disc">NUPTSE Expedition - 11th April 2024</li>
                <li className="list-disc">LOBUCHE EAST Peak Climbing - from 17th March 2024</li>
                <li className="list-disc">ISLAND PEAK Climbing - from 21st March 2024</li>
                <li className="list-disc">MERA PEAK Climbing - 23rd March 2024</li>
              </ul>
            </div>
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
