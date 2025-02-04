"use client";
import { Montserrat, Mynerve } from 'next/font/google';
import React from 'react'
import { IoCloseCircle } from "react-icons/io5";

interface Work_Modal_Props {
    close : ()=> void;
}

const mynerve = Mynerve({ subsets: ['latin'], weight: ['400'] });
const montserrat = Montserrat({ subsets: ['latin'] });

const Work_Modal = ({close}:Work_Modal_Props) => {
  return (
    <div className={`fixed inset-0 h-full w-full bg-black bg-opacity-55 z-50 flex justify-center items-center ${montserrat.className}`}>
      <div className="p-7 lg:px-12 lg:pb-12 max-h-full max-w-full flex flex-col gap-5 rounded-lg bg-violet-950 bg-opacity-40 backdrop-blur-lg border border-neutral-400 border-opacity-40">
        <h1 className={`font-bold text-center text-2xl ${mynerve.className}`}>
          Need my service? Contact me:
        </h1>
        <div className="flex justify-between p-2 items-center gap-3">
          <div className='space-y-2'>
            <p className="font-semibold">
              Email :{" "}
            </p>
            <p className="font-semibold">
              Alternate Email :{" "}
            </p>
            <p className="font-semibold">
              Discord :{" "}
            </p>
            <p className="font-semibold">
              Instagam :{" "}
            </p>
          </div>
          <div className='space-y-2'>
            <p className="font-semibold">
              <span className="text-neutral-400 font-normal">
                jeyshreemen.info@gmail.com
              </span>
            </p>
            <p className="font-semibold">
              <span className="text-neutral-400 font-normal">
                jeyshreemen004@gmail.com
              </span>
            </p>
            <p className="font-semibold">
              <span className="text-neutral-400 font-normal">jey0061 #0</span>
            </p>
            <p className="font-semibold">
              <span className="text-neutral-400 font-normal">jey_g_r</span>
            </p>
          </div>
        </div>
        <div className="absolute top-2 right-2 cursor-pointer">
          <IoCloseCircle size={25} color="gray" onClick={close} />
        </div>
      </div>
    </div>
  );
}

export default Work_Modal
