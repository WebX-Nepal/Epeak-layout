import { Icon } from "@iconify/react";

export default function DetailThird() {
  return (
    <div className="h-[30px]   sticky top-24 z-20 bg-[#215D91]">
    <ul className="px-32   flex justify-center items-center gap-8">
      <li className="flex  items-center gap-2">
        <Icon icon="material-symbols:overview" />
        overview
      </li>
      <li className="flex items-center gap-2">
        <Icon icon="lets-icons:date-today-light" />
        ITINERARY
      </li>
      <li className="flex items-center gap-2">
        <Icon icon="bx:map" />
        Map
      </li>
      <li className="flex items-center gap-2">
        <Icon icon="material-symbols:verified" />
        Cost Includes
      </li>
      <li className="flex items-center gap-2">
        <Icon icon="mdi:dangerous" />
        Cost Excludes
      </li>
      <li className="flex items-center gap-2">
        <Icon icon="simple-line-icons:calender" />
        Fixed Date
      </li>
      <li className="flex items-center gap-2">
        <Icon icon="mdi:gear-outline" />
        Gear List
      </li>
      <li className="flex items-center gap-2">
        <Icon icon="tabler:photo" />
        Photo/Videos
      </li>
      <li className="flex items-center gap-2">
        <Icon icon="mynaui:message" />
        Reviews
      </li>
    </ul>
  </div>
  )
}
