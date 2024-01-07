import LastFooter from "../../components/landingPage/Last";
import annapurna from "./assets/annapurna/annapurna.jpg";
import TrekkingHero from "./component/TrekkingHero";
import TrekkingTrips from "./component/TrekkingTrips";

export default function EverestRolwaling() {
  const everestRolwalingTrekingList = [
    { id: 1, title: "Everest Base Camp Trek", photo: annapurna },
    { id: 2, title: "Amadablem Base Camp Trek", photo: annapurna },
    {
      id: 3,
      title: "Everest and the Gokyo Trek",
      photo: annapurna,
    },
    { id: 4, title: "Everest Three Pass Trek", photo: annapurna },
  ];

  return (
    <section className="">
      <TrekkingHero
        photo={annapurna}
        title={"Everest And Rolwaling Trekking"}
      />
      <div className="px-32 py-16 flex flex-col gap-4 text-justify">
        <div className=" ">
          <h3 className="text-2xl text-[#26ACE2]">
            Everest And Rolwaling Trekking
          </h3>
          <p>
            Welcome to the enchanting world of Annapurna, Nepal's trekker's
            paradise! Nestled in the heart of the Himalayas, the Annapurna
            region beckons with its awe-inspiring landscapes, vibrant cultures,
            and tranquil trails. In this friendly blog post, join us on a
            detailed journey through this gem of Nepal, uncovering popular
            trekking routes, the best times to embark on your adventure, major
            attractions, and how to seamlessly reach this stunning destination.
          </p>
        </div>
      </div>
      <TrekkingTrips list={everestRolwalingTrekingList} />
      <LastFooter />
    </section>
  );
}
