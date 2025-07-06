import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all"; // You can also import directly

// Register plugins
gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {

  return (

    <div className="text-red-500 flex-center h-[100vh]">App</div>
  )
}

export default App
