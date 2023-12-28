import { Eight } from "../components/8000res/8000res";
import Navbar from "../components/Navbar/Navbar";
import Testimonial from "../components/Testimonial/Testimonial";
import Workedwith from "../components/WorkedWIth/Workedwith";
import Footer from "../components/footer/Footer";
import Meaters from "../components/meaters/Meaters";
import Mountain from "../components/mountain/Mountain";
import Whyus from "../components/whyus/Whyus";
import Snowfall from "react-snowfall";
export default function Hero() {
  return (
    <div className="">
      <Navbar />
      <div className="border border-red-500  ">
        <Mountain />
      <Snowfall snowflakeCunt={205} wind={[-1, 4]} radius={[0.7, 1.5]} />
      </div>

      <div className="relative">
      <Snowfall snowflakeCunt={2050} wind={[-1, 4]} radius={[0.7, 1.5]} />
        <Workedwith />
        <Meaters />
        <Eight />
        <Whyus />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
}
