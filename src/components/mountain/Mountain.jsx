import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import cloud1 from "./assets/cloud1.png";
import cloud1Mask from "./assets/cloud1Mask.png";
import cloud2 from "./assets/cloud2.png";
import cloud3 from "./assets/cloud3.png";
import mountBg from "./assets/mountBg.png";
import mountFg from "./assets/mountFg.png";
import mountMg from "./assets/mountMg.png";
import skyy from "./assets/sky.png";
import "./mount.css";
export default function Mountain() {
  return (
    <div className="scro ">
      <Parallax pages={1.2} style={{ top: "0", left: "0" }} className="">
        <ParallaxLayer offset={0} speed={2.5}>
          <div
            className=" bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${cloud1Mask})` }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div
            className=" bg-cover bg-center h-screen   "
            style={{ backgroundImage: `url(${skyy})` }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.3}>
          <div className="w-[100vw] h-[50vh] fixed top-14  flex items-center justify-center">
            <h1 className="text-white font-Rubik text-7xl max-sm:text-5xl max-sm:px-8 max-lg:text-6xl">
              Welcome to Epeak
            </h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div
            className=" bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${mountBg})` }}
          ></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.3}>
          <div
            className=" bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${mountMg})` }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div
            className=" bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${cloud2})` }}
          ></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.3}>
          <div
            className=" bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${mountFg})` }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.2}>
          <div
            className=" bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${cloud1})` }}
          ></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1.1}>
          <div
            className=" bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${cloud3})` }}
          ></div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
