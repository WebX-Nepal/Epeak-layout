export default function DetailFirst({title,subtitle}) {
  return (
    <div className=" h-[100vh] w-full bg-[url('https://images.unsplash.com/photo-1437382944886-45a9f73d4158?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg- ">
      <div className="h-full w-full bg-black/30  flex flex-col justify-end px-40 py-28 gap-8 ">
        <h2 className="font-poppins font-semibold text-5xl text-slate-100">
         {title}
        </h2>
        <p className="font-poppins text-2xl font-light lg:w-[50%]  text-slate-200">
        
        {subtitle}
        </p>
      </div>
    </div>
  );
}
