import LastFooter from "../../components/landingPage/Last";
import annapurna from "./assets/annapurna/annapurna.jpg";
import TrekkingHero from "./component/TrekkingHero";
import TrekkingTrips from "./component/TrekkingTrips";

const gorkhaManasluList = [
  {id:1,
    title: " Himalayan Manaslu Circuit Trek",
    photo: annapurna,
  },
  {id:2,
    title: "Manaslu Circuit Trek",
    photo: annapurna,
  },
  {id:3,
    title: " Manaslu Circuit Trekking",
    photo: annapurna,
  },
  {id:4,
    title: "Manaslu to Tillicho Trek",
    photo: annapurna,
  },
  {id:5,
    title: "Nar Phu Valley Trek",
    photo: annapurna,
  },
  {id:6,
    title: "Tsum Valley and Manaslu Trek",
    photo: annapurna,
  },
  {id:7,
    title: "Tsum Valley Trekking",
    photo: annapurna,
  },
  {id:8,
    title: " Yerthung the Ancient Horse Festival",
    photo: annapurna,
  },
  
];

export default function GorkhaManasluTrek() {
  return (
    <>
  
  <TrekkingHero photo={annapurna} title={"Gorkha Manaslu Trekking"} />
    <div className="px-32 py-16 flex flex-col gap-4 text-justify">

    
    <div className=" ">
      <h3 className="text-2xl text-[#26ACE2]">Gorkha Manaslu Trekking</h3>
      <p>
        Welcome to the enchanting world of Langtang & Helambu Trek, Nepal's trekker's
        paradise! Nestled in the heart of the Himalayas, the Annapurna region
        beckons with its awe-inspiring landscapes, vibrant cultures, and
        tranquil trails. In this friendly blog post, join us on a detailed
        journey through this gem of Nepal, uncovering popular trekking routes,
        the best times to embark on your adventure, major attractions, and how
        to seamlessly reach this stunning destination.
      </p>
    </div>


      
    </div>
    <TrekkingTrips list={gorkhaManasluList}/>
    <LastFooter />
  </>
  )
}
