import LastFooter from "../../../components/landingPage/Last";
import ExpeditionHero from "../components/ExpeditionHero";
import ExpeditionTrip from "../components/ExpeditionTrip";

export default function FiveErs() {
    
const mountainFive = [
  
    {
      name: "Nata Kanga",
      height: "",
      photo: "",
    },
    {
      name: "Paldor Peak",
      height: "5928",
      photo: "",
    },
    {
      name: "Ramdung Peak",
      height: "5925",
      photo: "",
    },
    {
      name: "Tharpu Chuli peak",
      height: "6,819",
      photo: "",
    },]
  return (
    <>
      <ExpeditionHero title={"Above 5000m Peak in Nepal Himalayas"} />

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
            <ExpeditionTrip list={mountainFive}/>
            <LastFooter/>
    </>
  );
}
