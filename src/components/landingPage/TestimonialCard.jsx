import React from "react";
import woman from "./assets/woman.png";
export default function TestimonialCard() {
  return (
    <div className="flex  gap-4 p-4 w-[75%] m-auto">
      <div className="flex flex-col items-center ">
        <div>
          <img
            src={woman}
            alt=""
            className="h-full w-full border border-blue-600"
          />
        </div>
        <p className="">Harry Poter</p>
        <p>USA</p>
      </div>
      <div>
        Epeak Expedition exceeded all my expectations, delivering a traval
        experience that blended cultural immersion with thrilling exploration.
        The attention to detail, knowledgeable guides, and seamless logistice
      </div>
    </div>
  );
}
