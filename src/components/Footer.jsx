import React from 'react'
import Logoimage from '../assets/Logo.jpeg'

export const Footer = () => {

  return (
        // <div className=' bg-[#201818] mt-[100px]'>
          <div className='bg-[#000] items-center px-5 py-[70px] mt-[100px] '> 
                <div className='flex max-sm:flex-col xl:leading-10 gap-10  text-white font-primarybold xl:px-[50px] py-[40px] xl:ml-[80px] rounded-xl shadow-[10px_0px_40px_5px_rgba(100,12,100,112.1)]'>
                   <p className='xl:w-[600px] max-sm:px-5 max-sm:text-[20px] xl:text-[30px]'>Your High Expectation to Quinch Your Tates with Our Flavours </p>
                    <div className=' max-sm:px-5'> 
                      <div className='max-sm:mb-4 mb-4'>
                          <input type="text" placeholder='Enter Email Address 'className='py-3 w-[300px] px-5 rounded-lg' />
                      </div>
                      <button type="button" className='px-10 py-3 bg-white text-[gray] font-primarybold rounded-lg cursor-pointer'>Subscribe</button>
                    </div> 
                </div>

              <div className=' mt-[50px] py-5 text-white '>
                <div className='flex max-sm:flex-col justify-between xl:px-[100px] '>
                  <div className='xl:py-10'>
                    <h1 className='font-PrimarySemiBold max-sm:text-center xl:text-[20px]'>Menu</h1>
                    <ul className='text-center xl:py-5 leading-9 font-primaryregular'>
                      <li>Home</li>
                      <li>Shop</li>
                      <li>About</li>
                      <li>Contact</li>
                    </ul>
                  </div>
                  
                  <div className='py-10'>
                    <h1 className='font-PrimarySemiBold text-[20px]'>HELP</h1>
                    <ul className='text-left py-5 leading-9'>
                      <li>customer support</li>
                      <li>Delivery details</li>
                      <li>Terms & Conditions</li>
                      <li>Privacy Policy</li>
                    </ul>
                  </div>

                  <div className='py-10'>
                    <h1 className='font-PrimarySemiBold text-[20px]'>Menu</h1>
                    <ul className='text-left py-5 leading-9'>
                      <li>Our Services</li>
                      <li>Our Events</li>
                      <li>Our Sponsors</li>
                      <li>Orders</li>
                    </ul>
                  </div>

                  <div className='py-'>

                      <div className="relative w-72 h-42 mx-auto mt-10 group transition-all duration-300">
                           {/* Shadow layers (one per corner, animated on hover via group-hover) */}
                           <div className="absolute inset-0 pointer-events-none shadow-[-10px_-10px_8px_0_rgba(234,179,8,0.4)] group-hover:shadow-[-15px_-15px_12px_0_rgba(234,179,8,0.6)] transition-all duration-300"></div>
                           <div className="absolute inset-0 pointer-events-none shadow-[10px_-10px_8px_0_rgba(34,197,94,0.4)] group-hover:shadow-[15px_-15px_12px_0_rgba(34,197,94,0.6)] transition-all duration-300"></div>
                           <div className="absolute inset-0 pointer-events-none shadow-[-10px_10px_8px_0_rgba(59,130,246,0.4)] group-hover:shadow-[-15px_15px_12px_0_rgba(59,130,246,0.6)] transition-all duration-300"></div>
                           <div className="absolute inset-0 pointer-events-none shadow-[10px_10px_8px_0_rgba(239,68,68,0.4)] group-hover:shadow-[15px_15px_12px_0_rgba(239,68,68,0.6)] transition-all duration-300"></div>

                             {/* Main content box */}
                          <div className="relative z-10 w-full h-full bg-white rounded-2xl border border-gray-200 shadow-md flex items-center justify-center font-semibold text-gray-700">
                            ✨ follow us on our Socials!
                          </div>
                      </div>  
                    <ul className='text-left py-5 leading-9'>
                      <li>Facebook</li>
                      <li>Instagram</li>
                      <li>Twitter</li>
                      <li>LinkedIn</li>
                    </ul>
                  </div>
                </div> 
              </div>
          </div>
        // </div>
  )
}
