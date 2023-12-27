import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ourteam1 from "./assets/outteam.jpg";
export default function OurTeam() {
  return (
    <section>
      <Navbar />

      <div
        className="w-full h-[80vh] "
        style={{
          backgroundImage: `url(${ourteam1})`,
        }}
      ></div>
      <Footer />
    </section>
  );
}
