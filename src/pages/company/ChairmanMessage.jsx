import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import chairman from "./assets/sherpa.jpg";

export default function ChairmanMessage() {
  return (
    <section>
      <Navbar />

      <div
        className="h-[90vh]  bg-cover  relative "
        style={{ backgroundImage: `url(${chairman})` }}
      >
        <div className="w-full h-full  gap-8 bg-black/50 backdrop-blur-lg text-white flex flex-col justify-center   items-center  ">
          <h3 className="text-4xl  font-semibold font-poppins mt-8">Chairman's Message</h3>
          <div className=" ">
            <img
              src={chairman}
              alt="chairman"
              style={{
                height: "200px",
                width: "200px",
              }}
              className="rounded-full border object-cover"
            />
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-[#99bedc]">Mingma Sherpa</h3>
            <h4 className="text-lg font-semibold">Chairman</h4>
          </div>
        </div>
      </div>

      <div  className="px-40 py-32">
      Amongst the crowd of new adventure companies sprouting every day, Seven Summit Treks has something of a history, culture, and experience that comes with it. With years of experience in catering to the needs of our clients spread throughout the world, we now have thousands of satisfied customers who strongly recommend Seven Summit Treks. We have been standing out for our technical infallibility, excellent management, and sincerity in providing services. Be it a trek across the vast stretches of rolling hills or the expedition to the summit of majestic peaks, we are here to help you reclaim freedom and wilderness. Established back in 2010 AD, we have already aided a generation of nature enthusiasts to discover the bewildering beauty and the incomparable splendor of the Himalayas. And if you have cravings to get in touch with nature, dive deep inside its beauty, and get back, rejuvenated, Seven Summit Treks welcomes you to Nepal.
      </div>

      <Footer />
    </section>
  );
}
