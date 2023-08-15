import React, { useState, useEffect, useRef } from 'react';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const videoUrls = [
    'https://www.theagencyre.com/static/videos/home-banner-video.mp4#t=0.001',
    'https://www.theagencyre.com/static/videos/home-banner-video.mp4#t=0.001',
    'https://www.theagencyre.com/static/videos/home-banner-video.mp4#t=0.001',
    'https://www.theagencyre.com/static/videos/home-banner-video.mp4#t=0.001',
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === videoRefs.length - 1 ? 0 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === videoRefs.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    // Play the current video
    videoRefs[currentSlide].current.play();

    // Listen for video end to loop back
    const handleVideoEnd = () => {
      videoRefs[currentSlide].current.currentTime = 0;
      videoRefs[currentSlide].current.play();
    };

    videoRefs[currentSlide].current.addEventListener('ended', handleVideoEnd);

    return () => {
      videoRefs[currentSlide].current.removeEventListener(
        'ended',
        handleVideoEnd
      );
    };
  }, [currentSlide]);

  return (
    <div className='w-full h-auto relative'>
      <div className='w-screen-h-[650px] relative'>
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className='w-[400vw] h-full flex transition-transform duration-1000'
        >
          {videoUrls.map((videoUrl, index) => (
            <div
              key={index}
              className='w-screen h-full object-cover relative'
            >
              <video
                ref={videoRefs[index]}
                className='w-full h-full'
                autoPlay
                muted
                loop
              >
                <source src={videoUrl} type='video/mp4' />
              </video>
              <div className='absolute top-40 left-40 text-white text-8xl font-luxury leading-tight'>
                <div className='leading-none'>Your window to the  </div>
                
                <div className='mt-4 leading-none'>world's finest real estate</div>


                {/* <div className='leading-none'>BROKERAGE</div> */}
              </div>
            </div>
          ))}
        </div>
        <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
          <div
            onClick={prevSlide}
            className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center 
                hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center 
                hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
