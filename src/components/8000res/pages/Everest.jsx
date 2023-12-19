/* eslint-disable react/prop-types */
export default function Everest({ setShowEverest }) {
  return (
    <div
      onMouseLeave={() => {
        setShowEverest(false);
      }}
      onMouseEnter={() => {
        setShowEverest(true);
      }}
      className="p-12 rounded-3xl absolute top-4 left-[28%] w-[37vw] h-[330px] bg-black/50 bg-[url('https://cdn.outsideonline.com/wp-content/uploads/2023/04/Everest1.jpg')] bg-cover flex flex-col justify-between "
    >
      <h4 className="text-6xl text-[#FAB40A] font-Rubik font-thin">
        Everest
      </h4>
      <div>

      <p
        className="text-[#FAB40A] font-poppins
        "
        >
        {" "}
        Mount Everest Expedition Standard | The World's Highest Mountain
      </p>
      <div className="flex gap-4 text-white ">
        <button className="uppercase px-3 py-2  bg-[#FAB40A] w-[30%] rounded-lg">
          {" "}
          view details{" "}
        </button>
        <button className="uppercase px-3 py-2 bg-[#1664A4] w-[30%] rounded-lg">
          {" "}
          book now{" "}
        </button>
        </div>
      </div>
    </div>
  );
}
