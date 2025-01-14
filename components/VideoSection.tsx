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
                src="https://www.youtube.com/embed/tH9W0FLe-1o?si=6AQnOTpOGonfwPs5"
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
              The Ultimate Guide
            </span>
            <div className="flex flex-col md:flex-row justify-space between gap-3 w-auto">
              <TagCards name="Long-form" />
              <TagCards name="Anime-styled" />
              <TagCards name="Color-grading" />
            </div>
            <div style={{ maxWidth: "30rem" }}>
              <p>
                This is a replacement of lorem ipsum, neither I nor you are
                aware of what the heck am I writing. But I love the tactic sound
                from the keyboard when I type things. That’s why this is such
                long, and sorry for that. It feels like the old pen ad where the
                father names his child so long as he loved the way the pen wrote
                and forgot that it’s his son’s birth certificate application
                form.
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
              The Ultimate Guide
            </span>
            <div className="flex flex-col md:flex-row justify-space between gap-3 w-auto">
              <TagCards name="Long-form" />
              <TagCards name="Anime-styled" />
              <TagCards name="Color-grading" />
            </div>
            <div style={{ maxWidth: "30rem" }}>
              <p>
                This is a replacement of lorem ipsum, neither I nor you are
                aware of what the heck am I writing. But I love the tactic sound
                from the keyboard when I type things. That’s why this is such
                long, and sorry for that. It feels like the old pen ad where the
                father names his child so long as he loved the way the pen wrote
                and forgot that it’s his son’s birth certificate application
                form.
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
                src="https://www.youtube.com/embed/tH9W0FLe-1o?si=6AQnOTpOGonfwPs5"
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
