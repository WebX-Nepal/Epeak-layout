export default function Trekking({ setShowTrekking }) {
  return (
    <div
      onMouseEnter={() => setShowTrekking(true)}
      onMouseLeave={() => setShowTrekking(false)}
      className="absolute left-0  bg-opacity-75 bg-[#023047] z-10 top-20  w-full font-poppins text-white px-32 py-8 flex"
    >
      <div className="flex flex-col gap-2 w-[20%] cursor-pointer">
        <span>Annapurna Region</span>
        <span>Everest Region</span>
        <span>Langtang Region</span>
        <span>Manaslu Region</span>
        <span>Mustang Region</span>
        <span>Dhaulagiri Region</span>

        <span>Kanchenjunga Region</span>
        <span>Makalu Region</span>
        <span>Rolwaling Region</span>
        <span>Karakoram Region</span>
      </div>
      <div className="w-[80%] flex flex-wrap gap-8 uppercase text-xl  font-semibold ">
        <div className= "overflow-hidden  p-4 flex justify-center items-center rounded-md cursor-pointer w-[300px]  h-[220px] bg-cover bg-[url('https://www.nepaltraveladventure.com/uploads/resized/album_tilicho-lake-trek.jpg')]">
          <p className="uppercase  hover:scale-110 transition-all duration-300 hover:text-[#f2ba37]">annapurna circuit trek & tilicho lake</p>
        </div>
        <div className="p-4 flex justify-center items-center rounded-md  cursor-pointer w-[300px] h-[220px] bg-cover bg-[url('https://i0.wp.com/intrepidtreks.com/en/wp-content/uploads/2018/03/Tilicho-Lake-trek-Annapurna1.jpg?fit=1140%2C760')]">
          annapurna base camp (ABC) trek
        </div>
        <div className="p-4 flex justify-center items-center rounded-md  cursor-pointer w-[300px] h-[220px] bg-cover bg-[url('https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/1622203213079-WST8ZGC284MLBYMHHK0C/The%2BCommon%2BWanderer%2BAnnapurna%2Bcircuit%2Btrek%2BNepal-4_1.jpg')]">
          annapurna base camp trek - north
        </div>
        <div className="p-4 flex justify-center items-center rounded-md  cursor-pointer w-[300px] h-[220px]  bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkF4VEY2Mda_2Y5cYn5tKoSEyH2nelro3nmg&usqp=CAU')]">
          mardi himal trek
        </div>
      </div>
    </div>
  );
}
