import LastFooter from "../../components/landingPage/Last";
import annapurna from "./assets/annapurna/annapurna.jpg";
import TrekkingHero from "./component/TrekkingHero";
import TrekkingTrips from "./component/TrekkingTrips";

export default function EverestRolwaling() {
    
const everestRolwalingTrekingList = [
    {id:1,
      title: "03 days Island Peak Group Join",
      photo: annapurna,
    },
    {id:2,
      title: "Advance Base Camp Trek",
      photo: annapurna,
    },
    {id:3,
      title: " Ama Dablam Base Camp Trek 12 Days, Package",
      photo: annapurna,
    },
    {id:4,
      title: " Beyond the Himalayan Smile",
      photo: annapurna,
    },
    {id:5,
      title: "Classic Everest Base Camp Trek",
      photo: annapurna,
    },
    {id:6,
      title: "Everest & the Gokyo Trek",
      photo: annapurna,
    },
    {id:7,
      title: "Everest 61th Anniversary Treks",
      photo: annapurna,
    },
    {id:8,
      title: "Everest Base Camp Kalapathar Trekking",
      photo: annapurna,
    },
    {id:9,
      title: " Everest Base Camp Luxury Lodge Trek 15 days",
      photo: annapurna,
    },
    {id:10,
      title: "Everest Base Camp Short Trek",
      photo: annapurna,
    },
    {id:11,
      title: "Everest Base Camp Special Trek Charity challenge, Gap Years, Corporate Training and Army Training",
      photo: annapurna,
    },
    {id:12,
      title: "Everest Base camp Trek and Lobuche East Peak Climbing      ",
      photo: annapurna,
    },
    {id:13,
      title: "Everest base Camp trek Rapid 13 days",
      photo: annapurna,
    },
    {id:14,
      title: "Everest Base Camp with Gokyo Lakes Trek",
      photo: annapurna,
    },
    {id:15,
      title: "Everest Circuit Expedition",
      photo: annapurna,
    },
    {id:16,
      title: "Everest Discover Trek",
      photo: annapurna,
    },
    {id:17,
      title: "Everest Explorer Trek",
      photo: annapurna,
    },
    {id:18,
      title: "Everest Fantasy & Fabled Cities Adventure",
      photo: annapurna,
    },
    {id:19,
      title: "Everest Lodge to Lodge Trek",
      photo: annapurna,
    },
    {id:20,
      title: "Everest Short and Easy Trek",
      photo: annapurna,
    },
    {id:21,
      title: " Everest Sunrise and Sunset View trek",
      photo: annapurna,
    },
    {id:22,
      title: "Everest Three Passes Trek",
      photo: annapurna,
    },
    {id:23,
      title: "Everest Trails and Ama Dablam View Trek",
      photo: annapurna,
    },
    {id:24,
      title: "Everest Trek",
      photo: annapurna,
    },
    {id:25,
      title: " Everest Trek Through Gokyo Lakes",
      photo: annapurna,
    },
    {id:26,
      title: "Everest Trek with Monasteries and Sherpa Culture",
      photo: annapurna,
    },
    {id:27,
      title: "Everest Unveiled (Family Trek)",
      photo: annapurna,
    },
    {id:28,
      title: " Everest View Classic Trek",
      photo: annapurna,
    },
  ];
  
  return (
    <section className="">
    <TrekkingHero photo={annapurna} title={"Everest And Rolwaling Trekking"} />
    <div className="px-32 py-16 flex flex-col gap-4 text-justify">

    
    <div className=" ">
      <h3 className="text-2xl text-[#26ACE2]">Everest And Rolwaling Trekking</h3>
      <p>
        Welcome to the enchanting world of Annapurna, Nepal's trekker's
        paradise! Nestled in the heart of the Himalayas, the Annapurna region
        beckons with its awe-inspiring landscapes, vibrant cultures, and
        tranquil trails. In this friendly blog post, join us on a detailed
        journey through this gem of Nepal, uncovering popular trekking routes,
        the best times to embark on your adventure, major attractions, and how
        to seamlessly reach this stunning destination.
      </p>
    </div>


      
    </div>
    <TrekkingTrips list={everestRolwalingTrekingList}/>
    <LastFooter />
  </section>
  )
}
