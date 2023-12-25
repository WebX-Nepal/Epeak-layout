export default function Trekking({ setShowTrekking }) {
  const annapurnaRegion = [
    {
      name: "annapurna base camp (ABC) trek",
      photo: "https://images.unsplash.com/photo-1627201436373-384e00505886?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "annapurna base camp trek - north",
      photo: "https://images.unsplash.com/photo-1627201436373-384e00505886?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      
    },
    {
      name: " mardi himal trek",
      photo: "https://images.unsplash.com/photo-1627201436373-384e00505886?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      
    },
  ];
  return (
    <div
      onMouseEnter={() => setShowTrekking(true)}
      onMouseLeave={() => setShowTrekking(false)}
      className="absolute left-0   bg-[#023047] z-10 top-20  w-full font-poppins text-white px-32 py-8 flex"
    >
      <div className="flex flex-col gap-2 w-[20%] cursor-pointer">
        <ul className="pr-16 flex flex-col gap-4">
          <li className="border-b-2 ">Annapurna Region</li>
          <li className="border-b-2 ">Everest Region</li>
          <li className="border-b-2 ">Langtang Region</li>
          <li className="border-b-2 ">Manaslu Region</li>
          <li className="border-b-2 ">Mustang Region</li>
          <li className="border-b-2 ">Dhaulagiri Region</li>

          <li className="border-b-2 ">Kanchenjunga Region</li>
          <li className="border-b-2 ">Makalu Region</li>
          <li className="border-b-2 ">Rolwaling Region</li>
          <li className="border-b-2 ">Karakoram Region</li>
        </ul>
      </div>
      <div className="w-[80%] flex flex-wrap gap-8 uppercase text-xl  font-semibold ">
        {true  && (
          <div className="w-[80%] flex flex-wrap gap-8 uppercase text-xl  font-semibold mt-4 ">
            <div className="flex gap-8 ">
              {annapurnaRegion.map((mountain) => {
                return (
                  <div
                    key={mountain.name}
                    className="w-[325px] h-[81px]  flex gap-2 cursor-pointer hover:bg-white  rounded-[9px] bg-[#A8D3EC] text-black"
                  >
                    <div className="w-[124px] h-[82px]   p-[5px]">
                      <img
                        src={mountain.photo}
                        alt="photo"
                        className="rounded-[9px] w-full h-full "
                      />
                    </div>
                    <div className="w-[65%] flex flex-col justify-center font-poppins">
                      <h3 className="capitalize font-Cormorant font-bold text-2xl">
                        {" "}
                        {mountain.name}{" "}
                      </h3>
                     
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
