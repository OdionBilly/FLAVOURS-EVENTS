import React from 'react'
import botomimg from '../assets/botbg.png'
import foodiconimg from '../assets/icons/ep_food.png'
import deliveryiconimg from '../assets/icons/delivery.png'
import spooniconimg from '../assets/icons/spoons.png'

export const Bottom = () => {
  return (
    <div className='flex max-sm:flex-col max-lg:flex-col justify-between xl:gap-2 max-lg:gap-10 max-sm:gap-10 max-sm:px-2 max-lg:px-5 xl:px-5 my-[100px] '>
        <div className='bg-[#ede6e6] xl:w-[50%] max-sm:w-[100%] shadow-lg shadow-[#2b2b2a] max-lg:py-10'>
            <h1 className='max-sm:px-5 max-lg:px-5 xl:px-10 py-3 font-PrimarySemiBold mt-5 text-[30px] '>ABOUT US</h1>
            <p className='xl:w-[600px] max-sm:px-5 max-lg:px-5 xl:px-10 font-primarylato_light text-[18px] py-2'>
                Welcome to Event's Flavours – your go-to online destination for freshly baked pastries, african and intercontonental cousine
                 delivered right to your door. We’re a team of passionate bakers and tech 
                 lovers who believe that ordering your favorite treats should be as delightful as eating them.
                  From buttery croissants to rich chocolate éclairs, our easy-to-use app lets you browse, 
                order, and enjoy your favorite pastries with just a few clicks. Freshness, flavor, and convenience
            </p>
        </div>
        <div className='xl:w-[50%] max-sm:w-[100%] py-[40px] bg-About_image bg-cover bg-no-repeat bg-center shadow-lg shadow-[#2b2b2a]' style={{backgroundImage : `url(${botomimg})`}}>
            {/* <img src={botomimg} alt="" /> */}
            <h1 className='text-white text-[30px] max-sm:px-5 xl:px-[100px] pt-10'>How to use our delivery Service</h1>
            <div className='flex max-sm:flex-col gap-10 justify-center max-sm:px-5 items-center mt-[70px] text-white  '>
                <div className='flex flex-col items-center'>
                    <img src={foodiconimg} alt="" className='size-[80px] rounded-full' /> 
                    <p className='pt-5'>Choose your flavour</p>  
                    <p className='font-primarylato_light text-[13px]'>there are 20+ favours for you </p>    
                </div>
                <div className='flex flex-col items-center'>
                    <img src={deliveryiconimg} className='size-[80px] rounded-full' alt="" />
                    <p className='pt-5'>Choose your delivery method</p>
                    <p className='text-[13px] font-primarylato_light'>we deliver to your door step</p>
                   
                </div>
                <div className='flex flex-col items-center'>
                   <img src={spooniconimg} alt="" className='size-[80px] rounded-full' />
                     <p className='pt-5'>Enjoy your meal</p>
                     <p className='text-[13px] font-primarylato_light'>refer us to your friends</p>
                </div>
            </div>
        </div>
    </div>
  )
}
