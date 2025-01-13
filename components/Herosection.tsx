import { Mynerve, Montserrat } from 'next/font/google'
import React from 'react'
const mynerve = Mynerve({subsets:["latin"], weight:["400"]});
const montserrat = Montserrat({subsets:["latin"]});




const Herosection = () => {
  return (
    <div className={`${mynerve.className} flex gap-5 justify-between pt-20 px-5`}>
      <div className='leftPart'>
            <div className='text-6xl text-custom-text-color pb-5 textHighlight-shadow'>
                Welcome to my
            </div>
            <div className='flex gap-5 items-center mb-10'>
                <div className='text-7xl textHighlight-shadow'>
                    Editing
                </div>
                <div className='text-6xl text-custom-text-color textHighlight-shadow'>
                    Room
                </div>
            </div>
            <div className={`${montserrat.className} text-m font-light mb-5`}>
                <p>
                    Be ready to witness my works. You are my 
                </p>
                <p>
                    testaments. Always happy to work with you people.
                </p>
            </div>
            <div className={`${montserrat.className} text-m font-light`}>
                <p>
                    I leveraged my knowledge of editing
                </p>
                <p>
                    to solve business solution  your business to.
                </p>
            </div>
      </div>
      <div className='rightPart py-20 '>
        <div className='rounded-lg z-10 px-5'>
        <iframe width="616" height="347" src="https://www.youtube.com/embed/2VhJgv1xGL8?si=MwBZORv_3-NaQFxh" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='rounded-lg iframe-shadow' ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Herosection
