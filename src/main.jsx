import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
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
import ChairmanMessage from "./pages/company/ChairmanMessage.jsx";
import OurTeam from "./pages/company/OurTeam.jsx";
import AnnapurnaRegion from "./pages/Trekking/AnnapurnaRegion.jsx";
import FiveErs from "./pages/Expedition/5000res/FiveErs.jsx";
import SixErs from "./pages/Expedition/6000ers/SixErs.jsx";
import SevenErs from "./pages/Expedition/7000ers/SevenErs.jsx";
import EightErs from "./pages/Expedition/8000res/EightErs.jsx";
import EverestRolwaling from "./pages/Trekking/EverestRolwaling.jsx";
import LangtangHelambu from "./pages/Trekking/LangtangHelambu.jsx";
import MustangTrek from "./pages/Trekking/MustangTrek.jsx";
import GorkhaManasluTrek from "./pages/Trekking/GorkhaManasluTrek.jsx";
import RestrictedAreaTrek from "./pages/Trekking/RestrictedAreaTrek.jsx";
import EasternNepalTrek from "./pages/Trekking/EasternNepalTrek.jsx";
import WesternNepalTrek from "./pages/Trekking/WesternNepalTrek.jsx";
import TransHimalayaTrek from "./pages/Trekking/TransHimalayaTrek.jsx";
import Rafting from "./pages/OtherActivities/Rafting.jsx";
import Certificate from "./pages/company/Certificate.jsx";
import Blog from "./pages/company/Blog.jsx";
import Attorney from "./pages/company/Attorney.jsx";
import BookNow from "./pages/BookNow.jsx";
import RequestBooking from "./pages/RequestBooking.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    {/* <Navbar/> */}

    <Routes>
      <Route element={<App />} path="/"></Route>
      <Route element={<Everestdetails />} path="/everest"></Route>
      <Route element={<Dhaulagiri />} path="/dhaulagiri"></Route>
      {/* useful info */}
      <Route element={<GearList />} path="/gearlist"></Route>
      <Route
        element={<TermsAndConditions />}
        path="/terms-and-conditon"
      ></Route>
      <Route element={<Garbage />} path="/garbage"></Route>
      <Route element={<TravelAdvisory />} path="/travel-advisory"></Route>
      <Route element={<FixedDeparture />} path="/fixed-departure"></Route>
      <Route element={<VisaProcedure />} path="/visa-procedure"></Route>
      <Route
        element={<InquiryBookPayment />}
        path="/inquiry-booking-payment"
      ></Route>
      <Route element={<FAQ></FAQ>} path="/FAQ"></Route>

      {/* Other activities */}
      <Route element={<HeliTours />} path="/helitours"></Route>
      <Route element={<Paragliding />} path="/paragliding"></Route>
      <Route element={<MountaibBike />} path="/mountain-bike"></Route>
      <Route element={<CityTour />} path="/citytour"></Route>
      <Route element={<Rafting />} path="/rafting" />
      {/* company */}
      <Route element={<Aboutus />} path="/aboutus"></Route>
      <Route element={<ContactUs />} path="/contactus"></Route>
      <Route element={<ChairmanMessage />} path="/chairman-message"></Route>
      <Route element={<OurTeam />} path="/our-team" />
      <Route element={<Certificate />} path="/certificates" />
      <Route element={<Blog />} path="/blog" />
      <Route element={<Attorney />} path="/attorney" />
      {/* Trekking */}
      <Route element={<AnnapurnaRegion />} path="/trekking/annapurna-region" />
      <Route
        element={<EverestRolwaling />}
        path="/trekking/everest-rolwaling"
      />
      <Route element={<LangtangHelambu />} path="/trekking/langtang-helambu" />
      <Route element={<MustangTrek />} path="/trekking/mustang" />
      <Route element={<GorkhaManasluTrek />} path="/trekking/gorkha-manaslu" />

      <Route element={<RestrictedAreaTrek />} path="/trekking/restrictedArea" />
      <Route element={<EasternNepalTrek />} path="/trekking/easternNepal" />
      <Route element={<WesternNepalTrek />} path="/trekking/westernNepal" />
      <Route element={<TransHimalayaTrek />} path="/trekking/trans-himalaya" />

      {/* expedtion */}
      <Route element={<FiveErs />} path="/expedition/5000ers" />
      <Route element={<SixErs />} path="/expedition/6000ers" />
      <Route element={<SevenErs />} path="/expedition/7000ers" />
      <Route element={<EightErs />} path="/expedition/8000ers" />


    {/* others */}
    <Route element={<BookNow />} path="/book-now" />
    <Route element = {<RequestBooking/>} path="/request-booking"  />
    </Routes>


    {/* 
    
    </React.StrictMode>
    */}
  </BrowserRouter>
);
