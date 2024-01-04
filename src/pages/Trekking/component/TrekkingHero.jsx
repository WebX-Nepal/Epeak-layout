/* eslint-disable react/prop-types */
import Navbar from "../../../components/Navbar/Navbar";

export default function TrekkingHero({ photo, title }) {
  return (
    <>
      <Navbar />

      <div
        className="h-[70vh] bg-cover bg-center flex items-center "
        style={{ backgroundImage: `url(${photo})` }}
      >
        <div className="bg-black/30 text-white text-6xl ml-40 ">{title}</div>
      </div>
    </>
  );
}
