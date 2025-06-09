import React from 'react'

import { useRef, } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import required modules
import { Autoplay,Pagination, Navigation } from 'swiper/modules';
import  image from '../assets/image.jpg'
import image2 from '../assets/image1.jpg'
import image3 from '../assets/image2.jpg'
import image4 from '../assets/image5.jpg'





export const Carouselswiper = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

  return (
    <div className='w-[40vw] max-sm:w-[370px] max-lg:w-[350px] max-sm:mt-[35px] xl:mt-[60px]  p-2'>
        <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img src={image} alt="" className=' xl:rounded-[25px]' /></SwiperSlide>
        <SwiperSlide><img src={image2} alt="" className='xl:rounded-[25px]' /></SwiperSlide>
        <SwiperSlide><img src={image3} alt="" className='xl:rounded-[25px]' /></SwiperSlide>
        <SwiperSlide><img src={image4} alt="" className='xl:rounded-[25px]' /></SwiperSlide>
        <div className="autoplay-progress w-[20px]" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}> 
            {/* <circle cx="24" cy="24" r="20"> home</circle> */}
           </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

    </div>
  )
}





 