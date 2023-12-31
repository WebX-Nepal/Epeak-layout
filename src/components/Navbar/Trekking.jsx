export default function Trekking({ setShowTrekking }) {
  const annapurnaRegion = [
    {
      name: "annapurna base camp (ABC) trek",
      photo:
        "https://images.unsplash.com/photo-1627201436373-384e00505886?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "annapurna base camp trek - north",
      photo:
        "https://images.unsplash.com/photo-1627201436373-384e00505886?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: " mardi himal trek",
      photo:
        "https://images.unsplash.com/photo-1627201436373-384e00505886?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div
      onMouseEnter={() => setShowTrekking(true)}
      onMouseLeave={() => setShowTrekking(false)}
      className="absolute   text-black rounded-b-md bg-white z-10 top-20 right-4/4   font-poppins   p-4 flex"
    >
      <div className="flex flex-col gap-2  cursor-pointer">
        <ul className="text-base  flex flex-col gap-4">
          <li className="border-b-2 whitespace-nowrap ">Annapurna Region</li>
          <li className="border-b-2 whitespace-nowrap">Everest Region</li>
          <li className="border-b-2 whitespace-nowrap">Langtang Region</li>
          <li className="border-b-2 whitespace-nowrap">Manaslu Region</li>
          <li className="border-b-2 whitespace-nowrap">Mustang Region</li>
          <li className="border-b-2 whitespace-nowrap">Dhaulagiri Region</li>

          <li className="border-b-2 whitespace-nowrap">Kanchenjunga Region</li>
          <li className="border-b-2 whitespace-nowrap">Makalu Region</li>
          <li className="border-b-2 whitespace-nowrap">Rolwaling Region</li>
          <li className="border-b-2 whitespace-nowrap">Karakoram Region</li>
        </ul>
      </div>
    </div>
  );
}
