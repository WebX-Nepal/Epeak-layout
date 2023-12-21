
import { Icon } from "@iconify/react";
export default function TripOverView() {
  return (

    <div className="flex flex-col">
    <div className="flex gap-1 items-center">
      <Icon width={35} color="#215D91" icon="bx:file" className="" />
      <h4 className="font-Cormorant font-semibold text-2xl whitespace-nowrap  ">
        TRIP OVERVIEW
      </h4>
      <div className="w-full">
        <hr className="" />
      </div>
    </div>
    <p className="pt-8 text-justify">
      Ask an adventurer about their dream, and they will answer you
      with a word; EVEREST. Who would not want to reach the top of the
      world? Who would not want to touch the sky? It’s the trip of a
      lifetime, the Everest Expedition. Mt. Everest is the highest
      mountain in the world and is located in the Himalayas, on the
      border between Nepal and China. Mt. Everest, also known as The
      Sagarmatha in Nepali is the tallest peak on earth with an
      altitude of 8848.86m. The southern face lies in Nepal whereas
      the northern face is in Tibet. In 1715, China surveyed the
      mountain for the first time while they were mapping Chinese
      territory and depicted it as Mount Qomolangma. British Indian
      government 1856 again measured Mount Everest during their Great
      Trigonometry Survey. Back then, it was named Peak XV and said to
      be 8840m tall. Peak XV was renamed after Sir George Everest as
      Mount Everest, the name given in his honor, who was a lead
      surveyor in 1856. Sir George was a Welsh Surveyor; he was the
      surveyor-general of India for thirteen years from 1830.
    </p>
  </div>
    )
}
