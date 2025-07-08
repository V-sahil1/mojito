import React from "react";
import { navLinks } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Navbar() {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top", // start:'start  endpoint viewpoet top
      },
    });
    navTween.fromTo("nav", { backgroundColor: "transparent"},{
        backgroundColor:'#00000050',
        backgroundfilter:'blur(10px)',
        duration:1,
        ease:'power1.inOut'
     });
  });
  return (
    <nav className="px-20">
      <div className="px-20">
        <a href="/" className="flex  items-center gap-2">
          <img src="/images/logo.png" alt="" />
          <p>The Gentle Pour</p>
        </a>
        <ul className="px-20">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
