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
    <section>
      <Navbar />

      <div className="p-32">
        <h3>Personal Detail</h3>
        <form action="">
          <div>
            <label htmlFor="">Name:</label>
            <input type="" placeholder="Full Name*" />
          </div>
          <div>
            <label htmlFor="">Email:</label>
            <input type="" placeholder="Email Address*" />
          </div>
          <div>
            <label htmlFor="">Phone:</label>
            <input type="" placeholder="Phone Number*" />
          </div>
          <div>
            <label htmlFor="">Country:</label>
            <input type="" placeholder="Address*" />
          </div>

          <div>
            <label htmlFor="">Country</label>
            <Select
              options={options}
              value={country}
              onChange={changeHandler}
            />
          </div>
          {/* Trip */}
          <div>
            <h3> Trip Detail</h3>
            <div onClick={() => selectTripList(true)}>
              <input type="radio" name="trip"  />{" "}
            </div>
            <label htmlFor="">Expedition</label>

            <div onClick={() => selectTripList(false)}>
              <input type="radio" name="trip"  />{" "}
              
            </div>
            <label htmlFor="">Trekking</label>
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

          <div>
            <label htmlFor="">Arrival Date</label>
            <DatePicker
              className="border border-black"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div>
            <label htmlFor="">Final Depature Date </label>
            <DatePicker
              className="border border-black"
              selected={finalDate}
              onChange={(date) => setFinalDate(date)}
              minDate={new Date()}
            />
          </div>
          <div>
            <input type="checkbox" />{" "}
            <label htmlFor=""> I accept terms and Conditions</label>
          </div>

          <button className="bg-[#273B91] text-white px-5 py-2 rounded-xl">
            Submit
          </button>
        </form>
      </div>
      <LastFooter />
    </section>
  );
}
