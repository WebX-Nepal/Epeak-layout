import Navbar from "../../components/Navbar/Navbar";
import LastFooter from "../../components/landingPage/Last";
import certificate1 from "./assets/certificate1.jpg";
import certificate2 from "./assets/certificate2.jpg";
import certificate3 from "./assets/certificate2.jpg";
export default function Certificate() {
  return (
    <>
      <Navbar />
      <div className="py-32">
        <div className="flex  flex-wrap items-center justify-center gap-16">
          <img src={certificate3} alt="" width={300} />
          <img src={certificate1} alt="" width={300} />
          <img src={certificate2} alt="" width={300} />
        </div>
        <LastFooter />
      </div>
    </>
  );
}
