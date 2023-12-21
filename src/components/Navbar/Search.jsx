export default function Search({ setSearch }) {
  return (
    <div className="absolute left-0 flex justify-center  items-center flex-col text-white  bg-opacity-75 bg-[#023047] z-10 top-28  w-full  h-[50vh] bg-black/70 ">
      <p>Seach Here !</p>
      <input className="w-64 text-black" width={20} type="text" />

      <p className="cursor-pointer px-2 py-1" onClick={() => setSearch(false)}>
        close
      </p>
    </div>
  );
}
