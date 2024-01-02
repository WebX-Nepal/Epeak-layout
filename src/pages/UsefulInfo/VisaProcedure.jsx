import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import LastFooter from "../../components/landingPage/Last";
import UsefulFirst from "./UsefulFirst";
import UsefulSticky from "./UsefulSticky";
export default function VisaProcedure() {
  return (

<section>
    <Navbar/>
    <UsefulFirst title={"Visa Procedure"}/>


    <div className="px-40 py-32 flex " >
        <div className="w-[75%] h-[200vh]">
          <p>Here will visa procedure</p>
        </div>
        <div className="w-[25%] ">
          <UsefulSticky />
        </div>
      </div>
    <LastFooter/>
</section>    )
}
