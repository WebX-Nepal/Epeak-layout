import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, Routes,BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Everestdetails from "./pages/Everestdetails.jsx";
import Dhaulagiri from "./pages/Dhaulagiri.jsx";
import GearList from "./pages/UsefulInfo/GearList.jsx";
import TermsAndConditions from "./pages/UsefulInfo/TermsAndConditions.jsx";
import Garbage from "./pages/UsefulInfo/Garbage.jsx";
import TravelAdvisory from "./pages/UsefulInfo/TravelAdvisory.jsx";
import FixedDeparture from "./pages/UsefulInfo/FixedDeparture.jsx";
import VisaProcedure from "./pages/UsefulInfo/VisaProcedure.jsx";
import InquiryBookPayment from "./pages/UsefulInfo/InquiryBookPayment.jsx";
import FAQ from "./pages/UsefulInfo/FAQ.jsx";
import HeliTours from "./pages/OtherActivities/HeliTours.jsx";
import Paragliding from "./pages/OtherActivities/Paragliding.jsx";
import MountaibBike from "./pages/OtherActivities/MountaibBike.jsx";
import CityTour from "./pages/OtherActivities/CityTour.jsx";
import Aboutus from "./pages/company/Aboutus.jsx";
import ContactUs from "./pages/ContactUs.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <Navbar/> */}
      <Routes>
        <Route element={<App />} path="/"></Route>
        <Route element={<Everestdetails/>} path="/everest"></Route>
        <Route element={<Dhaulagiri/>} path="/dhaulagiri"></Route>
        {/* useful info */}
        <Route element={<GearList/>} path="/gearlist"></Route>
        <Route element={<TermsAndConditions/>} path="/terms-and-conditon"></Route>
        <Route element={<Garbage/>} path="/garbage"></Route>
        <Route element={<TravelAdvisory/>} path="/travel-advisory"></Route>
        <Route element={<FixedDeparture/>} path="/fixed-departure"></Route>
        <Route element={<VisaProcedure/>} path="/visa-procedure"></Route>
        <Route element={<InquiryBookPayment/>} path="/inquiry-booking-payment"></Route>
        <Route element={<FAQ></FAQ>} path="/FAQ"></Route>

        {/* Other activities */}
        <Route element={<HeliTours/>} path="/helitours"></Route>
        <Route element={<Paragliding/>} path="/paragliding"></Route>
        <Route element={<MountaibBike/>} path="/mountain-bike"></Route>
        <Route element={<CityTour/>} path="/citytour"></Route>
        {/* company */}
        <Route element={<Aboutus/>} path="/aboutus"></Route>
        <Route element={<ContactUs/>} path="/contactus"></Route>
        
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
