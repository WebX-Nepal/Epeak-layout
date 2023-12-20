import { Eight } from "../components/8000res/8000res";
import Navbar from "../components/Navbar/Navbar";
import Workedwith from "../components/WorkedWIth/Workedwith";
import Footer from "../components/footer/Footer";
import Meaters from "../components/meaters/Meaters";
import Mountain from "../components/mountain/Mountain";
import Whyus from "../components/whyus/Whyus";
export default function Hero() {
  return (<>
  <Navbar/>
    <div className="border border-red-500">
      <Mountain />
    </div>
    <Workedwith/>
   <Meaters/>
   <Eight/>
   <Whyus/>
   <Footer/>
    
  </>
  );
}
