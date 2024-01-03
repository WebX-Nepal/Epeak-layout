import { Eight } from "../components/8000res/8000res";
import Navbar from "../components/Navbar/Navbar";
import Workedwith from "../components/WorkedWIth/Workedwith";
import Footer from "../components/footer/Footer";
import FrequentlyAsk from "../components/landingPage/FrequentlyAsk";
import LandFirst from "../components/landingPage/LandFirst";
import LastFooter from "../components/landingPage/Last";
import Last from "../components/landingPage/Last";
import OurBlog from "../components/landingPage/OurBlog";
import OurExpedition from "../components/landingPage/OurExpedition";
import Package from "../components/landingPage/Package";
import Testimonial from "../components/landingPage/Testimonial";
import WhyBorn from "../components/landingPage/WhyBorn";
import Meaters from "../components/meaters/Meaters";
import Mountain from "../components/mountain/Mountain";
import Whyus from "../components/whyus/Whyus";
import Snowfall from "react-snowfall";
import { useState } from "react";
import { useEffect } from "react";
export default function Hero() {
  /* re-render */
  const [scrollCount, setScrollCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollCount((prevCount) => prevCount + 0.00001);
    };
    // console.log(scrollCount);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* <Navbar />
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
      </div> */}

      <Snowfall />

      <Navbar backgroundTransparent={true} />
      <LandFirst />
      <WhyBorn />
      <OurExpedition />
      <Package />
      <OurBlog />
      <FrequentlyAsk />
      <Testimonial />

      <LastFooter />
    </div>
  );
}
