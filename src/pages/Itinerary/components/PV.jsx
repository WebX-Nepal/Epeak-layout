import { Icon } from "@iconify/react";
import G1 from "./assets/G1.png";
import G2 from "./assets/G2.png";
import G3 from "./assets/G3.png";
import G4 from "./assets/G4.png";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "./gallary.css"
export default function PV() {
  return (
    <section className="py-32">
      <div className="flex items-center gap-2">
        <Icon width={35} icon="material-symbols:map-outline" />
        <h4 className="uppercase text-2xl  font-semibold whitespace-nowrap">
          Photo/video
        </h4>
        <div className="w-full">
          <hr />
        </div>
      </div>



      <div className="mt-12  gall">
        <LightGallery  speed={500} plugins={[lgThumbnail]} >
s
          <a href={G1}>
            <img src={G1} alt="" />
          </a>
          <a href={G2}>
            <img src={G2} alt="" />
          </a>
          <a href={G3}>
            <img src={G3} alt="" />
          </a>
          <a href={G4}>
            <img src={G4} alt="" />
          </a>
        </LightGallery>
      </div>
    </section>
  );
}
