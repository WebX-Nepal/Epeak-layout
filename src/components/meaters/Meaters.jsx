export default function Meaters() {
  return (
    <div className="p-16 flex  flex-wrap justify-center w-full m-auto  gap-4">
      <div className="h-[70vh] w-[310px]  overflow-hidden ">
        <img
          src="https://images.pexels.com/photos/1576939/pexels-photo-1576939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "
          className="h-[100%] w-full object-cover cursor-pointer hover:scale-110  transition-all duration-500  hover:contrast-125 "
          alt=""
        />
      </div>
      <div className="h-[70vh] w-[310px] ">
        <img
          src="https://images.pexels.com/photos/1081111/pexels-photo-1081111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="h-[100%] w-full object-cover cursor-pointer"
          alt=""
        />
      </div>
      <div className="h-[70vh] w-[310px] ">
        <img
          src="https://images.pexels.com/photos/3848197/pexels-photo-3848197.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="h-[100%] w-full object-cover cursor-pointer"
          />
      </div>
      <div className="h-[70vh] w-[310px] ">
        <img
          src="https://images.pexels.com/photos/868096/pexels-photo-868096.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="h-[100%] w-full object-cover cursor-pointer"

        />
      </div>
    </div>
  );
}
