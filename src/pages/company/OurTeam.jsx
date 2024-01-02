import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import LastFooter from "../../components/landingPage/Last";
import ourteam1 from "./assets/outteam.jpg";
import { useState } from "react";
import tem1 from "./assets/ourteam/tem1.png";
import tem2 from "./assets/ourteam/tem2.png";
import tem3 from "./assets/ourteam/tem3.png";
import tem4 from "./assets/ourteam/tem4.png";
import tem5 from "./assets/ourteam/tem5.png";
import tem6 from "./assets/ourteam/tem6.png";
export default function OurTeam() {
  const teamDatas = [
    {
      name: "Pasang Limbu",
      designation: "Head Guide",
      back: tem6,
      speech: `I feel one of the greatest proud person in
      the world being a mountain climber as well
      as a Nepali. I was bon in the mountains, had
      a lot of struggles of getting what I really
      wanted to do. When the time became very
      selfish and I’ve grown like a mountain man.
      I’m just a guide person can guide.`,
    },
    {
      name: "Udaya Limbu",
      designation: "Head Guide",
      back: tem2,
      speech: `2I feel one of the greatest proud person in
      the world being a mountain climber as well
      as a Nepali. I was bon in the mountains, had
      a lot of struggles of getting what I really
      wanted to do. When the time became very
      selfish and I’ve grown like a mountain man.
      I’m just a guide person can guide.`,
    },
    {
      name: "Karma Sherpa",
      designation: "Head Guide",
      back: tem3,
      speech: `3I feel one of the greatest proud person in
      the world being a mountain climber as well
      as a Nepali. I was bon in the mountains, had
      a lot of struggles of getting what I really
      wanted to do. When the time became very
      selfish and I’ve grown like a mountain man.
      I’m just a guide person can guide.`,
    },
    {
      name: "Pasang Limbu I",
      designation: "Head Guide",
      back: tem4,
      speech: `4I feel one of the greatest proud person in
      the world being a mountain climber as well
      as a Nepali. I was bon in the mountains, had
      a lot of struggles of getting what I really
      wanted to do. When the time became very
      selfish and I’ve grown like a mountain man.
      I’m just a guide person can guide.`,
    },
    {
      name: "Pasang Limbu II",
      designation: "Head Guide",
      back: tem5,
      speech: `5I feel one of the greatest proud person in
      the world being a mountain climber as well
      as a Nepali. I was bon in the mountains, had
      a lot of struggles of getting what I really
      wanted to do. When the time became very
      selfish and I’ve grown like a mountain man.
      I’m just a guide person can guide.`,
    },
    {
      name: "Jangmu Enn Sherpa",
      designation: "Head Guide",
      back: tem1,
      speech: `6I feel one of the greatest proud person in
  the world being a mountain climber as well
  as a Nepali. I was bon in the mountains, had
  a lot of struggles of getting what I really
  wanted to do. When the time became very
  selfish and I’ve grown like a mountain man.
  I’m just a guide person can guide.`,
    },
  ];

  const [hoverName, setHoverName] = useState("");
  return (
    <section>
      <Navbar />

      <div className="px-32 pt-32 pb-8 grid gap-2">
        <h2 className="text-[#26ACE2]">Our Team</h2>
        <p className="lg:w-[55%] font-bold text-4xl">
          You will be guided by the 2 decades of experienced team
        </p>
        <p className="text-sm text-slate-400 ">
          We born in Mountains, we serve in Mountains and we are ready to die in
          Mountain.
        </p>
      </div>

      <div className="grid grid-cols-3 place-content-start place-items-center gap-4 px-32 ">
        {teamDatas.map((team, index) => (
          <div
            onMouseEnter={() => setHoverName(team.name)}
            onMouseLeave={() => setHoverName("")}
            key={index}
            className="h-[400px] w-full border bg-cover bg-center cursor-pointer flex items-end rounded-xl "
            style={{ backgroundImage: `url(${team.back})` }}
          >
            {/* <div className="bg-white w-[80%] text-center mx-auto rounded-xl mb-4 ">
              <p>{team.name}</p>
              <p>{team.designation}</p>
            </div> */}
            <div className="bg-white bg-opacity-90 w-[80%] text-center mx-auto rounded-xl mb-4  p-2   ">
              <p className="font-bold">{team.name}</p>
              <p className="text-[#26ACE2]">{team.designation}</p>

              {}
              <p  
                className={`text-sm text-justify px-4  transition-all duration-1000 ease-in pb-2 ${
                  hoverName === team.name ? "block     " : "hidden"
                } `}
              >
                {team.speech}
              </p>
            </div>
          </div>
        ))}
      </div>

      <LastFooter />
    </section>
  );
}
