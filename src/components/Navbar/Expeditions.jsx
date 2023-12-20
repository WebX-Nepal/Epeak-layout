import { Link } from "react-router-dom";


export default function Expeditions({ setShowExpeditions }) {
  return (
    <div
      onMouseEnter={() => setShowExpeditions(true)}
      onMouseLeave={() => setShowExpeditions(false)}
      className="sticky bg-opacity-75 bg-[#023047] z-10 top-24  w-full font-poppins text-white px-32 py-8 flex"
    >
      <div className="flex flex-col mt-4 gap-2 w-[20%] cursor-pointer">
        <span> 8000ers</span>
        <span>7000ers</span>
        <span>6000ers</span>
        <span>7 Summits</span>
        <span>VIP & LUXURY SERVICE</span>
      </div>
      <div className="w-[80%] flex flex-wrap gap-8 uppercase text-xl  font-semibold ">
        <Link  to="/everest" className="overflow-hidden  p-4 flex justify-center items-center rounded-md cursor-pointer w-[300px]  h-[220px] bg-cover bg-[url('https://www.sevensummittreks.com/uploads/original/1651467803_broad-peak-kGZ0BbXhROzifvzanFk2u9S8TQR4DLrcumBtDjn9.jpg')]">
          <p className="uppercase  text-[#f2ba37] hover:scale-125 transition-all duration-300 hover:text-[#f2ba37]">
            8000ers
          </p>
        </Link>
        <div className="p-4 flex justify-center items-center rounded-md  cursor-pointer w-[300px] h-[220px] bg-cover bg-[url('https://i0.wp.com/intrepidtreks.com/en/wp-content/uploads/2018/03/Tilicho-Lake-trek-Annapurna1.jpg?fit=1140%2C760')]">
          7000ers
        </div>
        <div className="p-4 flex justify-center items-center rounded-md  cursor-pointer w-[300px] h-[220px] bg-cover bg-[url('https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/1622203213079-WST8ZGC284MLBYMHHK0C/The%2BCommon%2BWanderer%2BAnnapurna%2Bcircuit%2Btrek%2BNepal-4_1.jpg')]">
          6000ers
        </div>
        <div className="p-4 flex justify-center items-center rounded-md  cursor-pointer w-[300px] h-[220px]  bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkF4VEY2Mda_2Y5cYn5tKoSEyH2nelro3nmg&usqp=CAU')]">
          7 Summits
        </div>
      </div>
    </div>
  );
}
