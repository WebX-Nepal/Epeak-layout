import Patners from "./patners/Patners";
import wave from "./svg3.png";
export default function Footer() {
  return (
    <footer>
      <div className=" ">
        <img src={wave} alt="" className="  h-10 w-full bg-repeat-x" />
        <div className="bg-[#262626] text-white font-poppins text-sm pb-20">
          <div className="w-[80vw] py-16 m-auto">
            <h3 className="text-5xl mb-8 mt-4 text-center font-Cormorant font-semibold">
              Our Patners
            </h3>
            <Patners />
          </div>
          <hr
            className=" w-full border-[1.3px] my-16 "
            style={{ borderColor: "#E1A74E" }}
          />

          <div className="flex justify-center gap-32 items-start mt-6  ">
            <div className="flex flex-col gap-3 justify-center">
              <h3 className="font-Cormorant text-3xl font-semibold">
                About Us
              </h3>
              <h4>Why with us?</h4>
              <h4>Who we are?</h4>
              <h4>Chairman's Message</h4>
              <h4>About Chairman</h4>
              <h4>Our Team</h4>
              <h4>Certificates & Documents</h4>
              <h4>Reviews</h4>
              <h4>Our Blog</h4>
              <h4>Awards</h4>
              <h4>Our Patrons</h4>
              <h4>Attorney</h4>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-Cormorant text-3xl font-semibold">
                Trekking
              </h3>
              <h4>Annapurna Region</h4>
              <h4>Everest Region</h4>
              <h4>Langtang Region</h4>
              <h4>Manaslu Region</h4>
              <h4>Mustang Region</h4>
              <h4>Dhaulagiri Region</h4>
              <h4>Kanchenjunga Region</h4>
              <h4>Makalu Region</h4>
              <h4>Rolwaling Region</h4>
              <h4>Karakoram Region</h4>
            </div>
            <div className="flex flex-col gap-3 ">
              <h3 className="font-Cormorant text-3xl font-semibold">
                Expeditions
              </h3>
              <h4>8000res</h4>
              <h4>7000res</h4>
              <h4>6000res</h4>
              <h4>7 Submmits</h4>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-Cormorant text-3xl font-semibold">
                Epeak Expeditions
              </h3>
              <h4>Kathmandu Nepal</h4>
              <h4>+977 9812345678</h4>
              <h4>epeak@email.com</h4>
              <p className="w-60">
                Copyright &copy; 2024, Epeak Expeditions. | All Rights Reserved
                | Design & Developed By WebX Nepal.{" "}
              </p>
            </div>
          </div>
       
        </div>
      </div>
    </footer>
  );
}
