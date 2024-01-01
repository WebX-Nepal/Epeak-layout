import Navbar from "../../../components/Navbar/Navbar";
import expedition from "../assets/expedition.jpg";
export default function ExpeditionHero({title}) {
  return (
    <div>
      <Navbar />

      <div
        className="h-[100vh] bg-cover bg-center flex items-end "
        style={{ backgroundImage: `url(${expedition})` }}
      >
        <div className="h-[70%]  flex items-end my-auto">
          <div className="bg-black/30  text-white text-5xl ml-32 ">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}
