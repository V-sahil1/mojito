import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all"; // You can also import directly
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/cocktails";
import About from "./components/About";

// Register plugins
gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {

  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
      <About/>

    </main>

  )
}

export default App
