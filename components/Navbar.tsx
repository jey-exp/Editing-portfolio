import React from 'react'
import Image from 'next/image'
import logo from "../public/logo.svg"

const Navbar = () => {
  return (
    <div className='h-10rem max-w-screen flex justify-between items-center py-5 md:w-full'>
        <div className="logo">
            <Image src={logo} height={25} width={50} alt='Jey'/>
        </div>
        <div className='text-custom-text-color hidden md:block'>
          Witness the paradise
        </div>
        <div className="work">
            <button className='btn'>Work</button>
        </div>
    </div>
  )
}

export default Navbar
