import React from 'react'
import Image from 'next/image'
import logo from "../public/logo.svg"
import Modal from './Modal'

const Navbar = () => {
  return (
    <div className='h-10rem max-w-screen flex justify-evenly items-center py-5'>
        <div className="logo">
            <Image src={logo} height={25} width={50} alt='Jey'/>
        </div>
        <div className='text-custom-text-color'>
          Witness the paradise
        </div>
        <div className="work">
            <button className='btn'>Work</button>
        </div>
    </div>
  )
}

export default Navbar
