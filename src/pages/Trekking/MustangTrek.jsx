import LastFooter from "../../components/landingPage/Last";
import annapurna from "./assets/annapurna/annapurna.jpg";
import TrekkingHero from "./component/TrekkingHero";
import TrekkingTrips from "./component/TrekkingTrips";
const mustangList = [
    {id:1,
      title: "Damodar Kunda - Saribung La Pass Trek ",
      photo: annapurna,
    },
    {id:2,
      title: "Manang, Thorong La and Upper Mustang Trek     ",
      photo: annapurna,
    },
    {id:3,
      title: "Manang, Thorung-La & Upper Mustang",
      photo: annapurna,
    },
    {id:4,
      title: "Manang, Thorung-La & Upper Mustang Trek",
      photo: annapurna,
    },
    {id:5,
      title: "Mustang Horse Trek Nepal",
      photo: annapurna,
    },
    {id:6,
      title: "Mustang Trail Race",
      photo: annapurna,
    },
    {id:7,
      title: " The Kingdom of Mustang",
      photo: annapurna,
    },
    {id:8,
      title: "Upper Mustang Trekking",
      photo: annapurna,
    },
   
    
  ];
export default function MustangTrek() {
  return (
  <>
  
  <TrekkingHero photo={annapurna} title={"Mustang Trekking"} />
    <div className="px-32 py-16 flex flex-col gap-4 text-justify">

    
    <div className=" ">
      <h3 className="text-2xl text-[#26ACE2]">Mustang Trekking</h3>
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
    <TrekkingTrips list={mustangList}/>
    <LastFooter />
  </>
  )
}
