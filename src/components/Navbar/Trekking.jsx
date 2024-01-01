import { Link } from "react-router-dom";
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
      <div className="flex flex-col gap-2  cursor-pointer capitalize">
        <ul className="text-base  flex flex-col gap-4">
          <Link to="/trekking/annapurna-region">
          <li className="border-b-2 whitespace-nowrap "> Annapurna Trekking</li>
          </Link>
          <Link to={"/trekking/everest-rolwaling"}>
          <li className="border-b-2 whitespace-nowrap"> everest and rolwaling trekking </li>
          </Link>
          <Link to={"/trekking/langtang-helambu"}>
          <li className="border-b-2 whitespace-nowrap"> langtang & helambu trek </li>
          </Link>
          <Link to={"/trekking/mustang"}>
          <li className="border-b-2 whitespace-nowrap"> mustang trekking </li>
          </Link>
          <Link to={"/trekking/gorkha-manaslu"}>
          <li className="border-b-2 whitespace-nowrap"> gorkha manaslu trek </li>
          </Link>
          <Link to={"/trekking/restrictedArea"}>

          <li className="border-b-2 whitespace-nowrap"> restricted area trekking </li>
          </Link>
          <Link to={"/trekking/easternNepal" }>
          <li className="border-b-2 whitespace-nowrap"> eastern nepal trekking </li>
          </Link>
          <Link to={"/trekking/westernNepal"}>
          <li className="border-b-2 whitespace-nowrap"> western nepal trekking </li>
          </Link>
          <Link to={"/trekking/trans-himalaya" }>
          <li className="border-b-2 whitespace-nowrap"> trans himalaya trekking </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
