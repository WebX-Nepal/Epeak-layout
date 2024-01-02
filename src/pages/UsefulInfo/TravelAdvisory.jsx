import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import LastFooter from "../../components/landingPage/Last";
import UsefulFirst from "./UsefulFirst";

export default function TravelAdvisory() {
  return (

<section>
    <Navbar/>
    <UsefulFirst title={"Travel Advisory"}/>
<div className="px-40 py-32 text-white grid grid-cols-2 gap-8">
    <div className="h-[35vh] bg-black flex items-center justify-center text-2xl">
            Travel Insurance
    </div>
    <div className="h-[35vh] bg-black flex items-center justify-center text-2xl">
            OOVID-19 Travel Update
    </div>
    <div className="h-[35vh] bg-black flex items-center justify-center text-2xl">
            Pre-Departure Checklist for Nepal
    </div>

</div>

    <LastFooter/>
</section>
    )
}
