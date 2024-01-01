import LastFooter from "../../components/landingPage/Last";
import annapurna from "./assets/annapurna/annapurna.jpg";
import TrekkingHero from "./component/TrekkingHero";
import TrekkingTrips from "./component/TrekkingTrips";
const westernNepalList = [
    {id:1,
      title: "Api Base Camp Trek",
      photo: annapurna,
    },
    {id:2,
      title: "Beni – Dolpo Trek      ",
      photo: annapurna,
    },
    {id:3,
      title: " Bheri Karnali Round Trek",
      photo: annapurna,
    },
    {id:4,
      title: "Bonpo Sanctuary Trek",
      photo: annapurna,
    },
    {id:5,
      title: "Dhorpatan Trek",
      photo: annapurna,
    },
    {id:6,
      title: "Dolpo Explorer Trip",
      photo: annapurna,
    },
    {id:7,
      title: "Hidden Valley Trek",
      photo: annapurna,
    },
    {id:8,
      title: "Humla and Limi Circuit Trek",
      photo: annapurna,
    },
    {id:9,
      title: "Kagmara la Pass to Dolpo",
      photo: annapurna,
    },
    {id:10,
      title: "Lower Dolpo Jomsom Trek",
      photo: annapurna,
    },
    {id:11,
      title: "Lower dolpo trek",
      photo: annapurna,
    },
    {id:12,
      title: "Phoksundo Teahouse Trek",
      photo: annapurna,
    },
    {id:13,
      title: "Upper Dolpo Hidden Valley Trek",
      photo: annapurna,
    },
    {id:14,
      title: "Upper Dolpo to Jomsom Trek",
      photo: annapurna,
    },
    {id:15,
      title: " Upper dolpo Trek",
      photo: annapurna,
    },
    {id:16,
      title: "Western Frontiers and Rara Lake",
      photo: annapurna,
    },
  
  ];
export default function WesternNepalTrek() {
  return (
    <>
  
  <TrekkingHero photo={annapurna} title={"Western Nepal Trekking"} />
    <div className="px-32 py-16 flex flex-col gap-4 text-justify">

    
    <div className=" ">
      <h3 className="text-2xl text-[#26ACE2]">Western Nepal Trekking</h3>
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
    <TrekkingTrips list={westernNepalList}/>
    <LastFooter />
  </>
  )
}
