"use client";
import { Mynerve, Montserrat } from 'next/font/google';
import React, { useEffect } from 'react';
import gsap from 'gsap';

const mynerve = Mynerve({ subsets: ['latin'], weight: ['400'] });
const montserrat = Montserrat({ subsets: ['latin'] });

const Herosection = () => {
    useEffect(()=>{
        setTimeout(() => {
            gsap.from('.animation', {x:-100, opacity:0, duration:1, ease:"power2.inOut"})
            gsap.from('.right-animation', {x:100, opacity:0, duration:1, ease:"power2.inOut"})
        }, 400);
    })
  return (
    <section
      className={`${mynerve.className} flex flex-col lg:flex-row gap-5 lg:gap-10 pt-10 lg:pt-20 px-5`}
    >
      <div className="overflow-hidden lg:w-1/2">
        <div className="leftPart animation">
          <h1 className="text-4xl text-custom-text-color pb-5 textHighlight-shadow md:text-6xl">
            Welcome to my
          </h1>
          <div className="flex gap-5 items-center mb-10 overflow-hidden">
            <h2 className="text-5xl textHighlight-shadow md:text-7xl">
              Editing
            </h2>
            <h3 className="text-4xl text-custom-text-color textHighlight-shadow md:text-6xl">
              Room
            </h3>
          </div>
          <div className={`${montserrat.className} text-lg font-light mb-5`}>
            {/* <p>Be ready to witness my works. You are my testaments.</p> */}
            <p>Always happy to collaborate with you!</p>
          </div>
          <div className={`${montserrat.className} text-lg font-light`}>
            <p>
              I leverage my editing knowledge to solve your business problem through engaging editing and story telling.
            </p>
          </div>
        </div>
      </div>

      <div className="rightPart lg:w-1/2 py-5 lg:py-20 overflow-hidden">
        <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden right-animation">
          <iframe
            src="https://www.youtube.com/embed/u5U-2RDZm5g?si=CrNvRj79L98JeMy6"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="absolute top-0 left-0 w-full h-full rounded-lg iframe-shadow"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
