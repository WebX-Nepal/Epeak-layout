import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import heli from "./assets/heli.jpg";
import { Icon } from "@iconify/react";
export default function HeliTours() {
  return (
    <section>
      <Navbar />

      <div
        style={{ backgroundImage: `url(${heli})` }}
        className="h-[70vh] bg-center "
      >
        <div className="w-full h-full bg-black/30">
          <div className="w-[50%]  my-auto h-full pl-11 flex flex-col items-center  justify-center text-5xl">
            <div>
              <Icon width={50} color="264166" icon="game-icons:helicopter" />
              <p className="text-white font-bold font-poppins">Heli Tours</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-40 px-32">
        <p>Heli Tour is a luxurious tour option for those willing to visit a destination that takes a longer period of time via road. It is an ideal option for those who have time constraints but want to experience a certain landmark. Popular packages for Heli Tours include the flight to Everest Base Camp and Annapurna Base Camp with many others. </p>
      </div>
      <Footer />
    </section>
  );
}
