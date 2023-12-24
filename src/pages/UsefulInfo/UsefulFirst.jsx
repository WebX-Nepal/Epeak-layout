import gearlist from "./gearlist.jpg";

export default function UsefulFirst({title,photo}) {
  return (
    <div
      style={{ backgroundImage: `url(${gearlist})` }}
      className="h-[65vh]  bg-center bg-cover bg-no-repeat "
    >
      <div className="text-5xl w-[40%] h-full flex justify-center items-center">
        <h4 className="text-white mt-16  ml-32">{title}</h4>
      </div>
    </div>
  );
}
