import React from 'react'
// import heroimg from '../assets/hero.png'
import { Carouselswiper } from './Carouselswiper'

export const Hero = () => {
  return (
    <div className='bg-[#181010] h-[850px] flex justify-center items-center px-[20px] mt-[4px] '>
        <div className='flex bg-[#181010] rounded-[20px] shadow-lg shadow-[yellow] h-[560px]'>
            <div className='mt-[10px] py-[100px] w-[50%] text-[white]'>
                <h1 className='text-[58px] font-primarybold text-center w-[700px]'>SALLY'S KITCHEN </h1>
                <p className='text-[49px] text-center font-thin'>Taste the Difference,</p>
                <p className='text-[40px]  text-center mt-[px] '>Savor the Moment,</p>   

                <div className='mt-[70px]'>
                     <button className='bg-[#f2b705] hover:bg-[#181010] border-[0.5px] text-white font-primarybold text-[20px] px-5 py-3 rounded-full mt-10 block mx-auto'>
                       SEE MORE
                     </button>  
                </div>    
            </div>
            <div className='w-[50%] '>
                {/* <img src={heroimg} alt="" className='h-[550px] rounded-[20px]' /> */}
                <Carouselswiper/>
            </div>
        </div>
    </div>
  )
}
