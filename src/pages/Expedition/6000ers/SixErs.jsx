import ExpeditionHero from "../components/ExpeditionHero";
import LastFooter from "../../../components/landingPage/Last";
import ExpeditionTrip from "../components/ExpeditionTrip";
export default function SixErs() {
    const mountainSix = [
        {
          name: "6189m Island Peak Expedition          ",
          height: "6,819",
          photo: "",
        },
        {
          name: "6440m Cholatse Expedition ",
          height: "6,501",
          photo: "",
        },
        {
          name: "Ama Dablam Expedition",
          height: "6,584 ",
          photo: "",
        },
        {
          name: "Dorje Lhakpa Peak(6966m) ",
          height: "6,883",
          photo: "",
        },
        {
          name: " EBC with Island Peak Climbing ",
          height: "6,883",
          photo: "",
        },
        {
          name: "Island Peak Climbing in Nepal",
          height: "6,883",
          photo: "",
        },
        {
          name: "Kang-Guru Expedition ",
          height: "6,883",
          photo: "",
        },
        {
          name: "Mt. Bokta Peak Climbing ",
          height: "6,883",
          photo: "",
        },
        {
          name: "Mt. Nirekha peak Climbing. ",
          height: "6,883",
          photo: "",
        },
        
      ];
      
  return ( <>
    <ExpeditionHero title={"Above 6000m Peak in Nepal Himalayas"} />

    <div className="px-32 py-16">
      <h3 className="text-4xl">Above 5000m Peak In Nepal Himalayas</h3>
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
          <ExpeditionTrip list={mountainSix}/>
          <LastFooter/>
  </>
  )
}
