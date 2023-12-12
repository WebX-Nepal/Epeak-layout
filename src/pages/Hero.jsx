import { Eight } from "../components/8000res/8000res";
import Workedwith from "../components/WorkedWIth/Workedwith";
import Footer from "../components/footer/footer";
import Meaters from "../components/meaters/Meaters";
import Mountain from "../components/mountain/Mountain";
import Whyus from "../components/whyus/Whyus";
export default function Hero() {
  return (<>
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
