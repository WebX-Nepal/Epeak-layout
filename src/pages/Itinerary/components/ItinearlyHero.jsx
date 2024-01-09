import itinaryBg from "./assets/itineraryBg.png";
import { Icon } from "@iconify/react";
import Vector from "./assets/Vector.png";
export default function ItinearlyHero() {
  return (
    <section>
      <div
        className="h-[100vh]  bg-center bg-cover
        "
        style={{
          backgroundImage: `url(${itinaryBg})`,
        }}
      >
        <div className=" text-white h-full flex items-end justify-around">
          <div className="py-32 px-8  ">
            <div className="flex flex-col gap-4 ">
              
                <h2 className=" text-5xl font-semibold    ">
                  Annapurna Himal Expedition
                </h2>
                <p className="text-3xl font-semibold">(8845m)</p>
                <p className=" text-xl">
                  Mt. Himlung lies to the northeast of Annapurna Range with an
                  aspiring height of 7,126m.
                </p>
                <div className="flex gap-8">
                  <Icon
                    width={25}
                    color="26ACE2"
                    icon="material-symbols:mail"
                  />{" "}
                  <span>info@epeaksummittreks.com</span>
                </div>

                <div className="flex gap-8">
                  <Icon width={25} color="26ACE2" icon="mingcute:phone-fill" />{" "}
                  <span>+977 9812345678</span>
                </div>
              
            </div>
          </div>
          <div className="py-32 flex flex-col gap-2 items-center justify-center ">
          <div className="h-24 w-24">

            <img src={Vector}  alt="" />
          </div>
            <p className="text-3xl">33 Days</p>
            <p>⭐⭐⭐⭐⭐</p>
            <p>Path:Good</p>
            <button className="px-5 rounded-3xl py-2 bg-[#26ACE2]">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
