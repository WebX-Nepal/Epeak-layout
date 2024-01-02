import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import LastFooter from "../../components/landingPage/Last";
import UsefulFirst from "./UsefulFirst";

export default function InquiryBookPayment() {
  return (
    <section>
      <Navbar />

      <UsefulFirst title={"Inquiry / Booking / Payment"} />

      <div className="px-40 py-32 grid grid-cols-2 text-white text-xl gap-8">
        <div className="h-[33vh] bg-black flex justify-center items-center px-8 cursor-pointer">
          Inquiry/Booking
        </div>
        <div className="h-[33vh] bg-black flex justify-center items-center px-8 cursor-pointer">
          Payment{" "}
        </div>
      </div>
      <LastFooter/>
    </section>
  );
}
