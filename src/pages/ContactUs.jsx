import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import LastFooter from "../components/landingPage/Last";
import range from "./assets/range.jpg";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Select from "react-select";
import contact from "../assets/contact.jpg";
import Snowfall from "react-snowfall";
export default function ContactUs() {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <section>
      <Navbar backgroundTransparent={true} />
      <Snowfall />
      <div
        className="h-[100vh] bg-cover bg-center text-white "
        style={{
          backgroundImage: `url(${contact})`,
        }}
      >
        <div className="px-32 pt-32 flex ">
          <div className=" w-[50%] mx-auto flex flex-col p-8 gap-12 ">
            <h3 className="text-3xl font-semibold "> Contact Us</h3>
            <p className="flex gap-2 items-center">
              {" "}
              <Icon icon="zondicons:location" /> Bhangal, Kathmandu, Nepal
            </p>
            <div className="flex gap-2">
              <Icon className="h-full" width={30} icon="mingcute:phone-fill" />
              <div>
                <p className="thered">+977-9812345678</p>
                <p>+977-9851052525</p>
              </div>
            </div>

            <p className="flex items-center gap-2">
              <Icon icon="material-symbols:mail" />
              info@epeakexpedition.com
            </p>
            <div className="flex gap-4 cursor-pointer">
              <Icon color={"white"} width={24} icon="ic:baseline-facebook" />
              <Icon color={"white"} width={24} icon="lets-icons:insta-fill" />
              <Icon color={"white"} width={24} icon="mdi:twitter" />
              <Icon color={"white"} width={24} icon="mdi:linkedin" />
            </div>
          </div>
          <div className=" w-[50%] flex flex-col">
            <p className="text-3xl w-[60%]">
              Let us know, what’s in your thoughts!
            </p>
            <form action="" className="flex flex-col gap-4  mt-4">
              <div className="te">
                <input
                  className="bg-white bg-opacity-20 lg:w-[60%] rounded-lg p-4  placeholder-white"
                  type="text"
                  placeholder="Fullname"
                  style={{}}
                />
              </div>
              <div>
                <input
                  className="bg-white bg-opacity-20 lg:w-[60%] rounded-lg p-4  placeholder-white "
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  className="bg-white bg-opacity-20 lg:w-[60%] rounded-lg p-4 placeholder-white "
                  type="text"
                  name=""
                  id=""
                  placeholder="from?"
                />
              </div>
              <textarea
                className="bg-white bg-opacity-20  rounded-lg  w-[60%] placeholder-white p-4"
                name=""
                id=""
                cols="10"
                rows="5"
                placeholder="write something.."
              ></textarea>

              <button className="bg-[#273B91] px-5 py-2 w-[200px] rounded-xl">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
