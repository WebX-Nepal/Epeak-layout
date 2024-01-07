import LastFooter from "../../components/landingPage/Last";
import annapurna from "./assets/annapurna/annapurna.jpg";
import TrekkingHero from "./component/TrekkingHero";
import TrekkingTrips from "./component/TrekkingTrips";
const  easternNepalList= [
    {id:1,
      title: "Kanchenjunga Base Camp Trek",
      photo: annapurna,
    },
    {id:2,
      title: " Kanchenjunga Base Camp Trek to Tumlingtar  ",
      photo: annapurna,
    },
    {id:3,
      title: " Makalu Base Camp ",
      photo: annapurna,
    },
   
    
    
  ];
export default function EasternNepalTrek() {
  return (
    <>
  
    <TrekkingHero photo={annapurna} title={"Eastern Nepal Trekking"} />
      <div className="px-32 py-16 flex flex-col gap-4 text-justify">
  
      
      <div className=" ">
        <h3 className="text-2xl text-[#26ACE2]">Eastern Nepal Trekking</h3>
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
      <TrekkingTrips list={easternNepalList}/>
      <LastFooter />
    </>
  )
}
