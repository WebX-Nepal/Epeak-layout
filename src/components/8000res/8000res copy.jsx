import peak1 from "./peak1.svg";
import peak2 from "./peak2.svg";
import peak3 from "./peak3.svg";
import peak4 from "./peak4.svg";
import "./peak.css";
const peaks = [
  {
    peakName: "Mount Everest",
    peakHeight: "8448",
    peakPhoto: peak1,
  },
  {
    peakName: "Mount K2",
    peakHeight: "8611",
    peakPhoto: peak2,
  },
  {
    peakName: "Kanchenjunga",
    peakHeight: "8586",
    peakPhoto: peak3,
  },
  {
    peakName: "Lhostse",
    peakHeight: "8516",
    peakPhoto: peak4,
  },
  {
    peakName: "Makalu",
    peakHeight: "8481",
    peakPhoto: peak3,
  },
  {
    peakName: "Mount Everest",
    peakHeight: "8448",
    peakPhoto: peak1,
  },
  {
    peakName: "Mount K2",
    peakHeight: "8611",
    peakPhoto: peak2,
  },
  {
    peakName: "Kanchenjunga",
    peakHeight: "8586",
    peakPhoto: peak3,
  },
  {
    peakName: "Lhostse",
    peakHeight: "8516",
    peakPhoto: peak1,
  },
  {
    peakName: "Makalu",
    peakHeight: "8481",
    peakPhoto: peak3,
  },
];

export const Eight = () => {
  return (
    <section
      id="eight"
      className="scro h-[110vh] overflow-scroll  w-full bg-[#f7f7f7] font-poppins p-16 "
    >
      <div className="flex relative scro">
        <div className="w-[50%] flex flex-col justify-center items-center gap-12 ">
          <h2 className="text-5xl font-Cormorant font-semibold">
            <span className="font-poppins font-normal">1</span>4x8000'ers
          </h2>

          {peaks.map((peak) => {
            return (
              <div
                key={peak.peakName}
                className=" flex  justify-center items-center gap-4"
              >
                <div className="w-[100px] h-[100px] border-2 bg-white flex justify-center rounded-full p-2">
                  <img src={peak.peakPhoto} alt="" className="object-contain" />
                </div>
                <div>
                  <span className="text-sm">{peak.peakHeight}m </span>
                  <h3 className="text-xl font-semibold">{peak.peakName} </h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-[59%] ">
          <div className=" w-[45vw] h-[60vh] sticky top-12 bg-cover rounded-3xl bg-[url('https://images.unsplash.com/3/GoWildImages_MtEverest_NEP0555.jpg?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  ">
            <div className="h-full flex flex-col p-12 gap-8 justify-end ">
              <p className="text-white font-poppins text-3xl">
                Mount Everest Expedition Standard | The World's Highest Mountain
                "
              </p>
              <div className="flex gap-4 text-white ">
                <button className="uppercase px-7 py-3  bg-[#FAB40A] w-[30%] rounded-lg">
                  {" "}
                  view details{" "}
                </button>
                <button className="uppercase px-7 py-3 bg-[#1664A4] w-[30%] rounded-lg">
                  {" "}
                  book now{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
