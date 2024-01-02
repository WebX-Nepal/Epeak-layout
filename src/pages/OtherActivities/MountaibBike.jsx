import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import LastFooter from "../../components/landingPage/Last";
import rafting from "./assets/rafting.png";

import ref1 from "./assets/rafting/ref1.png";
import ref2 from "./assets/rafting/ref2.png";
import ref3 from "./assets/rafting/ref3.png";
import ref4 from "./assets/rafting/ref4.png";
import ref5 from "./assets/rafting/ref5.png";
import ref6 from "./assets/rafting/ref6.png";
import ref7 from "./assets/rafting/ref7.png";
import ref8 from "./assets/rafting/ref8.png";
import ref9 from "./assets/rafting/ref9.png";

const rafImg = [ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9];
export default function MountaibBike() {
  return (
    <>
      <Navbar />
      <div className="px-16 py-32    ">
        <div
          className="h-[40vh] bg-cover bg-center rounded-3xl flex flex-col justify-center items-center"
          style={{ backgroundImage: `url(${rafting})` }}
        >
          <div className="h-[50%]"></div>
          <div className="flex flex-col items-center">
            <p className="text-white text-center mb-4 text-3xl font-semibold">
              Mountain Bike
            </p>
            <button className="text-white bg-[#26ACE2] px-5 py-2 rounded-3xl">
              Book Now
            </button>
          </div>
        </div>

        <div className="px-40 py-16 flex flex-col gap-8 font-poppins text-justify">
          <div>
            Embark on an exhilarating journey where the rhythmic dance of water
            becomes your guide—rafting, a thrilling adventure that unlocks the
            untamed spirit of rivers. As you glide through rushing currents,
            surrounded by towering canyon walls or lush landscapes, every twist
            and turn offers a pulse-pounding encounter with the untamed forces
            of nature.
          </div>
          <div>
            Rafting transcends the ordinary, transforming waterways into
            conduits of excitement and camaraderie. Whether you're a seasoned
            rafter seeking the adrenaline rush of challenging rapids or a
            newcomer enticed by the serenity of a gentle float, each journey
            promises a unique blend of excitement and tranquility.
          </div>
          <div>
            Feel the cool spray on your face as you navigate through
            exhilarating rapids, working in tandem with your team to conquer the
            untamed waters. Admire the pristine beauty of untouched landscapes,
            hidden canyons, and vibrant ecosystems that reveal themselves only
            to those willing to embark on this aquatic odyssey.
          </div>
          <div>
            Rafting is not just an adventure; it's an immersion into the raw,
            unbridled beauty of nature. It fosters bonds among teammates, each
            paddle stroke strengthening the connection between individuals and
            the environment. It is an experience that transcends the ordinary,
            leaving indelible memories etched in the heart.
          </div>
        </div>
      </div>

      <div>
        <p className="text-center text-4xl font-poppins">
          Our <span className="text-[#26ACE2]"> Activities</span>
        </p>

        <div className="grid grid-cols-3 place-content-center place-items-center px-32 py-8 gap-8 ">
          {rafImg.map((refimg) => (
            <img src={refimg} alt="imga" key={refimg} />
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 py-16">
        <p className="text-center text-3xl ">
          Do you have a plan to go for Rafting?
        </p>
        <button className="text-white bg-[#273B91] px-8 py-3 rounded-xl inline">
          Book Now
        </button>
      </div>

      <LastFooter />
    </>
  );
}
