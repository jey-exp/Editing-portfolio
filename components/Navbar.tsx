"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from "../public/logo.svg"
import gsap from 'gsap'
import Work_Modal from './Work_Modal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  useEffect(()=>{
    gsap.from(".navAnimation",{y:50, opacity:0, duration:0.5, ease:"power1.inOut"})
  })

  return (
    <div className="h-10rem max-w-screen flex justify-between items-center py-5 md:w-full overflow-hidden">
      <div className="logo overflow-hidden">
        <Image
          src={logo}
          height={25}
          width={50}
          alt="Jey"
          className="navAnimation"
        />
      </div>
      <div className="">
        <p className="text-custom-text-color hidden md:block navAnimation">
          Witness the paradise
        </p>
      </div>
      <div className="work m-2">
        <button className="btn navAnimation" onClick={()=> setIsModalOpen(true)}>Work</button>
      </div>
      {isModalOpen && (
        <div className="relative">
          <Work_Modal close={()=>setIsModalOpen(false)} />
        </div>
      )}
    </div>
  );
}

export default Navbar
