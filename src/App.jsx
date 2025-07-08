import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all"; // You can also import directly
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Cocktails from "./components/Cocktails";

// Register plugins
gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {

  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
      <About/>
      <Art/>
      <Menu/>
      <Contact/>

    </main>

  )
}

export default App
