// imprt React from 'react'

import Navbar from "../../components/Navbar/Navbar";
import Usefulinfo from "../../components/Navbar/Usefulinfo";
import Footer from "../../components/footer/Footer";
import UsefulFirst from "./UsefulFirst";

export default function Garbage() {
  return (
<section>
    <Navbar/>
    <UsefulFirst title={"Permit / Garbage Fees"}/>

    <div className="px-40 py-32 grid grid-cols-2 text-white text-xl gap-8">

        <div className="h-[33vh] bg-black flex justify-center items-center px-8 cursor-pointer">
                Permit Fees of Mountains under Government of Nepal
        </div>
        <div className="h-[33vh] bg-black flex justify-center items-center px-8 cursor-pointer">
                Fee for Garbage Management of Mountains under Government of Nepal
        </div>
        <div className="h-[33vh] bg-black flex justify-center items-center px-8 cursor-pointer">
        Permit Fees of Nepal Mountaioneering Association (NMA) Peaks
        </div>
        <div className="h-[33vh] bg-black flex justify-center items-center px-8 cursor-pointer">
            Permit Fee for Trekking in Nepal
        </div>
    </div>

    <Footer/>
</section>
    )
}
