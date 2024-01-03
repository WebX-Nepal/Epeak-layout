import worked from "./workedWith.png";
import Snowfall from "react-snowfall";
export default function Workedwith() {
  return (
    <div className=" mt-[90vh] px-32 py-16">
      {/* <Snowfall snowflakeCount={0} wind={[1, 2]} radius={[0.7, 0.8]} /> */}
      {/* <Snowfall snowflakeCount={220} wind={[-1,4]} radius={[0.7,1.5]}/> */}

      <img src={worked} alt="" />
    </div>
  );
}
