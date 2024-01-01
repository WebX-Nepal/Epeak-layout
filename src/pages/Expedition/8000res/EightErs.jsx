import ExpeditionHero from "../components/ExpeditionHero";
import LastFooter from "../../../components/landingPage/Last";
import ExpeditionTrip from "../components/ExpeditionTrip";
export default function EightErs() {
    const mountainsEight = [
        {
          name: "Mount Everest",
      
          height: "8,848.86",
      
          photo: "everest",
        },
        {
          name: "Kanchenjunga",
          height: "8,586",
          photo: "kanchenjunga",
        },
        {
          name: "Lhotse",
          height: "8,516",
          photo: "lhotse",
        },
        {
          name: "Makalu",
          height: "8,463",
          photo: "makalu",
        },
        {
          name: "Cho Oyu",
          height: "8,201",
          photo: "choyou",
        },
        {
          name: "Dhaulagiri",
          height: "8,167",
          photo: "dhaulagiri",
        },
        {
          name: "Manaslu",
          height: "8,163",
          photo: "masaslu",
        },
        {
          name: "Annapurna I",
          height: "8,091",
          photo: "annapurna",
        },
      ];
  return (
    <>
    <ExpeditionHero title={"Above 8000m Peak in Nepal Himalayas"} />

    <div className="px-32 py-16">
      <h3 className="text-4xl">Above 8000m Peak In Nepal Himalayas</h3>
      <p>
        Nepal is rich in mountains there are about 1500 peaks above 5000
        meters. Some of the famous 5000m peak are Yala Peak (5,520m) which
        lies in the Langtang region, Kala Patthar (5,545m) which lies in
        Khumbu region which is popular hiking peak below Pumori, Gokyo
        Ri(5,357m) which is also one of the popular hiking peak, Tharpu Chuli
        (5,663m) which lies in the heart of Annapurna and it is also one of
        the trekking peak and Some are unclimbed also like Mount Khumbila
        (5,761m), if you are planning professionaly mountaineering we suggest
        to start to climb from Above 5000m peak. Actual Adventure offer
        mountaineering and Expedition in Nepal, & Tibet.
      </p>

      
      
    </div>
          <ExpeditionTrip list={mountainsEight}/>
          <LastFooter/>
  </>
  )
}
