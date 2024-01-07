import Navbar from "../components/Navbar/Navbar";
import LastFooter from "../components/landingPage/Last";
import { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
export default function BookNow() {
  const [country, setCountry] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [startDate, setStartDate] = useState(new Date());
  const [finalDate, setFinalDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState(null);

  const [tripList, selectTripList] = useState(true);
  const changeHandler = (value) => {
    setCountry(value);
  };
  const expeditionList = [
    { value: "Mount Everest Expedition", label: "Mount Everest Expedition" },
    { value: "Annapurna Circuit ", label: "Annapurna Circuit " },
    { value: "Makalu Expedition", label: "Makalu Expedition" },
    { value: "Kanchenjunga Expedition", label: "Kanchenjunga Expedition" },
    { value: "Lhotse Expedition", label: "Lhotse Expedition" },
    { value: "Manaslu Expedition", label: "Manaslu Expedition" },
    { value: "Cho Oyu Expedition", label: "Cho Oyu Expedition" },
    { value: "Dhaulagiri Expedition", label: "Dhaulagiri Expedition" },
    { value: "Ganesh Himal Expedition", label: "Ganesh Himal Expedition" },
    { value: "Nanga Parbat Expedition", label: "Nanga Parbat Expedition" },
    { value: "Ama Dablam Expedition", label: "Ama Dablam Expedition" },
    { value: "Baruntse Expedition", label: "Baruntse Expedition" },
    { value: "Pumori Expedition", label: "Pumori Expedition" },
    { value: "Island Peak Expedition", label: "Island Peak Expedition" },
    { value: "Mera Peak Expedition", label: "Mera Peak Expedition" },
    {
      value: "Solu-Khumbu Icefall Expedition",
      label: "Solu-Khumbu Icefall Expedition",
    },
    {
      value: "Langtang Valley Exploration",
      label: "Langtang Valley Exploration",
    },
    {
      value: "Rolwaling Valley Expedition",
      label: "Rolwaling Valley Expedition",
    },
    { value: "Nepal-Tibet Exploration", label: "Nepal-Tibet Exploration" },
    {
      value: "Shey Phoksundo National Park Exploration",
      label: "Shey Phoksundo National Park Exploration",
    },
  ];

  const trekkingList = [
    { value: "Everest Base Camp Trek", label: "Everest Base Camp Trek" },
    { value: "Annapurna Circuit Trek", label: "Annapurna Circuit Trek" },
    { value: "Langtang Valley Trek", label: "Langtang Valley Trek" },
    { value: "Manaslu Circuit Trek", label: "Manaslu Circuit Trek" },
    { value: "Gokyo Lakes Trek", label: "Gokyo Lakes Trek" },
    { value: "Annapurna Base Camp Trek", label: "Annapurna Base Camp Trek" },
    { value: "Upper Mustang Trek", label: "Upper Mustang Trek" },
    {
      value: "Kanchenjunga Base Camp Trek",
      label: "Kanchenjunga Base Camp Trek",
    },
    { value: "Everest Three Passes Trek", label: "Everest Three Passes Trek" },
    { value: "Dolpo Trek", label: "Dolpo Trek" },
    { value: "Makalu Base Camp Trek", label: "Makalu Base Camp Trek" },
    { value: "Helambu Trek", label: "Helambu Trek" },
    { value: "Rara Lake Trek", label: "Rara Lake Trek" },
    { value: "Pikey Peak Trek", label: "Pikey Peak Trek" },
    { value: "Tamang Heritage Trail", label: "Tamang Heritage Trail" },
  ];

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
            <div className="flex gap-16">
              <div className="flex items-center gap-1">
                <div onClick={() => selectTripList(true)}>
                  <input type="radio" name="trip" className="cursor-pointer" />{" "}
                </div>
                <label htmlFor="">Expedition</label>
              </div>

              <div className="flex items-center gap-1">
                <div onClick={() => selectTripList(false)}>
                  <input type="radio" name="trip" className="cursor-pointer" />{" "}
                </div>
                <label htmlFor="">Trekking</label>
              </div>
            </div>
          </div>
          {tripList && (
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={expeditionList}
            />
          )}
          {!tripList && (
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={trekkingList}
            />
          )}
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
