import Navbar from "../components/Navbar/Navbar";
import DetailFirst from "../components/itinearyPage/DetailFirst";
import DetailSecond from "../components/itinearyPage/DetailSecond";
import DetailThird from "../components/itinearyPage/DetailThird";
import LastFooter from "../components/landingPage/Last";

import { useSelector } from "react-redux";
const itinearyDetails = [
  {
    title: "Makalu",
    subtitle: "subtitle1",
    day: "1",
    details: {
      maxElevation: "1",
      walkingPerDay: "1",
      Accommodation: "1",
      BestSeason: "season 1",
      groupSize: "1",
    },
    overviews: {
      country: "Nepal1",
      peakName: "1",
      duration: "1",
      route: "route 1",
      rank: "1",
      coOridnates: "1.1.1.1",
      weatherReport: "very good report",
      range: "mt mt 1",
    },
    tripOverview: "here is the trip overview of  1 ",
    itinearars: [
      {
        day: 1,
        task: "reach to 1",
        food: "veg",
        night: "tent",
      },
      { day: 2, task: "reach to 2", food: "veg1", night: "tent 1" },
    ],
    costIncluded: [
      { title: "title 1", description: "descrition 1.1" },
      { title: "title 2", description: "descrition 1.2" },
    ],
    contExcluded: [
      { title: "title 1", description: "descrition 1.1" },
      { title: "title 2", description: "descrition 1.2" },
    ],
  },
  {
    title: "Lhotse",
    subtitle: "subtitle2",
    day: "2",
    details: {
      maxElevation: "2",
      walkingPerDay: "2",
      Accommodation: "2",
      BestSeason: "season 2",
      groupSize: "2",
    },
    overviews: {
      country: "Nepal2",
      peakName: "2",
      duration: "2",
      route: "route 2",
      rank: "2",
      coOridnates: "2.2.2.2",
      weatherReport: "very good report",
      range: "mt mt 2",
    },
    tripOverview: "here is the trip overview of  2 ",
    itinearars: [
      {
        day: 1,
        task: "reach to 2",
        food: "veg",
        night: "tent",
      },
      { day: 2, task: "reach to 2.2", food: "veg1", night: "tent 2" },
    ],
    costIncluded: [
      { title: "title 1", description: "descrition 2.1" },
      { title: "title 2", description: "descrition 2.2" },
    ],
    contExcluded: [
      { title: "title 1", description: "descrition 2.1" },
      { title: "title 2", description: "descrition 2.2" },
    ],
  },
];
export default function Itineary() {
  const reqTitle = useSelector((state) => state.requestBooking);
  console.log(reqTitle.requestTitle, "from itineary page");
  return (
    <section className="">
      <Navbar />

      {itinearyDetails.map((itineary) =>
        reqTitle.requestTitle == itineary.title ? (
          <div className="text-white" key={itineary.title}>
            <DetailFirst title={itineary.title} subtitle={itineary.subtitle} />
                <DetailSecond details={itineary.details}/>
            <DetailThird />
          </div>
        ) : (
          ""
        )
      )}

      <LastFooter />
    </section>
  );
}
