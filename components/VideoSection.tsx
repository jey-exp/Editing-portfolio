import React from 'react'
import TagCards from './TagCards'

const VideoSection = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-36 custom-screen-width h-full lg:h-screen my-5 lg:mt-24">
      <div className="flex flex-col md:flex-row justify-between items-center min-w-full">
        <div className="left flex flex-col gap-2 video-section-aligment-width-right-component textHighlight-shadow">
          <span>18-05-2024</span>
          <div className="relative min-w-full rounded-lg overflow-hidden">
            <div className="relative w-full pb-[56.25%]">
              <iframe
                src="https://www.youtube.com/embed/zGjjfE2oomo?si=bYmgAQJk4QjY8NSF"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="absolute top-0 left-0 w-full h-full rounded-lg iframe-shadow"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="vertical-divider lg:block hidden"></div>
        <div className="right h-full video-section-aligment-width-right-component">
          <div className="flex flex-col gap-5">
            <span className="text-3xl font-bold textHighlight-shadow">
              Short form edit
            </span>
            <div className="flex flex-col md:flex-row justify-space between gap-3 w-auto">
              <TagCards name="YT shorts" />
              <TagCards name="Engaging" />
              <TagCards name="Retention" />
            </div>
            <div style={{ maxWidth: "30rem" }}>
              <p>
                Need edits like these? This is done with capcut in a single day. Adding custom animations, visuals, story telling. Convert your videos to tell better story and earn your audience. We help you to build rapport with audience with engaging videos. Super fast turn up time!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center md:hidden'>
      <div className='horizontal-divider md:hidden'></div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="left h-full video-section-aligment-width-right-component">
          <div className="flex flex-col gap-5 lg:w-full lg:h-ful">
            <span className="text-3xl font-bold textHighlight-shadow">
              Short form edit
            </span>
            <div className="flex flex-col md:flex-row justify-space between gap-3 w-auto">
              <TagCards name="Short-form" />
              <TagCards name="Instgram reel" />
              <TagCards name="Animation" />
            </div>
            <div style={{ maxWidth: "30rem" }}>
              <p>
                Instagram reels edited in just 2 hours. Animations and starting hooks which keep your audience engaging and increases the retention. Custom animations and hook are ready! You get the first time discount of 40% off for your first short form editing. 
              </p>
            </div>
          </div>
        </div>
        <div className="vertical-divider lg:block hidden"></div>
        <div className="right flex flex-col gap-2 video-section-aligment-width-right-component textHighlight-shadow">
          <span>18-05-2024</span>
          <div className="relative w-full max-w-full rounded-lg overflow-hidden">
            <div className="relative w-full pb-[56.25%]">
              <iframe
                src="https://www.youtube.com/embed/sPoYNnyUe4s?si=OGZf0T8X2s-1lme4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="absolute top-0 left-0 w-full h-full rounded-lg iframe-shadow"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoSection
