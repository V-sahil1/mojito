"use client";
import React, { useRef, useState } from "react";
import { sliderLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Menu() {
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalcocktails = sliderLists.length;
  useGSAP(() => {
    gsap.fromTo(
      "#title",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
      }
    );
    gsap.fromTo('.cocktail img',{opacity:0,xPercent:-100},{xPercent:0,opacity:1,duration:1,ease:'power1.inOut'})
    gsap.fromTo('.details h2',{yPercent:100,opacity:0},{
      yPercent:0,opacity:100,ease:'power1.inOut'
    })
    gsap.fromTo('.details p',{yPercent:100,opacity:0},{
      yPercent:0,opacity:100,ease:'power1.inOut'
    })
  }, [currentIndex]);

  const gotoSlide = (index) => {
    const newIndex = (index + totalcocktails) % totalcocktails;
    setCurrentIndex(newIndex);
  };
  const getcocktailAt = (index) => {
    return sliderLists[
      (currentIndex + index + totalcocktails) % totalcocktails
    ];
  };
  const currentCocktail = getcocktailAt(0);
  const prevCocktail = getcocktailAt(-1);
  const nextCocktail = getcocktailAt(1);

  return (
    <section id="menu" className="h-[100vh]" aria-labelledby="menu-heading">
      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
      />
      <div className="xl:px-20 xl:mx-20">
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-10 sm:mb-32  relative z-10 md:max-w-6xl md:mx-auto">
          {sliderLists.map((cocktail, index) => {
            const isActive = index === currentIndex;

            return (
              <button
                onClick={() => gotoSlide(index)}
                key={cocktail.id}
                className={`md:text-3xl text-xl pb-2 cursor-pointer hover:text-yellow hover:border-yellow border-b transition-colors font-modern-negra
            ${isActive ? "text-white" : "text-white/50"}
          `}
              >
                <span className="pb-2">{cocktail.name}</span>
                <span
                  className={`h-[2px] w-full transition-all duration-300
              ${isActive ? "bg-white" : "bg-transparent"}
            `}
                ></span>
              </button>
            );
          })}
        </div>
        <div className="content" id="con">
          <div className="flex items-center font-modern-negra text-2xl justify-between w-full top-12 left-9 absolute ">
            <button
              className="text-left "
              onClick={() => gotoSlide(currentIndex - 1)}
            >
              <span>{prevCocktail.name}</span>
              <img
                src="/images/right-arrow.png"
                alt="right-arrow"
                
                aria-hidden="true"
              />
            </button>
            <button
              className="text-left"
              onClick={() => gotoSlide(currentIndex + 1)}
            >
              <span>{nextCocktail.name}</span>
              <img
                src="/images/left-arrow.png"
                alt="left-arrow"
                aria-hidden="true"
              />
            </button>
          </div>

          <div className="cocktail">
            <img
              src={currentCocktail.image}
              alt=""
              className="object-contain pb-[40px]"
            />
          </div>
          <div className="recipe">
            <div ref={contentRef} className="info mb-[70px] ml-[15px]">
              <p>Recope for:</p>
              <p id="title">{currentCocktail.name}</p>
            </div>
            <div className="details ">
              <h2>{currentCocktail.title}</h2>
              <p>{currentCocktail.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
