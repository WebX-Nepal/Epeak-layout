/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar/Navbar";
import LastFooter from "../components/landingPage/Last";
import { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
export default function RequestBooking({selectedPackage}) {
  const [country, setCountry] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [startDate, setStartDate] = useState(new Date());
  const [finalDate, setFinalDate] = useState(new Date());
//   const [selectedPackage, setSelectedPackage] = useState(null);

//   const [tripList, selectTripList] = useState(true);
  const changeHandler = (value) => {
    setCountry(value);
  };


  const reqTitle = useSelector((state)=>state.requestBooking)
  console.log(reqTitle.requestTitle
    ,"from req booking ")
  return (
    <section className="bg-[#f7f7f7]">
      <Navbar />

      <div className="p-32 ">
        <h3 className="text-4xl  font-semibold mb-4">Personal Detail</h3>
        <div></div>
        <form action="" className="bg-white p-16 flex flex-col gap-4 ">
          <div className="grid grid-cols-2 gap-16">
            <div className="flex flex-col">
              <label htmlFor="">Name:</label>
              <input type="" placeholder="Full Name*" className="border h-10" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Email:</label>
              <input
                type=""
                placeholder="Email Address*"
                className="border h-10"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16">
            <div className="flex flex-col">
              <label htmlFor="">Phone:</label>
              <input
                type=""
                placeholder="Phone Number*"
                className="border h-10"
              />
            </div>

            <div>
              <label htmlFor="">Country</label>
              <Select
                options={options}
                value={country}
                onChange={changeHandler}
              />
            </div>
          </div>
          {/* Trip */}
          <div>
            <h3 className="text-2xl font-semibold mb-2"> Trip Detail</h3>
            <div className="flex gap-4 items-center ">
              <label htmlFor="" className="font-semibold">Your Package</label>
              <input
                type="text"
                value={reqTitle.requestTitle}
                className="border border-green-400 h-10 lg:w-[70%]"
              />
            </div>
          </div>

          <div className="flex gap-32">
            <div className="flex items-center ">
              <label htmlFor="">Arrival Date</label>
              <DatePicker
                className="border border-black ml-2  outline-blue-400 p-1 "
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="">Final Depature Date </label>
              <DatePicker
                className="border border-black  outline-blue-400 p-1"
                selected={finalDate}
                onChange={(date) => setFinalDate(date)}
                minDate={new Date()}
              />
            </div>
          </div>
          <div>
            <input type="checkbox" />{" "}
            <label htmlFor=""> I accept terms and Conditions</label>
          </div>

          <button className="bg-[#273B91] max-w-xs text-white px-5 py-2 rounded-xl">
            Submit
          </button>
        </form>
      </div>
      <LastFooter />
    </section>
  );
}
