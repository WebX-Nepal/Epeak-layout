// import { ReactComponent as Mountains } from "./mountainSVG.svg";
// import CustomLogo from "./CustomLogo";
// import allHimal from "./allHimal.jpg";

import { useState } from "react";
import dhaulagiri from "./dhaulagiri.svg";
import "./peak.css";
import Mcard from "./Mcard";

export const Eight = () => {
  const [showDhaulagiri, setShowDhulagiri] = useState(false);
  return (
    <section className={`w-full h-[100vh]  bg-[#f7f7f7] flex items-center relative`}>
      <div className="px-40 flex flex-wrap">
        <div
          className="w-[220px] cursor-pointer "
          onMouseEnter={() => {
            setShowDhulagiri(true);
          }}
          onMouseLeave={() => {
            setShowDhulagiri(false);
          }}
        >
          <img src={dhaulagiri} alt="" />
          {showDhaulagiri && <Mcard />}
        </div>
        {/* ss */}

        <div
          className="w-[220px] cursor-pointer "
          
        >
          <img src={dhaulagiri} alt="" />
          {/* {showDhaulagiri && <Mcard />} */}
        </div>
        <div
          className="w-[220px] cursor-pointer "
          
        >
          <img src={dhaulagiri} alt="" />
          {/* {showDhaulagiri && <Mcard />} */}
        </div>
        <div
          className="w-[220px] cursor-pointer "
        
        >
          <img src={dhaulagiri} alt="" />
          {/* {showDhaulagiri && <Mcard />} */}
        </div>
        <div
          className="w-[220px] cursor-pointer "
       
        >
          <img src={dhaulagiri} alt="" />
          {/* {showDhaulagiri && <Mcard />} */}
        </div>
        <div
          className="w-[220px] cursor-pointer "
       
        >
          <img src={dhaulagiri} alt="" />
          {/* {showDhaulagiri && <Mcard />} */}
        </div>
        <div
          className="w-[220px] cursor-pointer "
         
        >
          <img src={dhaulagiri} alt="" />
          {/* {showDhaulagiri && <Mcard />} */}
        </div>
      </div>
    </section>
  );
};
