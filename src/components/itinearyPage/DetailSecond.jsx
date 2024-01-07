/* eslint-disable react/prop-types */
import everestlevel from "../../assets/everest/everestlevel.svg";
import { Icon } from "@iconify/react";

export default function DetailSecond({details}) {
  return (
    <div className="bg-[#444444]  h-[60vh] px-40 py-12  flex justify-center gap-20">
    {/* part 1 */}
    <div className="flex flex-col gap-2  items-center">
      <div className="w-[180px] object-contain">
        <img src={everestlevel} alt="level" />
      </div>
      <h4>Mt. Everest Expedition - South </h4>
      <Icon width={25} icon="ph:question" />
      <p className="text-xl">60 Days</p>
      <div className="flex items-center">
        <Icon color="#66a0d3" icon="material-symbols:star" />
        <Icon color="#66a0d3" icon="material-symbols:star" />
        <Icon color="#66a0d3" icon="material-symbols:star" />
        <Icon color="#66a0d3" icon="material-symbols:star" />
        <Icon color="#66a0d3" icon="material-symbols:star" />5 Excellent
      </div>
      <p className="text-sm">SHARE WITH FRIENDS</p>
      <div className="flex gap-1">
        <div className="leading-3 text-1">
          <p>304</p>
          <p className="text-[0.8rem]">shares</p>
        </div>
        <Icon color="#66a0d3" width={25} icon="ic:baseline-facebook" />
        <Icon color="#66a0d3" width={25} icon="pajamas:twitter" />
        <Icon color="#66a0d3" width={25} icon="mingcute:messenger-fill" />
        <Icon
          color="#66a0d3"
          width={25}
          icon="ant-design:whats-app-outlined"
        />
      </div>
    </div>
    {/* part 2 */}
    <div className="flex gap-8">
      <div className="flex flex-col gap-8">
        <Icon
          color="#66a0d3"
          width={25}
          icon="material-symbols-light:elevation-rounded"
        />
        <Icon color="#66a0d3" width={25} icon="tabler:walk" />
        <Icon
          color="#66a0d3"
          width={25}
          icon="icon-park-solid:sleep-two"
        />
        <Icon
          color="#66a0d3"
          width={25}
          icon="heroicons-solid:thumb-up"
        />
        <Icon color="#66a0d3" width={25} icon="fa:group" />
      </div>
      <div className="flex flex-col gap-8">
        <p>Max. Elevation:</p>
        <p>Walking Per Day:</p>
        <p>Accommodation:</p>
        <p>Best Season:</p>
        <p>Group Size:</p>
      </div>
      <div className="flex flex-col items-end gap-8">
        <p>{details.maxElevation} </p>
        <p>{details.walkingPerDay}</p>
        <p>{details.Accommodation}</p>
        <p>{details.BestSeason}</p>
        <p>{details.groupSize}</p>
      </div>
    </div>
    {/* part 3 */}
    <div className="flex flex-col gap-8 ">
      <div className="flex items-center gap-4 border-b  pb-2">
        <Icon width={25} icon="ph:phone" />
        <span className="text-xl">+977 9812345678</span>
      </div>
      <div className="flex items-center gap-4 border-b pb-2">
        <Icon width={25} icon="wpf:message-outline" />
        <span className="text-xl">info@epeaksummittreks.com</span>
      </div>
      <div>
        <button className="flex justify-center items-center bg-white text-[#66a0d3] w-full px-5 py-2">
          <span>Inquiry</span>
          <Icon icon="ph:arrow-right-light" />
        </button>
      </div>
      <div>
        <button className="flex justify-center items-center bg-[#66a0d3] text-[] w-full px-5 py-2">
          <span>Book Now</span>
          <Icon icon="ph:arrow-right-light" />
        </button>
      </div>
    </div>
  </div>
  )
}
