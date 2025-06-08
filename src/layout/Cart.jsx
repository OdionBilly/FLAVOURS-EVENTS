import React from 'react'

export const Cart = () => {
  return (
    <div className='bg-Service_Image bg-cover bg-center h-[550px] mx-5 rounded-[20px]'>
        <div className='mx-1  w-[50%] bg-[#181010] h-[550px] rounded-[20px] shadow-lg shadow-black flex flex-col justify-center text-white opacity-50  '>
         <h1 className='font-primarybold text-[30px] px-[100px]'>Our Service</h1>
         <ul className=' px-[100px] py-5'>
            <li>Outside Catering </li>
            <li>Events</li>
            <li>Conferences</li>
            <li>Pasteries and  Cakes</li>
         </ul>

         <div>
            <p className='text-[20px] font-primarylato_light px-[100px] leading-6'>We are here to make your event a memorable one. We offer a wide range of services to cater to your needs.</p>
            <button className='mx-[100px] '>
                <div className='bg-[#f7ba2a] text-white font-primarybold  hover:bg-[#181010] border-[0.5px] text-[20px] px-5 py-3 rounded-full mt-10 block mx-auto'>
                    SEE MORE
                </div>
            </button>
         </div>



        </div>
    </div>
  )
}   
