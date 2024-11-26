import React from 'react'
import Image from 'next/image'
import logo from "../public/logo.svg"

const Navbar = () => {
  return (
    <div className='h-10rem w-full flex justify-between items-center py-5'>
        <div className="logo">
            <Image src={logo} height={25} width={50} alt='Jey'/>
        </div>
        <div className='text-custom-text-color'>
          Witness the paradise
        </div>
        <div className="work">
            <div className='text-white font-light py-1 px-4 rounded-lg custom-border iframe-shadow'>
                Work
            </div>
        </div>
    </div>
  )
}

export default Navbar
