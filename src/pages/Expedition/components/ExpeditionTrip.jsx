/* eslint-disable react/prop-types */

import ExpeditionCard from "./ExpeditionCard";

export default function ExpeditionTrip({list}) {
  return (
    <div className="bg-[#f7f7f7] px-32 py-16">
    <h3 className="text-5xl text-[#26ACE2] text-center mb-8">Available Trips</h3>

    <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8 place-content-center  place-items-center">
      {list.map((lis) => (
        <ExpeditionCard title={lis.name} photo={lis.photo} key={lis.title} />
      ))}
    </div>
  </div>
  )
}
