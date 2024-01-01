import ExpeditionHero from "../components/ExpeditionHero";
import LastFooter from "../../../components/landingPage/Last";
import ExpeditionTrip from "../components/ExpeditionTrip";
export default function SevenErs() {
    const mountainSeven = [
        {
          name: "Baruntse Expedition (7125m)",
          height: "7,126",
          photo: "",
        },
        {
          name: " Churen (7371m) Expedition",
          height: "7,129",
          photo: "",
        },
        {
          name: "Climbing Lhakpa Ri (7045m) - Tibet face",
          height: "7,134",
          photo: "",
        },
        {
          name: "Ganesh Himal Expedition (7429m)",
          height: "7,246",
          photo: "",
        },
      
        {
          name: "Gangapurna Expedition",
          height: "7,525",
          photo: "",
        },
        {
          name: "Himlung Himal Expedition (7126m )",
          height: "7,525",
          photo: "",
        },
        {
          name: "Kumbhakarna Peak Climbing",
          height: "",
          photo: "",
        },
        {
          name: "Pumori(7145 m) Expedition",
          height: "7,525",
          photo: "",
        },
        {
          name: " Putha Hiunchuli (7246m) Expedition",
          height: "7,525",
          photo: "",
        },
        {
          name: "Tilicho (7134m) Expedition",
          height: "7,525",
          photo: "",
        },
        
      ];
  return (
    <>
    <ExpeditionHero title={"Above 7000m Peak in Nepal Himalayas"} />

    <div className="px-32 py-16">
      <h3 className="text-4xl">Above 7000m Peak In Nepal Himalayas</h3>
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
          <ExpeditionTrip list={mountainSeven}/>
          <LastFooter/>
  </>
  )
}
