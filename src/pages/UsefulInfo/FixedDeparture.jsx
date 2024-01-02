import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import LastFooter from "../../components/landingPage/Last";
import UsefulFirst from "./UsefulFirst";

export default function FixedDeparture() {

  
  return (
    <section>
      <Navbar />

      <UsefulFirst title={"Fixed Departure"} />
      <div className="px-40 py-32 text-white grid grid-cols-2 gap-8" >

        <div className="h-[35vh]  cursor-pointer bg-black flex items-center justify-center text-lg">
            Fixed Departure Date for 8000m Peaks 

        </div>
        <div className="h-[35vh] cursor-pointer bg-black flex items-center justify-center text-lg">
            Fixed Departure Date for Mountains below 8000m

        </div>
      </div>
      <LastFooter/>
    </section>
  );
}
