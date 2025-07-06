import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all"; // You can also import directly
import Navbar from "./components/Navbar";

// Register plugins
gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {

  return (
    <main>
      <Navbar/>
    </main>

  )
}

export default App
