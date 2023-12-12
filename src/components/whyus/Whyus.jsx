import customer from "./customer.png";
import guide from "./guide.png";
import reliable from "./reliable.png";
import wealth from "./wealth.png";

export default function Whyus() {
  return (
    <div className="lg:h-[90vh] ">
      <div className="p-16 flex justify-center items-start  font-poppins font-bold ">
        <div className="  w-[25%]">
          <div className="flex flex-col gap-2 text-[1.1rem]  ">
            <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center border-2">
              <div className="w-36 h-36 border-2 rounded-full p-10 bg-[#f7f7f7]">
                <img
                  src={wealth}
                  alt=""
                  className="w-full h-full object-contain "
                />
              </div>
            </div>
            <h4>Wealth Of Expericence</h4>
          </div>
          <div className=" flex flex-col items-end  justify-end gap-1 ">
            
              <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center border-2 ">
                <div className="w-36 h-36 border-2 rounded-full p-10 bg-[#f7f7f7] ">
                  <img
                    src={reliable}
                    alt=""
                    className="w-full h-full object-contain "
                  />
                </div>
              </div>
              <h4 className="text-[1.1rem]">Reliable And Credible</h4>{" "}
            
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center justify-center font-poppins">
          <h2 className="font-Cormorant font-semibold text-6xl">Why Us?</h2>
          <h4 className="text-[#fab40a] text-lg font-bold">
            We focus on Safety and Quality Service !
          </h4>
          <button className="bg-[#FAB40A] text-slate-100 rounded-md px-8 py-3 uppercase">View all</button>
        </div>
        <div className=" w-[25%]">
          <div className="flex flex-col gap-2 text-[1.1rem]">
            <div className=" flex flex-col  items-end">
              <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center border-2 ">
                <div className="w-36 h-36 border-2 rounded-full p-10 bg-[#f7f7f7]">
                  <img
                    src={guide}
                    alt=""
                    className="w-full h-full object-contain "
                  />
                </div>
              </div>
              <h4>A Huge Team Of Guides</h4>{" "}
            </div>
          </div>
          <div className="flex flex-col gap-2 text-[1.1rem]">
            <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center border-2">
              <div className="w-36 h-36 border-2 rounded-full p-10 bg-[#f7f7f7]">
                <img
                  src={customer}
                  alt=""
                  className="w-full h-full object-contain "
                />
              </div>
            </div>
            <h4>Dedicated Customer Support</h4>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
