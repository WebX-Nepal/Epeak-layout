// import { ReactComponent as Mountains } from "./mountainSVG.svg";
// import CustomLogo from "./CustomLogo";
// import allHimal from "./allHimal.jpg";

import { useState } from "react";
import dhaulagiri from "./dhaulagiri.svg";
import everest from "./everest.svg";
import k2 from "./k2.svg";
import kangchenjunga from "./kangchenjunga.svg";
import lhotse from "./lhotse.svg";
import makalu from "./makalu.svg";
import Chooyu from "./Chooyu.svg";
import "./peak.css";
import Mcard from "./Mcard";

export const Eight = () => {
  const [showDhaulagiri, setShowDhulagiri] = useState(false);
  const [showEverest, setShowEverest] = useState(false);
  const [showK2, setShowK2] = useState(false);
  const [showKangchenjunga, setShowKangchenjunga] = useState(false);
  const [showLhotse, setShowLhotse] = useState(false);
  const [showMakalu, setShowMalaku] = useState(false);
  const [showChooyu, setShowChooyu] = useState(false);
  const [showManaslu, setShowManaslu] = useState(false);

  return (
    <section className={`w-full    flex items-center relative`}>
      <div className="px-40 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 border w-full">
        <div
          className="w-[220px] cursor-pointer relative"
          onMouseEnter={() => {
            setShowEverest(true);
          }}
          onMouseLeave={() => {
            setShowEverest(false);
          }}
        >
          <img src={everest} alt="" />
          {showEverest && (
            <Mcard
              name={"Mount Everest"}
              subTitle={"submit your dream with us"}
              height={"8848.86"}
            />
          )}
        </div>
        {/* ss */}

        <div
          className="w-[220px] cursor-pointer relative"
          onMouseEnter={() => {
            setShowDhulagiri(true);
          }}
          onMouseLeave={() => {
            setShowDhulagiri(false);
          }}
        >
          {showDhaulagiri && (
            <Mcard
              name={"Dhaulagiri"}
              subTitle={"submit your dream with us"}
              height={" 8167"}
            />
          )}
          <img src={dhaulagiri} alt="" />
        </div>
        <div
          className="w-[220px] cursor-pointer relative"
          onMouseEnter={() => {
            setShowKangchenjunga(true);
          }}
          onMouseLeave={() => {
            setShowKangchenjunga(false);
          }}
        >
          {showKangchenjunga && (
            <Mcard
              name={"Kangchenjunga"}
              subTitle={"submit your dream with us"}
              height={" 8007"}
            />
          )}
          <img src={kangchenjunga} alt="" />
        </div>
        <div
          className="w-[220px] cursor-pointer relative"
          onMouseEnter={() => {
            setShowK2(true);
          }}
          onMouseLeave={() => {
            setShowK2(false);
          }}
        >
          {showK2 && (
            <Mcard
              name={"Annapurna"}
              subTitle={"submit your dream with us"}
              height={"  8091"}
            />
          )}
          
          <img src={k2} alt="" />
        </div>
        <div
          className="w-[220px] cursor-pointer relative"
          onMouseEnter={() => {
            setShowLhotse(true);
          }}
          onMouseLeave={() => {
            setShowLhotse(false);
          }}
        >
          {showLhotse && (
            <Mcard
              name={"Lhotse"}
              subTitle={"submit your dream with us"}
              height={"  8077"}
            />
          )}
          <img src={lhotse} alt="" />
        </div>
        <div className="w-[220px] cursor-pointer relative "
        onMouseEnter={() => {
          setShowManaslu(true);
        }}
        onMouseLeave={() => {
          setShowManaslu(false);
        }}>
          <img src={k2} alt="" />
          {showManaslu && (
            <Mcard
              name={"Manaslu"}
              subTitle={"submit your dream with us"}
              height={"  8055"}
            />
          )}
        </div>
        <div
          className="w-[220px] cursor-pointer relative"
          onMouseEnter={() => {
            setShowMalaku(true);
          }}
          onMouseLeave={() => {
            setShowMalaku(false);
          }}
        >
            {showMakalu && (
            <Mcard
              name={"Makalu"}
              subTitle={"submit your dream with us"}
              height={"  8391"}
            />
          )}
          <img src={makalu} alt="" />
        </div>
        <div
          className="w-[220px] cursor-pointer relative"
          onMouseEnter={() => {
            setShowChooyu(true);
          }}
          onMouseLeave={() => {
            setShowChooyu(false);
          }}
        >  {showChooyu && (
          <Mcard
            name={"Annapurna"}
            subTitle={"submit your dream with us"}
            height={"  8291"}
          />
        )}
          <img src={Chooyu} alt="" />
        </div>
      </div>
    </section>
  );
};
