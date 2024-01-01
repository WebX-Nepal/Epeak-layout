import LastFooter from "../../components/landingPage/Last";
import annapurna from "./assets/annapurna/annapurna.jpg";
import TrekkingHero from "./component/TrekkingHero";
import TrekkingTrips from "./component/TrekkingTrips";
const langtangHelambuList = [
    {id:1,
      title: "Langtang and Lauribina Trek      ",
      photo: annapurna,
    },
    {id:2,
      title: "Langtang Gosaikunda Trek with Bird Watching      ",
      photo: annapurna,
    },
    {id:3,
      title: "Langtang Valley Trek with Ganja la Pass",
      photo: annapurna,
    },
    {id:4,
      title: "Langtang, Gosainkunda & Helambu Trek",
      photo: annapurna,
    },
    {id:5,
      title: "Langtang,Gosainkunda and Helambu Trek",
      photo: annapurna,
    },
    {id:6,
      title: "Tamang Heritage Trail Trek",
      photo: annapurna,
    },
    {id:7,
      title: " The Helambu Trek",
      photo: annapurna,
    },
    {id:8,
      title: " Trek to Sacred Lakes",
      photo: annapurna,
    },
    {id:9,
      title: "Yala Peak Climbing",
      photo: annapurna,
    },
    
  ];
export default function LangtangHelambu() {
  return (<>
   
    <TrekkingHero photo={annapurna} title={"Langtang & Helambu Trekking"} />
    <div className="px-32 py-16 flex flex-col gap-4 text-justify">

    
    <div className=" ">
      <h3 className="text-2xl text-[#26ACE2]">Langtang & Helambu Trekking</h3>
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
    <TrekkingTrips list={langtangHelambuList}/>
    <LastFooter />
  </>
  )
}
