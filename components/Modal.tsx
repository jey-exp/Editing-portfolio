"use client";
import React, { useState, useEffect } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true); // Modal open state

  // Use useEffect to handle adding and removing the 'overflow: hidden' style to the body
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]); // Trigger effect on `isOpen` change

  return (
    <div
      className={`w-full h-full z-10 fixed bg-slate-400 flex flex-col justify-center items-center left-0 top-0 ${!isOpen && 'hidden'}`}
    >
      <div className="w-1/3 h-1/2 rounded-lg bg-white relative p-5">
        <div className='text-black'>hey this is a form</div>
        <button onClick={() => setIsOpen(false)} className="mt-4 bg-red-500 text-white p-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
