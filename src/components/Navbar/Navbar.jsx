import Logo from "../../assets/whiteLogo.png";
import { Icon } from "@iconify/react";
import Company from "./Company";
import { useState } from "react";
import Usefulinfo from "./Usefulinfo";
import Trekking from "./Trekking";
import Expeditions from "./Expeditions";
import Search from "./Search";
import { Link } from "react-router-dom";
import OtherActivities from "./OtherActivities";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [showExpeditions, setShowExpeditions] = useState(false);
  const [showTrekking, setShowTrekking] = useState(false);
  const [showUseful, setShowUseful] = useState(false);
  const [showActivity, setShowActivity] = useState(false);

  const [search, setSearch] = useState(false);
  return (
    <>
      <div className="fixed backdrop-blur-sm top-0 z-10 flex w-full justify-around items-center px-2 gap-52 bg-[#256195]  bg-opacity-70 ">
        <div className="w-48 p-1  ">
          <img src={Logo} alt="" />{" "}
        </div>

        <div className="lg:hidden">
          <Icon color="white" width={25} icon="pajamas:hamburger" />
        </div>
        <div className="max-lg:hidden">
          <ul className="font-poppins font-light flex gap-6 text-white text-lg items-center ">
            <Link to="/" onClick={() => scrollTo(0, 0)}>
              <li className="cursor-pointer">Home</li>
            </Link>
            <li
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
              className={`cursor-pointer flex items-center gap-1  h-20 `}
            >
              Company
              <Icon width={13} icon="teenyicons:down-outline" />
              {show && <Company setShow={setShow} />}
            </li>
            <li
              onMouseEnter={() => setShowExpeditions(true)}
              onMouseLeave={() => setShowExpeditions(false)}
              className="cursor-pointer flex items-center gap-1 h-20"
            >
              Expeditions <Icon width={13} icon="teenyicons:down-outline" />
              {showExpeditions && (
                <Expeditions setShowExpeditions={setShowExpeditions} />
              )}
            </li>
            <li
              onMouseEnter={() => setShowTrekking(true)}
              onMouseLeave={() => setShowTrekking(false)}
              className="cursor-pointer flex items-center gap-1 h-20"
            >
              Trekking
              <Icon width={13} icon="teenyicons:down-outline" />
              {showTrekking && <Trekking setShowTrekking={setShowTrekking} />}
            </li>

            <li
              className="cursor-pointer flex items-center gap-1 h-20 "
              onMouseEnter={() => setShowActivity(true)}
              onMouseLeave={() => setShowActivity(false)}
            >
              <span className="whitespace-nowrap">Other Activities</span>{" "}
              <Icon width={13} icon="teenyicons:down-outline" />
              {showActivity && (
                <OtherActivities setShowActivity={setShowActivity} />
              )}
            </li>
            <li
              onMouseEnter={() => setShowUseful(true)}
              onMouseLeave={() => setShowUseful(false)}
              className="cursor-pointer flex items-center gap-1 h-20 "
            >
              <span className="whitespace-nowrap">Useful Info</span>{" "}
              <Icon width={13} icon="teenyicons:down-outline" />
              {showUseful && <Usefulinfo setShowUseful={setShowUseful} />}
            </li>

            <Link to="/contactus">
              <li className="whitespace-nowrap">Contact Us</li>
            </Link>
            <li className="cursor-pointer" onClick={() => setSearch(!search)}>
              <Icon icon="iconamoon:search-light" />
              {search && <Search setSearch={setSearch} />}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
