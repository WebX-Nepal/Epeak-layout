import { Icon } from "@iconify/react";

export default function RightStickyCard() {
  return (
    <div className="w-[33%]">
    <div className=" sticky top-36  flex flex-col items-center">
      <button className="uppercase mt-16  pb-4  border-b-4 border-[#215D91] bg-[#f7f7f7] w-[50%]">
        highlight of trip
      </button>

      <div className="border bg-[#444] w-[60%] mt-4 mx-auto h-40 flex flex-col gap-4 justify-center items-center ">
        <div className=" ">
          <button className=" flex justify-center items-center bg-white text-[#215D91]  px-5 py-2">
            <span>Inquiry </span>
            <Icon icon="ph:arrow-right-light" />
          </button>
        </div>

        <div className="">
          <button className="flex justify-center items-center bg-[#215D91]  text-white   px-5 py-2">
            <span>Book Now</span>
            <Icon icon="ph:arrow-right-light" />
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
