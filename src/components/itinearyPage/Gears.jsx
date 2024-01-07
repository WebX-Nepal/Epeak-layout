import { Icon } from "@iconify/react";

export default function Gears() {
  return (
    <div className="mt-16">
    <div className="flex items-center gap-2">
      <Icon color="#215D91" width={30} icon="fa:gears" />
      <h4 className="uppercase whitespace-nowrap text-2xl font-Cormorant font-semibold">
        gears list
      </h4>
      <div className="w-full">
        <hr />
      </div>
    </div>

    <div className="mt-8 h-[30vh] gap-5 grid grid-cols-2">
      <div className="flex justify-center items-center bg-[url('https://images.unsplash.com/photo-1514281427873-10a6c9733091?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
        <p className="text-slate-100 text-xl font-poppins font-bold">
          Gear Guide Book
        </p>
      </div>
      <div className="flex justify-center items-center  bg-[url('https://images.unsplash.com/photo-1501535033-a594139be346?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
        <p className="text-slate-100 text-xl font-poppins font-bold">
          Printable Gear Checklist
        </p>
      </div>
    </div>
  </div>
  )
}
