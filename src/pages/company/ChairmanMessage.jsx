import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import LastFooter from "../../components/landingPage/Last";
import chairman from "./assets/sherpa.jpg";
import { Icon } from "@iconify/react";
import ennsherpa from "./assets/ennsherpa.png";
export default function ChairmanMessage() {
  return (
    <section>
      <Navbar />

      <div className="p-32">
        <div className="bg-[#f7f7f7] rounded-xl p-16 flex  flex-col items-center gap-2">
          <img src={ennsherpa} width={150} alt="" />

          <div className="grid place-items-center">
            <p className="text-[#273B91] font-bold">Jangmu Enn Sherpa</p>
            <p className="font-bold">Chairman</p>
          </div>
          <div className="flex gap-4 cursor-pointer">
            <Icon color={"26ACE2"} width={24} icon="ic:baseline-facebook" />
            <Icon color={"26ACE2"} width={24} icon="lets-icons:insta-fill" />
            <Icon color={"26ACE2"} width={24} icon="mdi:twitter" />
            <Icon color={"26ACE2"} width={24} icon="mdi:linkedin" />
          </div>
        </div>

        <div className="text-center grid gap-8 w-[90%] mx-auto mt-16">
          <p>
            {" "}
            <span className="text-[#26ACE2] text-3xl">A</span>s a Chairman of
            Epeak Expedition, I extend my heartfelt congratulations to our
            mountain submitters—your triumphs inspire us all. To travel
            enthusiasts, our commitment goes beyond summits, it's about
            embracing the journey, forging connections, and creating lasting
            memories. Together, let's continue reaching new heights and
            exploring the world with courage and camaraderie.
          </p>
          <p>
            As we move forward, let us remain united in our passion for
            exploration. Let the mountains continue to be our teachers,
            reminding us of the significance of perseverance, teamwork, and
            humility. Whether you are a seasoned mountaineer or someone eager to
            embark on their first adventure, know that Epeak is your partner in
            every step of the way.
          </p>
          <p>
            I look forward to another year of shared triumphs, unforgettable
            journeys, and the indomitable spirit that defines our community. May
            your aspirations reach new heights, and may every adventure with us
            be a chapter in the grand story of exploration.
          </p>
          <p className="font-Cormorant font-semibold text-5xl text-[#26ACE2] capitalize mt-16">
            Thank You
          </p>
        </div>
      </div>
      <LastFooter />
    </section>
  );
}
