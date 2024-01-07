import { Icon } from "@iconify/react";

export default function FixedDates() {
  return (
    <div className="mt-16">
    <div className="flex items-center gap-2">
      <Icon
        width={25}
        color="#215D91"
        icon="simple-line-icons:calender"
      />
      <h4 className="text-[#215D91] text-2xl font-Cormorant font-semibold whitespace-nowrap ">
        {" "}
        FIXED DATES
      </h4>
      <div className="w-full">
        <hr />
      </div>
    </div>

    <table className="w-full text-center mt-8  table-fixed">
      <thead className="border-b">
        <th>Date</th>
        <th>Status</th>
        <th>Group Size</th>
        <th>Action</th>
      </thead>
      <tbody className="">
        <tr className=" border-b p-12 ">
          <td>
            <strong className="text-[#215D91]">
              <br />
              60 Days
            </strong>
            <br />
            Start- 2024-04-12
            <br />
            End -2024-06-10
          </td>
          <td className="text-green-400">Booking Open </td>
          <td>15 PAX</td>
          <td className=" ">
            <button className="border px-2 py-1 text-[#215D91]">
              Inquiry
            </button>
            <button className="border py-1 px-2 bg-[#215D91] text-white ml-2">
              Book Now
            </button>
          </td>
        </tr>
        <tr className=" border-b p-12 ">
          <td>
            <strong className="text-[#215D91]">
              <br />
              60 Days
            </strong>
            <br />
            Start- 2024-04-12
            <br />
            End -2024-06-10
          </td>
          <td className="text-green-400">Booking Open </td>
          <td>15 PAX</td>
          <td className=" ">
            <button className="border px-2 py-1 text-[#215D91]">
              Inquiry
            </button>
            <button className="border py-1 px-2 bg-[#215D91] text-white ml-2">
              Book Now
            </button>
          </td>
        </tr>
        <tr className=" border-b p-12 ">
          <td>
            <strong className="text-[#215D91]">
              <br />
              60 Days
            </strong>
            <br />
            Start- 2024-04-12
            <br />
            End -2024-06-10
          </td>
          <td className="text-green-400">Booking Open </td>
          <td>15 PAX</td>
          <td className=" ">
            <button className="border px-2 py-1 text-[#215D91]">
              Inquiry
            </button>
            <button className="border py-1 px-2 bg-[#215D91] text-white ml-2">
              Book Now
            </button>
          </td>
        </tr>
        <tr className=" border-b p-12 ">
          <td>
            <strong className="text-[#215D91]">
              <br />
              60 Days
            </strong>
            <br />
            Start- 2024-04-12
            <br />
            End -2024-06-10
          </td>
          <td className="text-green-400">Booking Open </td>
          <td>15 PAX</td>
          <td className=" ">
            <button className="border px-2 py-1 text-[#215D91]">
              Inquiry
            </button>
            <button className="border py-1 px-2 bg-[#215D91] text-white ml-2">
              Book Now
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}
