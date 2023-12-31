import Logo from "./assets/Logo.png";
import { Icon } from "@iconify/react";
export default function LastFooter() {
  return (
    <footer className="bg-[#f7f7f7] px-32 py-16    ">
      <div className="flex flex-col items-center gap-2">
        <p className="font-semibold ">Welcome to</p>
        <div className="w-[200px]">
          <img src={Logo} alt="" />
        </div>
      </div>

      <div className="mt-16 flex justify-between">
        <div>
          <h3 className="text-lg text-[#26ACE2] mb-2">Company</h3>
          <ul>
            <li>Chairman's Message</li>
            <li>About Us</li>
            <li>Our Team</li>
            <li>Our Blog</li>
            <li>Certificates & Documents</li>
            <li>Attorney</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-[#26ACE2] mb-2">Trekking</h3>
          <ul>
            <li>Annapurna Region</li>
            <li> Everest Region</li>
            <li>Langtang Region</li>
            <li> Manaslu Region</li>
            <li>Mustang Region</li>
            <li>Dhaulagiri Region</li>
            <li>Makalu Region</li>
            <li>Rowling Region</li>
            <li> Karakoram Region</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-[#26ACE2] mb-2">Expedition</h3>
          <ul>
            <li>8000 meters</li>
            <li></li>
            7000 meters
            <li>6000 meters</li>
            <li>5000 meters</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-[#26ACE2] mb-2">Epeak Expedition</h3>
          <ul>
            <li>Kathmandu Nepal</li>
            <li>+977 9812345678</li>
            <li>info@epeakexpedition.com</li>
          </ul>
          <div className="flex  mt-3 gap-2">
            <Icon color="26ACE2" width={25} icon="ic:baseline-facebook" />
            <Icon color="26ACE2" width={25} icon="lets-icons:insta-fill" />
            <Icon color="26ACE2" width={25} icon="pajamas:twitter" />
            <Icon color="26ACE2" width={25} icon="mdi:linkedin" />
          </div>
        </div>
      </div>

      <div className="flex mt-20 justify-between">
        <div>Copyright &copy; 2024, Epeak Expeditions.</div>
        <div>All Rights Reserved</div>
        <div>
          Design & Developed By
          <span className="text-[#273B91]"> WebX.</span>
        </div>
      </div>
    </footer>
  );
}
