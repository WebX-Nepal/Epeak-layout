import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import bgImage from "./assets/mountains.jpg";
export default function Aboutus() {
  return (
    <section>
      <Navbar />
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="h-[100vh] bg-center"
      >
        <div className="w-[50%] text-white  h-full flex flex-col gap-4 px-32 justify-center">
          <p className="text-3xl">Leading Expedition Operator</p>
          <h4 className="text-5xl font-Cormorant font-bold">Why Epeak is born?</h4>


          <p className="text-lg text-justify">
            
            Epeak is a Nepalese adventure operator, specializing in 8000ers and
            offers the major logistics in the Himalayas. Established by four
            mountaineer brothers, we have a network of experienced professionals
            spread across Nepal, who will strive to make your mountaineering and
            trekking experience worthwhile.
          </p>
        </div>
      </div>
      <div className="px-40 py-32">
          <h2 className="text-5xl font-Cormorant">Our Vision</h2>
      Epeak is established under Company Act 2053 and Tourism Act 2035 (Registration No: 68492/066/067. VAT No: 304311183). The company is licensed by the Tax Department of Nepal as a taxpayer, and also by the Central Bank of Nepal as a foreign currency acceptable company from foreigners and members of national and international tourism umbrella organizations. We follow the rules and regulations set forth by the government and strongly condemn any illegal activities that might take place within the nation. We are committed to the security of our guests and under no circumstance put the lives of our guests in jeopardy. It is a reliable, reputed, genuine, and authentic company you can count on.
          <h2 className="text-5xl font-Cormorant">Our Mission</h2>
      </div>
      <Footer/>
    </section>
  );
}
