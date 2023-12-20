import { Link } from "react-router-dom";
export default function Mcard({imageLink,name,height,subTitle}) {

  return (
    <div className="w-[330px] cursor-default h-[180px] bg-[#4a97da] rounded-3xl absolute  -top-[140px] flex  p-2">
      <div className="w-[50%]  bg-[url('https://images.unsplash.com/photo-1509883488717-779cd2d85976?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover p bg-center h-full   rounded-3xl">
        <img src="" alt="" />
      </div>
      <div className="text-white text-center py-3 pl-2 p">
        <h3 className="text-lg">{name} </h3>
        <p className="text-sm ">({height} meters) </p>
        <p className="text-xs ">{subTitle} </p>

        <Link to="/everest">
        <button className="bg-white text-[#4a97da] rounded-3xl px-3 py-1 mt-4">
          Explore more
        </button>
        </Link>
      </div>
    </div>
  );
}
