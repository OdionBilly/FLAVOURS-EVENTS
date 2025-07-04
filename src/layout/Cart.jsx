import React from 'react'
import bgimage from '../assets/bgImg.png'

export const Cart = () => {
  return (
    <div className='bg-Service_Image bg-cover bg-center xl:h-[550px] max-lg:h-[400px] max-sm:mx-2 max-lg:mx-5 xl:mx-5 max-sm:my-[70px] max-lg:my-[100px] xl:my-[200px]  rounded-[20px]' style={{backgroundImage: `url(${bgimage})` }}>
        <div className='mx-1 max-sm:w-[100%] xl:w-[50%] bg-[#181010] max-sm:py-10 max-lg:h-[400px] max-lg:px-10
                      xl:h-[550px] rounded-[20px] shadow-lg shadow-black flex flex-col justify-center text-white opacity-50'>
         <h1 className='font-primarybold text-[30px] max-sm:px-5 xl:px-[100px]'>Our Service</h1>
         <ul className=' max-sm:px-5 xl:px-[100px] py-5'>
            <li>Outside Catering </li>
            <li>Events</li>
            <li>Conferences</li>
            <li>Pasteries and  Cakes</li>
         </ul>

         <div>
            <p className='text-[20px] font-primarylato_light max-sm:mx-5 xl:px-[100px] leading-6'>We are here to make your event a memorable one. We offer a wide range of services to cater to your needs.</p>
            <button className=' max-sm:px-5 xl:mx-[100px] '>
                <div className='bg-[#f7ba2a] text-white font-primarybold  hover:bg-[#181010] border-[0.5px] text-[20px] max-sm:px-4 max-lg:px-4 xl:px-5 max-sm:py-1 max-lg:py-1 xl:py-3 xl:rounded-full
                mt-10 block mx-auto'>
                    SEE MORE
                </div>
            </button>
         </div>



        </div>
    </div>
  )
}   
