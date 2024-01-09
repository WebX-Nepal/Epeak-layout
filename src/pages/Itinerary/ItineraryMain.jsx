import Navbar from "../../components/Navbar/Navbar";
import LastFooter from "../../components/landingPage/Last";
import CostExcluded from "./components/CostExcluded";
import CostIncluded from "./components/CostIncluded";
import FixedDates from "./components/FixedDates";
import ItinearlyHero from "./components/ItinearlyHero";
import ItineraryBar from "./components/ItineraryBar";
import ItineraryDays from "./components/ItineraryDays";
import Overview from "./components/Overview";
import PV from "./components/PV";
import RouteMap from "./components/RouteMap";
import { Icon } from "@iconify/react";
export default function ItineraryMain() {
  return (
    <section>
      <Navbar />

      <ItinearlyHero />
      <div className="px-32">
        <ItineraryBar />
        <Overview />
        <ItineraryDays />
        <RouteMap />
        <CostIncluded />
        <CostExcluded />
        <FixedDates />
        <PV/>

        <div className="py-16 flex justify-center">
          <button className="flex px-8 py-3 items-center gap-2 bg-[#26ACE2] rounded-3xl text-white">
            Write a Review <Icon width={20} icon="solar:round-arrow-down-linear" color="white"/>
          </button>
        </div>
      </div>
      <LastFooter />
    </section>
  );
}
