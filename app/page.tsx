import Leaf from "@/components/3dModel/Leaf";
import Home from "@/components/Home/Home";
import Home2 from "@/components/Home/Home2";
import Home3 from "@/components/Home/Home3";
import Home4 from "@/components/Home/Home4";
import Home5 from "@/components/Home/Home5";
import { Home6 } from "@/components/Home/Home6";
import Home7 from "@/components/Home/Home7";
import Home8 from "@/components/Home/Home8";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Leaf/>
      <video className="w-[100vw] h-[100vh] object-fill"  autoPlay loop muted>
        <source src="/video/video.mp4" type="video/mp4" />
      </video>
      <Home/>
      <Home2 props={"Fashion with Nature's Essence"} />
      <Home3 />
      <Home4 />
      <Home7 />
      <Home5 />
      <Home6 />
      <Home8 />
    </div>
  );
}
