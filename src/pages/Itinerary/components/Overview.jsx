import { Icon } from "@iconify/react";
import { useState } from "react";
export default function Overview() {
  const [readMore, setReadMore] = useState(true);
  const paragraphStyle = {
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };
  return (
    <div>
      <div className="flex items-center gap-4 mt-12">
        <div className="bg-[#f7f7f7] rounded-full p-2">
          <Icon color="26ACE2" icon="material-symbols:view-cozy" />
        </div>
        <p className="text-2xl font-semibold uppercase">Overview</p>
        <div className="border w-full ">
          <hr className="" />
        </div>
      </div>

      <p className="px-12 mt-8" style={readMore ? paragraphStyle : null}>
        Ask an adventurer about their dream, and they will answer you with a
        word; EVEREST. Who would not want to reach the top of the world? Who
        would not want to touch the sky? It’s the trip of a lifetime, the
        Everest Expedition. Mt. Everest is the highest mountain in the world and
        is located in the Himalayas, on the border between Nepal and China. Mt.
        Everest, also known as The Sagarmatha in Nepali is the tallest peak on
        earth with an altitude of 8848.86m. The southern face lies in Nepal
        whereas the northern face is in Tibet. In 1715, China surveyed the
        mountain for the first time while they were mapping Chinese territory
        and depicted it as Mount Qomolangma. British Indian government 1856
        again measured Mount Everest during their Great Trigonometry Survey.
        Back then, it was named Peak XV and said to be 8840m tall. Peak XV was
        renamed after Sir George Everest as Mount Everest, the name given in his
        honor, who was a lead surveyor in 1856. Sir George was a Welsh Surveyor;
        he was the surveyor-general of India for thirteen years from 1830.
      </p>

      <div className="px-16 ">
        <button
          className="bg-[#26ACE2] text-white px-5 py-2 rounded-3xl mt-4 w-[150px] "
          onClick={() => setReadMore(!readMore)}
        >
          Read {readMore ? "More" : "Less"}...{" "}
        </button>
      </div>

      <div className="border-y mt-12 flex justify-evenly p-12">
        <div className="flex flex-col gap-8">
          <div>
            <p className="font-semibold"> Duration</p>
            <p className="text-slate-400">60 days</p>
          </div>

          <div>
            <p className="font-semibold"> Group Size</p>
            <p className="text-slate-400">2-15 PAX</p>
          </div>
        </div>

        <div className="border-x px-16 flex flex-col gap-8">
          <div>
            <p className="font-semibold">Activity</p>
            <p className="text-slate-400">Hiking and launch</p>
          </div>

          <div>
            <p className="font-semibold"> Age</p>
            <p className="text-slate-400">7+</p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <p className="font-semibold">Physical</p>
            <p className="text-slate-400">Challenging</p>
          </div>

          <div>
            <p className="font-semibold"> Location</p>
            <p className="text-slate-400">Annapurna</p>
          </div>
        </div>
      </div>
    </div>
  );
}
