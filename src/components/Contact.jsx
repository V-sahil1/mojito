import React from "react";
import { openingHours, socials } from "../../constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

function Contact() {
    useGSAP(()=>{
        const titleSplite=SplitText.create('#contactn h2',{type:'words'});
        const timeline=gsap.timeline({
            scrollTrigger:{
                trigger:'t#contact',
                start:'top center',
            },
            ease:'power1.inOut'
        })
        timeline.from(titleSplite.words,{
            opacity:0,yPercent:100,stagger:0.02
        })
        .from('#contact h3,#contact p',{
            opacity:0,yPercent:100,stagger:0.02
        })
        .to('#f-right-leaf',{
            y:'-50',
            duration:1,ease:'power1.inOut'
        })
        .to('#f-left-leaf',{
            y:'-50',
            duration:1,ease:'power1.inOut'
        })
          
    },[])
  return (
    <footer id="contact" className=" grid relative h-[100vh]">
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
      />
      <div className="contact grid items-center ">
        <h2 className="font-modern-negra text-5xl">where to find us</h2>
        <div>
          <h3 className="text-4xl font-serif uppercase">Visit Our Bar</h3>
          <p className=""> 1/136 Dr E Moses Road, Worli, Mumbai 400018 </p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>+91-89695-24482</p>
          <p>drink@bombaycanteen.com</p>
        </div>
        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day}:{time.time}
            </p>
          ))}
        </div>
        <div>
            <h3>Socials</h3>
            <div className="flex-center gap-5">
                {socials.map((social)=>(
                    <a key={social.name} href={social.url} target="_blank"
                    rel="nooperner noreferrer"
                    aria-label={social.name}>
                        <img src={social.icon} alt="" />
                    </a>
                ))}
            </div>
        </div>
      </div>
      <div className="text-center text-xl font-sans">Made with ❤️ and ☕ in India</div>
    </footer>
  );
}

export default Contact;
