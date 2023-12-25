import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import range from "./assets/range.jpg";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Select from "react-select";
export default function ContactUs() {
  const options = [
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
    { value: "excellent", label: "Excellent" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <section>
      <Navbar />

      <div
        style={{
          backgroundImage: `url(${range})`,
        }}
        className=" h-[90vh] bg-center bg-cover"
      >
        <div className=" lg:w-[50%]  px-32 flex flex-col justify-center text-white  gap-4 h-[80%]">
          <h4 className="text-4xl">Contact Us</h4>
          <p>
            We will be more than happy to assist you. Please feel free to make a
            call with your queries or fill out the contact form and we’ll get
            back to you as soon as possible!!
          </p>
        </div>
      </div>

      <div className="px-40 py-32 bg-[#f7f7f7]">
        <div className="grid grid-cols-2 gap-16 font-Cormorant font-semibold">
          <div className="h-[200px] border bg-white shadow-xl p-8 text-3xl  ">
            Location
          </div>
          <div className="h-[200px] border bg-white shadow-xl p-8 text-3xl">
            Contact at
          </div>
          <div className="h-[200px] border bg-white shadow-xl p-8 text-3xl ">
            Email us
          </div>
          <div className="h-[200px] border bg-white shadow-xl p-8 text-3xl">
            Post Box No.
          </div>
        </div>

        <div className=" mt-32 flex items-center flex-col justify-center gap-4">
          <h3 className="font-Cormorant font-bold text-4xl">
            Follow us on social media
          </h3>
          <div className=" flex gap-16">
            <Icon
              width={30}
              color="214B71"
              className="cursor-pointer"
              icon="ic:baseline-facebook"
            />
            <Icon
              width={30}
              color="214B71"
              className="cursor-pointer"
              icon="mdi:youtube"
            />
            <Icon
              width={30}
              color="214B71"
              className="cursor-pointer"
              icon="pajamas:twitter"
            />
            <Icon
              width={30}
              color="214B71"
              className="cursor-pointer"
              icon="ri:instagram-fill"
            />
          </div>
        </div>

        <div className="border mt-24">
          <div className="p-16 flex flex-col gap-8">
            <div className="flex border  gap-8">
              <div className="flex w-[50%] flex-col">
                <label htmlFor="">First Name</label>
                <input type="text" className="" />
              </div>
              <div className="flex w-[50%]  flex-col">
                <label htmlFor="">Surname</label>
                <input type="text" />
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex w-[50%]  flex-col">
                <label htmlFor="">Email</label>
                <input type="text" />
              </div>
              <div className="flex w-[50%]    flex-col">
                <label htmlFor="">Contact Number</label>
                <input type="text" />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Adventure Intrested In</label>
              <input type="text" />
            </div>

            <div>
<label htmlFor="">
Experience Level
</label>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              className=" focus:outline-fuchsia-600"
              classNames={{
                control: (state) =>
                  state.isFocused ? 'border-red-600' : 'border-grey-300',
              }}
              />
              </div>

            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
