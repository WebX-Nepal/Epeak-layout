import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/footer/Footer"
import UsefulFirst from "./UsefulFirst"
import UsefulSticky from "./UsefulSticky"
export default function FAQ() {
  return (
    <section className="">
    <Navbar />

    <UsefulFirst title={"General FAQs"} />

    <div className="px-40 py-32 flex " >
      <div className="w-[75%] h-[200vh]">
        <p>Here will be General FAQs</p>
      </div>
      <div className="w-[25%] ">
        <UsefulSticky />
      </div>
    </div>
    <Footer />
  </section>
  )
}
