import Logo from "../../assets/whiteLogo.png";
import { Icon } from "@iconify/react";
import Company from "./Company";
import { useState } from "react";
import Usefulinfo from "./Usefulinfo";
import Trekking from "./Trekking";
import Expeditions from "./Expeditions";
import Search from "./Search";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [showExpeditions, setShowExpeditions] = useState(false);
  const [showTrekking, setShowTrekking] = useState(false);
  const [showUseful, setShowUseful] = useState(false);

  const [search, setSearch] = useState(false);
  return (
    <>
      <div className="fixed top-0 z-10 flex w-full justify-around items-center p-2 gap-52 bg-[#256195] bg-opacity-70">
        <div className="w-48 ">
          <img src={Logo} alt="" />{" "}
        </div>
        <div className="">
          <ul className="font-poppins font-light flex gap-8 text-white text-lg items-center">
            <Link  to="/" onClick={()=>scrollTo(0,0)}>
              <li className="cursor-pointer">Home</li>
            </Link>
            <li
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
              className={`cursor-pointer flex items-center gap-1  h-20`}
            >
              Company
              <Icon width={13} icon="teenyicons:down-outline" />
            </li>
            <li
              onMouseEnter={() => setShowExpeditions(true)}
              onMouseLeave={() => setShowExpeditions(false)}
              className="cursor-pointer flex items-center gap-1 h-20"
            >
              Expeditions <Icon width={13} icon="teenyicons:down-outline" />
            </li>
            <li
              onMouseEnter={() => setShowTrekking(true)}
              onMouseLeave={() => setShowTrekking(false)}
              className="cursor-pointer flex items-center gap-1 h-20"
            >
              Trekking
              <Icon width={13} icon="teenyicons:down-outline" />
            </li>
            <li
              onMouseEnter={() => setShowUseful(true)}
              onMouseLeave={() => setShowUseful(false)}
              className="cursor-pointer flex items-center gap-1 h-20"
            >
              <span className="inline-block">Useful Info</span>{" "}
              <Icon width={13} icon="teenyicons:down-outline" />
            </li>
            <li className="cursor-pointer flex items-center gap-1">
              <span className="inline-block">Other Activities</span>{" "}
              <Icon width={13} icon="teenyicons:down-outline" />
            </li>
            <li>Contact Us</li>
            <li
              className="cursor-pointer"
              onClick={() => {
                setSearch(true);
                console.log(search);
              }}
            >
              <Icon icon="iconamoon:search-light" />
            </li>
          </ul>
        </div>
      </div>

      {show && <Company setShow={setShow} />}
      {showUseful && <Usefulinfo setShowUseful={setShowUseful} />}
      {showTrekking && <Trekking setShowTrekking={setShowTrekking} />}

      {showExpeditions && (
        <Expeditions setShowExpeditions={setShowExpeditions} />
      )}

      {search && <Search setSearch={setSearch} />}
    </>
  );
}
