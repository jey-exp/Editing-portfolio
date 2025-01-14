import { Mynerve, Montserrat } from 'next/font/google';
import React from 'react';

const mynerve = Mynerve({ subsets: ['latin'], weight: ['400'] });
const montserrat = Montserrat({ subsets: ['latin'] });

const Herosection = () => {
  return (
    <section className={`${mynerve.className} flex flex-col lg:flex-row gap-5 lg:gap-10 pt-10 lg:pt-20 px-5`}>
      <div className="leftPart lg:w-1/2">
        <h1 className="text-4xl text-custom-text-color pb-5 textHighlight-shadow md:text-6xl">
          Welcome to my
        </h1>
        <div className="flex gap-5 items-center mb-10">
          <h2 className="text-5xl textHighlight-shadow md:text-7xl">Editing</h2>
          <h3 className="text-4xl text-custom-text-color textHighlight-shadow md:text-6xl">Room</h3>
        </div>
        <div className={`${montserrat.className} text-lg font-light mb-5`}>
          <p>Be ready to witness my works. You are my testaments.</p>
          <p>Always happy to collaborate with you.</p>
        </div>
        <div className={`${montserrat.className} text-lg font-light`}>
          <p>I leverage my editing knowledge to solve your business solutions.</p>
        </div>
      </div>

      <div className="rightPart lg:w-1/2 py-5 lg:py-20">
        <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/2VhJgv1xGL8?si=MwBZORv_3-NaQFxh"
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
