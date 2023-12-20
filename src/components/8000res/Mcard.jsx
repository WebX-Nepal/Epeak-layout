
export default function Mcard() {
  return (
    <div className="w-[330px] h-[180px] bg-[#4a97da] rounded-3xl absolute  top-0 flex  p-2">
        <div className="w-[50%]  bg-[url('https://images.unsplash.com/photo-1509883488717-779cd2d85976?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover p bg-center h-full   rounded-3xl"> 
            <img src="" alt="" />
        </div>
        <div className="text-white text-center py-3 pl-2 p"> 
            <h3 className="text-lg"> Mount Everest</h3>
            <p className="text-sm ">(8848.86 meters) </p>
            <p className="text-xs ">submit your dream with us </p>
            <button className="bg-white text-[#4a97da] rounded-3xl px-3 py-1 mt-4">Explore more</button>
        </div>
        
    </div>
  )
}
