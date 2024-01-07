import LastFooter from "../../components/landingPage/Last";
import annapurna from "./assets/annapurna/annapurna.jpg";
import TrekkingHero from "./component/TrekkingHero";
import TrekkingTrips from "./component/TrekkingTrips";

const annapurnaTrekingList = [
  {id:1,
    title: "Annapurna Base Camp Trek",
    photo: annapurna,
  },
  {id:2,
    title: "Annapurna Circuit Trek",
    photo: annapurna,
  },
  {id:3,
    title: "Ghore pani Poon Hill Trek",
    photo: annapurna,
  },
  {id:4,
    title: "Jomsom Muktinath Trek",
    photo: annapurna,
  },
  {id:5,
    title: "Mardi Himal Trek",
    photo: annapurna,
  },
  
];

export default function AnnapurnaRegion() {
  return (
    <section className="">
      <TrekkingHero photo={annapurna} title={"ANNAPURNA REGION"} />
      <div className="px-32 py-16 flex flex-col gap-4 text-justify">

      
      <div className=" ">
        <h3 className="text-2xl text-[#26ACE2]">Annapurna Trekking</h3>
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

      <div>
        <h4 className="text-[#26ACE2] text-xl">Annapurna Region: Popular Trekking Routes</h4>
        <p>
          Discover the diverse trekking routes that Annapurna has to offer,
          catering to every adventurer's taste. From the classic Annapurna
          Circuit to the scenic Annapurna Base Camp Trek, the quick thrill of
          Ghorepani Poon Hill, or the mystical journey through Upper Mustang –
          there's something for everyone.
        </p>
      </div>
      <div>
        <h4 className="text-[#26ACE2] text-xl">Perfect Timing: Best Time to Trek</h4>
        <p>
          Timing is key for an unforgettable trekking experience in the
          Annapurna region. Choose between the blooming rhododendron forests,
          pleasant temperatures, and clear skies of spring (March to May), or
          opt for the stable weather and comfortable temperatures of autumn
          (September to November).{" "}
        </p>
      </div>
      <div>
        <h4  className="text-xl text-[#26ACE2]">Unveiling Treasures: Major Attractions</h4>
        <p>
          As you traverse the Annapurna region, be prepared to be captivated by
          its treasures:
          <br />
          Mountain Views: Marvel at the stunning vistas of the Annapurna and
          Dhaulagiri mountain ranges, providing a majestic backdrop throughout
          your journey.
          <br />
          Cultural Encounters: Immerse yourself in the unique traditions and
          lifestyles of diverse ethnic communities, including Gurungs, Magars,
          and Thakalis.
          <br />
          Natural Wonders: Explore lush forests, terraced fields, soothing hot
          springs, and serene lakes, each contributing to the region's natural
          splendor.
          <br />
          Poon Hill Sunrise: Don't miss the highlight of many treks – a
          breathtaking sunrise over the Himalayas from Poon Hill.
        </p>
      </div>
      <div>
        <h4 className="text-[#26ACE2] text-xl">Getting There: Your Journey Begins</h4>
        <p>
          Embarking on your Annapurna adventure is easy:
          <br />
          By Air: Fly to Kathmandu's Tribhuvan International Airport and catch a
          domestic flight to Pokhara, the gateway to the Annapurna region.
          <br />
          By Road: For a scenic route, drive from Kathmandu to Pokhara, enjoying
          a 6-8 hour bus or private vehicle journey.
          <br />
          Trekking Permits: Ensure a smooth start to your trek by obtaining
          necessary permits like the Annapurna Conservation Area Permit (ACAP)
          and the Trekker's Information Management System (TIMS) card.
        </p>
      </div>
      <div>
        <h4 className="text-[#26ACE2] text-xl">Your Himalayan Gem Awaits: Plan, Trek, Immerse</h4>
        <p>
          Trekking in the Annapurna region isn't just an adventure; it's a
          once-in-a-lifetime experience. Whether you're drawn to the classic
          routes or opt for a quick thrill, plan your trip during the best
          season, soak in the breathtaking views, and immerse yourself in the
          diverse cultures that make the Annapurna region truly magical. It's
          time to embark on a memorable trekking journey in Nepal's Himalayan
          gem!
        </p>
      </div>
      <div>
      </div>
        
      </div>
      <TrekkingTrips list={annapurnaTrekingList}/>
      <LastFooter />
    </section>
  );
}
