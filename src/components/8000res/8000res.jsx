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
      className="   w-full bg-[#f7f7f7] font-poppins p-16 flex  gap-16   "
    >
      <div className="flex gap-16  overflow-auto">
        {peaks.map((peak) => {
          return (
            <div
              key={peak.peakName}
              className="  justify-center items-center  gap-12"
            >
              <div className="w-[100px] h-[100px] border-2 bg-white inline-block  justify-center rounded-full p-2">
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
    </section>
  );
};
