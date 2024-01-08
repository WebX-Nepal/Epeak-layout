import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import heli from "./assets/heli.jpg";
import { Icon } from "@iconify/react";


export default function ActivitiesFirst({title,content,icon ,photo}) {
  return (
    <>
    <Navbar/>
    <div>
          <div
        style={{ backgroundImage: `url(${photo})` }}
        className="h-[70vh] bg-center "
      >
        <div className="w-full h-full bg-black/30">
          <div className="w-[50%]  my-auto h-full pl-11 flex flex-col items-center  justify-center text-5xl">
            <div>
              <Icon width={50} color="264166" icon={icon} className=" " />
              <p className="text-white font-bold font-poppins">{title} </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-40 px-32">
        <p> {content} </p>
      </div>
    </div>
    <Footer/>
    </>
  )
}
