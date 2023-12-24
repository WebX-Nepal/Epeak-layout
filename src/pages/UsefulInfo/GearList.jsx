import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import gearlist from "./gearlist.jpg";
import gearbg from "./assets/gearbg.jpg";
export default function GearList() {
  return (
    <section>
      <Navbar />
      <div
        style={{ backgroundImage: `url(${gearlist})` }}
        className="h-[65vh]  bg-center bg-cover bg-no-repeat"
      >
        <div className="text-5xl w-[40%] h-full flex justify-center items-center">
          <h4 className="text-white mt-16">GearList</h4>
        </div>
      </div>

      <div className="py-32 px-40 grid grid-cols-2  gap-4">
        <div
          style={{ backgroundImage: `url(${gearbg})` }}
          className=" cursor-pointer  text-3xl text-white  h-[30vh]"
        >
          <div className="w-full h-full bg-black/50 flex justify-center items-center">
            Gear List For 8000ers
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${gearbg})` }}
          className="cursor-pointer  text-3xl text-white  h-[30vh]"
        >
          <div className="w-full h-full bg-black/50 flex justify-center items-center">
            Gear List For 7000ers
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${gearbg})` }}
          className="cursor-pointer  text-3xl text-white  h-[30vh]"
        >
          <div className="w-full h-full bg-black/50 flex justify-center items-center">
            Gear List For 6000ers
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${gearbg})` }}
          className="cursor-pointer  text-3xl text-white  h-[30vh]"
        >
          <div className="w-full h-full bg-black/50 flex justify-center items-center">
            Gear List For Trekking
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
