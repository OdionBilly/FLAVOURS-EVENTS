import React from 'react'
// import heroimg from '../assets/hero.png'
import { Carouselswiper } from './Carouselswiper'

export const Hero = () => {
  return (
    <div className='bg-[#181010] max-sm:h-[850px] max-lg:h-[600px] xl:h-[850px] flex justify-center items-center xl:px-[20px] xl:pt-[100px]'>
        <div className='flex max-sm:flex-col xl:rounded-[20px] shadow-lg xl:shadow-[yellow] xl:h-[560px]'>
            <div className='mt-[10px] max-sm:py-10 xl:py-[100px] xl:w-[100%] text-[white]'>
                <h1 className='max-sm:text-[30px] max-lg:text-[36px] xl:text-[58px] font-primarybold text-center max-lg:w-[400px] xl:w-[600px]'>   EVENTS FLAVOURS</h1>
                <p className='max-sm:text-[23px] xl:text-[49px] text-center font-thin'>Taste the Difference,</p>
                <p className='max-sm:text-[15px] xl:text-[40px]  text-center mt-[px] '>Savor the Moment,</p>   

                <div className=''>
                     <button className='bg-[#181010] hover:bg-[#280b0b] border-[0.5px] text-white font-primarybold text-[20px] px-8 py-2 rounded-full mt-10 block mx-auto cursor-pointer'>
                       SEE MORE
                     </button>  
                </div>    
            </div>
            <div className='max-sm:p-3 '>
                {/* <img src={heroimg} alt="" className='h-[550px] rounded-[20px]' /> */}
                <Carouselswiper/>
            </div>
        </div>
    </div>
  )
}
